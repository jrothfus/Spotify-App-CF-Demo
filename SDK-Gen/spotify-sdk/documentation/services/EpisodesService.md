# EpisodesService

A list of all methods in the `EpisodesService` service. Click on the method name to view detailed information about that method.

| Methods                                             | Description                                                                                                                                                                                                                                   |
| :-------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getAnEpisode](#getanepisode)                       | Get Spotify catalog information for a single episode identified by its unique Spotify ID.                                                                                                                                                     |
| [getMultipleEpisodes](#getmultipleepisodes)         | Get Spotify catalog information for several episodes based on their Spotify IDs.                                                                                                                                                              |
| [getUsersSavedEpisodes](#getuserssavedepisodes)     | Get a list of the episodes saved in the current Spotify user's library.                                                                                                                                                                       |
| [saveEpisodesUser](#saveepisodesuser)               | Save one or more episodes to the current user's library. **Note:** This endpoint is deprecated. Use [Save Items to Library](/documentation/web-api/reference/save-library-items) instead.                                                     |
| [removeEpisodesUser](#removeepisodesuser)           | Remove one or more episodes from the current user's library. **Note:** This endpoint is deprecated. Use [Remove Items from Library](/documentation/web-api/reference/remove-library-items) instead.                                           |
| [checkUsersSavedEpisodes](#checkuserssavedepisodes) | Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes' library. **Note:** This endpoint is deprecated. Use [Check User's Saved Items](/documentation/web-api/reference/check-library-contains) instead. |

## getAnEpisode

Get Spotify catalog information for a single episode identified by its unique Spotify ID.

- HTTP Method: `GET`
- Endpoint: `/episodes/{id}`

**Parameters**

| Name   | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :----- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id     | string | ✅       | The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the episode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| market | string | ❌       | An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned.\<br/\> If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.\<br/\> _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._\<br/\> Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/). |

**Return Type**

`EpisodeObject`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.episodes.getAnEpisode('512ojhOuo1ktJprKbVcKyQ', {
    market: 'ES',
  });

  console.log(data);
})();
```

## getMultipleEpisodes

Get Spotify catalog information for several episodes based on their Spotify IDs.

- HTTP Method: `GET`
- Endpoint: `/episodes`

**Parameters**

| Name   | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :----- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ids    | string | ✅       | A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the episodes. Maximum: 50 IDs.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| market | string | ❌       | An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned.\<br/\> If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.\<br/\> _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._\<br/\> Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/). |

**Return Type**

`ManyEpisodes`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.episodes.getMultipleEpisodes({
    ids: '77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf',
    market: 'ES',
  });

  console.log(data);
})();
```

## getUsersSavedEpisodes

Get a list of the episodes saved in the current Spotify user's library.

- HTTP Method: `GET`
- Endpoint: `/me/episodes`

**Parameters**

| Name   | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :----- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| market | string | ❌       | An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned.\<br/\> If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.\<br/\> _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._\<br/\> Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/). |
| limit  | number | ❌       | The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| offset | number | ❌       | The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

**Return Type**

`PagingSavedEpisodeObject`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.episodes.getUsersSavedEpisodes({
    market: 'ES',
    limit: 10,
    offset: 5,
  });

  console.log(data);
})();
```

## saveEpisodesUser

Save one or more episodes to the current user's library. **Note:** This endpoint is deprecated. Use [Save Items to Library](/documentation/web-api/reference/save-library-items) instead.

- HTTP Method: `PUT`
- Endpoint: `/me/episodes`

**Parameters**

| Name | Type                                                            | Required | Description                                                                                                     |
| :--- | :-------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------- |
| body | [SaveEpisodesUserRequest](../models/SaveEpisodesUserRequest.md) | ❌       | The request body.                                                                                               |
| ids  | string                                                          | ✅       | A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). Maximum: 50 IDs. |

**Example Usage Code Snippet**

```typescript
import { SaveEpisodesUserRequest, SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const saveEpisodesUserRequest: SaveEpisodesUserRequest = {
    ids: ['ids'],
  };

  const data = await spotifyWebApiSdk.episodes.saveEpisodesUser(saveEpisodesUserRequest, {
    ids: '77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf',
  });

  console.log(data);
})();
```

## removeEpisodesUser

Remove one or more episodes from the current user's library. **Note:** This endpoint is deprecated. Use [Remove Items from Library](/documentation/web-api/reference/remove-library-items) instead.

- HTTP Method: `DELETE`
- Endpoint: `/me/episodes`

**Parameters**

| Name | Type                                                                | Required | Description                                                                                                                                                                       |
| :--- | :------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| body | [RemoveEpisodesUserRequest](../models/RemoveEpisodesUserRequest.md) | ❌       | The request body.                                                                                                                                                                 |
| ids  | string                                                              | ✅       | A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M`. Maximum: 50 IDs. |

**Example Usage Code Snippet**

```typescript
import { RemoveEpisodesUserRequest, SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const removeEpisodesUserRequest: RemoveEpisodesUserRequest = {
    ids: ['ids'],
  };

  const data = await spotifyWebApiSdk.episodes.removeEpisodesUser(removeEpisodesUserRequest, {
    ids: '7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B',
  });

  console.log(data);
})();
```

## checkUsersSavedEpisodes

Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes' library. **Note:** This endpoint is deprecated. Use [Check User's Saved Items](/documentation/web-api/reference/check-library-contains) instead.

- HTTP Method: `GET`
- Endpoint: `/me/episodes/contains`

**Parameters**

| Name | Type   | Required | Description                                                                                                                      |
| :--- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------- |
| ids  | string | ✅       | A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the episodes. Maximum: 50 IDs. |

**Return Type**

`boolean[]`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.episodes.checkUsersSavedEpisodes({
    ids: '77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf',
  });

  console.log(data);
})();
```
