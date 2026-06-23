# Spotify SDK - AI-Created

This folder contains a hand-crafted Spotify Web API SDK built from `../../official-spotify-open-api.yml`.

It is intentionally not a raw generated client. The OpenAPI spec drives the endpoint catalog and TypeScript request/response declarations, while the runtime client is small, reviewed, and designed for day-to-day use by engineers and AI agents.

## AI + Agent Details
For the SDK generation I used Codex + GPT 5.5 (the most recent and best coding LLM available through OpenAI, and my personal choice for most development tasks right now)

## Process:
1. Prompted it to create ann SDK, here is the prompt
```
Inside the No SDK Gen folder, can you make a spotify SDK for me using the spec here: official-spotify-open-api.yml. This SDK needs to be very useable by AI and should be at the level of a senior software engineer
```
I wrote it this way because ideally I don't need to know any technical details and the only thing I have is the spotify API specification. I tried to let it know that the primary use case would be an AI agent using it to build an application, and that it should be at the level of a senior engineer.

2. I got an output SDK and it too about **5 minutes** with medium effort for Codex and about 1,500 lines of code written.

3. The files were just everywhere so I moved them into a folder

## What You Get

- 96 Spotify Web API operations grouped by resource: `albums`, `artists`, `playlists`, `player`, `library`, `search`, and more.
- Strong request types generated from the OpenAPI parameters and request bodies.
- Named Spotify response object types generated from component schemas.
- OAuth helpers for authorization URLs, authorization-code exchange, refresh tokens, and client credentials.
- A predictable transport layer with bearer auth, retries for 429/5xx GETs, JSON parsing, raw JPEG upload support, and rich `SpotifyApiError` details.
- AI-friendly operation metadata through `client.describe()`, `client.findOperations()`, and exported `operations`.

## Quick Start

```js
import { createSpotifyClient } from "./src/index.js";

const spotify = createSpotifyClient({
  accessToken: process.env.SPOTIFY_ACCESS_TOKEN
});

const album = await spotify.albums.getAnAlbum({
  id: "4aawyAB9vmqN3uQ7FjRGTy",
  market: "US"
});

console.log(album.name);
```

## Common Calls

```js
const spotify = createSpotifyClient({ accessToken });

const results = await spotify.search.search({
  q: "artist:Daft Punk",
  type: ["artist", "album"],
  limit: 10
});

const playlist = await spotify.playlists.getPlaylist({
  playlist_id: "3cEYpjA9oz9GiPac4AsH4n"
});

await spotify.player.startAUsersPlayback({
  device_id: "my-device-id",
  body: {
    uris: ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh"]
  }
});
```

## Pagination

```js
for await (const item of spotify.paginate("getPlaylistsItems", {
  playlist_id: "3cEYpjA9oz9GiPac4AsH4n",
  limit: 50
})) {
  console.log(item.track?.name);
}
```

## OAuth Helpers

```js
import {
  createAuthorizationUrl,
  exchangeAuthorizationCode,
  refreshAccessToken
} from "./src/index.js";

const url = createAuthorizationUrl({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  redirectUri: "http://localhost:3000/callback",
  scopes: ["user-read-email", "playlist-read-private"],
  state: crypto.randomUUID()
});

const token = await exchangeAuthorizationCode({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: "http://localhost:3000/callback",
  code: "code-from-callback"
});

const refreshed = await refreshAccessToken({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  refreshToken: token.refresh_token
});
```

## AI Usage

AI agents should start with:

```js
spotify.findOperations("playlist image");
spotify.describe("uploadCustomPlaylistCover");
```

The returned metadata includes the HTTP method, path, OAuth scopes, parameter names, examples, and Spotify descriptions. See [docs/ai-usage.md](docs/ai-usage.md) for a fuller guide.

## Development

```sh
npm run generate
npm run check
npm test
```

`npm run generate` reads `../../official-spotify-open-api.yml` and rewrites `src/operations.js`, `src/operations.d.ts`, and `src/index.d.ts`.
