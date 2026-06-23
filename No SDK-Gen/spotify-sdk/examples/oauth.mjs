import {
  createAuthorizationUrl,
  exchangeAuthorizationCode,
  refreshAccessToken
} from "../src/index.js";

const redirectUri = "http://localhost:3000/callback";

const authorizationUrl = createAuthorizationUrl({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  redirectUri,
  scopes: ["user-read-email", "playlist-read-private"],
  state: "replace-with-a-csrf-token"
});

console.log("Visit:", authorizationUrl);

// After your callback receives ?code=...
const token = await exchangeAuthorizationCode({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri,
  code: "replace-with-callback-code"
});

const refreshed = await refreshAccessToken({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  refreshToken: token.refresh_token
});

console.log({ token, refreshed });
