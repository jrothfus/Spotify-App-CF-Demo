# AlbumsService

A list of all methods in the `AlbumsService` service. Click on the method name to view detailed information about that method.

| Methods                                         | Description                                                                                                                                                                                                                              |
| :---------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getAnAlbum](#getanalbum)                       | Get Spotify catalog information for a single album.                                                                                                                                                                                      |
| [getMultipleAlbums](#getmultiplealbums)         | Get Spotify catalog information for multiple albums identified by their Spotify IDs.                                                                                                                                                     |
| [getAnAlbumsTracks](#getanalbumstracks)         | Get Spotify catalog information about an album’s tracks. Optional parameters can be used to limit the number of tracks returned.                                                                                                         |
| [getUsersSavedAlbums](#getuserssavedalbums)     | Get a list of the albums saved in the current Spotify user's 'Your Music' library.                                                                                                                                                       |
| [saveAlbumsUser](#savealbumsuser)               | Save one or more albums to the current user's 'Your Music' library. **Note:** This endpoint is deprecated. Use [Save Items to Library](/documentation/web-api/reference/save-library-items) instead.                                     |
| [removeAlbumsUser](#removealbumsuser)           | Remove one or more albums from the current user's 'Your Music' library. **Note:** This endpoint is deprecated. Use [Remove Items from Library](/documentation/web-api/reference/remove-library-items) instead.                           |
| [checkUsersSavedAlbums](#checkuserssavedalbums) | Check if one or more albums is already saved in the current Spotify user's 'Your Music' library. **Note:** This endpoint is deprecated. Use [Check User's Saved Items](/documentation/web-api/reference/check-library-contains) instead. |
| [getNewReleases](#getnewreleases)               | Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).                                                                                                                           |

## getAnAlbum

Get Spotify catalog information for a single album.

- HTTP Method: `GET`
- Endpoint: `/albums/{id}`

**Parameters**

| Name   | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :----- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id     | string | ✅       | The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the album.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| market | string | ❌       | An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned.\<br/\> If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.\<br/\> _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._\<br/\> Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/). |

**Return Type**

`AlbumObject`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.albums.getAnAlbum('4aawyAB9vmqN3uQ7FjRGTy', {
    market: 'ES',
  });

  console.log(data);
})();
```

## getMultipleAlbums

Get Spotify catalog information for multiple albums identified by their Spotify IDs.

- HTTP Method: `GET`
- Endpoint: `/albums`

**Parameters**

| Name   | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :----- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ids    | string | ✅       | A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the albums. Maximum: 20 IDs.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| market | string | ❌       | An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned.\<br/\> If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.\<br/\> _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._\<br/\> Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/). |

**Return Type**

`ManyAlbums`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.albums.getMultipleAlbums({
    ids: '382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc',
    market: 'ES',
  });

  console.log(data);
})();
```

## getAnAlbumsTracks

Get Spotify catalog information about an album’s tracks. Optional parameters can be used to limit the number of tracks returned.

- HTTP Method: `GET`
- Endpoint: `/albums/{id}/tracks`

**Parameters**

| Name   | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :----- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id     | string | ✅       | The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the album.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| market | string | ❌       | An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned.\<br/\> If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.\<br/\> _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._\<br/\> Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/). |
| limit  | number | ❌       | The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| offset | number | ❌       | The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

**Return Type**

`PagingSimplifiedTrackObject`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.albums.getAnAlbumsTracks('4aawyAB9vmqN3uQ7FjRGTy', {
    market: 'ES',
    limit: 10,
    offset: 5,
  });

  console.log(data);
})();
```

## getUsersSavedAlbums

Get a list of the albums saved in the current Spotify user's 'Your Music' library.

- HTTP Method: `GET`
- Endpoint: `/me/albums`

**Parameters**

| Name   | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :----- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| limit  | number | ❌       | The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| offset | number | ❌       | The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| market | string | ❌       | An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned.\<br/\> If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.\<br/\> _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._\<br/\> Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/). |

**Return Type**

`PagingSavedAlbumObject`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.albums.getUsersSavedAlbums({
    limit: 10,
    offset: 5,
    market: 'ES',
  });

  console.log(data);
})();
```

## saveAlbumsUser

Save one or more albums to the current user's 'Your Music' library. **Note:** This endpoint is deprecated. Use [Save Items to Library](/documentation/web-api/reference/save-library-items) instead.

- HTTP Method: `PUT`
- Endpoint: `/me/albums`

**Parameters**

| Name | Type                                                        | Required | Description                                                                                                                    |
| :--- | :---------------------------------------------------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------- |
| body | [SaveAlbumsUserRequest](../models/SaveAlbumsUserRequest.md) | ❌       | The request body.                                                                                                              |
| ids  | string                                                      | ✅       | A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the albums. Maximum: 20 IDs. |

**Example Usage Code Snippet**

```typescript
import { SaveAlbumsUserRequest, SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const saveAlbumsUserRequest: SaveAlbumsUserRequest = {
    ids: ['ids'],
  };

  const data = await spotifyWebApiSdk.albums.saveAlbumsUser(saveAlbumsUserRequest, {
    ids: '382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc',
  });

  console.log(data);
})();
```

## removeAlbumsUser

Remove one or more albums from the current user's 'Your Music' library. **Note:** This endpoint is deprecated. Use [Remove Items from Library](/documentation/web-api/reference/remove-library-items) instead.

- HTTP Method: `DELETE`
- Endpoint: `/me/albums`

**Parameters**

| Name | Type                                                            | Required | Description                                                                                                                    |
| :--- | :-------------------------------------------------------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------- |
| body | [RemoveAlbumsUserRequest](../models/RemoveAlbumsUserRequest.md) | ❌       | The request body.                                                                                                              |
| ids  | string                                                          | ✅       | A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the albums. Maximum: 20 IDs. |

**Example Usage Code Snippet**

```typescript
import { RemoveAlbumsUserRequest, SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const removeAlbumsUserRequest: RemoveAlbumsUserRequest = {
    ids: ['ids'],
  };

  const data = await spotifyWebApiSdk.albums.removeAlbumsUser(removeAlbumsUserRequest, {
    ids: '382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc',
  });

  console.log(data);
})();
```

## checkUsersSavedAlbums

Check if one or more albums is already saved in the current Spotify user's 'Your Music' library. **Note:** This endpoint is deprecated. Use [Check User's Saved Items](/documentation/web-api/reference/check-library-contains) instead.

- HTTP Method: `GET`
- Endpoint: `/me/albums/contains`

**Parameters**

| Name | Type   | Required | Description                                                                                                                    |
| :--- | :----- | :------- | :----------------------------------------------------------------------------------------------------------------------------- |
| ids  | string | ✅       | A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the albums. Maximum: 20 IDs. |

**Return Type**

`boolean[]`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.albums.checkUsersSavedAlbums({
    ids: '382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc',
  });

  console.log(data);
})();
```

## getNewReleases

Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).

- HTTP Method: `GET`
- Endpoint: `/browse/new-releases`

**Parameters**

| Name   | Type   | Required | Description                                                                                                      |
| :----- | :----- | :------- | :--------------------------------------------------------------------------------------------------------------- |
| limit  | number | ❌       | The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.                                     |
| offset | number | ❌       | The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items. |

**Return Type**

`PagedAlbums`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.albums.getNewReleases({
    limit: 10,
    offset: 5,
  });

  console.log(data);
})();
```
