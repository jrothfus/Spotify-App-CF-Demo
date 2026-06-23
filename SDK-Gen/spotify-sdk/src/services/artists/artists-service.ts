import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { ArtistObject, artistObjectResponse } from '../common/artist-object';
import { Unauthorized } from '../common/unauthorized';
import { Forbidden } from '../common/forbidden';
import { TooManyRequests } from '../common/too-many-requests';
import { ManyArtists, manyArtistsResponse } from './models/many-artists';
import {
  GetAnArtistsAlbumsParams,
  GetAnArtistsTopTracksParams,
  GetMultipleArtistsParams,
} from './request-params';
import {
  PagingArtistDiscographyAlbumObject,
  pagingArtistDiscographyAlbumObjectResponse,
} from './models/paging-artist-discography-album-object';
import { ManyTracks, manyTracksResponse } from '../common/many-tracks';

/**
 * Service class for ArtistsService operations.
 * Provides methods to interact with ArtistsService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class ArtistsService extends BaseService {
  protected getAnArtistConfig?: Partial<SdkConfig>;

  protected getMultipleArtistsConfig?: Partial<SdkConfig>;

  protected getAnArtistsAlbumsConfig?: Partial<SdkConfig>;

  protected getAnArtistsTopTracksConfig?: Partial<SdkConfig>;

  protected getAnArtistsRelatedArtistsConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for getAnArtist.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetAnArtistConfig(config: Partial<SdkConfig>): this {
    this.getAnArtistConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getMultipleArtists.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetMultipleArtistsConfig(config: Partial<SdkConfig>): this {
    this.getMultipleArtistsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getAnArtistsAlbums.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetAnArtistsAlbumsConfig(config: Partial<SdkConfig>): this {
    this.getAnArtistsAlbumsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getAnArtistsTopTracks.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetAnArtistsTopTracksConfig(config: Partial<SdkConfig>): this {
    this.getAnArtistsTopTracksConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getAnArtistsRelatedArtists.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetAnArtistsRelatedArtistsConfig(config: Partial<SdkConfig>): this {
    this.getAnArtistsRelatedArtistsConfig = config;
    return this;
  }

  /**
 * Get Spotify catalog information for a single artist identified by their unique Spotify ID.
 * @param {string} id - The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the artist.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<ArtistObject>>} - An artist
 */
  async getAnArtist(id: string, requestConfig?: Partial<SdkConfig>): Promise<ArtistObject> {
    const resolvedConfig = this.getResolvedConfig(this.getAnArtistConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/artists/{id}')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: artistObjectResponse,
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
    return this.client.callDirect<ArtistObject>(request);
  }

  /**
 * Get Spotify catalog information for several artists based on their Spotify IDs.
 * @param {string} params.ids - A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the artists. Maximum: 50 IDs.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<ManyArtists>>} - A set of artists
 */
  async getMultipleArtists(
    params: GetMultipleArtistsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ManyArtists> {
    const resolvedConfig = this.getResolvedConfig(this.getMultipleArtistsConfig, requestConfig);
    z.object({ ids: z.string() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/artists')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: manyArtistsResponse,
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
    return this.client.callDirect<ManyArtists>(request);
  }

  /**
 * Get Spotify catalog information about an artist's albums.
 * @param {string} id - The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the artist.

 * @param {string} [params.includeGroups] - A comma-separated list of keywords that will be used to filter the response. If not supplied, all album types will be returned. <br/>
Valid values are:<br/>- `album`<br/>- `single`<br/>- `appears_on`<br/>- `compilation`<br/>For example: `include_groups=album,single`.

 * @param {string} [params.market] - An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
  If a country code is specified, only content that is available in that market will be returned.<br/>
  If a valid user access token is specified in the request header, the country associated with
  the user account will take priority over this parameter.<br/>
  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>
  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).

 * @param {number} [params.limit] - The maximum number of items to return. Default: 5. Minimum: 1. Maximum: 10.

 * @param {number} [params.offset] - The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<PagingArtistDiscographyAlbumObject>>} - Pages of albums
 */
  async getAnArtistsAlbums(
    id: string,
    params?: GetAnArtistsAlbumsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<PagingArtistDiscographyAlbumObject> {
    const resolvedConfig = this.getResolvedConfig(this.getAnArtistsAlbumsConfig, requestConfig);
    z.object({
      includeGroups: z.string().optional(),
      market: z.string().optional(),
      limit: z.number().optional(),
      offset: z.number().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/artists/{id}/albums')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: pagingArtistDiscographyAlbumObjectResponse,
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
        key: 'include_groups',
        value: params?.includeGroups,
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
    return this.client.callDirect<PagingArtistDiscographyAlbumObject>(request);
  }

  /**
 * Get Spotify catalog information about an artist's top tracks by country.
 * @param {string} id - The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the artist.

 * @param {string} [params.market] - An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
  If a country code is specified, only content that is available in that market will be returned.<br/>
  If a valid user access token is specified in the request header, the country associated with
  the user account will take priority over this parameter.<br/>
  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>
  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<ManyTracks>>} - A set of tracks
 */
  async getAnArtistsTopTracks(
    id: string,
    params?: GetAnArtistsTopTracksParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ManyTracks> {
    const resolvedConfig = this.getResolvedConfig(this.getAnArtistsTopTracksConfig, requestConfig);
    z.object({ market: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/artists/{id}/top-tracks')
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
      .addPathParam({
        key: 'id',
        value: id,
      })
      .addQueryParam({
        key: 'market',
        value: params?.market,
      })
      .build();
    return this.client.callDirect<ManyTracks>(request);
  }

  /**
 * Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community's listening history.
 * @param {string} id - The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the artist.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<ManyArtists>>} - A set of artists
 */
  async getAnArtistsRelatedArtists(
    id: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ManyArtists> {
    const resolvedConfig = this.getResolvedConfig(
      this.getAnArtistsRelatedArtistsConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/artists/{id}/related-artists')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: manyArtistsResponse,
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
    return this.client.callDirect<ManyArtists>(request);
  }
}
