import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { ErrorObject, errorObjectResponse } from '../common/error-object';
import { Unauthorized } from '../common/unauthorized';
import { Forbidden } from '../common/forbidden';
import { TooManyRequests } from '../common/too-many-requests';
import {
  CheckLibraryContainsParams,
  RemoveLibraryItemsParams,
  SaveLibraryItemsParams,
} from './request-params';

const libraryBadRequestResponse = z.lazy(() => {
  return z
    .object({
      error: errorObjectResponse,
    })
    .transform((data) => ({
      error: data['error'],
    }));
});

class LibraryBadRequest extends ThrowableError {
  public error: ErrorObject;

  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message, response);
    this.error = libraryBadRequestResponse.parse(response).error;
  }

  public throw() {
    const error = new LibraryBadRequest(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}

/**
 * Service class for LibraryService operations.
 * Provides methods to interact with LibraryService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class LibraryService extends BaseService {
  protected saveLibraryItemsConfig?: Partial<SdkConfig>;

  protected removeLibraryItemsConfig?: Partial<SdkConfig>;

  protected checkLibraryContainsConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for saveLibraryItems.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSaveLibraryItemsConfig(config: Partial<SdkConfig>): this {
    this.saveLibraryItemsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for removeLibraryItems.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRemoveLibraryItemsConfig(config: Partial<SdkConfig>): this {
    this.removeLibraryItemsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for checkLibraryContains.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCheckLibraryContainsConfig(config: Partial<SdkConfig>): this {
    this.checkLibraryContainsConfig = config;
    return this;
  }

  /**
 * Add one or more items to the current user's library. Accepts Spotify URIs for tracks, albums, episodes, shows, audiobooks, users, and playlists.
 * @param {string} params.uris - A comma-separated list of [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids). Maximum: 40 URIs.

Supported URI types:
- `spotify:track:{id}`
- `spotify:album:{id}`
- `spotify:episode:{id}`
- `spotify:show:{id}`
- `spotify:audiobook:{id}`
- `spotify:user:{id}`
- `spotify:playlist:{id}`

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - Items saved to library
 */
  async saveLibraryItems(
    params: SaveLibraryItemsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.saveLibraryItemsConfig, requestConfig);
    z.object({ uris: z.string() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/me/library')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addError({
        error: LibraryBadRequest,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: Unauthorized,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: Forbidden,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: TooManyRequests,
        contentType: ContentType.Json,
        status: 429,
      })
      .addQueryParam({
        key: 'uris',
        value: params?.uris,
      })
      .build();
    return this.client.callDirect<void>(request);
  }

  /**
 * Remove one or more items from the current user's library. Accepts Spotify URIs for tracks, albums, episodes, shows, audiobooks, users, and playlists.
 * @param {string} params.uris - A comma-separated list of [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids). Maximum: 40 URIs.

Supported URI types:
- `spotify:track:{id}`
- `spotify:album:{id}`
- `spotify:episode:{id}`
- `spotify:show:{id}`
- `spotify:audiobook:{id}`
- `spotify:user:{id}`
- `spotify:playlist:{id}`

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - Items removed from library
 */
  async removeLibraryItems(
    params: RemoveLibraryItemsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.removeLibraryItemsConfig, requestConfig);
    z.object({ uris: z.string() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/me/library')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addError({
        error: LibraryBadRequest,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: Unauthorized,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: Forbidden,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: TooManyRequests,
        contentType: ContentType.Json,
        status: 429,
      })
      .addQueryParam({
        key: 'uris',
        value: params?.uris,
      })
      .build();
    return this.client.callDirect<void>(request);
  }

  /**
 * Check if one or more items are already saved in the current user's library. Accepts Spotify URIs for tracks, albums, episodes, shows, audiobooks, artists, users, and playlists.
 * @param {string} params.uris - A comma-separated list of [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids). Maximum: 40 URIs.

Supported URI types:
- `spotify:track:{id}`
- `spotify:album:{id}`
- `spotify:episode:{id}`
- `spotify:show:{id}`
- `spotify:audiobook:{id}`
- `spotify:artist:{id}`
- `spotify:user:{id}`
- `spotify:playlist:{id}`

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<boolean[]>>} - Array of booleans
 */
  async checkLibraryContains(
    params: CheckLibraryContainsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<boolean[]> {
    const resolvedConfig = this.getResolvedConfig(this.checkLibraryContainsConfig, requestConfig);
    z.object({ uris: z.string() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/me/library/contains')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.array(z.boolean()),
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: LibraryBadRequest,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: Unauthorized,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: Forbidden,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: TooManyRequests,
        contentType: ContentType.Json,
        status: 429,
      })
      .addQueryParam({
        key: 'uris',
        value: params?.uris,
      })
      .build();
    return this.client.callDirect<boolean[]>(request);
  }
}
