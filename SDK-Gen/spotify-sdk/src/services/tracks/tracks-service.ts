import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { TrackObject, trackObjectResponse } from '../common/track-object';
import { Unauthorized } from '../common/unauthorized';
import { Forbidden } from '../common/forbidden';
import { TooManyRequests } from '../common/too-many-requests';
import {
  CheckUsersSavedTracksParams,
  GetRecommendationsParams,
  GetSeveralAudioFeaturesParams,
  GetSeveralTracksParams,
  GetTrackParams,
  GetUsersSavedTracksParams,
  RemoveTracksUserParams,
} from './request-params';
import { ManyTracks, manyTracksResponse } from '../common/many-tracks';
import {
  PagingSavedTrackObject,
  pagingSavedTrackObjectResponse,
} from './models/paging-saved-track-object';
import {
  SaveTracksUserRequest,
  saveTracksUserRequestRequest,
} from './models/save-tracks-user-request';
import {
  RemoveTracksUserRequest,
  removeTracksUserRequestRequest,
} from './models/remove-tracks-user-request';
import { ManyAudioFeatures, manyAudioFeaturesResponse } from './models/many-audio-features';
import { AudioFeaturesObject, audioFeaturesObjectResponse } from './models/audio-features-object';
import { AudioAnalysisObject, audioAnalysisObjectResponse } from './models/audio-analysis-object';
import {
  RecommendationsObject,
  recommendationsObjectResponse,
} from './models/recommendations-object';

/**
 * Service class for TracksService operations.
 * Provides methods to interact with TracksService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class TracksService extends BaseService {
  protected getTrackConfig?: Partial<SdkConfig>;

  protected getSeveralTracksConfig?: Partial<SdkConfig>;

  protected getUsersSavedTracksConfig?: Partial<SdkConfig>;

  protected saveTracksUserConfig?: Partial<SdkConfig>;

  protected removeTracksUserConfig?: Partial<SdkConfig>;

  protected checkUsersSavedTracksConfig?: Partial<SdkConfig>;

  protected getSeveralAudioFeaturesConfig?: Partial<SdkConfig>;

  protected getAudioFeaturesConfig?: Partial<SdkConfig>;

  protected getAudioAnalysisConfig?: Partial<SdkConfig>;

  protected getRecommendationsConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for getTrack.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetTrackConfig(config: Partial<SdkConfig>): this {
    this.getTrackConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getSeveralTracks.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetSeveralTracksConfig(config: Partial<SdkConfig>): this {
    this.getSeveralTracksConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getUsersSavedTracks.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetUsersSavedTracksConfig(config: Partial<SdkConfig>): this {
    this.getUsersSavedTracksConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for saveTracksUser.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSaveTracksUserConfig(config: Partial<SdkConfig>): this {
    this.saveTracksUserConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for removeTracksUser.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRemoveTracksUserConfig(config: Partial<SdkConfig>): this {
    this.removeTracksUserConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for checkUsersSavedTracks.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCheckUsersSavedTracksConfig(config: Partial<SdkConfig>): this {
    this.checkUsersSavedTracksConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getSeveralAudioFeatures.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetSeveralAudioFeaturesConfig(config: Partial<SdkConfig>): this {
    this.getSeveralAudioFeaturesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getAudioFeatures.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetAudioFeaturesConfig(config: Partial<SdkConfig>): this {
    this.getAudioFeaturesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getAudioAnalysis.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetAudioAnalysisConfig(config: Partial<SdkConfig>): this {
    this.getAudioAnalysisConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getRecommendations.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetRecommendationsConfig(config: Partial<SdkConfig>): this {
    this.getRecommendationsConfig = config;
    return this;
  }

  /**
 * Get Spotify catalog information for a single track identified by itsunique Spotify ID.

 * @param {string} id - The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids)
for the track.

 * @param {string} [params.market] - An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
  If a country code is specified, only content that is available in that market will be returned.<br/>
  If a valid user access token is specified in the request header, the country associated with
  the user account will take priority over this parameter.<br/>
  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>
  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<TrackObject>>} - A track
 */
  async getTrack(
    id: string,
    params?: GetTrackParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<TrackObject> {
    const resolvedConfig = this.getResolvedConfig(this.getTrackConfig, requestConfig);
    z.object({ market: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/tracks/{id}')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: trackObjectResponse,
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
    return this.client.callDirect<TrackObject>(request);
  }

  /**
 * Get Spotify catalog information for multiple tracks based on their Spotify IDs.
 * @param {string} params.ids - A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M`. Maximum: 50 IDs.

 * @param {string} [params.market] - An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
  If a country code is specified, only content that is available in that market will be returned.<br/>
  If a valid user access token is specified in the request header, the country associated with
  the user account will take priority over this parameter.<br/>
  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>
  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<ManyTracks>>} - A set of tracks
 */
  async getSeveralTracks(
    params: GetSeveralTracksParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ManyTracks> {
    const resolvedConfig = this.getResolvedConfig(this.getSeveralTracksConfig, requestConfig);
    z.object({ ids: z.string(), market: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/tracks')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: manyTracksResponse,
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
        key: 'ids',
        value: params?.ids,
      })
      .build();
    return this.client.callDirect<ManyTracks>(request);
  }

  /**
 * Get a list of the songs saved in the current Spotify user's 'Your Music' library.
 * @param {string} [params.market] - An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
  If a country code is specified, only content that is available in that market will be returned.<br/>
  If a valid user access token is specified in the request header, the country associated with
  the user account will take priority over this parameter.<br/>
  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>
  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).

 * @param {number} [params.limit] - The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.

 * @param {number} [params.offset] - The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<PagingSavedTrackObject>>} - Pages of tracks
 */
  async getUsersSavedTracks(
    params?: GetUsersSavedTracksParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<PagingSavedTrackObject> {
    const resolvedConfig = this.getResolvedConfig(this.getUsersSavedTracksConfig, requestConfig);
    z.object({
      market: z.string().optional(),
      limit: z.number().optional(),
      offset: z.number().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/me/tracks')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: pagingSavedTrackObjectResponse,
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
    return this.client.callDirect<PagingSavedTrackObject>(request);
  }

  /**
 * Save one or more tracks to the current user's 'Your Music' library.
**Note:** This endpoint is deprecated. Use [Save Items to Library](/documentation/web-api/reference/save-library-items) instead.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - Track saved
 */
  async saveTracksUser(
    body: SaveTracksUserRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.saveTracksUserConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/me/tracks')
      .setRequestSchema(saveTracksUserRequestRequest)
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
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<void>(request);
  }

  /**
 * Remove one or more tracks from the current user's 'Your Music' library.
**Note:** This endpoint is deprecated. Use [Remove Items from Library](/documentation/web-api/reference/remove-library-items) instead.

 * @param {string} params.ids - A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M`. Maximum: 50 IDs.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - Track removed
 */
  async removeTracksUser(
    body: RemoveTracksUserRequest,
    params: RemoveTracksUserParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.removeTracksUserConfig, requestConfig);
    z.object({ ids: z.string() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/me/tracks')
      .setRequestSchema(removeTracksUserRequestRequest)
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
 * Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library.
**Note:** This endpoint is deprecated. Use [Check User's Saved Items](/documentation/web-api/reference/check-library-contains) instead.

 * @param {string} params.ids - A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M`. Maximum: 50 IDs.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<boolean[]>>} - Array of booleans
 */
  async checkUsersSavedTracks(
    params: CheckUsersSavedTracksParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<boolean[]> {
    const resolvedConfig = this.getResolvedConfig(this.checkUsersSavedTracksConfig, requestConfig);
    z.object({ ids: z.string() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/me/tracks/contains')
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
 * Get audio features for multiple tracks based on their Spotify IDs.
 * @param {string} params.ids - A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids)
for the tracks. Maximum: 100 IDs.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<ManyAudioFeatures>>} - A set of audio features
 */
  async getSeveralAudioFeatures(
    params: GetSeveralAudioFeaturesParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ManyAudioFeatures> {
    const resolvedConfig = this.getResolvedConfig(
      this.getSeveralAudioFeaturesConfig,
      requestConfig,
    );
    z.object({ ids: z.string() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/audio-features')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: manyAudioFeaturesResponse,
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
    return this.client.callDirect<ManyAudioFeatures>(request);
  }

  /**
 * Get audio feature information for a single track identified by its uniqueSpotify ID.

 * @param {string} id - The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<AudioFeaturesObject>>} - Audio features for one track
 */
  async getAudioFeatures(
    id: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<AudioFeaturesObject> {
    const resolvedConfig = this.getResolvedConfig(this.getAudioFeaturesConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/audio-features/{id}')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: audioFeaturesObjectResponse,
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
      .build();
    return this.client.callDirect<AudioFeaturesObject>(request);
  }

  /**
 * Get a low-level audio analysis for a track in the Spotify catalog. The audio analysis describes the track’s structure and musical content, including rhythm, pitch, and timbre.
 * @param {string} id - The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids)
for the track.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<AudioAnalysisObject>>} - Audio analysis for one track
 */
  async getAudioAnalysis(
    id: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<AudioAnalysisObject> {
    const resolvedConfig = this.getResolvedConfig(this.getAudioAnalysisConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/audio-analysis/{id}')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: audioAnalysisObjectResponse,
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
      .build();
    return this.client.callDirect<AudioAnalysisObject>(request);
  }

  /**
 * Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks. If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details.
For artists and tracks that are very new or obscure there might not be enough data to generate a list of tracks.

 * @param {string} params.seedArtists - A comma separated list of [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for seed artists.  Up to 5 seed values may be provided in any combination of `seed_artists`, `seed_tracks` and `seed_genres`.<br/> _**Note**: only required if `seed_genres` and `seed_tracks` are not set_.

 * @param {string} params.seedGenres - A comma separated list of any genres in the set of [available genre seeds](/documentation/web-api/reference/get-recommendation-genres). Up to 5 seed values may be provided in any combination of `seed_artists`, `seed_tracks` and `seed_genres`.<br/> _**Note**: only required if `seed_artists` and `seed_tracks` are not set_.

 * @param {string} params.seedTracks - A comma separated list of [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for a seed track.  Up to 5 seed values may be provided in any combination of `seed_artists`, `seed_tracks` and `seed_genres`.<br/> _**Note**: only required if `seed_artists` and `seed_genres` are not set_.

 * @param {number} [params.limit] - The target size of the list of recommended tracks. For seeds with unusually small pools or when highly restrictive filtering is applied, it may be impossible to generate the requested number of recommended tracks. Debugging information for such cases is available in the response. Default: 20\. Minimum: 1\. Maximum: 100.

 * @param {string} [params.market] - An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
  If a country code is specified, only content that is available in that market will be returned.<br/>
  If a valid user access token is specified in the request header, the country associated with
  the user account will take priority over this parameter.<br/>
  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>
  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).

 * @param {number} [params.minAcousticness] - For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.

 * @param {number} [params.maxAcousticness] - For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.

 * @param {number} [params.targetAcousticness] - For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.

 * @param {number} [params.minDanceability] - For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.

 * @param {number} [params.maxDanceability] - For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.

 * @param {number} [params.targetDanceability] - For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.

 * @param {number} [params.minDurationMs] - For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.

 * @param {number} [params.maxDurationMs] - For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.

 * @param {number} [params.targetDurationMs] - Target duration of the track (ms)
 * @param {number} [params.minEnergy] - For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.

 * @param {number} [params.maxEnergy] - For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.

 * @param {number} [params.targetEnergy] - For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.

 * @param {number} [params.minInstrumentalness] - For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.

 * @param {number} [params.maxInstrumentalness] - For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.

 * @param {number} [params.targetInstrumentalness] - For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.

 * @param {number} [params.minKey] - For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.

 * @param {number} [params.maxKey] - For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.

 * @param {number} [params.targetKey] - For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.

 * @param {number} [params.minLiveness] - For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.

 * @param {number} [params.maxLiveness] - For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.

 * @param {number} [params.targetLiveness] - For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.

 * @param {number} [params.minLoudness] - For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.

 * @param {number} [params.maxLoudness] - For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.

 * @param {number} [params.targetLoudness] - For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.

 * @param {number} [params.minMode] - For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.

 * @param {number} [params.maxMode] - For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.

 * @param {number} [params.targetMode] - For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.

 * @param {number} [params.minPopularity] - For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.

 * @param {number} [params.maxPopularity] - For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.

 * @param {number} [params.targetPopularity] - For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.

 * @param {number} [params.minSpeechiness] - For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.

 * @param {number} [params.maxSpeechiness] - For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.

 * @param {number} [params.targetSpeechiness] - For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.

 * @param {number} [params.minTempo] - For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.

 * @param {number} [params.maxTempo] - For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.

 * @param {number} [params.targetTempo] - Target tempo (BPM)
 * @param {number} [params.minTimeSignature] - For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.

 * @param {number} [params.maxTimeSignature] - For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.

 * @param {number} [params.targetTimeSignature] - For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.

 * @param {number} [params.minValence] - For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.

 * @param {number} [params.maxValence] - For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.

 * @param {number} [params.targetValence] - For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<RecommendationsObject>>} - A set of recommendations
 */
  async getRecommendations(
    params: GetRecommendationsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<RecommendationsObject> {
    const resolvedConfig = this.getResolvedConfig(this.getRecommendationsConfig, requestConfig);
    z.object({
      seedArtists: z.string(),
      seedGenres: z.string(),
      seedTracks: z.string(),
      limit: z.number().optional(),
      market: z.string().optional(),
      minAcousticness: z.number().optional(),
      maxAcousticness: z.number().optional(),
      targetAcousticness: z.number().optional(),
      minDanceability: z.number().optional(),
      maxDanceability: z.number().optional(),
      targetDanceability: z.number().optional(),
      minDurationMs: z.number().optional(),
      maxDurationMs: z.number().optional(),
      targetDurationMs: z.number().optional(),
      minEnergy: z.number().optional(),
      maxEnergy: z.number().optional(),
      targetEnergy: z.number().optional(),
      minInstrumentalness: z.number().optional(),
      maxInstrumentalness: z.number().optional(),
      targetInstrumentalness: z.number().optional(),
      minKey: z.number().optional(),
      maxKey: z.number().optional(),
      targetKey: z.number().optional(),
      minLiveness: z.number().optional(),
      maxLiveness: z.number().optional(),
      targetLiveness: z.number().optional(),
      minLoudness: z.number().optional(),
      maxLoudness: z.number().optional(),
      targetLoudness: z.number().optional(),
      minMode: z.number().optional(),
      maxMode: z.number().optional(),
      targetMode: z.number().optional(),
      minPopularity: z.number().optional(),
      maxPopularity: z.number().optional(),
      targetPopularity: z.number().optional(),
      minSpeechiness: z.number().optional(),
      maxSpeechiness: z.number().optional(),
      targetSpeechiness: z.number().optional(),
      minTempo: z.number().optional(),
      maxTempo: z.number().optional(),
      targetTempo: z.number().optional(),
      minTimeSignature: z.number().optional(),
      maxTimeSignature: z.number().optional(),
      targetTimeSignature: z.number().optional(),
      minValence: z.number().optional(),
      maxValence: z.number().optional(),
      targetValence: z.number().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/recommendations')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: recommendationsObjectResponse,
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
        key: 'market',
        value: params?.market,
      })
      .addQueryParam({
        key: 'seed_artists',
        value: params?.seedArtists,
      })
      .addQueryParam({
        key: 'seed_genres',
        value: params?.seedGenres,
      })
      .addQueryParam({
        key: 'seed_tracks',
        value: params?.seedTracks,
      })
      .addQueryParam({
        key: 'min_acousticness',
        value: params?.minAcousticness,
      })
      .addQueryParam({
        key: 'max_acousticness',
        value: params?.maxAcousticness,
      })
      .addQueryParam({
        key: 'target_acousticness',
        value: params?.targetAcousticness,
      })
      .addQueryParam({
        key: 'min_danceability',
        value: params?.minDanceability,
      })
      .addQueryParam({
        key: 'max_danceability',
        value: params?.maxDanceability,
      })
      .addQueryParam({
        key: 'target_danceability',
        value: params?.targetDanceability,
      })
      .addQueryParam({
        key: 'min_duration_ms',
        value: params?.minDurationMs,
      })
      .addQueryParam({
        key: 'max_duration_ms',
        value: params?.maxDurationMs,
      })
      .addQueryParam({
        key: 'target_duration_ms',
        value: params?.targetDurationMs,
      })
      .addQueryParam({
        key: 'min_energy',
        value: params?.minEnergy,
      })
      .addQueryParam({
        key: 'max_energy',
        value: params?.maxEnergy,
      })
      .addQueryParam({
        key: 'target_energy',
        value: params?.targetEnergy,
      })
      .addQueryParam({
        key: 'min_instrumentalness',
        value: params?.minInstrumentalness,
      })
      .addQueryParam({
        key: 'max_instrumentalness',
        value: params?.maxInstrumentalness,
      })
      .addQueryParam({
        key: 'target_instrumentalness',
        value: params?.targetInstrumentalness,
      })
      .addQueryParam({
        key: 'min_key',
        value: params?.minKey,
      })
      .addQueryParam({
        key: 'max_key',
        value: params?.maxKey,
      })
      .addQueryParam({
        key: 'target_key',
        value: params?.targetKey,
      })
      .addQueryParam({
        key: 'min_liveness',
        value: params?.minLiveness,
      })
      .addQueryParam({
        key: 'max_liveness',
        value: params?.maxLiveness,
      })
      .addQueryParam({
        key: 'target_liveness',
        value: params?.targetLiveness,
      })
      .addQueryParam({
        key: 'min_loudness',
        value: params?.minLoudness,
      })
      .addQueryParam({
        key: 'max_loudness',
        value: params?.maxLoudness,
      })
      .addQueryParam({
        key: 'target_loudness',
        value: params?.targetLoudness,
      })
      .addQueryParam({
        key: 'min_mode',
        value: params?.minMode,
      })
      .addQueryParam({
        key: 'max_mode',
        value: params?.maxMode,
      })
      .addQueryParam({
        key: 'target_mode',
        value: params?.targetMode,
      })
      .addQueryParam({
        key: 'min_popularity',
        value: params?.minPopularity,
      })
      .addQueryParam({
        key: 'max_popularity',
        value: params?.maxPopularity,
      })
      .addQueryParam({
        key: 'target_popularity',
        value: params?.targetPopularity,
      })
      .addQueryParam({
        key: 'min_speechiness',
        value: params?.minSpeechiness,
      })
      .addQueryParam({
        key: 'max_speechiness',
        value: params?.maxSpeechiness,
      })
      .addQueryParam({
        key: 'target_speechiness',
        value: params?.targetSpeechiness,
      })
      .addQueryParam({
        key: 'min_tempo',
        value: params?.minTempo,
      })
      .addQueryParam({
        key: 'max_tempo',
        value: params?.maxTempo,
      })
      .addQueryParam({
        key: 'target_tempo',
        value: params?.targetTempo,
      })
      .addQueryParam({
        key: 'min_time_signature',
        value: params?.minTimeSignature,
      })
      .addQueryParam({
        key: 'max_time_signature',
        value: params?.maxTimeSignature,
      })
      .addQueryParam({
        key: 'target_time_signature',
        value: params?.targetTimeSignature,
      })
      .addQueryParam({
        key: 'min_valence',
        value: params?.minValence,
      })
      .addQueryParam({
        key: 'max_valence',
        value: params?.maxValence,
      })
      .addQueryParam({
        key: 'target_valence',
        value: params?.targetValence,
      })
      .build();
    return this.client.callDirect<RecommendationsObject>(request);
  }
}
