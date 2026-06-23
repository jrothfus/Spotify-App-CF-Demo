import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { PrivateUserObject, privateUserObjectResponse } from './models/private-user-object';
import { Unauthorized } from '../common/unauthorized';
import { Forbidden } from '../common/forbidden';
import { TooManyRequests } from '../common/too-many-requests';
import {
  PagingArtistOrTrackObject,
  pagingArtistOrTrackObjectResponse,
} from './models/paging-artist-or-track-object';
import { GetUsersTopArtistsAndTracksType } from './models/get-users-top-artists-and-tracks-type';
import {
  CheckCurrentUserFollowsParams,
  CheckIfUserFollowsPlaylistParams,
  FollowArtistsUsersParams,
  GetFollowedParams,
  GetUsersTopArtistsAndTracksParams,
  UnfollowArtistsUsersParams,
} from './request-params';
import { PublicUserObject, publicUserObjectResponse } from './models/public-user-object';
import {
  FollowPlaylistRequest,
  followPlaylistRequestRequest,
} from './models/follow-playlist-request';
import { CursorPagedArtists, cursorPagedArtistsResponse } from './models/cursor-paged-artists';
import {
  FollowArtistsUsersRequest,
  followArtistsUsersRequestRequest,
} from './models/follow-artists-users-request';
import {
  UnfollowArtistsUsersRequest,
  unfollowArtistsUsersRequestRequest,
} from './models/unfollow-artists-users-request';

/**
 * Service class for UsersService operations.
 * Provides methods to interact with UsersService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class UsersService extends BaseService {
  protected getCurrentUsersProfileConfig?: Partial<SdkConfig>;

  protected getUsersTopArtistsAndTracksConfig?: Partial<SdkConfig>;

  protected getUsersProfileConfig?: Partial<SdkConfig>;

  protected followPlaylistConfig?: Partial<SdkConfig>;

  protected unfollowPlaylistConfig?: Partial<SdkConfig>;

  protected getFollowedConfig?: Partial<SdkConfig>;

  protected followArtistsUsersConfig?: Partial<SdkConfig>;

  protected unfollowArtistsUsersConfig?: Partial<SdkConfig>;

  protected checkCurrentUserFollowsConfig?: Partial<SdkConfig>;

  protected checkIfUserFollowsPlaylistConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for getCurrentUsersProfile.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetCurrentUsersProfileConfig(config: Partial<SdkConfig>): this {
    this.getCurrentUsersProfileConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getUsersTopArtistsAndTracks.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetUsersTopArtistsAndTracksConfig(config: Partial<SdkConfig>): this {
    this.getUsersTopArtistsAndTracksConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getUsersProfile.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetUsersProfileConfig(config: Partial<SdkConfig>): this {
    this.getUsersProfileConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for followPlaylist.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setFollowPlaylistConfig(config: Partial<SdkConfig>): this {
    this.followPlaylistConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for unfollowPlaylist.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUnfollowPlaylistConfig(config: Partial<SdkConfig>): this {
    this.unfollowPlaylistConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getFollowed.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetFollowedConfig(config: Partial<SdkConfig>): this {
    this.getFollowedConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for followArtistsUsers.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setFollowArtistsUsersConfig(config: Partial<SdkConfig>): this {
    this.followArtistsUsersConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for unfollowArtistsUsers.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUnfollowArtistsUsersConfig(config: Partial<SdkConfig>): this {
    this.unfollowArtistsUsersConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for checkCurrentUserFollows.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCheckCurrentUserFollowsConfig(config: Partial<SdkConfig>): this {
    this.checkCurrentUserFollowsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for checkIfUserFollowsPlaylist.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCheckIfUserFollowsPlaylistConfig(config: Partial<SdkConfig>): this {
    this.checkIfUserFollowsPlaylistConfig = config;
    return this;
  }

  /**
 * Get detailed profile information about the current user (including thecurrent user's username).

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<PrivateUserObject>>} - A user
 */
  async getCurrentUsersProfile(requestConfig?: Partial<SdkConfig>): Promise<PrivateUserObject> {
    const resolvedConfig = this.getResolvedConfig(this.getCurrentUsersProfileConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/me')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: privateUserObjectResponse,
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
    return this.client.callDirect<PrivateUserObject>(request);
  }

  /**
 * Get the current user's top artists or tracks based on calculated affinity.
 * @param {GetUsersTopArtistsAndTracksType} type - 
 * @param {string} [params.timeRange] - Over what time frame the affinities are computed. Valid values: `long_term` (calculated from ~1 year of data and including all new data as it becomes available), `medium_term` (approximately last 6 months), `short_term` (approximately last 4 weeks). Default: `medium_term`

 * @param {number} [params.limit] - The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.

 * @param {number} [params.offset] - The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<PagingArtistOrTrackObject>>} - Pages of artists or tracks
 */
  async getUsersTopArtistsAndTracks(
    type: GetUsersTopArtistsAndTracksType,
    params?: GetUsersTopArtistsAndTracksParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<PagingArtistOrTrackObject> {
    const resolvedConfig = this.getResolvedConfig(
      this.getUsersTopArtistsAndTracksConfig,
      requestConfig,
    );
    z.object({
      timeRange: z.string().optional(),
      limit: z.number().optional(),
      offset: z.number().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/me/top/{type}')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: pagingArtistOrTrackObjectResponse,
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
        key: 'type',
        value: type,
      })
      .addQueryParam({
        key: 'time_range',
        value: params?.timeRange,
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
    return this.client.callDirect<PagingArtistOrTrackObject>(request);
  }

  /**
 * Get public profile information about a Spotify user.
 * @param {string} userId - The user's [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids).

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<PublicUserObject>>} - A user
 */
  async getUsersProfile(
    userId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<PublicUserObject> {
    const resolvedConfig = this.getResolvedConfig(this.getUsersProfileConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/users/{user_id}')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: publicUserObjectResponse,
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
        key: 'user_id',
        value: userId,
      })
      .build();
    return this.client.callDirect<PublicUserObject>(request);
  }

  /**
 * Add the current user as a follower of a playlist.
**Note:** This endpoint is deprecated. Use [Save Items to Library](/documentation/web-api/reference/save-library-items) instead.

 * @param {string} playlistId - The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - Playlist followed
 */
  async followPlaylist(
    playlistId: string,
    body: FollowPlaylistRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.followPlaylistConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/playlists/{playlist_id}/followers')
      .setRequestSchema(followPlaylistRequestRequest)
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
      .addPathParam({
        key: 'playlist_id',
        value: playlistId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<void>(request);
  }

  /**
 * Remove the current user as a follower of a playlist.
**Note:** This endpoint is deprecated. Use [Remove Items from Library](/documentation/web-api/reference/remove-library-items) instead.

 * @param {string} playlistId - The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - Playlist unfollowed
 */
  async unfollowPlaylist(playlistId: string, requestConfig?: Partial<SdkConfig>): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.unfollowPlaylistConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/playlists/{playlist_id}/followers')
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
      .addPathParam({
        key: 'playlist_id',
        value: playlistId,
      })
      .build();
    return this.client.callDirect<void>(request);
  }

  /**
 * Get the current user's followed artists.
 * @param {GetFollowedType} params.type - 
 * @param {string} [params.after] - The last artist ID retrieved from the previous request.

 * @param {number} [params.limit] - The maximum number of items to return. Default: 20\. Minimum: 1\. Maximum: 50\.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<CursorPagedArtists>>} - A paged set of artists
 */
  async getFollowed(
    params: GetFollowedParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CursorPagedArtists> {
    const resolvedConfig = this.getResolvedConfig(this.getFollowedConfig, requestConfig);
    z.object({
      type: z.unknown(),
      after: z.string().optional(),
      limit: z.number().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/me/following')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: cursorPagedArtistsResponse,
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
        key: 'type',
        value: params?.type,
      })
      .addQueryParam({
        key: 'after',
        value: params?.after,
      })
      .addQueryParam({
        key: 'limit',
        value: params?.limit,
      })
      .build();
    return this.client.callDirect<CursorPagedArtists>(request);
  }

  /**
 * Add the current user as a follower of one or more artists or other Spotify users.
**Note:** This endpoint is deprecated. Use [Save Items to Library](/documentation/web-api/reference/save-library-items) instead.

 * @param {FollowArtistsUsersType} params.type - 
 * @param {string} params.ids - A comma-separated list of the artist or the user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids).
A maximum of 50 IDs can be sent in one request.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - Artist or user followed
 */
  async followArtistsUsers(
    body: FollowArtistsUsersRequest,
    params: FollowArtistsUsersParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.followArtistsUsersConfig, requestConfig);
    z.object({ type: z.unknown(), ids: z.string() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/me/following')
      .setRequestSchema(followArtistsUsersRequestRequest)
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
        key: 'type',
        value: params?.type,
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
 * Remove the current user as a follower of one or more artists or other Spotify users.
**Note:** This endpoint is deprecated. Use [Remove Items from Library](/documentation/web-api/reference/remove-library-items) instead.

 * @param {UnfollowArtistsUsersType} params.type - 
 * @param {string} params.ids - A comma-separated list of the artist or the user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=74ASZWbe4lXaubB36ztrGX,08td7MxkoHQkXnWAYD8d6Q`. A maximum of 50 IDs can be sent in one request.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - Artist or user unfollowed
 */
  async unfollowArtistsUsers(
    body: UnfollowArtistsUsersRequest,
    params: UnfollowArtistsUsersParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.unfollowArtistsUsersConfig, requestConfig);
    z.object({ type: z.unknown(), ids: z.string() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/me/following')
      .setRequestSchema(unfollowArtistsUsersRequestRequest)
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
        key: 'type',
        value: params?.type,
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
 * Check to see if the current user is following one or more artists or other Spotify users.
**Note:** This endpoint is deprecated. Use [Check User's Saved Items](/documentation/web-api/reference/check-library-contains) instead.

 * @param {CheckCurrentUserFollowsType} params.type - 
 * @param {string} params.ids - A comma-separated list of the artist or the user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) to check. For example: `ids=74ASZWbe4lXaubB36ztrGX,08td7MxkoHQkXnWAYD8d6Q`. A maximum of 50 IDs can be sent in one request.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<boolean[]>>} - Array of booleans
 */
  async checkCurrentUserFollows(
    params: CheckCurrentUserFollowsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<boolean[]> {
    const resolvedConfig = this.getResolvedConfig(
      this.checkCurrentUserFollowsConfig,
      requestConfig,
    );
    z.object({ type: z.unknown(), ids: z.string() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/me/following/contains')
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
        key: 'type',
        value: params?.type,
      })
      .addQueryParam({
        key: 'ids',
        value: params?.ids,
      })
      .build();
    return this.client.callDirect<boolean[]>(request);
  }

  /**
 * Check to see if the current user is following a specified playlist.
**Note:** This endpoint is deprecated. Use [Check User's Saved Items](/documentation/web-api/reference/check-library-contains) instead.

 * @param {string} playlistId - The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.

 * @param {string} [params.ids] - **Deprecated** A single item list containing current user's [Spotify Username](/documentation/web-api/concepts/spotify-uris-ids). Maximum: 1 id.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<boolean[]>>} - Array of boolean, containing a single boolean
 */
  async checkIfUserFollowsPlaylist(
    playlistId: string,
    params?: CheckIfUserFollowsPlaylistParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<boolean[]> {
    const resolvedConfig = this.getResolvedConfig(
      this.checkIfUserFollowsPlaylistConfig,
      requestConfig,
    );
    z.object({ ids: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/playlists/{playlist_id}/followers/contains')
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
      .addPathParam({
        key: 'playlist_id',
        value: playlistId,
      })
      .addQueryParam({
        key: 'ids',
        value: params?.ids,
      })
      .build();
    return this.client.callDirect<boolean[]>(request);
  }
}
