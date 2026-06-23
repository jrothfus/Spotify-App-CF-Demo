# UsersService

A list of all methods in the `UsersService` service. Click on the method name to view detailed information about that method.

| Methods                                                     | Description                                                                                                                                                                                                                       |
| :---------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getCurrentUsersProfile](#getcurrentusersprofile)           | Get detailed profile information about the current user (including the current user's username).                                                                                                                                  |
| [getUsersTopArtistsAndTracks](#getuserstopartistsandtracks) | Get the current user's top artists or tracks based on calculated affinity.                                                                                                                                                        |
| [getUsersProfile](#getusersprofile)                         | Get public profile information about a Spotify user.                                                                                                                                                                              |
| [followPlaylist](#followplaylist)                           | Add the current user as a follower of a playlist. **Note:** This endpoint is deprecated. Use [Save Items to Library](/documentation/web-api/reference/save-library-items) instead.                                                |
| [unfollowPlaylist](#unfollowplaylist)                       | Remove the current user as a follower of a playlist. **Note:** This endpoint is deprecated. Use [Remove Items from Library](/documentation/web-api/reference/remove-library-items) instead.                                       |
| [getFollowed](#getfollowed)                                 | Get the current user's followed artists.                                                                                                                                                                                          |
| [followArtistsUsers](#followartistsusers)                   | Add the current user as a follower of one or more artists or other Spotify users. **Note:** This endpoint is deprecated. Use [Save Items to Library](/documentation/web-api/reference/save-library-items) instead.                |
| [unfollowArtistsUsers](#unfollowartistsusers)               | Remove the current user as a follower of one or more artists or other Spotify users. **Note:** This endpoint is deprecated. Use [Remove Items from Library](/documentation/web-api/reference/remove-library-items) instead.       |
| [checkCurrentUserFollows](#checkcurrentuserfollows)         | Check to see if the current user is following one or more artists or other Spotify users. **Note:** This endpoint is deprecated. Use [Check User's Saved Items](/documentation/web-api/reference/check-library-contains) instead. |
| [checkIfUserFollowsPlaylist](#checkifuserfollowsplaylist)   | Check to see if the current user is following a specified playlist. **Note:** This endpoint is deprecated. Use [Check User's Saved Items](/documentation/web-api/reference/check-library-contains) instead.                       |

## getCurrentUsersProfile

Get detailed profile information about the current user (including the current user's username).

- HTTP Method: `GET`
- Endpoint: `/me`

**Return Type**

`PrivateUserObject`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.users.getCurrentUsersProfile();

  console.log(data);
})();
```

## getUsersTopArtistsAndTracks

Get the current user's top artists or tracks based on calculated affinity.

- HTTP Method: `GET`
- Endpoint: `/me/top/{type}`

**Parameters**

| Name      | Type                                                                            | Required | Description                                                                                                                                                                                                                                                                      |
| :-------- | :------------------------------------------------------------------------------ | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type      | [GetUsersTopArtistsAndTracksType](../models/GetUsersTopArtistsAndTracksType.md) | ✅       |                                                                                                                                                                                                                                                                                  |
| timeRange | string                                                                          | ❌       | Over what time frame the affinities are computed. Valid values: `long_term` (calculated from ~1 year of data and including all new data as it becomes available), `medium_term` (approximately last 6 months), `short_term` (approximately last 4 weeks). Default: `medium_term` |
| limit     | number                                                                          | ❌       | The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.                                                                                                                                                                                                     |
| offset    | number                                                                          | ❌       | The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.                                                                                                                                                                 |

**Return Type**

`PagingArtistOrTrackObject`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const getUsersTopArtistsAndTracksType = 'artists';

  const data = await spotifyWebApiSdk.users.getUsersTopArtistsAndTracks(
    getUsersTopArtistsAndTracksType,
    {
      timeRange: 'medium_term',
      limit: 10,
      offset: 5,
    },
  );

  console.log(data);
})();
```

## getUsersProfile

Get public profile information about a Spotify user.

- HTTP Method: `GET`
- Endpoint: `/users/{user_id}`

**Parameters**

| Name   | Type   | Required | Description                                                                     |
| :----- | :----- | :------- | :------------------------------------------------------------------------------ |
| userId | string | ✅       | The user's [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids). |

**Return Type**

`PublicUserObject`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.users.getUsersProfile('smedjan');

  console.log(data);
})();
```

## followPlaylist

Add the current user as a follower of a playlist. **Note:** This endpoint is deprecated. Use [Save Items to Library](/documentation/web-api/reference/save-library-items) instead.

- HTTP Method: `PUT`
- Endpoint: `/playlists/{playlist_id}/followers`

**Parameters**

| Name       | Type                                                        | Required | Description                                                                         |
| :--------- | :---------------------------------------------------------- | :------- | :---------------------------------------------------------------------------------- |
| body       | [FollowPlaylistRequest](../models/FollowPlaylistRequest.md) | ❌       | The request body.                                                                   |
| playlistId | string                                                      | ✅       | The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist. |

**Example Usage Code Snippet**

```typescript
import { FollowPlaylistRequest, SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const followPlaylistRequest: FollowPlaylistRequest = {
    public: true,
  };

  const data = await spotifyWebApiSdk.users.followPlaylist(
    '3cEYpjA9oz9GiPac4AsH4n',
    followPlaylistRequest,
  );

  console.log(data);
})();
```

## unfollowPlaylist

Remove the current user as a follower of a playlist. **Note:** This endpoint is deprecated. Use [Remove Items from Library](/documentation/web-api/reference/remove-library-items) instead.

- HTTP Method: `DELETE`
- Endpoint: `/playlists/{playlist_id}/followers`

**Parameters**

| Name       | Type   | Required | Description                                                                         |
| :--------- | :----- | :------- | :---------------------------------------------------------------------------------- |
| playlistId | string | ✅       | The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist. |

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.users.unfollowPlaylist('3cEYpjA9oz9GiPac4AsH4n');

  console.log(data);
})();
```

## getFollowed

Get the current user's followed artists.

- HTTP Method: `GET`
- Endpoint: `/me/following`

**Parameters**

| Name  | Type                                            | Required | Description                                                                     |
| :---- | :---------------------------------------------- | :------- | :------------------------------------------------------------------------------ |
| type  | [GetFollowedType](../models/GetFollowedType.md) | ✅       |                                                                                 |
| after | string                                          | ❌       | The last artist ID retrieved from the previous request.                         |
| limit | number                                          | ❌       | The maximum number of items to return. Default: 20\. Minimum: 1\. Maximum: 50\. |

**Return Type**

`CursorPagedArtists`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const getFollowedType = 'artist';

  const data = await spotifyWebApiSdk.users.getFollowed({
    type: getFollowedType,
    after: '0I2XqVXqHScXjHhk6AYYRe',
    limit: 10,
  });

  console.log(data);
})();
```

## followArtistsUsers

Add the current user as a follower of one or more artists or other Spotify users. **Note:** This endpoint is deprecated. Use [Save Items to Library](/documentation/web-api/reference/save-library-items) instead.

- HTTP Method: `PUT`
- Endpoint: `/me/following`

**Parameters**

| Name | Type                                                                | Required | Description                                                                                                                                                       |
| :--- | :------------------------------------------------------------------ | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| body | [FollowArtistsUsersRequest](../models/FollowArtistsUsersRequest.md) | ❌       | The request body.                                                                                                                                                 |
| type | [FollowArtistsUsersType](../models/FollowArtistsUsersType.md)       | ✅       |                                                                                                                                                                   |
| ids  | string                                                              | ✅       | A comma-separated list of the artist or the user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). A maximum of 50 IDs can be sent in one request. |

**Example Usage Code Snippet**

```typescript
import { FollowArtistsUsersRequest, SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const followArtistsUsersType = 'artist';

  const followArtistsUsersRequest: FollowArtistsUsersRequest = {
    ids: ['ids'],
  };

  const data = await spotifyWebApiSdk.users.followArtistsUsers(followArtistsUsersRequest, {
    type: followArtistsUsersType,
    ids: '2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6',
  });

  console.log(data);
})();
```

## unfollowArtistsUsers

Remove the current user as a follower of one or more artists or other Spotify users. **Note:** This endpoint is deprecated. Use [Remove Items from Library](/documentation/web-api/reference/remove-library-items) instead.

- HTTP Method: `DELETE`
- Endpoint: `/me/following`

**Parameters**

| Name | Type                                                                    | Required | Description                                                                                                                                                                                                                         |
| :--- | :---------------------------------------------------------------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| body | [UnfollowArtistsUsersRequest](../models/UnfollowArtistsUsersRequest.md) | ❌       | The request body.                                                                                                                                                                                                                   |
| type | [UnfollowArtistsUsersType](../models/UnfollowArtistsUsersType.md)       | ✅       |                                                                                                                                                                                                                                     |
| ids  | string                                                                  | ✅       | A comma-separated list of the artist or the user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=74ASZWbe4lXaubB36ztrGX,08td7MxkoHQkXnWAYD8d6Q`. A maximum of 50 IDs can be sent in one request. |

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk, UnfollowArtistsUsersRequest } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const unfollowArtistsUsersType = 'artist';

  const unfollowArtistsUsersRequest: UnfollowArtistsUsersRequest = {
    ids: ['ids'],
  };

  const data = await spotifyWebApiSdk.users.unfollowArtistsUsers(unfollowArtistsUsersRequest, {
    type: unfollowArtistsUsersType,
    ids: '2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6',
  });

  console.log(data);
})();
```

## checkCurrentUserFollows

Check to see if the current user is following one or more artists or other Spotify users. **Note:** This endpoint is deprecated. Use [Check User's Saved Items](/documentation/web-api/reference/check-library-contains) instead.

- HTTP Method: `GET`
- Endpoint: `/me/following/contains`

**Parameters**

| Name | Type                                                                    | Required | Description                                                                                                                                                                                                                                  |
| :--- | :---------------------------------------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type | [CheckCurrentUserFollowsType](../models/CheckCurrentUserFollowsType.md) | ✅       |                                                                                                                                                                                                                                              |
| ids  | string                                                                  | ✅       | A comma-separated list of the artist or the user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) to check. For example: `ids=74ASZWbe4lXaubB36ztrGX,08td7MxkoHQkXnWAYD8d6Q`. A maximum of 50 IDs can be sent in one request. |

**Return Type**

`boolean[]`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const checkCurrentUserFollowsType = 'artist';

  const data = await spotifyWebApiSdk.users.checkCurrentUserFollows({
    type: checkCurrentUserFollowsType,
    ids: '2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6',
  });

  console.log(data);
})();
```

## checkIfUserFollowsPlaylist

Check to see if the current user is following a specified playlist. **Note:** This endpoint is deprecated. Use [Check User's Saved Items](/documentation/web-api/reference/check-library-contains) instead.

- HTTP Method: `GET`
- Endpoint: `/playlists/{playlist_id}/followers/contains`

**Parameters**

| Name       | Type   | Required | Description                                                                                                                                      |
| :--------- | :----- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| playlistId | string | ✅       | The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.                                                              |
| ids        | string | ❌       | **Deprecated** A single item list containing current user's [Spotify Username](/documentation/web-api/concepts/spotify-uris-ids). Maximum: 1 id. |

**Return Type**

`boolean[]`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.users.checkIfUserFollowsPlaylist('3cEYpjA9oz9GiPac4AsH4n', {
    ids: 'jmperezperez',
  });

  console.log(data);
})();
```
