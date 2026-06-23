import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";
import { readFileSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import {
  clientCredentialsGrant,
  createSpotifyClient,
  SpotifyApiError
} from "./spotify-sdk/src/index.js";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
loadDotEnv(join(__dirname, ".env"));

const publicDir = join(__dirname, "public");
const port = Number(process.env.PORT ?? 3000);
const market = process.env.SPOTIFY_MARKET ?? "US";
const currentYear = new Date().getFullYear();
const maxYear = currentYear;
const minYear = 1950;

let tokenState;

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml"
};

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url, `http://${request.headers.host}`);

    if (url.pathname === "/api/charts") {
      await sendJson(response, await getCharts(url.searchParams));
      return;
    }

    if (url.pathname.startsWith("/api/artists/") && url.pathname.endsWith("/top-tracks")) {
      const artistId = decodeURIComponent(url.pathname.split("/")[3] ?? "");
      await sendJson(response, await getArtistTopTracks(artistId));
      return;
    }

    await serveStatic(url.pathname, response);
  } catch (error) {
    sendError(response, error);
  }
});

server.listen(port, () => {
  console.log(`Music browser running at http://localhost:${port}`);
});

async function getCharts(searchParams) {
  const year = parseYear(searchParams.get("year"));
  const spotify = await getSpotify();
  const tracks = await searchPopularTracks(spotify, year);
  const artists = await hydrateArtists(spotify, summarizeArtists(tracks));

  return {
    year,
    market,
    generatedAt: new Date().toISOString(),
    tracks: tracks.slice(0, 30),
    artists: artists.slice(0, 24)
  };
}

async function getArtistTopTracks(artistId) {
  if (!artistId) {
    throw httpError(400, "Artist id is required.");
  }

  const spotify = await getSpotify();
  const result = await spotify.artists.getAnArtistsTopTracks({ id: artistId, market });
  return {
    artistId,
    market,
    tracks: (result.tracks ?? []).map(formatTrack).filter(Boolean)
  };
}

async function searchPopularTracks(spotify, year) {
  const queries = year === currentYear
    ? [`year:${year}`, `year:${year - 1}-${year}`]
    : [`year:${year}`];

  const found = new Map();

  for (const q of queries) {
    for (const offset of [0, 50, 100, 150]) {
      const result = await spotify.search.search({
        q,
        type: ["track"],
        market,
        limit: 50,
        offset
      });

      for (const track of result.tracks?.items ?? []) {
        const formatted = formatTrack(track);
        if (!formatted || found.has(formatted.id)) {
          continue;
        }
        found.set(formatted.id, formatted);
      }
    }
  }

  return [...found.values()]
    .sort((a, b) => b.popularity - a.popularity || a.name.localeCompare(b.name))
    .slice(0, 50);
}

function summarizeArtists(tracks) {
  const artists = new Map();

  for (const track of tracks) {
    for (const artist of track.artists) {
      const current = artists.get(artist.id) ?? {
        id: artist.id,
        name: artist.name,
        url: artist.url,
        score: 0,
        trackCount: 0,
        topTrack: track.name,
        topTrackPopularity: 0
      };

      current.trackCount += 1;
      current.score += track.popularity;
      if (track.popularity > current.topTrackPopularity) {
        current.topTrack = track.name;
        current.topTrackPopularity = track.popularity;
      }
      artists.set(artist.id, current);
    }
  }

  return [...artists.values()]
    .sort((a, b) => b.score - a.score || b.topTrackPopularity - a.topTrackPopularity)
    .slice(0, 30);
}

async function hydrateArtists(spotify, artistSummaries) {
  if (artistSummaries.length === 0) {
    return [];
  }

  const byId = new Map(artistSummaries.map((artist) => [artist.id, artist]));
  const result = await spotify.artists.getMultipleArtists({
    ids: artistSummaries.map((artist) => artist.id).join(",")
  });

  return (result.artists ?? [])
    .map((artist) => {
      const summary = byId.get(artist.id);
      return {
        id: artist.id,
        name: artist.name,
        image: artist.images?.[0]?.url ?? null,
        genres: artist.genres?.slice(0, 3) ?? [],
        popularity: artist.popularity ?? summary?.topTrackPopularity ?? 0,
        followers: artist.followers?.total ?? null,
        url: artist.external_urls?.spotify ?? summary?.url ?? null,
        score: summary?.score ?? 0,
        trackCount: summary?.trackCount ?? 0,
        topTrack: summary?.topTrack ?? null
      };
    })
    .sort((a, b) => b.score - a.score || b.popularity - a.popularity)
    .slice(0, 24);
}

async function getSpotify() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw httpError(
      500,
      "Set SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET before starting the app."
    );
  }

  const token = await getAccessToken({ clientId, clientSecret });
  return createSpotifyClient({ accessToken: token });
}

async function getAccessToken({ clientId, clientSecret }) {
  if (tokenState?.accessToken && Date.now() < tokenState.expiresAt - 60_000) {
    return tokenState.accessToken;
  }

  const token = await clientCredentialsGrant({ clientId, clientSecret });
  tokenState = {
    accessToken: token.access_token,
    expiresAt: token.expiresAt ?? Date.now() + 3_000_000
  };
  return tokenState.accessToken;
}

function formatTrack(track) {
  if (!track?.id || !track?.name) {
    return null;
  }

  return {
    id: track.id,
    name: track.name,
    album: track.album?.name ?? "Unknown album",
    albumImage: track.album?.images?.[0]?.url ?? null,
    releaseDate: track.album?.release_date ?? null,
    popularity: track.popularity ?? 0,
    durationMs: track.duration_ms ?? 0,
    previewUrl: track.preview_url ?? null,
    url: track.external_urls?.spotify ?? null,
    artists: (track.artists ?? [])
      .filter((artist) => artist.id && artist.name)
      .map((artist) => ({
        id: artist.id,
        name: artist.name,
        url: artist.external_urls?.spotify ?? null
      }))
  };
}

function parseYear(value) {
  if (!value) {
    return currentYear;
  }

  const year = Number(value);
  if (!Number.isInteger(year) || year < minYear || year > maxYear) {
    throw httpError(400, `Choose a year from ${minYear} through ${maxYear}.`);
  }
  return year;
}

async function serveStatic(pathname, response) {
  const normalizedPath = normalize(decodeURIComponent(pathname)).replace(/^(\.\.[/\\])+/, "");
  const relativePath = normalizedPath === "/" ? "index.html" : normalizedPath.replace(/^[/\\]/, "");
  const filePath = join(publicDir, relativePath);

  if (!filePath.startsWith(publicDir)) {
    throw httpError(403, "Forbidden.");
  }

  try {
    const file = await readFile(filePath);
    response.writeHead(200, {
      "Content-Type": mimeTypes[extname(filePath)] ?? "application/octet-stream",
      "Cache-Control": "no-store"
    });
    response.end(file);
  } catch (error) {
    if (relativePath !== "index.html") {
      await serveStatic("/", response);
      return;
    }
    throw error;
  }
}

async function sendJson(response, payload) {
  response.writeHead(200, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  response.end(JSON.stringify(payload));
}

function sendError(response, error) {
  const status = error.status && Number.isInteger(error.status) ? error.status : 500;
  const spotifyMessage = error instanceof SpotifyApiError
    ? error.details?.error?.message ?? error.message
    : error.message;

  response.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify({
    error: spotifyMessage || "Something went wrong.",
    status
  }));
}

function httpError(status, message) {
  const error = new Error(message);
  error.status = status;
  return error;
}

function loadDotEnv(filePath) {
  try {
    const file = readFileSync(filePath, "utf8");
    for (const line of file.split(/\r?\n/)) {
      const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
      if (!match || process.env[match[1]] !== undefined) {
        continue;
      }

      const rawValue = match[2].replace(/^(['"])(.*)\1$/, "$2");
      process.env[match[1]] = rawValue;
    }
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw error;
    }
  }
}
