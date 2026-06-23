import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { PlaylistObject, playlistObjectResponse } from './models/playlist-object';
import { Unauthorized } from '../common/unauthorized';
import { Forbidden } from '../common/forbidden';
import { TooManyRequests } from '../common/too-many-requests';
import {
  AddItemsToPlaylistParams,
  AddTracksToPlaylistParams,
  GetACategoriesPlaylistsParams,
  GetAListOfCurrentUsersPlaylistsParams,
  GetFeaturedPlaylistsParams,
  GetListUsersPlaylistsParams,
  GetPlaylistParams,
  GetPlaylistsItemsParams,
  GetPlaylistsTracksParams,
  ReorderOrReplacePlaylistsItemsParams,
  ReorderOrReplacePlaylistsTracksParams,
} from './request-params';
import {
  ChangePlaylistDetailsRequest,
  changePlaylistDetailsRequestRequest,
} from './models/change-playlist-details-request';
import {
  PagingPlaylistTrackObject,
  pagingPlaylistTrackObjectResponse,
} from './models/paging-playlist-track-object';
import {
  AddTracksToPlaylistRequest,
  addTracksToPlaylistRequestRequest,
} from './models/add-tracks-to-playlist-request';
import { PlaylistSnapshotId, playlistSnapshotIdResponse } from './models/playlist-snapshot-id';
import {
  ReorderOrReplacePlaylistsTracksRequest,
  reorderOrReplacePlaylistsTracksRequestRequest,
} from './models/reorder-or-replace-playlists-tracks-request';
import {
  RemoveTracksPlaylistRequest,
  removeTracksPlaylistRequestRequest,
} from './models/remove-tracks-playlist-request';
import {
  AddItemsToPlaylistRequest,
  addItemsToPlaylistRequestRequest,
} from './models/add-items-to-playlist-request';
import {
  ReorderOrReplacePlaylistsItemsRequest,
  reorderOrReplacePlaylistsItemsRequestRequest,
} from './models/reorder-or-replace-playlists-items-request';
import {
  RemoveItemsPlaylistRequest,
  removeItemsPlaylistRequestRequest,
} from './models/remove-items-playlist-request';
import {
  PagingPlaylistObject,
  pagingPlaylistObjectResponse,
} from '../common/paging-playlist-object';
import {
  CreatePlaylistRequest,
  createPlaylistRequestRequest,
} from './models/create-playlist-request';
import {
  CreatePlaylistForUserRequest,
  createPlaylistForUserRequestRequest,
} from './models/create-playlist-for-user-request';
import {
  PagingFeaturedPlaylistObject,
  pagingFeaturedPlaylistObjectResponse,
} from './models/paging-featured-playlist-object';
import { ImageObject, imageObjectResponse } from '../common/image-object';

/**
 * Service class for PlaylistsService operations.
 * Provides methods to interact with PlaylistsService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class PlaylistsService extends BaseService {
  protected getPlaylistConfig?: Partial<SdkConfig>;

  protected changePlaylistDetailsConfig?: Partial<SdkConfig>;

  protected getPlaylistsTracksConfig?: Partial<SdkConfig>;

  protected addTracksToPlaylistConfig?: Partial<SdkConfig>;

  protected reorderOrReplacePlaylistsTracksConfig?: Partial<SdkConfig>;

  protected removeTracksPlaylistConfig?: Partial<SdkConfig>;

  protected getPlaylistsItemsConfig?: Partial<SdkConfig>;

  protected addItemsToPlaylistConfig?: Partial<SdkConfig>;

  protected reorderOrReplacePlaylistsItemsConfig?: Partial<SdkConfig>;

  protected removeItemsPlaylistConfig?: Partial<SdkConfig>;

  protected getAListOfCurrentUsersPlaylistsConfig?: Partial<SdkConfig>;

  protected createPlaylistConfig?: Partial<SdkConfig>;

  protected getListUsersPlaylistsConfig?: Partial<SdkConfig>;

  protected createPlaylistForUserConfig?: Partial<SdkConfig>;

  protected getFeaturedPlaylistsConfig?: Partial<SdkConfig>;

  protected getACategoriesPlaylistsConfig?: Partial<SdkConfig>;

  protected getPlaylistCoverConfig?: Partial<SdkConfig>;

  protected uploadCustomPlaylistCoverConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for getPlaylist.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetPlaylistConfig(config: Partial<SdkConfig>): this {
    this.getPlaylistConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for changePlaylistDetails.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setChangePlaylistDetailsConfig(config: Partial<SdkConfig>): this {
    this.changePlaylistDetailsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getPlaylistsTracks.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetPlaylistsTracksConfig(config: Partial<SdkConfig>): this {
    this.getPlaylistsTracksConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for addTracksToPlaylist.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setAddTracksToPlaylistConfig(config: Partial<SdkConfig>): this {
    this.addTracksToPlaylistConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for reorderOrReplacePlaylistsTracks.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setReorderOrReplacePlaylistsTracksConfig(config: Partial<SdkConfig>): this {
    this.reorderOrReplacePlaylistsTracksConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for removeTracksPlaylist.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRemoveTracksPlaylistConfig(config: Partial<SdkConfig>): this {
    this.removeTracksPlaylistConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getPlaylistsItems.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetPlaylistsItemsConfig(config: Partial<SdkConfig>): this {
    this.getPlaylistsItemsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for addItemsToPlaylist.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setAddItemsToPlaylistConfig(config: Partial<SdkConfig>): this {
    this.addItemsToPlaylistConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for reorderOrReplacePlaylistsItems.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setReorderOrReplacePlaylistsItemsConfig(config: Partial<SdkConfig>): this {
    this.reorderOrReplacePlaylistsItemsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for removeItemsPlaylist.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRemoveItemsPlaylistConfig(config: Partial<SdkConfig>): this {
    this.removeItemsPlaylistConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getAListOfCurrentUsersPlaylists.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetAListOfCurrentUsersPlaylistsConfig(config: Partial<SdkConfig>): this {
    this.getAListOfCurrentUsersPlaylistsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createPlaylist.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreatePlaylistConfig(config: Partial<SdkConfig>): this {
    this.createPlaylistConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getListUsersPlaylists.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetListUsersPlaylistsConfig(config: Partial<SdkConfig>): this {
    this.getListUsersPlaylistsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createPlaylistForUser.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreatePlaylistForUserConfig(config: Partial<SdkConfig>): this {
    this.createPlaylistForUserConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getFeaturedPlaylists.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetFeaturedPlaylistsConfig(config: Partial<SdkConfig>): this {
    this.getFeaturedPlaylistsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getACategoriesPlaylists.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetACategoriesPlaylistsConfig(config: Partial<SdkConfig>): this {
    this.getACategoriesPlaylistsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getPlaylistCover.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetPlaylistCoverConfig(config: Partial<SdkConfig>): this {
    this.getPlaylistCoverConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for uploadCustomPlaylistCover.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUploadCustomPlaylistCoverConfig(config: Partial<SdkConfig>): this {
    this.uploadCustomPlaylistCoverConfig = config;
    return this;
  }

  /**
 * Get a playlist owned by a Spotify user.
 * @param {string} playlistId - The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.

 * @param {string} [params.market] - An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
  If a country code is specified, only content that is available in that market will be returned.<br/>
  If a valid user access token is specified in the request header, the country associated with
  the user account will take priority over this parameter.<br/>
  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>
  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).

 * @param {string} [params.fields] - Filters for the query: a comma-separated list of the
fields to return. If omitted, all fields are returned. For example, to get
just the playlist''s description and URI: `fields=description,uri`. A dot
separator can be used to specify non-reoccurring fields, while parentheses
can be used to specify reoccurring fields within objects. For example, to
get just the added date and user ID of the adder: `fields=tracks.items(added_at,added_by.id)`.
Use multiple parentheses to drill down into nested objects, for example: `fields=tracks.items(track(name,href,album(name,href)))`.
Fields can be excluded by prefixing them with an exclamation mark, for example:
`fields=tracks.items(track(name,href,album(!name,href)))`

 * @param {string} [params.additionalTypes] - A comma-separated list of item types that your client supports besides the default `track` type. Valid types are: `track` and `episode`.<br/>
_**Note**: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future._<br/>
In addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the `type` field of each object.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<PlaylistObject>>} - A playlist
 */
  async getPlaylist(
    playlistId: string,
    params?: GetPlaylistParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<PlaylistObject> {
    const resolvedConfig = this.getResolvedConfig(this.getPlaylistConfig, requestConfig);
    z.object({
      market: z.string().optional(),
      fields: z.string().optional(),
      additionalTypes: z.string().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/playlists/{playlist_id}')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: playlistObjectResponse,
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
        key: 'market',
        value: params?.market,
      })
      .addQueryParam({
        key: 'fields',
        value: params?.fields,
      })
      .addQueryParam({
        key: 'additional_types',
        value: params?.additionalTypes,
      })
      .build();
    return this.client.callDirect<PlaylistObject>(request);
  }

  /**
 * Change a playlist's name and public/private state. (The user must, ofcourse, own the playlist.)

 * @param {string} playlistId - The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - Playlist updated
 */
  async changePlaylistDetails(
    playlistId: string,
    body: ChangePlaylistDetailsRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.changePlaylistDetailsConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/playlists/{playlist_id}')
      .setRequestSchema(changePlaylistDetailsRequestRequest)
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
 * **Deprecated:** Use [Get Playlist Items](/documentation/web-api/reference/get-playlists-items) instead.
Get full details of the items of a playlist owned by a Spotify user.

 * @param {string} playlistId - The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.

 * @param {string} [params.market] - An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
  If a country code is specified, only content that is available in that market will be returned.<br/>
  If a valid user access token is specified in the request header, the country associated with
  the user account will take priority over this parameter.<br/>
  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>
  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).

 * @param {string} [params.fields] - Filters for the query: a comma-separated list of the
fields to return. If omitted, all fields are returned. For example, to get
just the total number of items and the request limit:<br/>`fields=total,limit`<br/>A
dot separator can be used to specify non-reoccurring fields, while parentheses
can be used to specify reoccurring fields within objects. For example, to
get just the added date and user ID of the adder:<br/>`fields=items(added_at,added_by.id)`<br/>Use
multiple parentheses to drill down into nested objects, for example:<br/>`fields=items(track(name,href,album(name,href)))`<br/>Fields
can be excluded by prefixing them with an exclamation mark, for example:<br/>`fields=items.track.album(!external_urls,images)`

 * @param {number} [params.limit] - The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.

 * @param {number} [params.offset] - The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.

 * @param {string} [params.additionalTypes] - A comma-separated list of item types that your client supports besides the default `track` type. Valid types are: `track` and `episode`.<br/>
_**Note**: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future._<br/>
In addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the `type` field of each object.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<PagingPlaylistTrackObject>>} - Pages of tracks
 */
  async getPlaylistsTracks(
    playlistId: string,
    params?: GetPlaylistsTracksParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<PagingPlaylistTrackObject> {
    const resolvedConfig = this.getResolvedConfig(this.getPlaylistsTracksConfig, requestConfig);
    z.object({
      market: z.string().optional(),
      fields: z.string().optional(),
      limit: z.number().optional(),
      offset: z.number().optional(),
      additionalTypes: z.string().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/playlists/{playlist_id}/tracks')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: pagingPlaylistTrackObjectResponse,
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
        key: 'market',
        value: params?.market,
      })
      .addQueryParam({
        key: 'fields',
        value: params?.fields,
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
        key: 'additional_types',
        value: params?.additionalTypes,
      })
      .build();
    return this.client.callDirect<PagingPlaylistTrackObject>(request);
  }

  /**
 * **Deprecated:** Use [Add Items to Playlist](/documentation/web-api/reference/add-items-to-playlist) instead.
Add one or more items to a user's playlist.

 * @param {string} playlistId - The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.

 * @param {number} [params.position] - The position to insert the items, a zero-based index. For example, to insert the items in the first position: `position=0`; to insert the items in the third position: `position=2`. If omitted, the items will be appended to the playlist. Items are added in the order they are listed in the query string or request body.

 * @param {string} [params.uris] - A comma-separated list of [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) to add, can be track or episode URIs. For example:<br/>`uris=spotify:track:4iV5W9uYEdYUVa79Axb7Rh, spotify:track:1301WleyT98MSxVHPZCA6M, spotify:episode:512ojhOuo1ktJprKbVcKyQ`<br/>A maximum of 100 items can be added in one request. <br/>
_**Note**: it is likely that passing a large number of item URIs as a query parameter will exceed the maximum length of the request URI. When adding a large number of items, it is recommended to pass them in the request body, see below._

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<PlaylistSnapshotId>>} - A snapshot ID for the playlist
 */
  async addTracksToPlaylist(
    playlistId: string,
    body: AddTracksToPlaylistRequest,
    params?: AddTracksToPlaylistParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<PlaylistSnapshotId> {
    const resolvedConfig = this.getResolvedConfig(this.addTracksToPlaylistConfig, requestConfig);
    z.object({ position: z.number().optional(), uris: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/playlists/{playlist_id}/tracks')
      .setRequestSchema(addTracksToPlaylistRequestRequest)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: playlistSnapshotIdResponse,
        contentType: ContentType.Json,
        status: 201,
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
        key: 'position',
        value: params?.position,
      })
      .addQueryParam({
        key: 'uris',
        value: params?.uris,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<PlaylistSnapshotId>(request);
  }

  /**
 * **Deprecated:** Use [Update Playlist Items](/documentation/web-api/reference/reorder-or-replace-playlists-items) instead.
Either reorder or replace items in a playlist depending on the request's parameters.
To reorder items, include `range_start`, `insert_before`, `range_length` and `snapshot_id` in the request's body.
To replace items, include `uris` as either a query parameter or in the request's body.
Replacing items in a playlist will overwrite its existing items. This operation can be used for replacing or clearing items in a playlist.
<br/>
**Note**: Replace and reorder are mutually exclusive operations which share the same endpoint, but have different parameters.
These operations can't be applied together in a single request.

 * @param {string} playlistId - The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.

 * @param {string} [params.uris] - A comma-separated list of [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) to set, can be track or episode URIs. For example: `uris=spotify:track:4iV5W9uYEdYUVa79Axb7Rh,spotify:track:1301WleyT98MSxVHPZCA6M,spotify:episode:512ojhOuo1ktJprKbVcKyQ`<br/>A maximum of 100 items can be set in one request.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<PlaylistSnapshotId>>} - A snapshot ID for the playlist
 */
  async reorderOrReplacePlaylistsTracks(
    playlistId: string,
    body: ReorderOrReplacePlaylistsTracksRequest,
    params?: ReorderOrReplacePlaylistsTracksParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<PlaylistSnapshotId> {
    const resolvedConfig = this.getResolvedConfig(
      this.reorderOrReplacePlaylistsTracksConfig,
      requestConfig,
    );
    z.object({ uris: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/playlists/{playlist_id}/tracks')
      .setRequestSchema(reorderOrReplacePlaylistsTracksRequestRequest)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: playlistSnapshotIdResponse,
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
        key: 'uris',
        value: params?.uris,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<PlaylistSnapshotId>(request);
  }

  /**
 * **Deprecated:** Use [Remove Playlist Items](/documentation/web-api/reference/remove-items-playlist) instead.
Remove one or more items from a user's playlist.

 * @param {string} playlistId - The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<PlaylistSnapshotId>>} - A snapshot ID for the playlist
 */
  async removeTracksPlaylist(
    playlistId: string,
    body: RemoveTracksPlaylistRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<PlaylistSnapshotId> {
    const resolvedConfig = this.getResolvedConfig(this.removeTracksPlaylistConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/playlists/{playlist_id}/tracks')
      .setRequestSchema(removeTracksPlaylistRequestRequest)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: playlistSnapshotIdResponse,
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
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<PlaylistSnapshotId>(request);
  }

  /**
 * Get full details of the items of a playlist owned by a Spotify user.
**Note**: This endpoint is only accessible for playlists owned by the current user or playlists the user is a collaborator of. A `403 Forbidden` status code will be returned if the user is neither the owner nor a collaborator of the playlist.

 * @param {string} playlistId - The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.

 * @param {string} [params.market] - An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
  If a country code is specified, only content that is available in that market will be returned.<br/>
  If a valid user access token is specified in the request header, the country associated with
  the user account will take priority over this parameter.<br/>
  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>
  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).

 * @param {string} [params.fields] - Filters for the query: a comma-separated list of the
fields to return. If omitted, all fields are returned. For example, to get
just the total number of items and the request limit:<br/>`fields=total,limit`<br/>A
dot separator can be used to specify non-reoccurring fields, while parentheses
can be used to specify reoccurring fields within objects. For example, to
get just the added date and user ID of the adder:<br/>`fields=items(added_at,added_by.id)`<br/>Use
multiple parentheses to drill down into nested objects, for example:<br/>`fields=items(track(name,href,album(name,href)))`<br/>Fields
can be excluded by prefixing them with an exclamation mark, for example:<br/>`fields=items.track.album(!external_urls,images)`

 * @param {number} [params.limit] - The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.

 * @param {number} [params.offset] - The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.

 * @param {string} [params.additionalTypes] - A comma-separated list of item types that your client supports besides the default `track` type. Valid types are: `track` and `episode`.<br/>
_**Note**: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future._<br/>
In addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the `type` field of each object.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<PagingPlaylistTrackObject>>} - Pages of tracks
 */
  async getPlaylistsItems(
    playlistId: string,
    params?: GetPlaylistsItemsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<PagingPlaylistTrackObject> {
    const resolvedConfig = this.getResolvedConfig(this.getPlaylistsItemsConfig, requestConfig);
    z.object({
      market: z.string().optional(),
      fields: z.string().optional(),
      limit: z.number().optional(),
      offset: z.number().optional(),
      additionalTypes: z.string().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/playlists/{playlist_id}/items')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: pagingPlaylistTrackObjectResponse,
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
        key: 'market',
        value: params?.market,
      })
      .addQueryParam({
        key: 'fields',
        value: params?.fields,
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
        key: 'additional_types',
        value: params?.additionalTypes,
      })
      .build();
    return this.client.callDirect<PagingPlaylistTrackObject>(request);
  }

  /**
 * Add one or more items to a user's playlist.
 * @param {string} playlistId - The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.

 * @param {number} [params.position] - The position to insert the items, a zero-based index. For example, to insert the items in the first position: `position=0`; to insert the items in the third position: `position=2`. If omitted, the items will be appended to the playlist. Items are added in the order they are listed in the query string or request body.

 * @param {string} [params.uris] - A comma-separated list of [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) to add, can be track or episode URIs. For example:<br/>`uris=spotify:track:4iV5W9uYEdYUVa79Axb7Rh, spotify:track:1301WleyT98MSxVHPZCA6M, spotify:episode:512ojhOuo1ktJprKbVcKyQ`<br/>A maximum of 100 items can be added in one request. <br/>
_**Note**: it is likely that passing a large number of item URIs as a query parameter will exceed the maximum length of the request URI. When adding a large number of items, it is recommended to pass them in the request body, see below._

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<PlaylistSnapshotId>>} - A snapshot ID for the playlist
 */
  async addItemsToPlaylist(
    playlistId: string,
    body: AddItemsToPlaylistRequest,
    params?: AddItemsToPlaylistParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<PlaylistSnapshotId> {
    const resolvedConfig = this.getResolvedConfig(this.addItemsToPlaylistConfig, requestConfig);
    z.object({ position: z.number().optional(), uris: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/playlists/{playlist_id}/items')
      .setRequestSchema(addItemsToPlaylistRequestRequest)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: playlistSnapshotIdResponse,
        contentType: ContentType.Json,
        status: 201,
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
        key: 'position',
        value: params?.position,
      })
      .addQueryParam({
        key: 'uris',
        value: params?.uris,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<PlaylistSnapshotId>(request);
  }

  /**
 * Either reorder or replace items in a playlist depending on the request's parameters.To reorder items, include `range_start`, `insert_before`, `range_length` and `snapshot_id` in the request's body.
To replace items, include `uris` as either a query parameter or in the request's body.
Replacing items in a playlist will overwrite its existing items. This operation can be used for replacing or clearing items in a playlist.
<br/>
**Note**: Replace and reorder are mutually exclusive operations which share the same endpoint, but have different parameters.
These operations can't be applied together in a single request.

 * @param {string} playlistId - The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.

 * @param {string} [params.uris] - A comma-separated list of [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) to set, can be track or episode URIs. For example: `uris=spotify:track:4iV5W9uYEdYUVa79Axb7Rh,spotify:track:1301WleyT98MSxVHPZCA6M,spotify:episode:512ojhOuo1ktJprKbVcKyQ`<br/>A maximum of 100 items can be set in one request.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<PlaylistSnapshotId>>} - A snapshot ID for the playlist
 */
  async reorderOrReplacePlaylistsItems(
    playlistId: string,
    body: ReorderOrReplacePlaylistsItemsRequest,
    params?: ReorderOrReplacePlaylistsItemsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<PlaylistSnapshotId> {
    const resolvedConfig = this.getResolvedConfig(
      this.reorderOrReplacePlaylistsItemsConfig,
      requestConfig,
    );
    z.object({ uris: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/playlists/{playlist_id}/items')
      .setRequestSchema(reorderOrReplacePlaylistsItemsRequestRequest)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: playlistSnapshotIdResponse,
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
        key: 'uris',
        value: params?.uris,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<PlaylistSnapshotId>(request);
  }

  /**
 * Remove one or more items from a user's playlist.
 * @param {string} playlistId - The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<PlaylistSnapshotId>>} - A snapshot ID for the playlist
 */
  async removeItemsPlaylist(
    playlistId: string,
    body: RemoveItemsPlaylistRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<PlaylistSnapshotId> {
    const resolvedConfig = this.getResolvedConfig(this.removeItemsPlaylistConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/playlists/{playlist_id}/items')
      .setRequestSchema(removeItemsPlaylistRequestRequest)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: playlistSnapshotIdResponse,
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
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<PlaylistSnapshotId>(request);
  }

  /**
 * Get a list of the playlists owned or followed by the current Spotifyuser.

 * @param {number} [params.limit] - The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.

 * @param {number} [params.offset] - 'The index of the first playlist to return. Default:
0 (the first object). Maximum offset: 100.000\. Use with `limit` to get the
next set of playlists.'

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<PagingPlaylistObject>>} - A paged set of playlists
 */
  async getAListOfCurrentUsersPlaylists(
    params?: GetAListOfCurrentUsersPlaylistsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<PagingPlaylistObject> {
    const resolvedConfig = this.getResolvedConfig(
      this.getAListOfCurrentUsersPlaylistsConfig,
      requestConfig,
    );
    z.object({ limit: z.number().optional(), offset: z.number().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/me/playlists')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: pagingPlaylistObjectResponse,
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
    return this.client.callDirect<PagingPlaylistObject>(request);
  }

  /**
 * Create a playlist for the current Spotify user. (The playlist will be empty untilyou [add tracks](/documentation/web-api/reference/add-tracks-to-playlist).)
Each user is generally limited to a maximum of 11000 playlists.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<PlaylistObject>>} - A playlist
 */
  async createPlaylist(
    body: CreatePlaylistRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<PlaylistObject> {
    const resolvedConfig = this.getResolvedConfig(this.createPlaylistConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/me/playlists')
      .setRequestSchema(createPlaylistRequestRequest)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: playlistObjectResponse,
        contentType: ContentType.Json,
        status: 201,
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
    return this.client.callDirect<PlaylistObject>(request);
  }

  /**
 * Get a list of the playlists owned or followed by a Spotify user.
 * @param {string} userId - The user's [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids).

 * @param {number} [params.limit] - The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.

 * @param {number} [params.offset] - The index of the first playlist to return. Default:
0 (the first object). Maximum offset: 100.000\. Use with `limit` to get the
next set of playlists.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<PagingPlaylistObject>>} - A paged set of playlists
 */
  async getListUsersPlaylists(
    userId: string,
    params?: GetListUsersPlaylistsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<PagingPlaylistObject> {
    const resolvedConfig = this.getResolvedConfig(this.getListUsersPlaylistsConfig, requestConfig);
    z.object({ limit: z.number().optional(), offset: z.number().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/users/{user_id}/playlists')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: pagingPlaylistObjectResponse,
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
      .addQueryParam({
        key: 'limit',
        value: params?.limit,
      })
      .addQueryParam({
        key: 'offset',
        value: params?.offset,
      })
      .build();
    return this.client.callDirect<PagingPlaylistObject>(request);
  }

  /**
 * **Deprecated**: Use [Create Playlist](/documentation/web-api/reference/create-playlist) instead.
Create a playlist for a Spotify user. (The playlist will be empty until
you [add tracks](/documentation/web-api/reference/add-tracks-to-playlist).)
Each user is generally limited to a maximum of 11000 playlists.

 * @param {string} userId - The user's [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids).

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<PlaylistObject>>} - A playlist
 */
  async createPlaylistForUser(
    userId: string,
    body: CreatePlaylistForUserRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<PlaylistObject> {
    const resolvedConfig = this.getResolvedConfig(this.createPlaylistForUserConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/users/{user_id}/playlists')
      .setRequestSchema(createPlaylistForUserRequestRequest)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: playlistObjectResponse,
        contentType: ContentType.Json,
        status: 201,
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
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<PlaylistObject>(request);
  }

  /**
 * Get a list of Spotify featured playlists (shown, for example, on a Spotify player's 'Browse' tab).
 * @param {string} [params.locale] - The desired language, consisting of an [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) language code and an [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), joined by an underscore. For example: `es_MX`, meaning &quot;Spanish (Mexico)&quot;. Provide this parameter if you want the category strings returned in a particular language.<br/> _**Note**: if `locale` is not supplied, or if the specified language is not available, the category strings returned will be in the Spotify default language (American English)._

 * @param {number} [params.limit] - The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.

 * @param {number} [params.offset] - The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<PagingFeaturedPlaylistObject>>} - A paged set of playlists
 */
  async getFeaturedPlaylists(
    params?: GetFeaturedPlaylistsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<PagingFeaturedPlaylistObject> {
    const resolvedConfig = this.getResolvedConfig(this.getFeaturedPlaylistsConfig, requestConfig);
    z.object({
      locale: z.string().optional(),
      limit: z.number().optional(),
      offset: z.number().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/browse/featured-playlists')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: pagingFeaturedPlaylistObjectResponse,
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
    return this.client.callDirect<PagingFeaturedPlaylistObject>(request);
  }

  /**
 * Get a list of Spotify playlists tagged with a particular category.
 * @param {string} categoryId - The [Spotify category ID](/documentation/web-api/concepts/spotify-uris-ids) for the category.

 * @param {number} [params.limit] - The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.

 * @param {number} [params.offset] - The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<PagingFeaturedPlaylistObject>>} - A paged set of playlists
 */
  async getACategoriesPlaylists(
    categoryId: string,
    params?: GetACategoriesPlaylistsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<PagingFeaturedPlaylistObject> {
    const resolvedConfig = this.getResolvedConfig(
      this.getACategoriesPlaylistsConfig,
      requestConfig,
    );
    z.object({ limit: z.number().optional(), offset: z.number().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/browse/categories/{category_id}/playlists')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: pagingFeaturedPlaylistObjectResponse,
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
        key: 'limit',
        value: params?.limit,
      })
      .addQueryParam({
        key: 'offset',
        value: params?.offset,
      })
      .build();
    return this.client.callDirect<PagingFeaturedPlaylistObject>(request);
  }

  /**
 * Get the current image associated with a specific playlist.
 * @param {string} playlistId - The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<ImageObject[]>>} - A set of images
 */
  async getPlaylistCover(
    playlistId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ImageObject[]> {
    const resolvedConfig = this.getResolvedConfig(this.getPlaylistCoverConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/playlists/{playlist_id}/images')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.array(imageObjectResponse),
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
      .build();
    return this.client.callDirect<ImageObject[]>(request);
  }

  /**
 * Replace the image used to represent a specific playlist.
 * @param {string} playlistId - The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - Image uploaded
 */
  async uploadCustomPlaylistCover(
    playlistId: string,
    body: ArrayBuffer,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(
      this.uploadCustomPlaylistCoverConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/playlists/{playlist_id}/images')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Image)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 202,
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
      .addHeaderParam({ key: 'Content-Type', value: 'image/jpeg' })
      .addBody(body)
      .build();
    return this.client.callDirect<void>(request);
  }
}
