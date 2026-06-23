const DEFAULT_BASE_URL = "https://api.spotify.com/v1";
const DEFAULT_ACCOUNTS_URL = "https://accounts.spotify.com";
const IDEMPOTENT_METHODS = new Set(["GET", "HEAD", "OPTIONS"]);

export class SpotifySdkError extends Error {
  constructor(message, options = {}) {
    super(message);
    this.name = "SpotifySdkError";
    this.cause = options.cause;
  }
}

export class SpotifyAuthError extends SpotifySdkError {
  constructor(message, options = {}) {
    super(message, options);
    this.name = "SpotifyAuthError";
  }
}

export class SpotifyApiError extends SpotifySdkError {
  constructor(message, options = {}) {
    super(message, options);
    this.name = "SpotifyApiError";
    this.status = options.status;
    this.statusText = options.statusText;
    this.url = options.url;
    this.method = options.method;
    this.retryAfter = options.retryAfter;
    this.details = options.details;
    this.responseBody = options.responseBody;
    this.headers = options.headers;
  }
}

export function createStaticAccessTokenProvider(accessToken) {
  if (!accessToken) {
    throw new SpotifyAuthError("A Spotify access token is required.");
  }

  return async () => accessToken;
}

export function createRefreshingAccessTokenProvider({
  accessToken,
  refreshToken,
  expiresAt,
  refresh,
  skewMs = 60_000
}) {
  if (!accessToken || !refreshToken || typeof refresh !== "function") {
    throw new SpotifyAuthError(
      "createRefreshingAccessTokenProvider requires accessToken, refreshToken, and refresh."
    );
  }

  let state = { accessToken, refreshToken, expiresAt };

  return async () => {
    const shouldRefresh =
      typeof state.expiresAt === "number" && Date.now() + skewMs >= state.expiresAt;

    if (!shouldRefresh) {
      return state.accessToken;
    }

    const next = await refresh({ ...state });
    if (!next?.accessToken) {
      throw new SpotifyAuthError("Refresh callback did not return an accessToken.");
    }

    state = {
      accessToken: next.accessToken,
      refreshToken: next.refreshToken ?? state.refreshToken,
      expiresAt: next.expiresAt
    };

    return state.accessToken;
  };
}

export class SpotifyHttpClient {
  constructor(options = {}) {
    this.baseUrl = trimTrailingSlash(options.baseUrl ?? DEFAULT_BASE_URL);
    this.accountsUrl = trimTrailingSlash(options.accountsUrl ?? DEFAULT_ACCOUNTS_URL);
    this.fetch = options.fetch ?? globalThis.fetch;
    this.userAgent = options.userAgent;
    this.defaultHeaders = options.headers ?? {};
    this.retry = {
      retries: 2,
      retryOnUnsafeMethods: false,
      baseDelayMs: 250,
      maxDelayMs: 2_000,
      ...options.retry
    };

    if (typeof this.fetch !== "function") {
      throw new SpotifySdkError(
        "No fetch implementation is available. Use Node 18+ or pass { fetch }."
      );
    }

    if (options.accessTokenProvider) {
      this.accessTokenProvider = normalizeAccessTokenProvider(options.accessTokenProvider);
    } else if (options.accessToken) {
      this.accessTokenProvider = createStaticAccessTokenProvider(options.accessToken);
    } else {
      this.accessTokenProvider = undefined;
    }
  }

  async request({ method, path, url, query, headers, body, contentType, signal, auth = true }) {
    const requestUrl = url ? new URL(url) : new URL(`${this.baseUrl}${path}`);
    appendQuery(requestUrl, query);

    const requestHeaders = new Headers(this.defaultHeaders);
    for (const [key, value] of Object.entries(headers ?? {})) {
      if (value !== undefined && value !== null) {
        requestHeaders.set(key, String(value));
      }
    }

    if (this.userAgent && !requestHeaders.has("User-Agent")) {
      requestHeaders.set("User-Agent", this.userAgent);
    }

    if (auth) {
      if (!this.accessTokenProvider) {
        throw new SpotifyAuthError(
          "This request requires OAuth. Construct the SDK with accessToken or accessTokenProvider."
        );
      }
      requestHeaders.set("Authorization", `Bearer ${await this.accessTokenProvider()}`);
    }

    const requestBody = serializeBody(body, contentType, requestHeaders);
    const init = { method, headers: requestHeaders, body: requestBody, signal };

    return this.#sendWithRetries(requestUrl, init);
  }

  async requestRaw(input, init = {}) {
    return this.#sendWithRetries(new URL(input), init, { parse: false });
  }

  async #sendWithRetries(url, init, options = {}) {
    const method = (init.method ?? "GET").toUpperCase();
    const maxAttempts = this.#maxAttemptsFor(method);
    let lastError;

    for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
      try {
        const response = await this.fetch(url, init);

        if (response.ok) {
          return options.parse === false ? response : parseSuccessResponse(response);
        }

        const apiError = await createApiError(response, method, url.toString());
        if (!shouldRetryResponse(response.status) || attempt === maxAttempts - 1) {
          throw apiError;
        }

        await delay(getRetryDelayMs(apiError.retryAfter, attempt, this.retry));
      } catch (error) {
        lastError = error;
        if (error instanceof SpotifyApiError) {
          throw error;
        }
        if (attempt === maxAttempts - 1 || init.signal?.aborted) {
          throw new SpotifySdkError(`Spotify request failed: ${error.message}`, { cause: error });
        }
        await delay(getRetryDelayMs(undefined, attempt, this.retry));
      }
    }

    throw lastError;
  }

  #maxAttemptsFor(method) {
    const canRetry = IDEMPOTENT_METHODS.has(method) || this.retry.retryOnUnsafeMethods;
    return canRetry ? this.retry.retries + 1 : 1;
  }
}

export function buildPath(pathTemplate, params, operationName) {
  return pathTemplate.replace(/\{([^}]+)\}/g, (_, name) => {
    const value = params[name];
    if (value === undefined || value === null || value === "") {
      throw new SpotifySdkError(
        `Missing required path parameter "${name}" for ${operationName}.`
      );
    }
    return encodeURIComponent(String(value));
  });
}

export function pickQueryParams(parameters, request) {
  const query = {};

  for (const parameter of parameters) {
    if (parameter.in !== "query") {
      continue;
    }
    const value = request[parameter.name];
    if (value !== undefined && value !== null) {
      query[parameter.name] = value;
    }
  }

  return query;
}

export function assertRequiredParameters(parameters, request, operationName) {
  for (const parameter of parameters) {
    if (!parameter.required) {
      continue;
    }

    const value = request[parameter.name];
    if (value === undefined || value === null || value === "") {
      throw new SpotifySdkError(
        `Missing required ${parameter.in} parameter "${parameter.name}" for ${operationName}.`
      );
    }
  }
}

export function createAuthorizationUrl({
  clientId,
  redirectUri,
  scopes = [],
  state,
  showDialog = false,
  responseType = "code"
}) {
  const url = new URL(`${DEFAULT_ACCOUNTS_URL}/authorize`);
  url.searchParams.set("client_id", clientId);
  url.searchParams.set("response_type", responseType);
  url.searchParams.set("redirect_uri", redirectUri);
  if (scopes.length > 0) {
    url.searchParams.set("scope", scopes.join(" "));
  }
  if (state) {
    url.searchParams.set("state", state);
  }
  if (showDialog) {
    url.searchParams.set("show_dialog", "true");
  }
  return url.toString();
}

export async function exchangeAuthorizationCode({
  fetch = globalThis.fetch,
  accountsUrl = DEFAULT_ACCOUNTS_URL,
  clientId,
  clientSecret,
  code,
  redirectUri,
  codeVerifier
}) {
  const body = new URLSearchParams({
    grant_type: "authorization_code",
    code,
    redirect_uri: redirectUri
  });

  if (codeVerifier) {
    body.set("code_verifier", codeVerifier);
  }

  return tokenRequest({
    fetch,
    accountsUrl,
    clientId,
    clientSecret,
    body
  });
}

export async function refreshAccessToken({
  fetch = globalThis.fetch,
  accountsUrl = DEFAULT_ACCOUNTS_URL,
  clientId,
  clientSecret,
  refreshToken
}) {
  return tokenRequest({
    fetch,
    accountsUrl,
    clientId,
    clientSecret,
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken
    })
  });
}

export async function clientCredentialsGrant({
  fetch = globalThis.fetch,
  accountsUrl = DEFAULT_ACCOUNTS_URL,
  clientId,
  clientSecret
}) {
  return tokenRequest({
    fetch,
    accountsUrl,
    clientId,
    clientSecret,
    body: new URLSearchParams({ grant_type: "client_credentials" })
  });
}

async function tokenRequest({ fetch, accountsUrl, clientId, clientSecret, body }) {
  if (typeof fetch !== "function") {
    throw new SpotifySdkError("No fetch implementation is available for OAuth token exchange.");
  }

  const headers = new Headers({ "Content-Type": "application/x-www-form-urlencoded" });
  if (clientSecret) {
    headers.set("Authorization", `Basic ${btoa(`${clientId}:${clientSecret}`)}`);
  } else {
    body.set("client_id", clientId);
  }

  const response = await fetch(`${trimTrailingSlash(accountsUrl)}/api/token`, {
    method: "POST",
    headers,
    body
  });

  if (!response.ok) {
    throw await createApiError(response, "POST", `${trimTrailingSlash(accountsUrl)}/api/token`);
  }

  const token = await response.json();
  return {
    ...token,
    expiresAt: typeof token.expires_in === "number" ? Date.now() + token.expires_in * 1000 : undefined
  };
}

function normalizeAccessTokenProvider(provider) {
  if (typeof provider === "function") {
    return provider;
  }
  if (typeof provider?.getAccessToken === "function") {
    return () => provider.getAccessToken();
  }
  throw new SpotifyAuthError(
    "accessTokenProvider must be a function or an object with getAccessToken()."
  );
}

function appendQuery(url, query) {
  for (const [key, value] of Object.entries(query ?? {})) {
    if (value === undefined || value === null) {
      continue;
    }
    if (Array.isArray(value)) {
      url.searchParams.set(key, value.join(","));
    } else if (typeof value === "boolean") {
      url.searchParams.set(key, value ? "true" : "false");
    } else {
      url.searchParams.set(key, String(value));
    }
  }
}

function serializeBody(body, contentType, headers) {
  if (body === undefined || body === null) {
    return undefined;
  }

  if (contentType === "image/jpeg") {
    headers.set("Content-Type", "image/jpeg");
    return body;
  }

  if (isBodyInit(body)) {
    if (contentType && !headers.has("Content-Type")) {
      headers.set("Content-Type", contentType);
    }
    return body;
  }

  headers.set("Content-Type", contentType ?? "application/json");
  return JSON.stringify(body);
}

function isBodyInit(value) {
  return (
    typeof value === "string" ||
    value instanceof ArrayBuffer ||
    ArrayBuffer.isView(value) ||
    value instanceof URLSearchParams ||
    (typeof Blob !== "undefined" && value instanceof Blob) ||
    (typeof FormData !== "undefined" && value instanceof FormData)
  );
}

async function parseSuccessResponse(response) {
  if (response.status === 204) {
    return undefined;
  }

  const text = await response.text();
  if (!text) {
    return undefined;
  }

  const contentType = response.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) {
    return JSON.parse(text);
  }

  return text;
}

async function createApiError(response, method, url) {
  const text = await response.text();
  let responseBody;
  try {
    responseBody = text ? JSON.parse(text) : undefined;
  } catch {
    responseBody = text;
  }

  const spotifyError = responseBody?.error;
  const message =
    typeof spotifyError === "string"
      ? spotifyError
      : spotifyError?.message ?? response.statusText ?? "Spotify API request failed.";

  const retryAfterHeader = response.headers.get("retry-after");
  const retryAfter = retryAfterHeader ? Number(retryAfterHeader) : undefined;

  return new SpotifyApiError(message, {
    status: response.status,
    statusText: response.statusText,
    url,
    method,
    retryAfter: Number.isFinite(retryAfter) ? retryAfter : undefined,
    details: spotifyError,
    responseBody,
    headers: Object.fromEntries(response.headers.entries())
  });
}

function shouldRetryResponse(status) {
  return status === 429 || (status >= 500 && status < 600);
}

function getRetryDelayMs(retryAfterSeconds, attempt, retry) {
  if (retryAfterSeconds !== undefined) {
    return Math.min(retryAfterSeconds * 1000, retry.maxDelayMs);
  }
  return Math.min(retry.baseDelayMs * 2 ** attempt, retry.maxDelayMs);
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function trimTrailingSlash(value) {
  return value.replace(/\/+$/, "");
}
