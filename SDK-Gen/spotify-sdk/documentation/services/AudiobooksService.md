# AudiobooksService

A list of all methods in the `AudiobooksService` service. Click on the method name to view detailed information about that method.

| Methods                                                 | Description                                                                                                                                                                                                                      |
| :------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getAnAudiobook](#getanaudiobook)                       | Get Spotify catalog information for a single audiobook. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.                                                                     |
| [getMultipleAudiobooks](#getmultipleaudiobooks)         | Get Spotify catalog information for several audiobooks identified by their Spotify IDs. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.                                     |
| [getAudiobookChapters](#getaudiobookchapters)           | Get Spotify catalog information about an audiobook's chapters. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.                                                              |
| [getUsersSavedAudiobooks](#getuserssavedaudiobooks)     | Get a list of the audiobooks saved in the current Spotify user's 'Your Music' library.                                                                                                                                           |
| [saveAudiobooksUser](#saveaudiobooksuser)               | Save one or more audiobooks to the current Spotify user's library. **Note:** This endpoint is deprecated. Use [Save Items to Library](/documentation/web-api/reference/save-library-items) instead.                              |
| [removeAudiobooksUser](#removeaudiobooksuser)           | Remove one or more audiobooks from the Spotify user's library. **Note:** This endpoint is deprecated. Use [Remove Items from Library](/documentation/web-api/reference/remove-library-items) instead.                            |
| [checkUsersSavedAudiobooks](#checkuserssavedaudiobooks) | Check if one or more audiobooks are already saved in the current Spotify user's library. **Note:** This endpoint is deprecated. Use [Check User's Saved Items](/documentation/web-api/reference/check-library-contains) instead. |

## getAnAudiobook

Get Spotify catalog information for a single audiobook. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.

- HTTP Method: `GET`
- Endpoint: `/audiobooks/{id}`

**Parameters**

| Name   | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :----- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id     | string | ✅       | The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the audiobook.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| market | string | ❌       | An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned.\<br/\> If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.\<br/\> _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._\<br/\> Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/). |

**Return Type**

`AudiobookObject`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.audiobooks.getAnAudiobook('7iHfbu1YPACw6oZPAFJtqe', {
    market: 'ES',
  });

  console.log(data);
})();
```

## getMultipleAudiobooks

Get Spotify catalog information for several audiobooks identified by their Spotify IDs. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.

- HTTP Method: `GET`
- Endpoint: `/audiobooks`

**Parameters**

| Name   | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :----- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ids    | string | ✅       | A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ`. Maximum: 50 IDs.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| market | string | ❌       | An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned.\<br/\> If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.\<br/\> _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._\<br/\> Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/). |

**Return Type**

`ManyAudiobooks`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.audiobooks.getMultipleAudiobooks({
    ids: '18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe',
    market: 'ES',
  });

  console.log(data);
})();
```

## getAudiobookChapters

Get Spotify catalog information about an audiobook's chapters. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.

- HTTP Method: `GET`
- Endpoint: `/audiobooks/{id}/chapters`

**Parameters**

| Name   | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :----- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id     | string | ✅       | The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the audiobook.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| market | string | ❌       | An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned.\<br/\> If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.\<br/\> _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._\<br/\> Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/). |
| limit  | number | ❌       | The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| offset | number | ❌       | The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

**Return Type**

`PagingSimplifiedChapterObject`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.audiobooks.getAudiobookChapters('7iHfbu1YPACw6oZPAFJtqe', {
    market: 'ES',
    limit: 10,
    offset: 5,
  });

  console.log(data);
})();
```

## getUsersSavedAudiobooks

Get a list of the audiobooks saved in the current Spotify user's 'Your Music' library.

- HTTP Method: `GET`
- Endpoint: `/me/audiobooks`

**Parameters**

| Name   | Type   | Required | Description                                                                                                      |
| :----- | :----- | :------- | :--------------------------------------------------------------------------------------------------------------- |
| limit  | number | ❌       | The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.                                     |
| offset | number | ❌       | The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items. |

**Return Type**

`PagingSimplifiedAudiobookObject`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.audiobooks.getUsersSavedAudiobooks({
    limit: 10,
    offset: 5,
  });

  console.log(data);
})();
```

## saveAudiobooksUser

Save one or more audiobooks to the current Spotify user's library. **Note:** This endpoint is deprecated. Use [Save Items to Library](/documentation/web-api/reference/save-library-items) instead.

- HTTP Method: `PUT`
- Endpoint: `/me/audiobooks`

**Parameters**

| Name | Type   | Required | Description                                                                                                                                                                       |
| :--- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ids  | string | ✅       | A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ`. Maximum: 50 IDs. |

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.audiobooks.saveAudiobooksUser({
    ids: '18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe',
  });

  console.log(data);
})();
```

## removeAudiobooksUser

Remove one or more audiobooks from the Spotify user's library. **Note:** This endpoint is deprecated. Use [Remove Items from Library](/documentation/web-api/reference/remove-library-items) instead.

- HTTP Method: `DELETE`
- Endpoint: `/me/audiobooks`

**Parameters**

| Name | Type   | Required | Description                                                                                                                                                                       |
| :--- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ids  | string | ✅       | A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ`. Maximum: 50 IDs. |

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.audiobooks.removeAudiobooksUser({
    ids: '18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe',
  });

  console.log(data);
})();
```

## checkUsersSavedAudiobooks

Check if one or more audiobooks are already saved in the current Spotify user's library. **Note:** This endpoint is deprecated. Use [Check User's Saved Items](/documentation/web-api/reference/check-library-contains) instead.

- HTTP Method: `GET`
- Endpoint: `/me/audiobooks/contains`

**Parameters**

| Name | Type   | Required | Description                                                                                                                                                                       |
| :--- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ids  | string | ✅       | A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ`. Maximum: 50 IDs. |

**Return Type**

`boolean[]`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.audiobooks.checkUsersSavedAudiobooks({
    ids: '18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe',
  });

  console.log(data);
})();
```
