import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { OAuthTokenRequest, oAuthTokenRequestRequest } from './models/o-auth-token-request';
import { OAuthTokenResponse, oAuthTokenResponseResponse } from './models/o-auth-token-response';

/**
 * Service class for OAuthService operations.
 * Provides methods to interact with OAuthService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class OAuthService extends BaseService {
  protected getAccessTokenConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for getAccessToken.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetAccessTokenConfig(config: Partial<SdkConfig>): this {
    this.getAccessTokenConfig = config;
    return this;
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<OAuthTokenResponse>>} - OAuth token
   */
  async getAccessToken(
    body: OAuthTokenRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<OAuthTokenResponse> {
    const resolvedConfig = this.getResolvedConfig(this.getAccessTokenConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/token')
      .setRequestSchema(oAuthTokenRequestRequest)
      .setRequestContentType(ContentType.FormUrlEncoded)
      .addResponse({
        schema: oAuthTokenResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/x-www-form-urlencoded' })
      .addBody(body)
      .build();
    return this.client.callDirect<OAuthTokenResponse>(request);
  }
}
