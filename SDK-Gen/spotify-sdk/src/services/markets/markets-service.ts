import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  GetAvailableMarketsOkResponse,
  getAvailableMarketsOkResponseResponse,
} from './models/get-available-markets-ok-response';
import { Unauthorized } from '../common/unauthorized';
import { Forbidden } from '../common/forbidden';
import { TooManyRequests } from '../common/too-many-requests';

/**
 * Service class for MarketsService operations.
 * Provides methods to interact with MarketsService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class MarketsService extends BaseService {
  protected getAvailableMarketsConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for getAvailableMarkets.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetAvailableMarketsConfig(config: Partial<SdkConfig>): this {
    this.getAvailableMarketsConfig = config;
    return this;
  }

  /**
   * Get the list of markets where Spotify is available.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetAvailableMarketsOkResponse>>} - A markets object with an array of country codes
   */
  async getAvailableMarkets(
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetAvailableMarketsOkResponse> {
    const resolvedConfig = this.getResolvedConfig(this.getAvailableMarketsConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/markets')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getAvailableMarketsOkResponseResponse,
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
    return this.client.callDirect<GetAvailableMarketsOkResponse>(request);
  }
}
