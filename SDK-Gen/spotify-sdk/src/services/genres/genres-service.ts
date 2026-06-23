import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { ManyGenres, manyGenresResponse } from './models/many-genres';
import { Unauthorized } from '../common/unauthorized';
import { Forbidden } from '../common/forbidden';
import { TooManyRequests } from '../common/too-many-requests';

/**
 * Service class for GenresService operations.
 * Provides methods to interact with GenresService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class GenresService extends BaseService {
  protected getRecommendationGenresConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for getRecommendationGenres.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetRecommendationGenresConfig(config: Partial<SdkConfig>): this {
    this.getRecommendationGenresConfig = config;
    return this;
  }

  /**
   * Retrieve a list of available genres seed parameter values for [recommendations](/documentation/web-api/reference/get-recommendations).
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ManyGenres>>} - A set of genres
   */
  async getRecommendationGenres(requestConfig?: Partial<SdkConfig>): Promise<ManyGenres> {
    const resolvedConfig = this.getResolvedConfig(
      this.getRecommendationGenresConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/recommendations/available-genre-seeds')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: manyGenresResponse,
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
      .build();
    return this.client.callDirect<ManyGenres>(request);
  }
}
