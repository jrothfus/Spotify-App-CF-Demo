import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { PagedCategories, pagedCategoriesResponse } from './models/paged-categories';
import { Unauthorized } from '../common/unauthorized';
import { Forbidden } from '../common/forbidden';
import { TooManyRequests } from '../common/too-many-requests';
import { GetACategoryParams, GetCategoriesParams } from './request-params';
import { CategoryObject, categoryObjectResponse } from './models/category-object';

/**
 * Service class for CategoriesService operations.
 * Provides methods to interact with CategoriesService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class CategoriesService extends BaseService {
  protected getCategoriesConfig?: Partial<SdkConfig>;

  protected getACategoryConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for getCategories.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetCategoriesConfig(config: Partial<SdkConfig>): this {
    this.getCategoriesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getACategory.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetACategoryConfig(config: Partial<SdkConfig>): this {
    this.getACategoryConfig = config;
    return this;
  }

  /**
 * Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
 * @param {string} [params.locale] - The desired language, consisting of an [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) language code and an [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), joined by an underscore. For example: `es_MX`, meaning &quot;Spanish (Mexico)&quot;. Provide this parameter if you want the category strings returned in a particular language.<br/> _**Note**: if `locale` is not supplied, or if the specified language is not available, the category strings returned will be in the Spotify default language (American English)._

 * @param {number} [params.limit] - The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.

 * @param {number} [params.offset] - The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<PagedCategories>>} - A paged set of categories
 */
  async getCategories(
    params?: GetCategoriesParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<PagedCategories> {
    const resolvedConfig = this.getResolvedConfig(this.getCategoriesConfig, requestConfig);
    z.object({
      locale: z.string().optional(),
      limit: z.number().optional(),
      offset: z.number().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/browse/categories')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: pagedCategoriesResponse,
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
        key: 'locale',
        value: params?.locale,
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
    return this.client.callDirect<PagedCategories>(request);
  }

  /**
 * Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
 * @param {string} categoryId - The [Spotify category ID](/documentation/web-api/concepts/spotify-uris-ids) for the category.

 * @param {string} [params.locale] - The desired language, consisting of an [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) language code and an [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), joined by an underscore. For example: `es_MX`, meaning &quot;Spanish (Mexico)&quot;. Provide this parameter if you want the category strings returned in a particular language.<br/> _**Note**: if `locale` is not supplied, or if the specified language is not available, the category strings returned will be in the Spotify default language (American English)._

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<CategoryObject>>} - A category
 */
  async getACategory(
    categoryId: string,
    params?: GetACategoryParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CategoryObject> {
    const resolvedConfig = this.getResolvedConfig(this.getACategoryConfig, requestConfig);
    z.object({ locale: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/browse/categories/{category_id}')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: categoryObjectResponse,
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
        key: 'category_id',
        value: categoryId,
      })
      .addQueryParam({
        key: 'locale',
        value: params?.locale,
      })
      .build();
    return this.client.callDirect<CategoryObject>(request);
  }
}
