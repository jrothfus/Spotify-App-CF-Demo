import assert from "node:assert/strict";
import { createSpotifyClient, SpotifyApiError } from "../src/index.js";

const calls = [];
const fetch = async (url, init) => {
  calls.push({ url: url.toString(), init });

  if (url.toString().includes("bad")) {
    return new Response(
      JSON.stringify({ error: { status: 404, message: "Not found" } }),
      {
        status: 404,
        headers: { "content-type": "application/json" }
      }
    );
  }

  if (url.toString().includes("offset=50")) {
    return Response.json({
      href: url.toString(),
      items: [{ id: "two" }],
      next: null,
      limit: 50,
      offset: 50,
      total: 2
    });
  }

  return Response.json({
    id: "4aawyAB9vmqN3uQ7FjRGTy",
    name: "Album",
    href: url.toString(),
    items: [{ id: "one" }],
    next: "https://api.spotify.com/v1/playlists/demo/items?offset=50",
    limit: 50,
    offset: 0,
    total: 2
  });
};

const spotify = createSpotifyClient({ accessToken: "token", fetch });

const album = await spotify.albums.getAnAlbum({
  id: "4aawyAB9vmqN3uQ7FjRGTy",
  market: "US"
});

assert.equal(album.name, "Album");
assert.equal(calls[0].url, "https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy?market=US");
assert.equal(calls[0].init.headers.get("Authorization"), "Bearer token");

const items = [];
for await (const item of spotify.paginate("getPlaylistsItems", {
  playlist_id: "demo",
  limit: 50
})) {
  items.push(item.id);
}

assert.deepEqual(items, ["one", "two"]);

assert.equal(spotify.describe("getAnAlbum").path, "/albums/{id}");
assert.ok(spotify.findOperations("playlist image").some((operation) => operation.name === "uploadCustomPlaylistCover"));

await assert.rejects(
  () => spotify.albums.getAnAlbum({ id: "bad" }),
  (error) => error instanceof SpotifyApiError && error.status === 404
);
