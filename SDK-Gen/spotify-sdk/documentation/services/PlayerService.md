# PlayerService

A list of all methods in the `PlayerService` service. Click on the method name to view detailed information about that method.

| Methods                                                                                   | Description                                                                                                                                                                                                                         |
| :---------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getInformationAboutTheUsersCurrentPlayback](#getinformationabouttheuserscurrentplayback) | Get information about the user’s current playback state, including track or episode, progress, and active device.                                                                                                                   |
| [transferAUsersPlayback](#transferausersplayback)                                         | Transfer playback to a new device and optionally begin playback. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.            |
| [getAUsersAvailableDevices](#getausersavailabledevices)                                   | Get information about a user’s available Spotify Connect devices. Some device models are not supported and will not be listed in the API response.                                                                                  |
| [getTheUsersCurrentlyPlayingTrack](#gettheuserscurrentlyplayingtrack)                     | Get the object currently being played on the user's Spotify account.                                                                                                                                                                |
| [startAUsersPlayback](#startausersplayback)                                               | Start a new context or resume current playback on the user's active device. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints. |
| [pauseAUsersPlayback](#pauseausersplayback)                                               | Pause playback on the user's account. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.                                       |
| [skipUsersPlaybackToNextTrack](#skipusersplaybacktonexttrack)                             | Skips to next track in the user’s queue. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.                                    |
| [skipUsersPlaybackToPreviousTrack](#skipusersplaybacktoprevioustrack)                     | Skips to previous track in the user’s queue. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.                                |
| [seekToPositionInCurrentlyPlayingTrack](#seektopositionincurrentlyplayingtrack)           | Seeks to the given position in the user’s currently playing track. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.          |
| [setRepeatModeOnUsersPlayback](#setrepeatmodeonusersplayback)                             | Set the repeat mode for the user's playback. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.                                |
| [setVolumeForUsersPlayback](#setvolumeforusersplayback)                                   | Set the volume for the user’s current playback device. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.                      |
| [toggleShuffleForUsersPlayback](#toggleshuffleforusersplayback)                           | Toggle shuffle on or off for user’s playback. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.                               |
| [getRecentlyPlayed](#getrecentlyplayed)                                                   | Get tracks from the current user's recently played tracks. _**Note**: Currently doesn't support podcast episodes._                                                                                                                  |
| [getQueue](#getqueue)                                                                     | Get the list of objects that make up the user's queue.                                                                                                                                                                              |
| [addToQueue](#addtoqueue)                                                                 | Add an item to be played next in the user's current playback queue. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.         |

## getInformationAboutTheUsersCurrentPlayback

Get information about the user’s current playback state, including track or episode, progress, and active device.

- HTTP Method: `GET`
- Endpoint: `/me/player`

**Parameters**

| Name            | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :-------------- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| market          | string | ❌       | An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned.\<br/\> If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.\<br/\> _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._\<br/\> Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/). |
| additionalTypes | string | ❌       | A comma-separated list of item types that your client supports besides the default `track` type. Valid types are: `track` and `episode`.\<br/\> _**Note**: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future._\<br/\> In addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the `type` field of each object.                                                                                                                                            |

**Return Type**

`CurrentlyPlayingContextObject`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.player.getInformationAboutTheUsersCurrentPlayback({
    market: 'ES',
    additionalTypes: 'additional_types',
  });

  console.log(data);
})();
```

## transferAUsersPlayback

Transfer playback to a new device and optionally begin playback. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.

- HTTP Method: `PUT`
- Endpoint: `/me/player`

**Parameters**

| Name | Type                                                                        | Required | Description       |
| :--- | :-------------------------------------------------------------------------- | :------- | :---------------- |
| body | [TransferAUsersPlaybackRequest](../models/TransferAUsersPlaybackRequest.md) | ❌       | The request body. |

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk, TransferAUsersPlaybackRequest } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const transferAUsersPlaybackRequest: TransferAUsersPlaybackRequest = {
    deviceIds: ['device_ids'],
    play: true,
  };

  const data = await spotifyWebApiSdk.player.transferAUsersPlayback(transferAUsersPlaybackRequest);

  console.log(data);
})();
```

## getAUsersAvailableDevices

Get information about a user’s available Spotify Connect devices. Some device models are not supported and will not be listed in the API response.

- HTTP Method: `GET`
- Endpoint: `/me/player/devices`

**Return Type**

`ManyDevices`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.player.getAUsersAvailableDevices();

  console.log(data);
})();
```

## getTheUsersCurrentlyPlayingTrack

Get the object currently being played on the user's Spotify account.

- HTTP Method: `GET`
- Endpoint: `/me/player/currently-playing`

**Parameters**

| Name            | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :-------------- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| market          | string | ❌       | An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned.\<br/\> If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.\<br/\> _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._\<br/\> Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/). |
| additionalTypes | string | ❌       | A comma-separated list of item types that your client supports besides the default `track` type. Valid types are: `track` and `episode`.\<br/\> _**Note**: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future._\<br/\> In addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the `type` field of each object.                                                                                                                                            |

**Return Type**

`CurrentlyPlayingContextObject`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.player.getTheUsersCurrentlyPlayingTrack({
    market: 'ES',
    additionalTypes: 'additional_types',
  });

  console.log(data);
})();
```

## startAUsersPlayback

Start a new context or resume current playback on the user's active device. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.

- HTTP Method: `PUT`
- Endpoint: `/me/player/play`

**Parameters**

| Name     | Type                                                                  | Required | Description                                                                                                        |
| :------- | :-------------------------------------------------------------------- | :------- | :----------------------------------------------------------------------------------------------------------------- |
| body     | [StartAUsersPlaybackRequest](../models/StartAUsersPlaybackRequest.md) | ❌       | The request body.                                                                                                  |
| deviceId | string                                                                | ❌       | The id of the device this command is targeting. If not supplied, the user's currently active device is the target. |

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk, StartAUsersPlaybackRequest } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const startAUsersPlaybackRequest: StartAUsersPlaybackRequest = {
    contextUri: 'context_uri',
    uris: ['uris'],
    offset: {},
    positionMs: 6,
  };

  const data = await spotifyWebApiSdk.player.startAUsersPlayback(startAUsersPlaybackRequest, {
    deviceId: '0d1841b0976bae2a3a310dd74c0f3df354899bc8',
  });

  console.log(data);
})();
```

## pauseAUsersPlayback

Pause playback on the user's account. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.

- HTTP Method: `PUT`
- Endpoint: `/me/player/pause`

**Parameters**

| Name     | Type   | Required | Description                                                                                                        |
| :------- | :----- | :------- | :----------------------------------------------------------------------------------------------------------------- |
| deviceId | string | ❌       | The id of the device this command is targeting. If not supplied, the user's currently active device is the target. |

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.player.pauseAUsersPlayback({
    deviceId: '0d1841b0976bae2a3a310dd74c0f3df354899bc8',
  });

  console.log(data);
})();
```

## skipUsersPlaybackToNextTrack

Skips to next track in the user’s queue. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.

- HTTP Method: `POST`
- Endpoint: `/me/player/next`

**Parameters**

| Name     | Type   | Required | Description                                                                                                        |
| :------- | :----- | :------- | :----------------------------------------------------------------------------------------------------------------- |
| deviceId | string | ❌       | The id of the device this command is targeting. If not supplied, the user's currently active device is the target. |

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.player.skipUsersPlaybackToNextTrack({
    deviceId: '0d1841b0976bae2a3a310dd74c0f3df354899bc8',
  });

  console.log(data);
})();
```

## skipUsersPlaybackToPreviousTrack

Skips to previous track in the user’s queue. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.

- HTTP Method: `POST`
- Endpoint: `/me/player/previous`

**Parameters**

| Name     | Type   | Required | Description                                                                                                        |
| :------- | :----- | :------- | :----------------------------------------------------------------------------------------------------------------- |
| deviceId | string | ❌       | The id of the device this command is targeting. If not supplied, the user's currently active device is the target. |

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.player.skipUsersPlaybackToPreviousTrack({
    deviceId: '0d1841b0976bae2a3a310dd74c0f3df354899bc8',
  });

  console.log(data);
})();
```

## seekToPositionInCurrentlyPlayingTrack

Seeks to the given position in the user’s currently playing track. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.

- HTTP Method: `PUT`
- Endpoint: `/me/player/seek`

**Parameters**

| Name       | Type   | Required | Description                                                                                                                                                                                  |
| :--------- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| positionMs | number | ✅       | The position in milliseconds to seek to. Must be a positive number. Passing in a position that is greater than the length of the track will cause the player to start playing the next song. |
| deviceId   | string | ❌       | The id of the device this command is targeting. If not supplied, the user's currently active device is the target.                                                                           |

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.player.seekToPositionInCurrentlyPlayingTrack({
    positionMs: 25000,
    deviceId: '0d1841b0976bae2a3a310dd74c0f3df354899bc8',
  });

  console.log(data);
})();
```

## setRepeatModeOnUsersPlayback

Set the repeat mode for the user's playback. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.

- HTTP Method: `PUT`
- Endpoint: `/me/player/repeat`

**Parameters**

| Name     | Type   | Required | Description                                                                                                                                                                 |
| :------- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| state    | string | ✅       | **track**, **context** or **off**.\<br/\> **track** will repeat the current track.\<br/\> **context** will repeat the current context.\<br/\> **off** will turn repeat off. |
| deviceId | string | ❌       | The id of the device this command is targeting. If not supplied, the user's currently active device is the target.                                                          |

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.player.setRepeatModeOnUsersPlayback({
    state: 'context',
    deviceId: '0d1841b0976bae2a3a310dd74c0f3df354899bc8',
  });

  console.log(data);
})();
```

## setVolumeForUsersPlayback

Set the volume for the user’s current playback device. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.

- HTTP Method: `PUT`
- Endpoint: `/me/player/volume`

**Parameters**

| Name          | Type   | Required | Description                                                                                                        |
| :------------ | :----- | :------- | :----------------------------------------------------------------------------------------------------------------- |
| volumePercent | number | ✅       | The volume to set. Must be a value from 0 to 100 inclusive.                                                        |
| deviceId      | string | ❌       | The id of the device this command is targeting. If not supplied, the user's currently active device is the target. |

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.player.setVolumeForUsersPlayback({
    volumePercent: 50,
    deviceId: '0d1841b0976bae2a3a310dd74c0f3df354899bc8',
  });

  console.log(data);
})();
```

## toggleShuffleForUsersPlayback

Toggle shuffle on or off for user’s playback. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.

- HTTP Method: `PUT`
- Endpoint: `/me/player/shuffle`

**Parameters**

| Name     | Type    | Required | Description                                                                                                        |
| :------- | :------ | :------- | :----------------------------------------------------------------------------------------------------------------- |
| state    | boolean | ✅       | **true** : Shuffle user's playback.\<br/\> **false** : Do not shuffle user's playback.                             |
| deviceId | string  | ❌       | The id of the device this command is targeting. If not supplied, the user's currently active device is the target. |

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.player.toggleShuffleForUsersPlayback({
    state: true,
    deviceId: '0d1841b0976bae2a3a310dd74c0f3df354899bc8',
  });

  console.log(data);
})();
```

## getRecentlyPlayed

Get tracks from the current user's recently played tracks. _**Note**: Currently doesn't support podcast episodes._

- HTTP Method: `GET`
- Endpoint: `/me/player/recently-played`

**Parameters**

| Name   | Type   | Required | Description                                                                                                                                                   |
| :----- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| limit  | number | ❌       | The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.                                                                                  |
| after  | number | ❌       | A Unix timestamp in milliseconds. Returns all items after (but not including) this cursor position. If `after` is specified, `before` must not be specified.  |
| before | number | ❌       | A Unix timestamp in milliseconds. Returns all items before (but not including) this cursor position. If `before` is specified, `after` must not be specified. |

**Return Type**

`CursorPagingPlayHistoryObject`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.player.getRecentlyPlayed({
    limit: 10,
    after: 1484811043508,
    before: 6,
  });

  console.log(data);
})();
```

## getQueue

Get the list of objects that make up the user's queue.

- HTTP Method: `GET`
- Endpoint: `/me/player/queue`

**Return Type**

`QueueObject`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.player.getQueue();

  console.log(data);
})();
```

## addToQueue

Add an item to be played next in the user's current playback queue. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.

- HTTP Method: `POST`
- Endpoint: `/me/player/queue`

**Parameters**

| Name     | Type   | Required | Description                                                                                                        |
| :------- | :----- | :------- | :----------------------------------------------------------------------------------------------------------------- |
| uri      | string | ✅       | The uri of the item to add to the queue. Must be a track or an episode uri.                                        |
| deviceId | string | ❌       | The id of the device this command is targeting. If not supplied, the user's currently active device is the target. |

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.player.addToQueue({
    uri: 'spotify:track:4iV5W9uYEdYUVa79Axb7Rh',
    deviceId: '0d1841b0976bae2a3a310dd74c0f3df354899bc8',
  });

  console.log(data);
})();
```
