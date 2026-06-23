const MARKET_KEY = "spotify-yearbook-market";

const state = {
  year: new Date().getFullYear(),
  market: localStorage.getItem(MARKET_KEY) || "US",
  tracks: [],
  artists: [],
  selectedArtistId: null,
  loading: false,
};

const els = {
  refreshButton: document.querySelector("#refresh-button"),
  yearForm: document.querySelector("#year-form"),
  yearInput: document.querySelector("#year-input"),
  marketSelect: document.querySelector("#market-select"),
  statusText: document.querySelector("#status-text"),
  songCount: document.querySelector("#song-count"),
  artistCount: document.querySelector("#artist-count"),
  songsKicker: document.querySelector("#songs-kicker"),
  artistsKicker: document.querySelector("#artists-kicker"),
  trackList: document.querySelector("#track-list"),
  artistGrid: document.querySelector("#artist-grid"),
  artistDetail: document.querySelector("#artist-detail"),
};

init();

async function init() {
  els.yearInput.value = state.year;
  els.marketSelect.value = state.market;

  bindEvents();
  await loadYear(state.year);
}

function bindEvents() {
  els.refreshButton.addEventListener("click", () => loadYear(state.year));

  els.yearForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const nextYear = Number.parseInt(els.yearInput.value, 10);
    if (!Number.isInteger(nextYear) || nextYear < 1950 || nextYear > new Date().getFullYear() + 1) {
      setStatus("Enter a year between 1950 and next year.", true);
      return;
    }
    loadYear(nextYear);
  });

  els.marketSelect.addEventListener("change", () => {
    state.market = els.marketSelect.value;
    localStorage.setItem(MARKET_KEY, state.market);
    loadYear(state.year);
  });
}

async function loadYear(year) {
  state.year = year;
  state.selectedArtistId = null;
  els.yearInput.value = year;
  setLoading(true);
  setStatus(`Loading Spotify popularity for ${year}...`);

  try {
    const tracks = await fetchPopularTracks(year);
    const artists = await fetchArtistsFromTracks(tracks);
    state.tracks = tracks;
    state.artists = artists;
    renderTracks(tracks);
    renderArtists(artists);
    renderDetail(null);
    setStatus(`Showing ${tracks.length} songs and ${artists.length} artists for ${year}.`);
  } catch (error) {
    renderEmpty();
    setStatus(error.message, true);
  } finally {
    setLoading(false);
  }
}

async function fetchPopularTracks(year) {
  const offsets = [0, 10, 20, 30, 40];
  const batches = await Promise.all(
    offsets.map((offset) =>
      spotifyFetch("/api/search", {
        q: `year:${year}`,
        type: "track",
        market: state.market,
        limit: "10",
        offset: String(offset),
      })
    )
  );

  const seen = new Set();
  return batches
    .flatMap((batch) => batch.tracks?.items || [])
    .filter((track) => {
      if (!track || seen.has(track.id)) {
        return false;
      }
      seen.add(track.id);
      return true;
    })
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 20);
}

async function fetchArtistsFromTracks(tracks) {
  const artistScore = new Map();

  for (const track of tracks) {
    for (const artist of track.artists || []) {
      const current = artistScore.get(artist.id) || { id: artist.id, score: 0, trackCount: 0 };
      current.score += track.popularity || 0;
      current.trackCount += 1;
      artistScore.set(artist.id, current);
    }
  }

  const ids = [...artistScore.values()]
    .sort((a, b) => b.score - a.score)
    .slice(0, 20)
    .map((artist) => artist.id);

  if (!ids.length) {
    return [];
  }

  const data = await spotifyFetch("/api/artists", { ids: ids.join(",") });
  return (data.artists || [])
    .filter(Boolean)
    .map((artist) => ({
      ...artist,
      yearScore: artistScore.get(artist.id)?.score || 0,
      yearTrackCount: artistScore.get(artist.id)?.trackCount || 0,
    }))
    .sort((a, b) => b.yearScore - a.yearScore || b.popularity - a.popularity)
    .slice(0, 12);
}

async function loadArtistTracks(artistId) {
  const artist = state.artists.find((item) => item.id === artistId);
  if (!artist) {
    return;
  }

  state.selectedArtistId = artistId;
  renderArtists(state.artists);
  renderDetail(artist, { loading: true });

  try {
    const data = await spotifyFetch(`/api/artists/${artistId}/top-tracks`, { market: state.market });
    renderDetail(artist, { tracks: data.tracks || [] });
  } catch (error) {
    renderDetail(artist, { error: error.message });
  }
}

async function spotifyFetch(path, params = {}) {
  const url = new URL(path, window.location.origin);
  Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value));

  const response = await fetch(url);

  if (!response.ok) {
    const error = new Error(await getApiError(response));
    error.status = response.status;
    throw error;
  }

  return response.json();
}

function renderTracks(tracks) {
  els.songsKicker.textContent = state.year === new Date().getFullYear() ? "Current" : String(state.year);
  els.songCount.textContent = tracks.length;

  els.trackList.replaceChildren(
    ...tracks.map((track, index) => {
      const link = document.createElement("a");
      link.className = "track-row";
      link.href = track.external_urls?.spotify || "#";
      link.target = "_blank";
      link.rel = "noreferrer";

      link.append(
        textNode("span", "rank", String(index + 1).padStart(2, "0")),
        imageNode(track.album?.images, "cover", `${track.name} album art`),
        trackText(track.name, formatArtists(track.artists)),
        textNode("span", "popularity", String(track.popularity ?? "-"))
      );

      return link;
    })
  );
}

function renderArtists(artists) {
  els.artistsKicker.textContent = state.year === new Date().getFullYear() ? "Current" : String(state.year);
  els.artistCount.textContent = artists.length;

  els.artistGrid.replaceChildren(
    ...artists.map((artist) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `artist-card${artist.id === state.selectedArtistId ? " is-selected" : ""}`;
      button.addEventListener("click", () => loadArtistTracks(artist.id));

      const copy = document.createElement("div");
      copy.className = "artist-copy";
      copy.append(
        textNode("div", "artist-name", artist.name),
        textNode("div", "artist-meta", `${artist.popularity ?? "-"} popularity - ${artist.yearTrackCount} songs`)
      );

      button.append(imageNode(artist.images, "artist-image", `${artist.name} portrait`), copy);
      return button;
    })
  );
}

function renderDetail(artist, options = {}) {
  if (!artist) {
    els.artistDetail.innerHTML = `
      <div class="empty-state">
        <p class="eyebrow">Artist Tracks</p>
        <h2>Select an artist</h2>
      </div>
    `;
    return;
  }

  const wrapper = document.createElement("div");
  const hero = document.createElement("div");
  hero.className = "detail-hero";

  const copy = document.createElement("div");
  copy.append(textNode("p", "eyebrow", "Popular Tracks"), textNode("h2", "", artist.name));

  if (artist.genres?.length) {
    const genres = document.createElement("div");
    genres.className = "genre-list";
    artist.genres.slice(0, 3).forEach((genre) => genres.append(textNode("span", "genre", genre)));
    copy.append(genres);
  }

  hero.append(imageNode(artist.images, "detail-hero-image", `${artist.name} portrait`), copy);
  wrapper.append(hero);

  if (options.loading) {
    wrapper.append(emptyMessage("Loading tracks..."));
  } else if (options.error) {
    wrapper.append(emptyMessage(options.error));
  } else {
    const list = document.createElement("div");
    list.className = "detail-tracks";
    (options.tracks || []).slice(0, 10).forEach((track, index) => {
      const link = document.createElement("a");
      link.className = "detail-track";
      link.href = track.external_urls?.spotify || artist.external_urls?.spotify || "#";
      link.target = "_blank";
      link.rel = "noreferrer";
      link.append(
        textNode("span", "rank", String(index + 1)),
        trackText(track.name, track.album?.name || ""),
        textNode("span", "popularity", String(track.popularity ?? "-"))
      );
      list.append(link);
    });
    wrapper.append(list);
  }

  els.artistDetail.replaceChildren(wrapper);
}

function renderEmpty() {
  els.trackList.replaceChildren();
  els.artistGrid.replaceChildren();
  els.songCount.textContent = "0";
  els.artistCount.textContent = "0";
  renderDetail(null);
}

function trackText(title, meta) {
  const copy = document.createElement("div");
  copy.className = "track-copy";
  copy.append(textNode("div", "track-name", title), textNode("div", "track-meta", meta));
  return copy;
}

function imageNode(images, className, alt) {
  const image = document.createElement("img");
  image.className = className;
  image.alt = alt;
  image.loading = "lazy";
  const source = [...(images || [])].sort((a, b) => (a.width || 0) - (b.width || 0))[0]?.url;
  if (source) {
    image.src = source;
  } else {
    image.classList.add("no-image");
    image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
  }
  return image;
}

function textNode(tag, className, text) {
  const element = document.createElement(tag);
  if (className) {
    element.className = className;
  }
  element.textContent = text;
  return element;
}

function emptyMessage(message) {
  const div = document.createElement("div");
  div.className = "empty-state";
  div.append(textNode("h2", "", message));
  return div;
}

function formatArtists(artists = []) {
  return artists.map((artist) => artist.name).join(", ");
}

function setLoading(isLoading) {
  state.loading = isLoading;
  document.querySelectorAll("button, input, select").forEach((element) => {
    element.disabled = isLoading;
  });
}

function setStatus(message, isError = false) {
  els.statusText.textContent = message;
  els.statusText.style.color = isError ? "var(--rose)" : "var(--muted)";
}

async function getApiError(response) {
  try {
    const data = await response.json();
    return data.error?.message || data.error || `${response.status} ${response.statusText}`;
  } catch {
    return `${response.status} ${response.statusText}`;
  }
}
