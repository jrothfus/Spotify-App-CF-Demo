import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { EpisodeObject, episodeObjectResponse } from '../common/episode-object';
import { Unauthorized } from '../common/unauthorized';
import { Forbidden } from '../common/forbidden';
import { TooManyRequests } from '../common/too-many-requests';
import {
  CheckUsersSavedEpisodesParams,
  GetAnEpisodeParams,
  GetMultipleEpisodesParams,
  GetUsersSavedEpisodesParams,
  RemoveEpisodesUserParams,
  SaveEpisodesUserParams,
} from './request-params';
import { ManyEpisodes, manyEpisodesResponse } from './models/many-episodes';
import {
  PagingSavedEpisodeObject,
  pagingSavedEpisodeObjectResponse,
} from './models/paging-saved-episode-object';
import {
  SaveEpisodesUserRequest,
  saveEpisodesUserRequestRequest,
} from './models/save-episodes-user-request';
import {
  RemoveEpisodesUserRequest,
  removeEpisodesUserRequestRequest,
} from './models/remove-episodes-user-request';

/**
 * Service class for EpisodesService operations.
 * Provides methods to interact with EpisodesService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class EpisodesService extends BaseService {
  protected getAnEpisodeConfig?: Partial<SdkConfig>;

  protected getMultipleEpisodesConfig?: Partial<SdkConfig>;

  protected getUsersSavedEpisodesConfig?: Partial<SdkConfig>;

  protected saveEpisodesUserConfig?: Partial<SdkConfig>;

  protected removeEpisodesUserConfig?: Partial<SdkConfig>;

  protected checkUsersSavedEpisodesConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for getAnEpisode.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetAnEpisodeConfig(config: Partial<SdkConfig>): this {
    this.getAnEpisodeConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getMultipleEpisodes.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetMultipleEpisodesConfig(config: Partial<SdkConfig>): this {
    this.getMultipleEpisodesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getUsersSavedEpisodes.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetUsersSavedEpisodesConfig(config: Partial<SdkConfig>): this {
    this.getUsersSavedEpisodesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for saveEpisodesUser.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSaveEpisodesUserConfig(config: Partial<SdkConfig>): this {
    this.saveEpisodesUserConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for removeEpisodesUser.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRemoveEpisodesUserConfig(config: Partial<SdkConfig>): this {
    this.removeEpisodesUserConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for checkUsersSavedEpisodes.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCheckUsersSavedEpisodesConfig(config: Partial<SdkConfig>): this {
    this.checkUsersSavedEpisodesConfig = config;
    return this;
  }

  /**
 * Get Spotify catalog information for a single episode identified by itsunique Spotify ID.

 * @param {string} id - The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the episode.
 * @param {string} [params.market] - An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
  If a country code is specified, only content that is available in that market will be returned.<br/>
  If a valid user access token is specified in the request header, the country associated with
  the user account will take priority over this parameter.<br/>
  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>
  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<EpisodeObject>>} - An episode
 */
  async getAnEpisode(
    id: string,
    params?: GetAnEpisodeParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<EpisodeObject> {
    const resolvedConfig = this.getResolvedConfig(this.getAnEpisodeConfig, requestConfig);
    z.object({ market: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/episodes/{id}')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: episodeObjectResponse,
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
    return this.client.callDirect<EpisodeObject>(request);
  }

  /**
 * Get Spotify catalog information for several episodes based on their Spotify IDs.
 * @param {string} params.ids - A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the episodes. Maximum: 50 IDs.

 * @param {string} [params.market] - An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
  If a country code is specified, only content that is available in that market will be returned.<br/>
  If a valid user access token is specified in the request header, the country associated with
  the user account will take priority over this parameter.<br/>
  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>
  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<ManyEpisodes>>} - A set of episodes
 */
  async getMultipleEpisodes(
    params: GetMultipleEpisodesParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ManyEpisodes> {
    const resolvedConfig = this.getResolvedConfig(this.getMultipleEpisodesConfig, requestConfig);
    z.object({ ids: z.string(), market: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/episodes')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: manyEpisodesResponse,
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
    return this.client.callDirect<ManyEpisodes>(request);
  }

  /**
 * Get a list of the episodes saved in the current Spotify user's library.
 * @param {string} [params.market] - An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
  If a country code is specified, only content that is available in that market will be returned.<br/>
  If a valid user access token is specified in the request header, the country associated with
  the user account will take priority over this parameter.<br/>
  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>
  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).

 * @param {number} [params.limit] - The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.

 * @param {number} [params.offset] - The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<PagingSavedEpisodeObject>>} - Pages of episodes
 */
  async getUsersSavedEpisodes(
    params?: GetUsersSavedEpisodesParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<PagingSavedEpisodeObject> {
    const resolvedConfig = this.getResolvedConfig(this.getUsersSavedEpisodesConfig, requestConfig);
    z.object({
      market: z.string().optional(),
      limit: z.number().optional(),
      offset: z.number().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/me/episodes')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: pagingSavedEpisodeObjectResponse,
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
    return this.client.callDirect<PagingSavedEpisodeObject>(request);
  }

  /**
 * Save one or more episodes to the current user's library.
**Note:** This endpoint is deprecated. Use [Save Items to Library](/documentation/web-api/reference/save-library-items) instead.

 * @param {string} params.ids - A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). Maximum: 50 IDs.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - Episode saved
 */
  async saveEpisodesUser(
    body: SaveEpisodesUserRequest,
    params: SaveEpisodesUserParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.saveEpisodesUserConfig, requestConfig);
    z.object({ ids: z.string() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/me/episodes')
      .setRequestSchema(saveEpisodesUserRequestRequest)
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
 * Remove one or more episodes from the current user's library.
**Note:** This endpoint is deprecated. Use [Remove Items from Library](/documentation/web-api/reference/remove-library-items) instead.

 * @param {string} params.ids - A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M`. Maximum: 50 IDs.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - Episode removed
 */
  async removeEpisodesUser(
    body: RemoveEpisodesUserRequest,
    params: RemoveEpisodesUserParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.removeEpisodesUserConfig, requestConfig);
    z.object({ ids: z.string() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/me/episodes')
      .setRequestSchema(removeEpisodesUserRequestRequest)
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
 * Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes' library.
**Note:** This endpoint is deprecated. Use [Check User's Saved Items](/documentation/web-api/reference/check-library-contains) instead.

 * @param {string} params.ids - A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the episodes. Maximum: 50 IDs.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<boolean[]>>} - Array of booleans
 */
  async checkUsersSavedEpisodes(
    params: CheckUsersSavedEpisodesParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<boolean[]> {
    const resolvedConfig = this.getResolvedConfig(
      this.checkUsersSavedEpisodesConfig,
      requestConfig,
    );
    z.object({ ids: z.string() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/me/episodes/contains')
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
}
