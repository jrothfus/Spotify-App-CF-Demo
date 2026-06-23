# PlaylistsService

A list of all methods in the `PlaylistsService` service. Click on the method name to view detailed information about that method.

| Methods                                                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| :------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getPlaylist](#getplaylist)                                         | Get a playlist owned by a Spotify user.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [changePlaylistDetails](#changeplaylistdetails)                     | Change a playlist's name and public/private state. (The user must, of course, own the playlist.)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [getPlaylistsTracks](#getplayliststracks)                           | **Deprecated:** Use [Get Playlist Items](/documentation/web-api/reference/get-playlists-items) instead. Get full details of the items of a playlist owned by a Spotify user.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [addTracksToPlaylist](#addtrackstoplaylist)                         | **Deprecated:** Use [Add Items to Playlist](/documentation/web-api/reference/add-items-to-playlist) instead. Add one or more items to a user's playlist.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [reorderOrReplacePlaylistsTracks](#reorderorreplaceplayliststracks) | **Deprecated:** Use [Update Playlist Items](/documentation/web-api/reference/reorder-or-replace-playlists-items) instead. Either reorder or replace items in a playlist depending on the request's parameters. To reorder items, include `range_start`, `insert_before`, `range_length` and `snapshot_id` in the request's body. To replace items, include `uris` as either a query parameter or in the request's body. Replacing items in a playlist will overwrite its existing items. This operation can be used for replacing or clearing items in a playlist. \<br/\> **Note**: Replace and reorder are mutually exclusive operations which share the same endpoint, but have different parameters. These operations can't be applied together in a single request. |
| [removeTracksPlaylist](#removetracksplaylist)                       | **Deprecated:** Use [Remove Playlist Items](/documentation/web-api/reference/remove-items-playlist) instead. Remove one or more items from a user's playlist.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [getPlaylistsItems](#getplaylistsitems)                             | Get full details of the items of a playlist owned by a Spotify user. **Note**: This endpoint is only accessible for playlists owned by the current user or playlists the user is a collaborator of. A `403 Forbidden` status code will be returned if the user is neither the owner nor a collaborator of the playlist.                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [addItemsToPlaylist](#additemstoplaylist)                           | Add one or more items to a user's playlist.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [reorderOrReplacePlaylistsItems](#reorderorreplaceplaylistsitems)   | Either reorder or replace items in a playlist depending on the request's parameters. To reorder items, include `range_start`, `insert_before`, `range_length` and `snapshot_id` in the request's body. To replace items, include `uris` as either a query parameter or in the request's body. Replacing items in a playlist will overwrite its existing items. This operation can be used for replacing or clearing items in a playlist. \<br/\> **Note**: Replace and reorder are mutually exclusive operations which share the same endpoint, but have different parameters. These operations can't be applied together in a single request.                                                                                                                           |
| [removeItemsPlaylist](#removeitemsplaylist)                         | Remove one or more items from a user's playlist.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [getAListOfCurrentUsersPlaylists](#getalistofcurrentusersplaylists) | Get a list of the playlists owned or followed by the current Spotify user.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [createPlaylist](#createplaylist)                                   | Create a playlist for the current Spotify user. (The playlist will be empty until you [add tracks](/documentation/web-api/reference/add-tracks-to-playlist).) Each user is generally limited to a maximum of 11000 playlists.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [getListUsersPlaylists](#getlistusersplaylists)                     | Get a list of the playlists owned or followed by a Spotify user.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [createPlaylistForUser](#createplaylistforuser)                     | **Deprecated**: Use [Create Playlist](/documentation/web-api/reference/create-playlist) instead. Create a playlist for a Spotify user. (The playlist will be empty until you [add tracks](/documentation/web-api/reference/add-tracks-to-playlist).) Each user is generally limited to a maximum of 11000 playlists.                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [getFeaturedPlaylists](#getfeaturedplaylists)                       | Get a list of Spotify featured playlists (shown, for example, on a Spotify player's 'Browse' tab).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [getACategoriesPlaylists](#getacategoriesplaylists)                 | Get a list of Spotify playlists tagged with a particular category.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [getPlaylistCover](#getplaylistcover)                               | Get the current image associated with a specific playlist.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [uploadCustomPlaylistCover](#uploadcustomplaylistcover)             | Replace the image used to represent a specific playlist.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

## getPlaylist

Get a playlist owned by a Spotify user.

- HTTP Method: `GET`
- Endpoint: `/playlists/{playlist_id}`

**Parameters**

| Name            | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :-------------- | :----- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| playlistId      | string | ✅       | The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| market          | string | ❌       | An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned.\<br/\> If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.\<br/\> _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._\<br/\> Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).                                                                                                                |
| fields          | string | ❌       | Filters for the query: a comma-separated list of the fields to return. If omitted, all fields are returned. For example, to get just the playlist''s description and URI: `fields=description,uri`. A dot separator can be used to specify non-reoccurring fields, while parentheses can be used to specify reoccurring fields within objects. For example, to get just the added date and user ID of the adder: `fields=tracks.items(added_at,added_by.id)`. Use multiple parentheses to drill down into nested objects, for example: `fields=tracks.items(track(name,href,album(name,href)))`. Fields can be excluded by prefixing them with an exclamation mark, for example: `fields=tracks.items(track(name,href,album(!name,href)))` |
| additionalTypes | string | ❌       | A comma-separated list of item types that your client supports besides the default `track` type. Valid types are: `track` and `episode`.\<br/\> _**Note**: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future._\<br/\> In addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the `type` field of each object.                                                                                                                                                                                                                                                           |

**Return Type**

`PlaylistObject`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.playlists.getPlaylist('3cEYpjA9oz9GiPac4AsH4n', {
    market: 'ES',
    fields: 'items(added_by.id,track(name,href,album(name,href)))',
    additionalTypes: 'additional_types',
  });

  console.log(data);
})();
```

## changePlaylistDetails

Change a playlist's name and public/private state. (The user must, of course, own the playlist.)

- HTTP Method: `PUT`
- Endpoint: `/playlists/{playlist_id}`

**Parameters**

| Name       | Type                                                                      | Required | Description                                                                         |
| :--------- | :------------------------------------------------------------------------ | :------- | :---------------------------------------------------------------------------------- |
| body       | [ChangePlaylistDetailsRequest](../models/ChangePlaylistDetailsRequest.md) | ❌       | The request body.                                                                   |
| playlistId | string                                                                    | ✅       | The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist. |

**Example Usage Code Snippet**

```typescript
import { ChangePlaylistDetailsRequest, SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const changePlaylistDetailsRequest: ChangePlaylistDetailsRequest = {
    name: 'name',
    public: true,
    collaborative: true,
    description: 'description',
  };

  const data = await spotifyWebApiSdk.playlists.changePlaylistDetails(
    '3cEYpjA9oz9GiPac4AsH4n',
    changePlaylistDetailsRequest,
  );

  console.log(data);
})();
```

## getPlaylistsTracks

**Deprecated:** Use [Get Playlist Items](/documentation/web-api/reference/get-playlists-items) instead. Get full details of the items of a playlist owned by a Spotify user.

- HTTP Method: `GET`
- Endpoint: `/playlists/{playlist_id}/tracks`

**Parameters**

| Name            | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| :-------------- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| playlistId      | string | ✅       | The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| market          | string | ❌       | An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned.\<br/\> If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.\<br/\> _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._\<br/\> Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).                                                                                                                                         |
| fields          | string | ❌       | Filters for the query: a comma-separated list of the fields to return. If omitted, all fields are returned. For example, to get just the total number of items and the request limit:\<br/\>`fields=total,limit`\<br/\>A dot separator can be used to specify non-reoccurring fields, while parentheses can be used to specify reoccurring fields within objects. For example, to get just the added date and user ID of the adder:\<br/\>`fields=items(added_at,added_by.id)`\<br/\>Use multiple parentheses to drill down into nested objects, for example:\<br/\>`fields=items(track(name,href,album(name,href)))`\<br/\>Fields can be excluded by prefixing them with an exclamation mark, for example:\<br/\>`fields=items.track.album(!external_urls,images)` |
| limit           | number | ❌       | The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| offset          | number | ❌       | The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| additionalTypes | string | ❌       | A comma-separated list of item types that your client supports besides the default `track` type. Valid types are: `track` and `episode`.\<br/\> _**Note**: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future._\<br/\> In addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the `type` field of each object.                                                                                                                                                                                                                                                                                    |

**Return Type**

`PagingPlaylistTrackObject`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.playlists.getPlaylistsTracks('3cEYpjA9oz9GiPac4AsH4n', {
    market: 'ES',
    fields: 'items(added_by.id,track(name,href,album(name,href)))',
    limit: 10,
    offset: 5,
    additionalTypes: 'additional_types',
  });

  console.log(data);
})();
```

## addTracksToPlaylist

**Deprecated:** Use [Add Items to Playlist](/documentation/web-api/reference/add-items-to-playlist) instead. Add one or more items to a user's playlist.

- HTTP Method: `POST`
- Endpoint: `/playlists/{playlist_id}/tracks`

**Parameters**

| Name       | Type                                                                  | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| :--------- | :-------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| body       | [AddTracksToPlaylistRequest](../models/AddTracksToPlaylistRequest.md) | ❌       | The request body.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| playlistId | string                                                                | ✅       | The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| position   | number                                                                | ❌       | The position to insert the items, a zero-based index. For example, to insert the items in the first position: `position=0`; to insert the items in the third position: `position=2`. If omitted, the items will be appended to the playlist. Items are added in the order they are listed in the query string or request body.                                                                                                                                                                                                                                                                |
| uris       | string                                                                | ❌       | A comma-separated list of [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) to add, can be track or episode URIs. For example:\<br/\>`uris=spotify:track:4iV5W9uYEdYUVa79Axb7Rh, spotify:track:1301WleyT98MSxVHPZCA6M, spotify:episode:512ojhOuo1ktJprKbVcKyQ`\<br/\>A maximum of 100 items can be added in one request. \<br/\> _**Note**: it is likely that passing a large number of item URIs as a query parameter will exceed the maximum length of the request URI. When adding a large number of items, it is recommended to pass them in the request body, see below._ |

**Return Type**

`PlaylistSnapshotId`

**Example Usage Code Snippet**

```typescript
import { AddTracksToPlaylistRequest, SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const addTracksToPlaylistRequest: AddTracksToPlaylistRequest = {
    uris: ['uris'],
    position: 4,
  };

  const data = await spotifyWebApiSdk.playlists.addTracksToPlaylist(
    '3cEYpjA9oz9GiPac4AsH4n',
    addTracksToPlaylistRequest,
    {
      position: 10,
      uris: 'spotify:track:4iV5W9uYEdYUVa79Axb7Rh,spotify:track:1301WleyT98MSxVHPZCA6M',
    },
  );

  console.log(data);
})();
```

## reorderOrReplacePlaylistsTracks

**Deprecated:** Use [Update Playlist Items](/documentation/web-api/reference/reorder-or-replace-playlists-items) instead. Either reorder or replace items in a playlist depending on the request's parameters. To reorder items, include `range_start`, `insert_before`, `range_length` and `snapshot_id` in the request's body. To replace items, include `uris` as either a query parameter or in the request's body. Replacing items in a playlist will overwrite its existing items. This operation can be used for replacing or clearing items in a playlist. \<br/\> **Note**: Replace and reorder are mutually exclusive operations which share the same endpoint, but have different parameters. These operations can't be applied together in a single request.

- HTTP Method: `PUT`
- Endpoint: `/playlists/{playlist_id}/tracks`

**Parameters**

| Name       | Type                                                                                          | Required | Description                                                                                                                                                                                                                                                                                                                   |
| :--------- | :-------------------------------------------------------------------------------------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| body       | [ReorderOrReplacePlaylistsTracksRequest](../models/ReorderOrReplacePlaylistsTracksRequest.md) | ❌       | The request body.                                                                                                                                                                                                                                                                                                             |
| playlistId | string                                                                                        | ✅       | The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.                                                                                                                                                                                                                                           |
| uris       | string                                                                                        | ❌       | A comma-separated list of [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) to set, can be track or episode URIs. For example: `uris=spotify:track:4iV5W9uYEdYUVa79Axb7Rh,spotify:track:1301WleyT98MSxVHPZCA6M,spotify:episode:512ojhOuo1ktJprKbVcKyQ`\<br/\>A maximum of 100 items can be set in one request. |

**Return Type**

`PlaylistSnapshotId`

**Example Usage Code Snippet**

```typescript
import { ReorderOrReplacePlaylistsTracksRequest, SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const reorderOrReplacePlaylistsTracksRequest: ReorderOrReplacePlaylistsTracksRequest = {
    uris: ['uris'],
    rangeStart: 6,
    insertBefore: 123,
    rangeLength: 10,
    snapshotId: 'snapshot_id',
  };

  const data = await spotifyWebApiSdk.playlists.reorderOrReplacePlaylistsTracks(
    '3cEYpjA9oz9GiPac4AsH4n',
    reorderOrReplacePlaylistsTracksRequest,
    {
      uris: 'uris',
    },
  );

  console.log(data);
})();
```

## removeTracksPlaylist

**Deprecated:** Use [Remove Playlist Items](/documentation/web-api/reference/remove-items-playlist) instead. Remove one or more items from a user's playlist.

- HTTP Method: `DELETE`
- Endpoint: `/playlists/{playlist_id}/tracks`

**Parameters**

| Name       | Type                                                                    | Required | Description                                                                         |
| :--------- | :---------------------------------------------------------------------- | :------- | :---------------------------------------------------------------------------------- |
| body       | [RemoveTracksPlaylistRequest](../models/RemoveTracksPlaylistRequest.md) | ❌       | The request body.                                                                   |
| playlistId | string                                                                  | ✅       | The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist. |

**Return Type**

`PlaylistSnapshotId`

**Example Usage Code Snippet**

```typescript
import { RemoveTracksPlaylistRequest, SpotifyWebApiSdk, Tracks } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const tracks: Tracks = {
    uri: 'uri',
  };

  const removeTracksPlaylistRequest: RemoveTracksPlaylistRequest = {
    tracks: [tracks],
    snapshotId: 'snapshot_id',
  };

  const data = await spotifyWebApiSdk.playlists.removeTracksPlaylist(
    '3cEYpjA9oz9GiPac4AsH4n',
    removeTracksPlaylistRequest,
  );

  console.log(data);
})();
```

## getPlaylistsItems

Get full details of the items of a playlist owned by a Spotify user. **Note**: This endpoint is only accessible for playlists owned by the current user or playlists the user is a collaborator of. A `403 Forbidden` status code will be returned if the user is neither the owner nor a collaborator of the playlist.

- HTTP Method: `GET`
- Endpoint: `/playlists/{playlist_id}/items`

**Parameters**

| Name            | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| :-------------- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| playlistId      | string | ✅       | The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| market          | string | ❌       | An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned.\<br/\> If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.\<br/\> _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._\<br/\> Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).                                                                                                                                         |
| fields          | string | ❌       | Filters for the query: a comma-separated list of the fields to return. If omitted, all fields are returned. For example, to get just the total number of items and the request limit:\<br/\>`fields=total,limit`\<br/\>A dot separator can be used to specify non-reoccurring fields, while parentheses can be used to specify reoccurring fields within objects. For example, to get just the added date and user ID of the adder:\<br/\>`fields=items(added_at,added_by.id)`\<br/\>Use multiple parentheses to drill down into nested objects, for example:\<br/\>`fields=items(track(name,href,album(name,href)))`\<br/\>Fields can be excluded by prefixing them with an exclamation mark, for example:\<br/\>`fields=items.track.album(!external_urls,images)` |
| limit           | number | ❌       | The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| offset          | number | ❌       | The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| additionalTypes | string | ❌       | A comma-separated list of item types that your client supports besides the default `track` type. Valid types are: `track` and `episode`.\<br/\> _**Note**: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future._\<br/\> In addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the `type` field of each object.                                                                                                                                                                                                                                                                                    |

**Return Type**

`PagingPlaylistTrackObject`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.playlists.getPlaylistsItems('3cEYpjA9oz9GiPac4AsH4n', {
    market: 'ES',
    fields: 'items(added_by.id,track(name,href,album(name,href)))',
    limit: 10,
    offset: 5,
    additionalTypes: 'additional_types',
  });

  console.log(data);
})();
```

## addItemsToPlaylist

Add one or more items to a user's playlist.

- HTTP Method: `POST`
- Endpoint: `/playlists/{playlist_id}/items`

**Parameters**

| Name       | Type                                                                | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| :--------- | :------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| body       | [AddItemsToPlaylistRequest](../models/AddItemsToPlaylistRequest.md) | ❌       | The request body.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| playlistId | string                                                              | ✅       | The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| position   | number                                                              | ❌       | The position to insert the items, a zero-based index. For example, to insert the items in the first position: `position=0`; to insert the items in the third position: `position=2`. If omitted, the items will be appended to the playlist. Items are added in the order they are listed in the query string or request body.                                                                                                                                                                                                                                                                |
| uris       | string                                                              | ❌       | A comma-separated list of [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) to add, can be track or episode URIs. For example:\<br/\>`uris=spotify:track:4iV5W9uYEdYUVa79Axb7Rh, spotify:track:1301WleyT98MSxVHPZCA6M, spotify:episode:512ojhOuo1ktJprKbVcKyQ`\<br/\>A maximum of 100 items can be added in one request. \<br/\> _**Note**: it is likely that passing a large number of item URIs as a query parameter will exceed the maximum length of the request URI. When adding a large number of items, it is recommended to pass them in the request body, see below._ |

**Return Type**

`PlaylistSnapshotId`

**Example Usage Code Snippet**

```typescript
import { AddItemsToPlaylistRequest, SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const addItemsToPlaylistRequest: AddItemsToPlaylistRequest = {
    uris: ['uris'],
    position: 1,
  };

  const data = await spotifyWebApiSdk.playlists.addItemsToPlaylist(
    '3cEYpjA9oz9GiPac4AsH4n',
    addItemsToPlaylistRequest,
    {
      position: 3,
      uris: 'spotify:track:4iV5W9uYEdYUVa79Axb7Rh,spotify:track:1301WleyT98MSxVHPZCA6M',
    },
  );

  console.log(data);
})();
```

## reorderOrReplacePlaylistsItems

Either reorder or replace items in a playlist depending on the request's parameters. To reorder items, include `range_start`, `insert_before`, `range_length` and `snapshot_id` in the request's body. To replace items, include `uris` as either a query parameter or in the request's body. Replacing items in a playlist will overwrite its existing items. This operation can be used for replacing or clearing items in a playlist. \<br/\> **Note**: Replace and reorder are mutually exclusive operations which share the same endpoint, but have different parameters. These operations can't be applied together in a single request.

- HTTP Method: `PUT`
- Endpoint: `/playlists/{playlist_id}/items`

**Parameters**

| Name       | Type                                                                                        | Required | Description                                                                                                                                                                                                                                                                                                                   |
| :--------- | :------------------------------------------------------------------------------------------ | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| body       | [ReorderOrReplacePlaylistsItemsRequest](../models/ReorderOrReplacePlaylistsItemsRequest.md) | ❌       | The request body.                                                                                                                                                                                                                                                                                                             |
| playlistId | string                                                                                      | ✅       | The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.                                                                                                                                                                                                                                           |
| uris       | string                                                                                      | ❌       | A comma-separated list of [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) to set, can be track or episode URIs. For example: `uris=spotify:track:4iV5W9uYEdYUVa79Axb7Rh,spotify:track:1301WleyT98MSxVHPZCA6M,spotify:episode:512ojhOuo1ktJprKbVcKyQ`\<br/\>A maximum of 100 items can be set in one request. |

**Return Type**

`PlaylistSnapshotId`

**Example Usage Code Snippet**

```typescript
import { ReorderOrReplacePlaylistsItemsRequest, SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const reorderOrReplacePlaylistsItemsRequest: ReorderOrReplacePlaylistsItemsRequest = {
    uris: ['uris'],
    rangeStart: 4,
    insertBefore: 1,
    rangeLength: 5,
    snapshotId: 'snapshot_id',
  };

  const data = await spotifyWebApiSdk.playlists.reorderOrReplacePlaylistsItems(
    '3cEYpjA9oz9GiPac4AsH4n',
    reorderOrReplacePlaylistsItemsRequest,
    {
      uris: 'uris',
    },
  );

  console.log(data);
})();
```

## removeItemsPlaylist

Remove one or more items from a user's playlist.

- HTTP Method: `DELETE`
- Endpoint: `/playlists/{playlist_id}/items`

**Parameters**

| Name       | Type                                                                  | Required | Description                                                                         |
| :--------- | :-------------------------------------------------------------------- | :------- | :---------------------------------------------------------------------------------- |
| body       | [RemoveItemsPlaylistRequest](../models/RemoveItemsPlaylistRequest.md) | ❌       | The request body.                                                                   |
| playlistId | string                                                                | ✅       | The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist. |

**Return Type**

`PlaylistSnapshotId`

**Example Usage Code Snippet**

```typescript
import { Items, RemoveItemsPlaylistRequest, SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const items: Items = {
    uri: 'uri',
  };

  const removeItemsPlaylistRequest: RemoveItemsPlaylistRequest = {
    items: [items],
    snapshotId: 'snapshot_id',
  };

  const data = await spotifyWebApiSdk.playlists.removeItemsPlaylist(
    '3cEYpjA9oz9GiPac4AsH4n',
    removeItemsPlaylistRequest,
  );

  console.log(data);
})();
```

## getAListOfCurrentUsersPlaylists

Get a list of the playlists owned or followed by the current Spotify user.

- HTTP Method: `GET`
- Endpoint: `/me/playlists`

**Parameters**

| Name   | Type   | Required | Description                                                                                                                                              |
| :----- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| limit  | number | ❌       | The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.                                                                             |
| offset | number | ❌       | 'The index of the first playlist to return. Default: 0 (the first object). Maximum offset: 100.000\. Use with `limit` to get the next set of playlists.' |

**Return Type**

`PagingPlaylistObject`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.playlists.getAListOfCurrentUsersPlaylists({
    limit: 10,
    offset: 5,
  });

  console.log(data);
})();
```

## createPlaylist

Create a playlist for the current Spotify user. (The playlist will be empty until you [add tracks](/documentation/web-api/reference/add-tracks-to-playlist).) Each user is generally limited to a maximum of 11000 playlists.

- HTTP Method: `POST`
- Endpoint: `/me/playlists`

**Parameters**

| Name | Type                                                        | Required | Description       |
| :--- | :---------------------------------------------------------- | :------- | :---------------- |
| body | [CreatePlaylistRequest](../models/CreatePlaylistRequest.md) | ❌       | The request body. |

**Return Type**

`PlaylistObject`

**Example Usage Code Snippet**

```typescript
import { CreatePlaylistRequest, SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const createPlaylistRequest: CreatePlaylistRequest = {
    name: 'name',
    public: true,
    collaborative: true,
    description: 'description',
  };

  const data = await spotifyWebApiSdk.playlists.createPlaylist(createPlaylistRequest);

  console.log(data);
})();
```

## getListUsersPlaylists

Get a list of the playlists owned or followed by a Spotify user.

- HTTP Method: `GET`
- Endpoint: `/users/{user_id}/playlists`

**Parameters**

| Name   | Type   | Required | Description                                                                                                                                            |
| :----- | :----- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| userId | string | ✅       | The user's [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids).                                                                        |
| limit  | number | ❌       | The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.                                                                           |
| offset | number | ❌       | The index of the first playlist to return. Default: 0 (the first object). Maximum offset: 100.000\. Use with `limit` to get the next set of playlists. |

**Return Type**

`PagingPlaylistObject`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.playlists.getListUsersPlaylists('smedjan', {
    limit: 10,
    offset: 5,
  });

  console.log(data);
})();
```

## createPlaylistForUser

**Deprecated**: Use [Create Playlist](/documentation/web-api/reference/create-playlist) instead. Create a playlist for a Spotify user. (The playlist will be empty until you [add tracks](/documentation/web-api/reference/add-tracks-to-playlist).) Each user is generally limited to a maximum of 11000 playlists.

- HTTP Method: `POST`
- Endpoint: `/users/{user_id}/playlists`

**Parameters**

| Name   | Type                                                                      | Required | Description                                                                     |
| :----- | :------------------------------------------------------------------------ | :------- | :------------------------------------------------------------------------------ |
| body   | [CreatePlaylistForUserRequest](../models/CreatePlaylistForUserRequest.md) | ❌       | The request body.                                                               |
| userId | string                                                                    | ✅       | The user's [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids). |

**Return Type**

`PlaylistObject`

**Example Usage Code Snippet**

```typescript
import { CreatePlaylistForUserRequest, SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const createPlaylistForUserRequest: CreatePlaylistForUserRequest = {
    name: 'name',
    public: true,
    collaborative: true,
    description: 'description',
  };

  const data = await spotifyWebApiSdk.playlists.createPlaylistForUser(
    'smedjan',
    createPlaylistForUserRequest,
  );

  console.log(data);
})();
```

## getFeaturedPlaylists

Get a list of Spotify featured playlists (shown, for example, on a Spotify player's 'Browse' tab).

- HTTP Method: `GET`
- Endpoint: `/browse/featured-playlists`

**Parameters**

| Name   | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| :----- | :----- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| locale | string | ❌       | The desired language, consisting of an [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) language code and an [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), joined by an underscore. For example: `es_MX`, meaning "Spanish (Mexico)". Provide this parameter if you want the category strings returned in a particular language.\<br/\> _**Note**: if `locale` is not supplied, or if the specified language is not available, the category strings returned will be in the Spotify default language (American English)._ |
| limit  | number | ❌       | The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| offset | number | ❌       | The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

**Return Type**

`PagingFeaturedPlaylistObject`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.playlists.getFeaturedPlaylists({
    locale: 'sv_SE',
    limit: 10,
    offset: 5,
  });

  console.log(data);
})();
```

## getACategoriesPlaylists

Get a list of Spotify playlists tagged with a particular category.

- HTTP Method: `GET`
- Endpoint: `/browse/categories/{category_id}/playlists`

**Parameters**

| Name       | Type   | Required | Description                                                                                                      |
| :--------- | :----- | :------- | :--------------------------------------------------------------------------------------------------------------- |
| categoryId | string | ✅       | The [Spotify category ID](/documentation/web-api/concepts/spotify-uris-ids) for the category.                    |
| limit      | number | ❌       | The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.                                     |
| offset     | number | ❌       | The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items. |

**Return Type**

`PagingFeaturedPlaylistObject`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.playlists.getACategoriesPlaylists('dinner', {
    limit: 10,
    offset: 5,
  });

  console.log(data);
})();
```

## getPlaylistCover

Get the current image associated with a specific playlist.

- HTTP Method: `GET`
- Endpoint: `/playlists/{playlist_id}/images`

**Parameters**

| Name       | Type   | Required | Description                                                                         |
| :--------- | :----- | :------- | :---------------------------------------------------------------------------------- |
| playlistId | string | ✅       | The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist. |

**Return Type**

`ImageObject[]`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.playlists.getPlaylistCover('3cEYpjA9oz9GiPac4AsH4n');

  console.log(data);
})();
```

## uploadCustomPlaylistCover

Replace the image used to represent a specific playlist.

- HTTP Method: `PUT`
- Endpoint: `/playlists/{playlist_id}/images`

**Parameters**

| Name       | Type   | Required | Description                                                                         |
| :--------- | :----- | :------- | :---------------------------------------------------------------------------------- |
| body       | string | ❌       | The request body.                                                                   |
| playlistId | string | ✅       | The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist. |

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.playlists.uploadCustomPlaylistCover(
    '3cEYpjA9oz9GiPac4AsH4n',
    new ArrayBuffer(0),
  );

  console.log(data);
})();
```
