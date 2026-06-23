import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { SearchItems, searchItemsResponse } from './models/search-items';
import { Unauthorized } from '../common/unauthorized';
import { Forbidden } from '../common/forbidden';
import { TooManyRequests } from '../common/too-many-requests';
import { SearchParams } from './request-params';

/**
 * Service class for SearchService operations.
 * Provides methods to interact with SearchService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class SearchService extends BaseService {
  protected searchConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for search.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSearchConfig(config: Partial<SdkConfig>): this {
    this.searchConfig = config;
    return this;
  }

  /**
 * Get Spotify catalog information about albums, artists, playlists, tracks, shows, episodes or audiobooksthat match a keyword string. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.

 * @param {string} params.q - Your search query.

You can narrow down your search using field filters. The available filters are `album`, `artist`, `track`, `year`, `upc`, `tag:hipster`, `tag:new`, `isrc`, and `genre`. Each field filter only applies to certain result types.

The `artist` and `year` filters can be used while searching albums, artists and tracks. You can filter on a single `year` or a range (e.g. 1955-1960).<br />
The `album` filter can be used while searching albums and tracks.<br />
The `genre` filter can be used while searching artists and tracks.<br />
The `isrc` and `track` filters can be used while searching tracks.<br />
The `upc`, `tag:new` and `tag:hipster` filters can only be used while searching albums. The `tag:new` filter will return albums released in the past two weeks and `tag:hipster` can be used to return only albums with the lowest 10% popularity.<br />

 * @param {SearchType[]} params.type - A comma-separated list of item types to search across. Search results include hits
from all the specified item types. For example: `q=abacab&type=album,track` returns
both albums and tracks matching "abacab".

 * @param {string} [params.market] - An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
  If a country code is specified, only content that is available in that market will be returned.<br/>
  If a valid user access token is specified in the request header, the country associated with
  the user account will take priority over this parameter.<br/>
  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>
  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).

 * @param {number} [params.limit] - The maximum number of results to return in each item type.

 * @param {number} [params.offset] - The index of the first result to return. Use
with limit to get the next page of search results.

 * @param {IncludeExternal} [params.includeExternal] - 
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<SearchItems>>} - Search response
 */
  async search(params: SearchParams, requestConfig?: Partial<SdkConfig>): Promise<SearchItems> {
    const resolvedConfig = this.getResolvedConfig(this.searchConfig, requestConfig);
    z.object({
      q: z.string(),
      type: z.unknown(),
      market: z.string().optional(),
      limit: z.number().optional(),
      offset: z.number().optional(),
      includeExternal: z.unknown().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/search')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: searchItemsResponse,
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
        key: 'q',
        value: params?.q,
      })
      .addQueryParam({
        key: 'type',
        value: params?.type,
        explode: false,
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
      .addQueryParam({
        key: 'include_external',
        value: params?.includeExternal,
      })
      .build();
    return this.client.callDirect<SearchItems>(request);
  }
}
