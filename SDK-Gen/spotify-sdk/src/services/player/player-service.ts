import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  CurrentlyPlayingContextObject,
  currentlyPlayingContextObjectResponse,
} from './models/currently-playing-context-object';
import { Unauthorized } from '../common/unauthorized';
import { Forbidden } from '../common/forbidden';
import { TooManyRequests } from '../common/too-many-requests';
import {
  AddToQueueParams,
  GetInformationAboutTheUsersCurrentPlaybackParams,
  GetRecentlyPlayedParams,
  GetTheUsersCurrentlyPlayingTrackParams,
  PauseAUsersPlaybackParams,
  SeekToPositionInCurrentlyPlayingTrackParams,
  SetRepeatModeOnUsersPlaybackParams,
  SetVolumeForUsersPlaybackParams,
  SkipUsersPlaybackToNextTrackParams,
  SkipUsersPlaybackToPreviousTrackParams,
  StartAUsersPlaybackParams,
  ToggleShuffleForUsersPlaybackParams,
} from './request-params';
import {
  TransferAUsersPlaybackRequest,
  transferAUsersPlaybackRequestRequest,
} from './models/transfer-a-users-playback-request';
import { ManyDevices, manyDevicesResponse } from './models/many-devices';
import {
  StartAUsersPlaybackRequest,
  startAUsersPlaybackRequestRequest,
} from './models/start-a-users-playback-request';
import {
  CursorPagingPlayHistoryObject,
  cursorPagingPlayHistoryObjectResponse,
} from './models/cursor-paging-play-history-object';
import { QueueObject, queueObjectResponse } from './models/queue-object';

/**
 * Service class for PlayerService operations.
 * Provides methods to interact with PlayerService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class PlayerService extends BaseService {
  protected getInformationAboutTheUsersCurrentPlaybackConfig?: Partial<SdkConfig>;

  protected transferAUsersPlaybackConfig?: Partial<SdkConfig>;

  protected getAUsersAvailableDevicesConfig?: Partial<SdkConfig>;

  protected getTheUsersCurrentlyPlayingTrackConfig?: Partial<SdkConfig>;

  protected startAUsersPlaybackConfig?: Partial<SdkConfig>;

  protected pauseAUsersPlaybackConfig?: Partial<SdkConfig>;

  protected skipUsersPlaybackToNextTrackConfig?: Partial<SdkConfig>;

  protected skipUsersPlaybackToPreviousTrackConfig?: Partial<SdkConfig>;

  protected seekToPositionInCurrentlyPlayingTrackConfig?: Partial<SdkConfig>;

  protected setRepeatModeOnUsersPlaybackConfig?: Partial<SdkConfig>;

  protected setVolumeForUsersPlaybackConfig?: Partial<SdkConfig>;

  protected toggleShuffleForUsersPlaybackConfig?: Partial<SdkConfig>;

  protected getRecentlyPlayedConfig?: Partial<SdkConfig>;

  protected getQueueConfig?: Partial<SdkConfig>;

  protected addToQueueConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for getInformationAboutTheUsersCurrentPlayback.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetInformationAboutTheUsersCurrentPlaybackConfig(config: Partial<SdkConfig>): this {
    this.getInformationAboutTheUsersCurrentPlaybackConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for transferAUsersPlayback.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setTransferAUsersPlaybackConfig(config: Partial<SdkConfig>): this {
    this.transferAUsersPlaybackConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getAUsersAvailableDevices.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetAUsersAvailableDevicesConfig(config: Partial<SdkConfig>): this {
    this.getAUsersAvailableDevicesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getTheUsersCurrentlyPlayingTrack.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetTheUsersCurrentlyPlayingTrackConfig(config: Partial<SdkConfig>): this {
    this.getTheUsersCurrentlyPlayingTrackConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for startAUsersPlayback.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setStartAUsersPlaybackConfig(config: Partial<SdkConfig>): this {
    this.startAUsersPlaybackConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for pauseAUsersPlayback.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setPauseAUsersPlaybackConfig(config: Partial<SdkConfig>): this {
    this.pauseAUsersPlaybackConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for skipUsersPlaybackToNextTrack.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSkipUsersPlaybackToNextTrackConfig(config: Partial<SdkConfig>): this {
    this.skipUsersPlaybackToNextTrackConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for skipUsersPlaybackToPreviousTrack.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSkipUsersPlaybackToPreviousTrackConfig(config: Partial<SdkConfig>): this {
    this.skipUsersPlaybackToPreviousTrackConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for seekToPositionInCurrentlyPlayingTrack.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSeekToPositionInCurrentlyPlayingTrackConfig(config: Partial<SdkConfig>): this {
    this.seekToPositionInCurrentlyPlayingTrackConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for setRepeatModeOnUsersPlayback.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSetRepeatModeOnUsersPlaybackConfig(config: Partial<SdkConfig>): this {
    this.setRepeatModeOnUsersPlaybackConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for setVolumeForUsersPlayback.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSetVolumeForUsersPlaybackConfig(config: Partial<SdkConfig>): this {
    this.setVolumeForUsersPlaybackConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for toggleShuffleForUsersPlayback.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setToggleShuffleForUsersPlaybackConfig(config: Partial<SdkConfig>): this {
    this.toggleShuffleForUsersPlaybackConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getRecentlyPlayed.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetRecentlyPlayedConfig(config: Partial<SdkConfig>): this {
    this.getRecentlyPlayedConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getQueue.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetQueueConfig(config: Partial<SdkConfig>): this {
    this.getQueueConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for addToQueue.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setAddToQueueConfig(config: Partial<SdkConfig>): this {
    this.addToQueueConfig = config;
    return this;
  }

  /**
 * Get information about the user’s current playback state, including track or episode, progress, and active device.
 * @param {string} [params.market] - An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
  If a country code is specified, only content that is available in that market will be returned.<br/>
  If a valid user access token is specified in the request header, the country associated with
  the user account will take priority over this parameter.<br/>
  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>
  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).

 * @param {string} [params.additionalTypes] - A comma-separated list of item types that your client supports besides the default `track` type. Valid types are: `track` and `episode`.<br/>
_**Note**: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future._<br/>
In addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the `type` field of each object.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<CurrentlyPlayingContextObject>>} - Information about playback
 */
  async getInformationAboutTheUsersCurrentPlayback(
    params?: GetInformationAboutTheUsersCurrentPlaybackParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CurrentlyPlayingContextObject | void> {
    const resolvedConfig = this.getResolvedConfig(
      this.getInformationAboutTheUsersCurrentPlaybackConfig,
      requestConfig,
    );
    z.object({ market: z.string().optional(), additionalTypes: z.string().optional() }).parse(
      params ?? {},
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/me/player')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: currentlyPlayingContextObjectResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 204,
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
        key: 'additional_types',
        value: params?.additionalTypes,
      })
      .build();
    return this.client.callDirect<CurrentlyPlayingContextObject | void>(request);
  }

  /**
   * Transfer playback to a new device and optionally begin playback. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - Playback transferred
   */
  async transferAUsersPlayback(
    body: TransferAUsersPlaybackRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.transferAUsersPlaybackConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/me/player')
      .setRequestSchema(transferAUsersPlaybackRequestRequest)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 204,
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
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<void>(request);
  }

  /**
   * Get information about a user’s available Spotify Connect devices. Some device models are not supported and will not be listed in the API response.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ManyDevices>>} - A set of devices
   */
  async getAUsersAvailableDevices(requestConfig?: Partial<SdkConfig>): Promise<ManyDevices> {
    const resolvedConfig = this.getResolvedConfig(
      this.getAUsersAvailableDevicesConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/me/player/devices')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: manyDevicesResponse,
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
    return this.client.callDirect<ManyDevices>(request);
  }

  /**
 * Get the object currently being played on the user's Spotify account.
 * @param {string} [params.market] - An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
  If a country code is specified, only content that is available in that market will be returned.<br/>
  If a valid user access token is specified in the request header, the country associated with
  the user account will take priority over this parameter.<br/>
  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>
  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).

 * @param {string} [params.additionalTypes] - A comma-separated list of item types that your client supports besides the default `track` type. Valid types are: `track` and `episode`.<br/>
_**Note**: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future._<br/>
In addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the `type` field of each object.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<CurrentlyPlayingContextObject>>} - Information about the currently playing track
 */
  async getTheUsersCurrentlyPlayingTrack(
    params?: GetTheUsersCurrentlyPlayingTrackParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CurrentlyPlayingContextObject> {
    const resolvedConfig = this.getResolvedConfig(
      this.getTheUsersCurrentlyPlayingTrackConfig,
      requestConfig,
    );
    z.object({ market: z.string().optional(), additionalTypes: z.string().optional() }).parse(
      params ?? {},
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/me/player/currently-playing')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: currentlyPlayingContextObjectResponse,
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
        key: 'additional_types',
        value: params?.additionalTypes,
      })
      .build();
    return this.client.callDirect<CurrentlyPlayingContextObject>(request);
  }

  /**
   * Start a new context or resume current playback on the user's active device. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.
   * @param {string} [params.deviceId] - The id of the device this command is targeting. If not supplied, the user's currently active device is the target.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - Playback started
   */
  async startAUsersPlayback(
    body: StartAUsersPlaybackRequest,
    params?: StartAUsersPlaybackParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.startAUsersPlaybackConfig, requestConfig);
    z.object({ deviceId: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/me/player/play')
      .setRequestSchema(startAUsersPlaybackRequestRequest)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 204,
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
        key: 'device_id',
        value: params?.deviceId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<void>(request);
  }

  /**
 * Pause playback on the user's account. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.
 * @param {string} [params.deviceId] - The id of the device this command is targeting. If not supplied, the user's currently active device is the target.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - Playback paused
 */
  async pauseAUsersPlayback(
    params?: PauseAUsersPlaybackParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.pauseAUsersPlaybackConfig, requestConfig);
    z.object({ deviceId: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/me/player/pause')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 204,
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
        key: 'device_id',
        value: params?.deviceId,
      })
      .build();
    return this.client.callDirect<void>(request);
  }

  /**
   * Skips to next track in the user’s queue. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.
   * @param {string} [params.deviceId] - The id of the device this command is targeting. If not supplied, the user's currently active device is the target.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - Command sent
   */
  async skipUsersPlaybackToNextTrack(
    params?: SkipUsersPlaybackToNextTrackParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(
      this.skipUsersPlaybackToNextTrackConfig,
      requestConfig,
    );
    z.object({ deviceId: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/me/player/next')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 204,
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
        key: 'device_id',
        value: params?.deviceId,
      })
      .build();
    return this.client.callDirect<void>(request);
  }

  /**
 * Skips to previous track in the user’s queue. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.
 * @param {string} [params.deviceId] - The id of the device this command is targeting. If
not supplied, the user's currently active device is the target.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - Command sent
 */
  async skipUsersPlaybackToPreviousTrack(
    params?: SkipUsersPlaybackToPreviousTrackParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(
      this.skipUsersPlaybackToPreviousTrackConfig,
      requestConfig,
    );
    z.object({ deviceId: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/me/player/previous')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 204,
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
        key: 'device_id',
        value: params?.deviceId,
      })
      .build();
    return this.client.callDirect<void>(request);
  }

  /**
 * Seeks to the given position in the user’s currently playing track. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.
 * @param {number} params.positionMs - The position in milliseconds to seek to. Must be a
positive number. Passing in a position that is greater than the length of
the track will cause the player to start playing the next song.

 * @param {string} [params.deviceId] - The id of the device this command is targeting. If
not supplied, the user's currently active device is the target.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - Command sent
 */
  async seekToPositionInCurrentlyPlayingTrack(
    params: SeekToPositionInCurrentlyPlayingTrackParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(
      this.seekToPositionInCurrentlyPlayingTrackConfig,
      requestConfig,
    );
    z.object({ positionMs: z.number(), deviceId: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/me/player/seek')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 204,
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
        key: 'position_ms',
        value: params?.positionMs,
      })
      .addQueryParam({
        key: 'device_id',
        value: params?.deviceId,
      })
      .build();
    return this.client.callDirect<void>(request);
  }

  /**
 * Set the repeat mode for the user's playback. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.
 * @param {string} params.state - **track**, **context** or **off**.<br/>
**track** will repeat the current track.<br/>
**context** will repeat the current context.<br/>
**off** will turn repeat off.

 * @param {string} [params.deviceId] - The id of the device this command is targeting. If
not supplied, the user's currently active device is the target.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - Command sent
 */
  async setRepeatModeOnUsersPlayback(
    params: SetRepeatModeOnUsersPlaybackParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(
      this.setRepeatModeOnUsersPlaybackConfig,
      requestConfig,
    );
    z.object({ state: z.string(), deviceId: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/me/player/repeat')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 204,
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
        key: 'state',
        value: params?.state,
      })
      .addQueryParam({
        key: 'device_id',
        value: params?.deviceId,
      })
      .build();
    return this.client.callDirect<void>(request);
  }

  /**
 * Set the volume for the user’s current playback device. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.
 * @param {number} params.volumePercent - The volume to set. Must be a value from 0 to 100 inclusive.

 * @param {string} [params.deviceId] - The id of the device this command is targeting. If not supplied, the user's currently active device is the target.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - Command sent
 */
  async setVolumeForUsersPlayback(
    params: SetVolumeForUsersPlaybackParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(
      this.setVolumeForUsersPlaybackConfig,
      requestConfig,
    );
    z.object({ volumePercent: z.number(), deviceId: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/me/player/volume')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 204,
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
        key: 'volume_percent',
        value: params?.volumePercent,
      })
      .addQueryParam({
        key: 'device_id',
        value: params?.deviceId,
      })
      .build();
    return this.client.callDirect<void>(request);
  }

  /**
 * Toggle shuffle on or off for user’s playback. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.
 * @param {boolean} params.state - **true** : Shuffle user's playback.<br/>
**false** : Do not shuffle user's playback.

 * @param {string} [params.deviceId] - The id of the device this command is targeting. If
not supplied, the user's currently active device is the target.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - Command sent
 */
  async toggleShuffleForUsersPlayback(
    params: ToggleShuffleForUsersPlaybackParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(
      this.toggleShuffleForUsersPlaybackConfig,
      requestConfig,
    );
    z.object({ state: z.boolean(), deviceId: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/me/player/shuffle')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 204,
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
        key: 'state',
        value: params?.state,
      })
      .addQueryParam({
        key: 'device_id',
        value: params?.deviceId,
      })
      .build();
    return this.client.callDirect<void>(request);
  }

  /**
 * Get tracks from the current user's recently played tracks._**Note**: Currently doesn't support podcast episodes._

 * @param {number} [params.limit] - The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.

 * @param {number} [params.after] - A Unix timestamp in milliseconds. Returns all items
after (but not including) this cursor position. If `after` is specified, `before`
must not be specified.

 * @param {number} [params.before] - A Unix timestamp in milliseconds. Returns all items
before (but not including) this cursor position. If `before` is specified,
`after` must not be specified.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<CursorPagingPlayHistoryObject>>} - A paged set of tracks
 */
  async getRecentlyPlayed(
    params?: GetRecentlyPlayedParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CursorPagingPlayHistoryObject> {
    const resolvedConfig = this.getResolvedConfig(this.getRecentlyPlayedConfig, requestConfig);
    z.object({
      limit: z.number().optional(),
      after: z.number().optional(),
      before: z.number().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/me/player/recently-played')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: cursorPagingPlayHistoryObjectResponse,
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
        key: 'after',
        value: params?.after,
      })
      .addQueryParam({
        key: 'before',
        value: params?.before,
      })
      .build();
    return this.client.callDirect<CursorPagingPlayHistoryObject>(request);
  }

  /**
   * Get the list of objects that make up the user's queue.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<QueueObject>>} - Information about the queue
   */
  async getQueue(requestConfig?: Partial<SdkConfig>): Promise<QueueObject> {
    const resolvedConfig = this.getResolvedConfig(this.getQueueConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/me/player/queue')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: queueObjectResponse,
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
    return this.client.callDirect<QueueObject>(request);
  }

  /**
 * Add an item to be played next in the user's current playback queue. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.
 * @param {string} params.uri - The uri of the item to add to the queue. Must be a track or an episode uri.

 * @param {string} [params.deviceId] - The id of the device this command is targeting. If
not supplied, the user's currently active device is the target.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - Command received
 */
  async addToQueue(params: AddToQueueParams, requestConfig?: Partial<SdkConfig>): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.addToQueueConfig, requestConfig);
    z.object({ uri: z.string(), deviceId: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/me/player/queue')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 204,
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
        key: 'uri',
        value: params?.uri,
      })
      .addQueryParam({
        key: 'device_id',
        value: params?.deviceId,
      })
      .build();
    return this.client.callDirect<void>(request);
  }
}
