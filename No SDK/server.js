const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");

const SPOTIFY_API_BASE = "https://api.spotify.com/v1";
const SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token";
const PORT = Number(process.env.PORT || 3000);
const HOST = process.env.HOST || "127.0.0.1";
const PUBLIC_DIR = __dirname;

loadDotEnv();

const spotifyClientId = process.env.SPOTIFY_CLIENT_ID;
const spotifyClientSecret = process.env.SPOTIFY_CLIENT_SECRET;
let tokenCache = null;

const server = http.createServer(async (request, response) => {
  try {
    const requestUrl = new URL(request.url, `http://${request.headers.host}`);

    if (requestUrl.pathname.startsWith("/api/")) {
      await handleApiRequest(request, response, requestUrl);
      return;
    }

    await serveStaticFile(response, requestUrl.pathname);
  } catch (error) {
    sendJson(response, error.status || 500, {
      error: error.message || "Unexpected server error",
    });
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Spotify Yearbook running at http://localhost:${PORT}/`);
});

async function handleApiRequest(request, response, requestUrl) {
  if (request.method !== "GET") {
    sendJson(response, 405, { error: "Method not allowed" });
    return;
  }

  if (!spotifyClientId || !spotifyClientSecret) {
    sendJson(response, 500, {
      error: "Missing SPOTIFY_CLIENT_ID or SPOTIFY_CLIENT_SECRET in .env",
    });
    return;
  }

  const spotifyPath = getAllowedSpotifyPath(requestUrl.pathname);
  if (!spotifyPath) {
    sendJson(response, 404, { error: "Unknown API route" });
    return;
  }

  const data = await spotifyRequest(spotifyPath, requestUrl.searchParams);
  sendJson(response, 200, data);
}

function getAllowedSpotifyPath(pathname) {
  if (pathname === "/api/search") {
    return "/search";
  }

  if (pathname === "/api/artists") {
    return "/artists";
  }

  const topTracksMatch = pathname.match(/^\/api\/artists\/([A-Za-z0-9]+)\/top-tracks$/);
  if (topTracksMatch) {
    return `/artists/${topTracksMatch[1]}/top-tracks`;
  }

  return null;
}

async function spotifyRequest(spotifyPath, incomingParams) {
  const token = await getSpotifyToken();
  const url = new URL(`${SPOTIFY_API_BASE}${spotifyPath}`);
  incomingParams.forEach((value, key) => url.searchParams.set(key, value));

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const body = await response.json();
  if (!response.ok) {
    const error = new Error(body.error?.message || `${response.status} ${response.statusText}`);
    error.status = response.status;
    throw error;
  }

  return body;
}

async function getSpotifyToken() {
  if (tokenCache && Date.now() < tokenCache.expiresAt) {
    return tokenCache.accessToken;
  }

  const credentials = Buffer.from(`${spotifyClientId}:${spotifyClientSecret}`).toString("base64");
  const response = await fetch(SPOTIFY_TOKEN_URL, {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ grant_type: "client_credentials" }),
  });

  const body = await response.json();
  if (!response.ok) {
    const error = new Error(body.error_description || body.error || "Unable to get Spotify access token");
    error.status = response.status;
    throw error;
  }

  tokenCache = {
    accessToken: body.access_token,
    expiresAt: Date.now() + body.expires_in * 1000 - 60_000,
  };

  return tokenCache.accessToken;
}

async function serveStaticFile(response, pathname) {
  const normalizedPath = pathname === "/" ? "/index.html" : pathname;
  const filePath = path.normalize(path.join(PUBLIC_DIR, normalizedPath));

  if (!filePath.startsWith(PUBLIC_DIR) || path.basename(filePath).startsWith(".")) {
    sendText(response, 403, "Forbidden", "text/plain");
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      sendText(response, 404, "Not found", "text/plain");
      return;
    }

    sendText(response, 200, content, getContentType(filePath));
  });
}

function sendJson(response, status, body) {
  sendText(response, status, JSON.stringify(body), "application/json");
}

function sendText(response, status, body, contentType) {
  response.writeHead(status, {
    "Content-Type": contentType,
    "Cache-Control": "no-store",
  });
  response.end(body);
}

function getContentType(filePath) {
  const extension = path.extname(filePath);
  const types = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".svg": "image/svg+xml",
  };
  return types[extension] || "application/octet-stream";
}

function loadDotEnv() {
  const envPath = path.join(__dirname, ".env");
  if (!fs.existsSync(envPath)) {
    return;
  }

  const content = fs.readFileSync(envPath, "utf8");
  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex === -1) {
      continue;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim().replace(/^["']|["']$/g, "");
    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}
