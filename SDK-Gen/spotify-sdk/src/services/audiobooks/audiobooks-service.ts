import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { AudiobookObject, audiobookObjectResponse } from './models/audiobook-object';
import { BadRequest } from './models/bad-request';
import { Unauthorized } from '../common/unauthorized';
import { Forbidden } from '../common/forbidden';
import { NotFound } from './models/not-found';
import { TooManyRequests } from '../common/too-many-requests';
import {
  CheckUsersSavedAudiobooksParams,
  GetAnAudiobookParams,
  GetAudiobookChaptersParams,
  GetMultipleAudiobooksParams,
  GetUsersSavedAudiobooksParams,
  RemoveAudiobooksUserParams,
  SaveAudiobooksUserParams,
} from './request-params';
import { ManyAudiobooks, manyAudiobooksResponse } from './models/many-audiobooks';
import {
  PagingSimplifiedChapterObject,
  pagingSimplifiedChapterObjectResponse,
} from './models/paging-simplified-chapter-object';
import {
  PagingSimplifiedAudiobookObject,
  pagingSimplifiedAudiobookObjectResponse,
} from '../common/paging-simplified-audiobook-object';

/**
 * Service class for AudiobooksService operations.
 * Provides methods to interact with AudiobooksService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class AudiobooksService extends BaseService {
  protected getAnAudiobookConfig?: Partial<SdkConfig>;

  protected getMultipleAudiobooksConfig?: Partial<SdkConfig>;

  protected getAudiobookChaptersConfig?: Partial<SdkConfig>;

  protected getUsersSavedAudiobooksConfig?: Partial<SdkConfig>;

  protected saveAudiobooksUserConfig?: Partial<SdkConfig>;

  protected removeAudiobooksUserConfig?: Partial<SdkConfig>;

  protected checkUsersSavedAudiobooksConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for getAnAudiobook.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetAnAudiobookConfig(config: Partial<SdkConfig>): this {
    this.getAnAudiobookConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getMultipleAudiobooks.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetMultipleAudiobooksConfig(config: Partial<SdkConfig>): this {
    this.getMultipleAudiobooksConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getAudiobookChapters.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetAudiobookChaptersConfig(config: Partial<SdkConfig>): this {
    this.getAudiobookChaptersConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getUsersSavedAudiobooks.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetUsersSavedAudiobooksConfig(config: Partial<SdkConfig>): this {
    this.getUsersSavedAudiobooksConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for saveAudiobooksUser.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSaveAudiobooksUserConfig(config: Partial<SdkConfig>): this {
    this.saveAudiobooksUserConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for removeAudiobooksUser.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRemoveAudiobooksUserConfig(config: Partial<SdkConfig>): this {
    this.removeAudiobooksUserConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for checkUsersSavedAudiobooks.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCheckUsersSavedAudiobooksConfig(config: Partial<SdkConfig>): this {
    this.checkUsersSavedAudiobooksConfig = config;
    return this;
  }

  /**
 * Get Spotify catalog information for a single audiobook. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.
 * @param {string} id - The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids)
for the audiobook.

 * @param {string} [params.market] - An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
  If a country code is specified, only content that is available in that market will be returned.<br/>
  If a valid user access token is specified in the request header, the country associated with
  the user account will take priority over this parameter.<br/>
  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>
  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<AudiobookObject>>} - An Audiobook
 */
  async getAnAudiobook(
    id: string,
    params?: GetAnAudiobookParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<AudiobookObject> {
    const resolvedConfig = this.getResolvedConfig(this.getAnAudiobookConfig, requestConfig);
    z.object({ market: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/audiobooks/{id}')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: audiobookObjectResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: BadRequest,
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
        error: NotFound,
        contentType: ContentType.Json,
        status: 404,
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
    return this.client.callDirect<AudiobookObject>(request);
  }

  /**
 * Get Spotify catalog information for several audiobooks identified by their Spotify IDs. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.
 * @param {string} params.ids - A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ`. Maximum: 50 IDs.

 * @param {string} [params.market] - An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
  If a country code is specified, only content that is available in that market will be returned.<br/>
  If a valid user access token is specified in the request header, the country associated with
  the user account will take priority over this parameter.<br/>
  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>
  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<ManyAudiobooks>>} - A set of audiobooks. If one of the requested audiobooks is unavailable then you'll find a `null` item in the `audiobooks` array where the audiobook object would otherwise be.
 */
  async getMultipleAudiobooks(
    params: GetMultipleAudiobooksParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ManyAudiobooks> {
    const resolvedConfig = this.getResolvedConfig(this.getMultipleAudiobooksConfig, requestConfig);
    z.object({ ids: z.string(), market: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/audiobooks')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: manyAudiobooksResponse,
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
    return this.client.callDirect<ManyAudiobooks>(request);
  }

  /**
 * Get Spotify catalog information about an audiobook's chapters. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.
 * @param {string} id - The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids)
for the audiobook.

 * @param {string} [params.market] - An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
  If a country code is specified, only content that is available in that market will be returned.<br/>
  If a valid user access token is specified in the request header, the country associated with
  the user account will take priority over this parameter.<br/>
  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>
  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).

 * @param {number} [params.limit] - The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.

 * @param {number} [params.offset] - The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<PagingSimplifiedChapterObject>>} - Pages of chapters
 */
  async getAudiobookChapters(
    id: string,
    params?: GetAudiobookChaptersParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<PagingSimplifiedChapterObject> {
    const resolvedConfig = this.getResolvedConfig(this.getAudiobookChaptersConfig, requestConfig);
    z.object({
      market: z.string().optional(),
      limit: z.number().optional(),
      offset: z.number().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/audiobooks/{id}/chapters')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: pagingSimplifiedChapterObjectResponse,
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
    return this.client.callDirect<PagingSimplifiedChapterObject>(request);
  }

  /**
 * Get a list of the audiobooks saved in the current Spotify user's 'Your Music' library.
 * @param {number} [params.limit] - The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.

 * @param {number} [params.offset] - The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<PagingSimplifiedAudiobookObject>>} - Pages of audiobooks
 */
  async getUsersSavedAudiobooks(
    params?: GetUsersSavedAudiobooksParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<PagingSimplifiedAudiobookObject> {
    const resolvedConfig = this.getResolvedConfig(
      this.getUsersSavedAudiobooksConfig,
      requestConfig,
    );
    z.object({ limit: z.number().optional(), offset: z.number().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/me/audiobooks')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: pagingSimplifiedAudiobookObjectResponse,
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
    return this.client.callDirect<PagingSimplifiedAudiobookObject>(request);
  }

  /**
 * Save one or more audiobooks to the current Spotify user's library.
**Note:** This endpoint is deprecated. Use [Save Items to Library](/documentation/web-api/reference/save-library-items) instead.

 * @param {string} params.ids - A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ`. Maximum: 50 IDs.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - Audiobook(s) are saved to the library
 */
  async saveAudiobooksUser(
    params: SaveAudiobooksUserParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.saveAudiobooksUserConfig, requestConfig);
    z.object({ ids: z.string() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/me/audiobooks')
      .setRequestSchema(z.any())
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
      .build();
    return this.client.callDirect<void>(request);
  }

  /**
 * Remove one or more audiobooks from the Spotify user's library.
**Note:** This endpoint is deprecated. Use [Remove Items from Library](/documentation/web-api/reference/remove-library-items) instead.

 * @param {string} params.ids - A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ`. Maximum: 50 IDs.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - Audiobook(s) have been removed from the library
 */
  async removeAudiobooksUser(
    params: RemoveAudiobooksUserParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.removeAudiobooksUserConfig, requestConfig);
    z.object({ ids: z.string() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/me/audiobooks')
      .setRequestSchema(z.any())
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
      .build();
    return this.client.callDirect<void>(request);
  }

  /**
 * Check if one or more audiobooks are already saved in the current Spotify user's library.
**Note:** This endpoint is deprecated. Use [Check User's Saved Items](/documentation/web-api/reference/check-library-contains) instead.

 * @param {string} params.ids - A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ`. Maximum: 50 IDs.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<boolean[]>>} - Array of booleans
 */
  async checkUsersSavedAudiobooks(
    params: CheckUsersSavedAudiobooksParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<boolean[]> {
    const resolvedConfig = this.getResolvedConfig(
      this.checkUsersSavedAudiobooksConfig,
      requestConfig,
    );
    z.object({ ids: z.string() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/me/audiobooks/contains')
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
