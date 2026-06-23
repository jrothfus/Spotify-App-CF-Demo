import {
  SpotifyHttpClient,
  assertRequiredParameters,
  buildPath,
  pickQueryParams
} from "./core.js";
import { operationByName, operations, resources } from "./operations.js";

export * from "./core.js";
export { operationByName, operations, resources } from "./operations.js";

export class SpotifyWebApi extends SpotifyHttpClient {
  constructor(options = {}) {
    super(options);
    this.operations = operations;
    this.resources = resources;

    for (const resource of resources) {
      this[resource.name] = {};
    }

    for (const operation of operations) {
      const method = (request = {}, options = {}) =>
        this.operation(operation.name, request, options);
      Object.defineProperty(method, "name", { value: operation.methodName });
      method.operation = operation;
      this[operation.resourceName][operation.methodName] = method;
    }
  }

  async operation(operationName, request = {}, options = {}) {
    const operation = operationByName[operationName];
    if (!operation) {
      throw new Error(`Unknown Spotify operation "${operationName}".`);
    }

    assertRequiredParameters(operation.parameters, request, operation.name);

    const path = buildPath(operation.path, request, operation.name);
    const query = {
      ...pickQueryParams(operation.parameters, request),
      ...request.query,
      ...options.query
    };

    return this.request({
      method: operation.httpMethod,
      path,
      query,
      body: request.body,
      contentType: operation.requestContentType,
      headers: { ...request.headers, ...options.headers },
      signal: request.signal ?? options.signal,
      auth: options.auth ?? true
    });
  }

  async requestNextPage(nextUrl, options = {}) {
    return this.request({
      method: "GET",
      url: nextUrl,
      headers: options.headers,
      signal: options.signal,
      auth: options.auth ?? true
    });
  }

  async *paginate(operationName, request = {}, options = {}) {
    const itemsKey = options.itemsKey ?? "items";
    let page = await this.operation(operationName, request, options);

    while (page) {
      const items = Array.isArray(page[itemsKey]) ? page[itemsKey] : [];
      for (const item of items) {
        yield item;
      }

      if (!page.next) {
        return;
      }

      page = await this.requestNextPage(page.next, options);
    }
  }

  describe(operationName) {
    if (!operationName) {
      return resources;
    }
    return operationByName[operationName];
  }

  findOperations(searchText) {
    const needles = searchText
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean);

    return operations.filter((operation) => {
      const haystack = [
        operation.name,
        operation.resourceName,
        operation.summary,
        operation.description,
        operation.tags.join(" ")
      ]
        .join(" ")
        .toLowerCase();

      return needles.every((needle) => haystack.includes(needle));
    });
  }
}

export function createSpotifyClient(options = {}) {
  return new SpotifyWebApi(options);
}
