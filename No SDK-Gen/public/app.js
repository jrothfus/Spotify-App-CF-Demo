const state = {
  currentYear: new Date().getFullYear(),
  year: new Date().getFullYear(),
  artists: [],
  tracks: []
};

const elements = {
  form: document.querySelector("#year-form"),
  yearInput: document.querySelector("#year-input"),
  currentButton: document.querySelector("#current-button"),
  status: document.querySelector("#status-text"),
  artistsList: document.querySelector("#artists-list"),
  tracksList: document.querySelector("#tracks-list"),
  drawer: document.querySelector("#artist-drawer"),
  artistDetail: document.querySelector("#artist-detail")
};

elements.yearInput.max = String(state.currentYear);
elements.yearInput.value = String(state.currentYear);

elements.form.addEventListener("submit", (event) => {
  event.preventDefault();
  loadCharts(Number(elements.yearInput.value));
});

elements.currentButton.addEventListener("click", () => {
  elements.yearInput.value = String(state.currentYear);
  loadCharts(state.currentYear);
});

document.querySelectorAll("[data-close-drawer]").forEach((button) => {
  button.addEventListener("click", closeDrawer);
});

loadCharts(state.currentYear);

async function loadCharts(year) {
  setStatus(`Loading ${year} from Spotify...`);
  elements.artistsList.innerHTML = skeletonCards(8);
  elements.tracksList.innerHTML = skeletonRows(10);

  try {
    const charts = await fetchJson(`/api/charts?year=${encodeURIComponent(year)}`);
    state.year = charts.year;
    state.artists = charts.artists;
    state.tracks = charts.tracks;
    elements.yearInput.value = String(charts.year);
    renderArtists(charts.artists);
    renderTracks(charts.tracks);
    setStatus(
      charts.year === state.currentYear
        ? `Showing current popular tracks in ${charts.market}.`
        : `Showing popular Spotify catalog matches from ${charts.year} in ${charts.market}.`
    );
  } catch (error) {
    elements.artistsList.innerHTML = "";
    elements.tracksList.innerHTML = `<div class="empty-state">${escapeHtml(error.message)}</div>`;
    setStatus(error.message);
  }
}

function renderArtists(artists) {
  if (artists.length === 0) {
    elements.artistsList.innerHTML = `<div class="empty-state">No artists found for this year.</div>`;
    return;
  }

  elements.artistsList.innerHTML = artists.map((artist, index) => `
    <button class="artist-card" type="button" data-artist-id="${escapeHtml(artist.id)}">
      ${artist.image
        ? `<img src="${escapeHtml(artist.image)}" alt="">`
        : `<span class="artist-fallback">${escapeHtml(artist.name.charAt(0))}</span>`}
      <span>
        <span class="meta">#${index + 1} · ${artist.popularity}/100</span>
        <h3>${escapeHtml(artist.name)}</h3>
        <p class="genre-line">${escapeHtml(formatArtistMeta(artist))}</p>
      </span>
    </button>
  `).join("");

  elements.artistsList.querySelectorAll("[data-artist-id]").forEach((button) => {
    button.addEventListener("click", () => openArtist(button.dataset.artistId));
  });
}

function renderTracks(tracks, container = elements.tracksList) {
  if (tracks.length === 0) {
    container.innerHTML = `<div class="empty-state">No tracks found.</div>`;
    return;
  }

  container.innerHTML = tracks.map((track, index) => trackTemplate(track, index)).join("");
}

async function openArtist(artistId) {
  const artist = state.artists.find((item) => item.id === artistId);
  elements.drawer.classList.add("open");
  elements.drawer.setAttribute("aria-hidden", "false");
  elements.artistDetail.innerHTML = `
    <div class="artist-hero">
      <p class="kicker">Artist Tracks</p>
      <h2>${escapeHtml(artist?.name ?? "Artist")}</h2>
      <p class="meta">Loading top tracks from Spotify...</p>
    </div>
    <div class="track-list">${skeletonRows(6)}</div>
  `;

  try {
    const detail = await fetchJson(`/api/artists/${encodeURIComponent(artistId)}/top-tracks`);
    elements.artistDetail.innerHTML = `
      <div class="artist-hero">
        <p class="kicker">Artist Tracks</p>
        <h2>${escapeHtml(artist?.name ?? "Artist")}</h2>
        <p class="meta">Click any song to open it in Spotify.</p>
      </div>
      <div class="track-list" id="artist-track-list"></div>
    `;
    renderTracks(detail.tracks, document.querySelector("#artist-track-list"));
  } catch (error) {
    elements.artistDetail.innerHTML = `
      <div class="artist-hero">
        <p class="kicker">Artist Tracks</p>
        <h2>${escapeHtml(artist?.name ?? "Artist")}</h2>
      </div>
      <div class="empty-state">${escapeHtml(error.message)}</div>
    `;
  }
}

function closeDrawer() {
  elements.drawer.classList.remove("open");
  elements.drawer.setAttribute("aria-hidden", "true");
}

function trackTemplate(track, index) {
  const artistNames = track.artists.map((artist) => artist.name).join(", ");
  const href = track.url ?? "#";
  return `
    <a class="track-row" href="${escapeHtml(href)}" target="_blank" rel="noreferrer">
      <span class="rank">${index + 1}</span>
      ${track.albumImage
        ? `<img class="album-art" src="${escapeHtml(track.albumImage)}" alt="">`
        : `<span class="album-art"></span>`}
      <span class="track-copy">
        <h3>${escapeHtml(track.name)}</h3>
        <p class="meta">${escapeHtml(artistNames)} · ${escapeHtml(track.album)}</p>
      </span>
      <span class="popularity">${track.popularity}/100</span>
    </a>
  `;
}

async function fetchJson(url) {
  const response = await fetch(url);
  const payload = await response.json();
  if (!response.ok) {
    throw new Error(payload.error ?? "Spotify request failed.");
  }
  return payload;
}

function setStatus(message) {
  elements.status.textContent = message;
}

function formatArtistMeta(artist) {
  if (artist.genres?.length) {
    return artist.genres.join(", ");
  }
  return artist.topTrack ? `Known here for ${artist.topTrack}` : `${artist.trackCount} chart tracks`;
}

function skeletonCards(count) {
  return Array.from({ length: count }, () => `
    <div class="artist-card" aria-hidden="true">
      <span class="artist-fallback"></span>
      <span>
        <p class="meta">Loading</p>
        <h3>&nbsp;</h3>
        <p class="genre-line">&nbsp;</p>
      </span>
    </div>
  `).join("");
}

function skeletonRows(count) {
  return Array.from({ length: count }, (_, index) => `
    <div class="track-row" aria-hidden="true">
      <span class="rank">${index + 1}</span>
      <span class="album-art"></span>
      <span class="track-copy">
        <h3>&nbsp;</h3>
        <p class="meta">&nbsp;</p>
      </span>
      <span class="popularity">...</span>
    </div>
  `).join("");
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  })[character]);
}
