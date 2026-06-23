# ArtistsService

A list of all methods in the `ArtistsService` service. Click on the method name to view detailed information about that method.

| Methods                                                   | Description                                                                                                                                            |
| :-------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getAnArtist](#getanartist)                               | Get Spotify catalog information for a single artist identified by their unique Spotify ID.                                                             |
| [getMultipleArtists](#getmultipleartists)                 | Get Spotify catalog information for several artists based on their Spotify IDs.                                                                        |
| [getAnArtistsAlbums](#getanartistsalbums)                 | Get Spotify catalog information about an artist's albums.                                                                                              |
| [getAnArtistsTopTracks](#getanartiststoptracks)           | Get Spotify catalog information about an artist's top tracks by country.                                                                               |
| [getAnArtistsRelatedArtists](#getanartistsrelatedartists) | Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community's listening history. |

## getAnArtist

Get Spotify catalog information for a single artist identified by their unique Spotify ID.

- HTTP Method: `GET`
- Endpoint: `/artists/{id}`

**Parameters**

| Name | Type   | Required | Description                                                                       |
| :--- | :----- | :------- | :-------------------------------------------------------------------------------- |
| id   | string | ✅       | The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the artist. |

**Return Type**

`ArtistObject`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.artists.getAnArtist('0TnOYISbd1XYRBk9myaseg');

  console.log(data);
})();
```

## getMultipleArtists

Get Spotify catalog information for several artists based on their Spotify IDs.

- HTTP Method: `GET`
- Endpoint: `/artists`

**Parameters**

| Name | Type   | Required | Description                                                                                                                     |
| :--- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------ |
| ids  | string | ✅       | A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the artists. Maximum: 50 IDs. |

**Return Type**

`ManyArtists`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.artists.getMultipleArtists({
    ids: '2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6',
  });

  console.log(data);
})();
```

## getAnArtistsAlbums

Get Spotify catalog information about an artist's albums.

- HTTP Method: `GET`
- Endpoint: `/artists/{id}/albums`

**Parameters**

| Name          | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :------------ | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id            | string | ✅       | The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the artist.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| includeGroups | string | ❌       | A comma-separated list of keywords that will be used to filter the response. If not supplied, all album types will be returned. \<br/\> Valid values are:\<br/\>- `album`\<br/\>- `single`\<br/\>- `appears_on`\<br/\>- `compilation`\<br/\>For example: `include_groups=album,single`.                                                                                                                                                                                                                                                                                                                                     |
| market        | string | ❌       | An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned.\<br/\> If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.\<br/\> _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._\<br/\> Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/). |
| limit         | number | ❌       | The maximum number of items to return. Default: 5. Minimum: 1. Maximum: 10.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| offset        | number | ❌       | The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

**Return Type**

`PagingArtistDiscographyAlbumObject`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.artists.getAnArtistsAlbums('0TnOYISbd1XYRBk9myaseg', {
    includeGroups: 'single,appears_on',
    market: 'ES',
    limit: 5,
    offset: 5,
  });

  console.log(data);
})();
```

## getAnArtistsTopTracks

Get Spotify catalog information about an artist's top tracks by country.

- HTTP Method: `GET`
- Endpoint: `/artists/{id}/top-tracks`

**Parameters**

| Name   | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :----- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id     | string | ✅       | The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the artist.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| market | string | ❌       | An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned.\<br/\> If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.\<br/\> _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._\<br/\> Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/). |

**Return Type**

`ManyTracks`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.artists.getAnArtistsTopTracks('0TnOYISbd1XYRBk9myaseg', {
    market: 'ES',
  });

  console.log(data);
})();
```

## getAnArtistsRelatedArtists

Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community's listening history.

- HTTP Method: `GET`
- Endpoint: `/artists/{id}/related-artists`

**Parameters**

| Name | Type   | Required | Description                                                                       |
| :--- | :----- | :------- | :-------------------------------------------------------------------------------- |
| id   | string | ✅       | The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the artist. |

**Return Type**

`ManyArtists`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.artists.getAnArtistsRelatedArtists('0TnOYISbd1XYRBk9myaseg');

  console.log(data);
})();
```
