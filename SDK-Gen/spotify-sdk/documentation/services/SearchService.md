# SearchService

A list of all methods in the `SearchService` service. Click on the method name to view detailed information about that method.

| Methods           | Description                                                                                                                                                                                                                               |
| :---------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [search](#search) | Get Spotify catalog information about albums, artists, playlists, tracks, shows, episodes or audiobooks that match a keyword string. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets. |

## search

Get Spotify catalog information about albums, artists, playlists, tracks, shows, episodes or audiobooks that match a keyword string. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.

- HTTP Method: `GET`
- Endpoint: `/search`

**Parameters**

| Name            | Type                                            | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| :-------------- | :---------------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| q               | string                                          | ✅       | Your search query. You can narrow down your search using field filters. The available filters are `album`, `artist`, `track`, `year`, `upc`, `tag:hipster`, `tag:new`, `isrc`, and `genre`. Each field filter only applies to certain result types. The `artist` and `year` filters can be used while searching albums, artists and tracks. You can filter on a single `year` or a range (e.g. 1955-1960).\<br /\> The `album` filter can be used while searching albums and tracks.\<br /\> The `genre` filter can be used while searching artists and tracks.\<br /\> The `isrc` and `track` filters can be used while searching tracks.\<br /\> The `upc`, `tag:new` and `tag:hipster` filters can only be used while searching albums. The `tag:new` filter will return albums released in the past two weeks and `tag:hipster` can be used to return only albums with the lowest 10% popularity.\<br /\> |
| type            | [SearchType[]](../models/SearchType.md)         | ✅       | A comma-separated list of item types to search across. Search results include hits from all the specified item types. For example: `q=abacab&type=album,track` returns both albums and tracks matching "abacab".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| market          | string                                          | ❌       | An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned.\<br/\> If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.\<br/\> _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._\<br/\> Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).                                                                                                                                                                                                                                                                                   |
| limit           | number                                          | ❌       | The maximum number of results to return in each item type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| offset          | number                                          | ❌       | The index of the first result to return. Use with limit to get the next page of search results.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| includeExternal | [IncludeExternal](../models/IncludeExternal.md) | ❌       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

**Return Type**

`SearchItems`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const searchType = 'album';
  const includeExternal = 'audio';

  const data = await spotifyWebApiSdk.search.search({
    q: 'remaster%20track:Doxy%20artist:Miles%20Davis',
    type: [searchType],
    market: 'ES',
    limit: 10,
    offset: 5,
    includeExternal: includeExternal,
  });

  console.log(data);
})();
```
