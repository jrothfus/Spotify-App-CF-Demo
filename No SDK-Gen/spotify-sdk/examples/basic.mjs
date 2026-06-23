import { createSpotifyClient } from "../src/index.js";

const spotify = createSpotifyClient({
  accessToken: process.env.SPOTIFY_ACCESS_TOKEN
});

const album = await spotify.albums.getAnAlbum({
  id: "4aawyAB9vmqN3uQ7FjRGTy",
  market: "US"
});

console.log(album.name);
