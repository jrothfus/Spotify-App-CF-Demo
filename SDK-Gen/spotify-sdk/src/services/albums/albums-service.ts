import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { AlbumObject, albumObjectResponse } from './models/album-object';
import { Unauthorized } from '../common/unauthorized';
import { Forbidden } from '../common/forbidden';
import { TooManyRequests } from '../common/too-many-requests';
import {
  CheckUsersSavedAlbumsParams,
  GetAnAlbumParams,
  GetAnAlbumsTracksParams,
  GetMultipleAlbumsParams,
  GetNewReleasesParams,
  GetUsersSavedAlbumsParams,
  RemoveAlbumsUserParams,
  SaveAlbumsUserParams,
} from './request-params';
import { ManyAlbums, manyAlbumsResponse } from './models/many-albums';
import {
  PagingSimplifiedTrackObject,
  pagingSimplifiedTrackObjectResponse,
} from './models/paging-simplified-track-object';
import {
  PagingSavedAlbumObject,
  pagingSavedAlbumObjectResponse,
} from './models/paging-saved-album-object';
import {
  SaveAlbumsUserRequest,
  saveAlbumsUserRequestRequest,
} from './models/save-albums-user-request';
import {
  RemoveAlbumsUserRequest,
  removeAlbumsUserRequestRequest,
} from './models/remove-albums-user-request';
import { PagedAlbums, pagedAlbumsResponse } from './models/paged-albums';

/**
 * Service class for AlbumsService operations.
 * Provides methods to interact with AlbumsService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class AlbumsService extends BaseService {
  protected getAnAlbumConfig?: Partial<SdkConfig>;

  protected getMultipleAlbumsConfig?: Partial<SdkConfig>;

  protected getAnAlbumsTracksConfig?: Partial<SdkConfig>;

  protected getUsersSavedAlbumsConfig?: Partial<SdkConfig>;

  protected saveAlbumsUserConfig?: Partial<SdkConfig>;

  protected removeAlbumsUserConfig?: Partial<SdkConfig>;

  protected checkUsersSavedAlbumsConfig?: Partial<SdkConfig>;

  protected getNewReleasesConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for getAnAlbum.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetAnAlbumConfig(config: Partial<SdkConfig>): this {
    this.getAnAlbumConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getMultipleAlbums.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetMultipleAlbumsConfig(config: Partial<SdkConfig>): this {
    this.getMultipleAlbumsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getAnAlbumsTracks.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetAnAlbumsTracksConfig(config: Partial<SdkConfig>): this {
    this.getAnAlbumsTracksConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getUsersSavedAlbums.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetUsersSavedAlbumsConfig(config: Partial<SdkConfig>): this {
    this.getUsersSavedAlbumsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for saveAlbumsUser.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSaveAlbumsUserConfig(config: Partial<SdkConfig>): this {
    this.saveAlbumsUserConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for removeAlbumsUser.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRemoveAlbumsUserConfig(config: Partial<SdkConfig>): this {
    this.removeAlbumsUserConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for checkUsersSavedAlbums.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCheckUsersSavedAlbumsConfig(config: Partial<SdkConfig>): this {
    this.checkUsersSavedAlbumsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getNewReleases.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetNewReleasesConfig(config: Partial<SdkConfig>): this {
    this.getNewReleasesConfig = config;
    return this;
  }

  /**
 * Get Spotify catalog information for a single album.
 * @param {string} id - The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the album.

 * @param {string} [params.market] - An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
  If a country code is specified, only content that is available in that market will be returned.<br/>
  If a valid user access token is specified in the request header, the country associated with
  the user account will take priority over this parameter.<br/>
  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>
  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<AlbumObject>>} - An album
 */
  async getAnAlbum(
    id: string,
    params?: GetAnAlbumParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<AlbumObject> {
    const resolvedConfig = this.getResolvedConfig(this.getAnAlbumConfig, requestConfig);
    z.object({ market: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/albums/{id}')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: albumObjectResponse,
        contentType: ContentType.Json,
        status: 200,
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
      .addPathParam({
        key: 'id',
        value: id,
      })
      .addQueryParam({
        key: 'market',
        value: params?.market,
      })
      .build();
    return this.client.callDirect<AlbumObject>(request);
  }

  /**
 * Get Spotify catalog information for multiple albums identified by their Spotify IDs.
 * @param {string} params.ids - A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the albums. Maximum: 20 IDs.

 * @param {string} [params.market] - An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
  If a country code is specified, only content that is available in that market will be returned.<br/>
  If a valid user access token is specified in the request header, the country associated with
  the user account will take priority over this parameter.<br/>
  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>
  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<ManyAlbums>>} - A set of albums
 */
  async getMultipleAlbums(
    params: GetMultipleAlbumsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ManyAlbums> {
    const resolvedConfig = this.getResolvedConfig(this.getMultipleAlbumsConfig, requestConfig);
    z.object({ ids: z.string(), market: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/albums')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: manyAlbumsResponse,
        contentType: ContentType.Json,
        status: 200,
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
        key: 'ids',
        value: params?.ids,
      })
      .addQueryParam({
        key: 'market',
        value: params?.market,
      })
      .build();
    return this.client.callDirect<ManyAlbums>(request);
  }

  /**
 * Get Spotify catalog information about an album’s tracks.Optional parameters can be used to limit the number of tracks returned.

 * @param {string} id - The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the album.

 * @param {string} [params.market] - An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
  If a country code is specified, only content that is available in that market will be returned.<br/>
  If a valid user access token is specified in the request header, the country associated with
  the user account will take priority over this parameter.<br/>
  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>
  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).

 * @param {number} [params.limit] - The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.

 * @param {number} [params.offset] - The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<PagingSimplifiedTrackObject>>} - Pages of tracks
 */
  async getAnAlbumsTracks(
    id: string,
    params?: GetAnAlbumsTracksParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<PagingSimplifiedTrackObject> {
    const resolvedConfig = this.getResolvedConfig(this.getAnAlbumsTracksConfig, requestConfig);
    z.object({
      market: z.string().optional(),
      limit: z.number().optional(),
      offset: z.number().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/albums/{id}/tracks')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: pagingSimplifiedTrackObjectResponse,
        contentType: ContentType.Json,
        status: 200,
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
      .addPathParam({
        key: 'id',
        value: id,
      })
      .addQueryParam({
        key: 'market',
        value: params?.market,
      })
      .addQueryParam({
        key: 'limit',
        value: params?.limit,
      })
      .addQueryParam({
        key: 'offset',
        value: params?.offset,
      })
      .build();
    return this.client.callDirect<PagingSimplifiedTrackObject>(request);
  }

  /**
 * Get a list of the albums saved in the current Spotify user's 'Your Music' library.
 * @param {number} [params.limit] - The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.

 * @param {number} [params.offset] - The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.

 * @param {string} [params.market] - An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
  If a country code is specified, only content that is available in that market will be returned.<br/>
  If a valid user access token is specified in the request header, the country associated with
  the user account will take priority over this parameter.<br/>
  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>
  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<PagingSavedAlbumObject>>} - Pages of albums
 */
  async getUsersSavedAlbums(
    params?: GetUsersSavedAlbumsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<PagingSavedAlbumObject> {
    const resolvedConfig = this.getResolvedConfig(this.getUsersSavedAlbumsConfig, requestConfig);
    z.object({
      limit: z.number().optional(),
      offset: z.number().optional(),
      market: z.string().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/me/albums')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: pagingSavedAlbumObjectResponse,
        contentType: ContentType.Json,
        status: 200,
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
        key: 'limit',
        value: params?.limit,
      })
      .addQueryParam({
        key: 'offset',
        value: params?.offset,
      })
      .addQueryParam({
        key: 'market',
        value: params?.market,
      })
      .build();
    return this.client.callDirect<PagingSavedAlbumObject>(request);
  }

  /**
 * Save one or more albums to the current user's 'Your Music' library.
**Note:** This endpoint is deprecated. Use [Save Items to Library](/documentation/web-api/reference/save-library-items) instead.

 * @param {string} params.ids - A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the albums. Maximum: 20 IDs.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - The album is saved
 */
  async saveAlbumsUser(
    body: SaveAlbumsUserRequest,
    params: SaveAlbumsUserParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.saveAlbumsUserConfig, requestConfig);
    z.object({ ids: z.string() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/me/albums')
      .setRequestSchema(saveAlbumsUserRequestRequest)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 200,
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
        key: 'ids',
        value: params?.ids,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<void>(request);
  }

  /**
 * Remove one or more albums from the current user's 'Your Music' library.
**Note:** This endpoint is deprecated. Use [Remove Items from Library](/documentation/web-api/reference/remove-library-items) instead.

 * @param {string} params.ids - A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the albums. Maximum: 20 IDs.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - Album(s) have been removed from the library
 */
  async removeAlbumsUser(
    body: RemoveAlbumsUserRequest,
    params: RemoveAlbumsUserParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.removeAlbumsUserConfig, requestConfig);
    z.object({ ids: z.string() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/me/albums')
      .setRequestSchema(removeAlbumsUserRequestRequest)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 200,
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
        key: 'ids',
        value: params?.ids,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<void>(request);
  }

  /**
 * Check if one or more albums is already saved in the current Spotify user's 'Your Music' library.
**Note:** This endpoint is deprecated. Use [Check User's Saved Items](/documentation/web-api/reference/check-library-contains) instead.

 * @param {string} params.ids - A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the albums. Maximum: 20 IDs.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<boolean[]>>} - Array of booleans
 */
  async checkUsersSavedAlbums(
    params: CheckUsersSavedAlbumsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<boolean[]> {
    const resolvedConfig = this.getResolvedConfig(this.checkUsersSavedAlbumsConfig, requestConfig);
    z.object({ ids: z.string() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/me/albums/contains')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.array(z.boolean()),
        contentType: ContentType.Json,
        status: 200,
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
        key: 'ids',
        value: params?.ids,
      })
      .build();
    return this.client.callDirect<boolean[]>(request);
  }

  /**
 * Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).
 * @param {number} [params.limit] - The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.

 * @param {number} [params.offset] - The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<PagedAlbums>>} - A paged set of albums
 */
  async getNewReleases(
    params?: GetNewReleasesParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<PagedAlbums> {
    const resolvedConfig = this.getResolvedConfig(this.getNewReleasesConfig, requestConfig);
    z.object({ limit: z.number().optional(), offset: z.number().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/browse/new-releases')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: pagedAlbumsResponse,
        contentType: ContentType.Json,
        status: 200,
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
        key: 'limit',
        value: params?.limit,
      })
      .addQueryParam({
        key: 'offset',
        value: params?.offset,
      })
      .build();
    return this.client.callDirect<PagedAlbums>(request);
  }
}
