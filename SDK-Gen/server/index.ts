import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFileSync, existsSync } from 'node:fs';
import { SpotifyWebApiSdk } from '../spotify-sdk/src/index';
import type { ArtistObject, TrackObject } from '../spotify-sdk/src/index';

type TokenCache = {
  accessToken: string;
  expiresAt: number;
};

type RankedArtist = {
  id: string;
  name: string;
  popularity: number;
  image?: string;
  genres: string[];
  followers?: number;
  spotifyUrl?: string;
};

type RankedTrack = {
  id: string;
  name: string;
  popularity: number;
  artistNames: string[];
  albumName?: string;
  albumImage?: string;
  releaseDate?: string;
  durationMs?: number;
  explicit?: boolean;
  spotifyUrl?: string;
};

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const isProduction = process.env.NODE_ENV === 'production';
const port = Number(process.env.PORT ?? 3000);
const nativeFetch = globalThis.fetch.bind(globalThis);
let tokenCache: TokenCache | undefined;

loadEnvFile(path.join(rootDir, '.env'));
installSpotifyAuthFetch();

const spotify = new SpotifyWebApiSdk({
  timeoutMs: 10000,
  validation: { responseValidation: false },
});

const app = express();

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    configured: Boolean(process.env.SPOTIFY_CLIENT_ID && process.env.SPOTIFY_CLIENT_SECRET),
  });
});

app.get('/api/discover', async (req, res) => {
  try {
    const year = normalizeYear(req.query.year);
    const artists = await searchArtists(year);
    const tracks = await searchTracks(year);

    res.json({
      year,
      generatedAt: new Date().toISOString(),
      artists: artists.slice(0, 18),
      tracks: tracks.slice(0, 24),
    });
  } catch (error) {
    sendApiError(res, error);
  }
});

app.get('/api/artists/:id/top-tracks', async (req, res) => {
  try {
    const data = await spotify.artists.getAnArtistsTopTracks(req.params.id, { market: 'US' });
    const tracks = (data.tracks ?? []).map(mapTrack).filter((track) => track.id);

    res.json({ tracks });
  } catch (error) {
    sendApiError(res, error);
  }
});

if (isProduction) {
  const distDir = path.join(rootDir, 'dist');
  app.use(express.static(distDir));
  app.get('*', (_req, res) => res.sendFile(path.join(distDir, 'index.html')));
} else {
  app.get('/', (_req, res) => {
    res.redirect('http://localhost:5173');
  });
}

app.listen(port, () => {
  console.log(`Spotify Music Radar API running at http://localhost:${port}`);
  if (!isProduction) {
    console.log('Vite UI is expected at http://localhost:5173');
  }
});

async function searchArtists(year: number): Promise<RankedArtist[]> {
  const responses = await Promise.all(
    [0, 20, 40].map((offset) =>
      spotify.search.search({
        q: `year:${year}`,
        type: ['artist'],
        market: 'US',
        limit: 20,
        offset,
      }),
    ),
  );

  return uniqueById(
    responses.flatMap((response) => response.artists?.items ?? []).map(mapArtist),
  ).sort(sortByPopularity);
}

async function searchTracks(year: number): Promise<RankedTrack[]> {
  const responses = await Promise.all(
    [0, 20, 40].map((offset) =>
      spotify.search.search({
        q: `year:${year}`,
        type: ['track'],
        market: 'US',
        limit: 20,
        offset,
      }),
    ),
  );

  return uniqueById(
    responses.flatMap((response) => response.tracks?.items ?? []).map(mapTrack),
  ).sort(sortByPopularity);
}

function mapArtist(artist: ArtistObject): RankedArtist {
  const rawArtist = artist as ArtistObject & {
    external_urls?: { spotify?: string };
  };

  return {
    id: artist.id ?? '',
    name: artist.name ?? 'Unknown artist',
    popularity: artist.popularity ?? 0,
    image: artist.images?.[0]?.url,
    genres: artist.genres ?? [],
    followers: artist.followers?.total,
    spotifyUrl: artist.externalUrls?.spotify ?? rawArtist.external_urls?.spotify,
  };
}

function mapTrack(track: TrackObject): RankedTrack {
  const rawTrack = track as TrackObject & {
    duration_ms?: number;
    external_urls?: { spotify?: string };
    album?: TrackObject['album'] & {
      release_date?: string;
      external_urls?: { spotify?: string };
    };
  };

  return {
    id: track.id ?? '',
    name: track.name ?? 'Untitled track',
    popularity: track.popularity ?? 0,
    artistNames: track.artists?.map((artist) => artist.name ?? '').filter(Boolean) ?? [],
    albumName: track.album?.name,
    albumImage: track.album?.images?.[0]?.url,
    releaseDate: track.album?.releaseDate ?? rawTrack.album?.release_date,
    durationMs: track.durationMs ?? rawTrack.duration_ms,
    explicit: track.explicit,
    spotifyUrl: track.externalUrls?.spotify ?? rawTrack.external_urls?.spotify,
  };
}

function sortByPopularity<T extends { popularity: number; name: string }>(a: T, b: T): number {
  return b.popularity - a.popularity || a.name.localeCompare(b.name);
}

function uniqueById<T extends { id: string }>(items: T[]): T[] {
  const seen = new Set<string>();
  return items.filter((item) => {
    if (!item.id || seen.has(item.id)) {
      return false;
    }
    seen.add(item.id);
    return true;
  });
}

function normalizeYear(value: unknown): number {
  const currentYear = new Date().getFullYear();
  const raw = Array.isArray(value) ? value[0] : value;
  const parsed = Number(raw ?? currentYear);

  if (!Number.isInteger(parsed) || parsed < 1950 || parsed > currentYear) {
    return currentYear;
  }

  return parsed;
}

async function getSpotifyToken(): Promise<string> {
  if (tokenCache && Date.now() < tokenCache.expiresAt) {
    return tokenCache.accessToken;
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error('Missing SPOTIFY_CLIENT_ID or SPOTIFY_CLIENT_SECRET in .env');
  }

  const response = await nativeFetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({ grant_type: 'client_credentials' }),
  });

  if (!response.ok) {
    throw new Error(`Spotify token request failed with ${response.status}`);
  }

  const token = (await response.json()) as { access_token: string; expires_in: number };
  tokenCache = {
    accessToken: token.access_token,
    expiresAt: Date.now() + Math.max(token.expires_in - 60, 60) * 1000,
  };

  return tokenCache.accessToken;
}

function installSpotifyAuthFetch(): void {
  globalThis.fetch = async (input, init = {}) => {
    const url = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url;

    if (!url.startsWith('https://api.spotify.com/v1')) {
      return nativeFetch(input, init);
    }

    const headers = new Headers(init.headers);
    if (!headers.has('Authorization')) {
      headers.set('Authorization', `Bearer ${await getSpotifyToken()}`);
    }

    return nativeFetch(input, { ...init, headers });
  };
}

function loadEnvFile(filePath: string): void {
  if (!existsSync(filePath)) {
    return;
  }

  const lines = readFileSync(filePath, 'utf8').split(/\r?\n/);
  for (const line of lines) {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (!match) {
      continue;
    }

    const key = match[1];
    const value = (match[2] ?? '').replace(/^['"]|['"]$/g, '');
    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

function sendApiError(res: express.Response, error: unknown): void {
  const message = error instanceof Error ? error.message : 'Unexpected server error';
  const needsConfig = message.includes('SPOTIFY_CLIENT_ID') || message.includes('SPOTIFY_CLIENT_SECRET');
  res.status(needsConfig ? 500 : 502).json({
    message,
    hint: needsConfig ? 'Add Spotify app credentials to .env and restart the dev server.' : undefined,
  });
}
