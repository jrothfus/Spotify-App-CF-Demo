# ShowsService

A list of all methods in the `ShowsService` service. Click on the method name to view detailed information about that method.

| Methods                                       | Description                                                                                                                                                                                                                |
| :-------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getAShow](#getashow)                         | Get Spotify catalog information for a single show identified by its unique Spotify ID.                                                                                                                                     |
| [getMultipleShows](#getmultipleshows)         | Get Spotify catalog information for several shows based on their Spotify IDs.                                                                                                                                              |
| [getAShowsEpisodes](#getashowsepisodes)       | Get Spotify catalog information about an show’s episodes. Optional parameters can be used to limit the number of episodes returned.                                                                                        |
| [getUsersSavedShows](#getuserssavedshows)     | Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.                                                                                    |
| [saveShowsUser](#saveshowsuser)               | Save one or more shows to current Spotify user's library. **Note:** This endpoint is deprecated. Use [Save Items to Library](/documentation/web-api/reference/save-library-items) instead.                                 |
| [removeShowsUser](#removeshowsuser)           | Delete one or more shows from current Spotify user's library. **Note:** This endpoint is deprecated. Use [Remove Items from Library](/documentation/web-api/reference/remove-library-items) instead.                       |
| [checkUsersSavedShows](#checkuserssavedshows) | Check if one or more shows is already saved in the current Spotify user's library. **Note:** This endpoint is deprecated. Use [Check User's Saved Items](/documentation/web-api/reference/check-library-contains) instead. |

## getAShow

Get Spotify catalog information for a single show identified by its unique Spotify ID.

- HTTP Method: `GET`
- Endpoint: `/shows/{id}`

**Parameters**

| Name   | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :----- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id     | string | ✅       | The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the show.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| market | string | ❌       | An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned.\<br/\> If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.\<br/\> _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._\<br/\> Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/). |

**Return Type**

`ShowObject`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.shows.getAShow('38bS44xjbVVZ3No3ByF1dJ', {
    market: 'ES',
  });

  console.log(data);
})();
```

## getMultipleShows

Get Spotify catalog information for several shows based on their Spotify IDs.

- HTTP Method: `GET`
- Endpoint: `/shows`

**Parameters**

| Name   | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :----- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ids    | string | ✅       | A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the shows. Maximum: 50 IDs.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| market | string | ❌       | An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned.\<br/\> If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.\<br/\> _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._\<br/\> Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/). |

**Return Type**

`ManySimplifiedShows`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.shows.getMultipleShows({
    market: 'ES',
    ids: '5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ',
  });

  console.log(data);
})();
```

## getAShowsEpisodes

Get Spotify catalog information about an show’s episodes. Optional parameters can be used to limit the number of episodes returned.

- HTTP Method: `GET`
- Endpoint: `/shows/{id}/episodes`

**Parameters**

| Name   | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :----- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id     | string | ✅       | The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the show.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| market | string | ❌       | An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned.\<br/\> If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.\<br/\> _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._\<br/\> Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/). |
| limit  | number | ❌       | The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| offset | number | ❌       | The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

**Return Type**

`PagingSimplifiedEpisodeObject`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.shows.getAShowsEpisodes('38bS44xjbVVZ3No3ByF1dJ', {
    market: 'ES',
    limit: 10,
    offset: 5,
  });

  console.log(data);
})();
```

## getUsersSavedShows

Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.

- HTTP Method: `GET`
- Endpoint: `/me/shows`

**Parameters**

| Name   | Type   | Required | Description                                                                                                      |
| :----- | :----- | :------- | :--------------------------------------------------------------------------------------------------------------- |
| limit  | number | ❌       | The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.                                     |
| offset | number | ❌       | The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items. |

**Return Type**

`PagingSavedShowObject`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.shows.getUsersSavedShows({
    limit: 10,
    offset: 5,
  });

  console.log(data);
})();
```

## saveShowsUser

Save one or more shows to current Spotify user's library. **Note:** This endpoint is deprecated. Use [Save Items to Library](/documentation/web-api/reference/save-library-items) instead.

- HTTP Method: `PUT`
- Endpoint: `/me/shows`

**Parameters**

| Name | Type   | Required | Description                                                                                                                   |
| :--- | :----- | :------- | :---------------------------------------------------------------------------------------------------------------------------- |
| ids  | string | ✅       | A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the shows. Maximum: 50 IDs. |

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.shows.saveShowsUser({
    ids: '5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ',
  });

  console.log(data);
})();
```

## removeShowsUser

Delete one or more shows from current Spotify user's library. **Note:** This endpoint is deprecated. Use [Remove Items from Library](/documentation/web-api/reference/remove-library-items) instead.

- HTTP Method: `DELETE`
- Endpoint: `/me/shows`

**Parameters**

| Name   | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :----- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ids    | string | ✅       | A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the shows. Maximum: 50 IDs.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| market | string | ❌       | An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned.\<br/\> If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.\<br/\> _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._\<br/\> Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/). |

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.shows.removeShowsUser({
    ids: '5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ',
    market: 'ES',
  });

  console.log(data);
})();
```

## checkUsersSavedShows

Check if one or more shows is already saved in the current Spotify user's library. **Note:** This endpoint is deprecated. Use [Check User's Saved Items](/documentation/web-api/reference/check-library-contains) instead.

- HTTP Method: `GET`
- Endpoint: `/me/shows/contains`

**Parameters**

| Name | Type   | Required | Description                                                                                                                   |
| :--- | :----- | :------- | :---------------------------------------------------------------------------------------------------------------------------- |
| ids  | string | ✅       | A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the shows. Maximum: 50 IDs. |

**Return Type**

`boolean[]`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.shows.checkUsersSavedShows({
    ids: '5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ',
  });

  console.log(data);
})();
```
