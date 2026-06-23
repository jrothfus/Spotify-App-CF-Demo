# AI Usage Guide

This SDK is designed so an AI agent can safely choose operations without memorizing Spotify's API.

## Discovery Flow

1. Use `client.findOperations("plain language search")` to locate likely operations.
2. Use `client.describe(operationName)` to inspect path, method, scopes, parameters, examples, and deprecation.
3. Call either the resource method or the generic operation method.

```js
const matches = spotify.findOperations("saved albums");
const operation = spotify.describe("getUsersSavedAlbums");

const albums = await spotify.library.getUsersSavedAlbums({
  limit: 20,
  market: "US"
});
```

The generic form is equivalent and useful when an agent has only an operation name:

```js
await spotify.operation("getUsersSavedAlbums", {
  limit: 20,
  market: "US"
});
```

## Request Shape Rules

- Path and query parameters are top-level fields: `{ playlist_id, limit, offset }`.
- JSON payloads go in `body`.
- Extra query parameters can be passed with `query`.
- Extra headers can be passed with `headers`.
- `signal` can be supplied on the request object or options object.
- Arrays in query values are serialized as comma-separated strings, matching Spotify's ID-list conventions.

```js
await spotify.playlists.addItemsToPlaylist({
  playlist_id: "3cEYpjA9oz9GiPac4AsH4n",
  body: {
    uris: [
      "spotify:track:4iV5W9uYEdYUVa79Axb7Rh",
      "spotify:episode:512ojhOuo1ktJprKbVcKyQ"
    ],
    position: 0
  }
});
```

## Error Handling

Catch `SpotifyApiError` for Spotify HTTP failures. It exposes:

- `status`
- `statusText`
- `method`
- `url`
- `retryAfter`
- `details`
- `responseBody`
- `headers`

```js
try {
  await spotify.albums.getAnAlbum({ id: "bad-id" });
} catch (error) {
  if (error.name === "SpotifyApiError" && error.status === 429) {
    console.log("Retry after seconds:", error.retryAfter);
  }
}
```

## Resource Groups

Generated groups:

- `albums`
- `artists`
- `audiobooks`
- `categories`
- `chapters`
- `episodes`
- `genres`
- `library`
- `markets`
- `player`
- `playlists`
- `search`
- `shows`
- `tracks`
- `users`

The method names are camelCase versions of Spotify's `operationId`, for example:

- `get-an-album` -> `spotify.albums.getAnAlbum()`
- `add-items-to-playlist` -> `spotify.playlists.addItemsToPlaylist()`
- `get-the-users-currently-playing-track` -> `spotify.player.getTheUsersCurrentlyPlayingTrack()`

## Regeneration Contract

The generated files are disposable. If the spec changes, run:

```sh
npm run generate
npm run check
npm test
```

Hand-written runtime behavior lives in `src/core.js` and `src/index.js`.
