# LibraryService

A list of all methods in the `LibraryService` service. Click on the method name to view detailed information about that method.

| Methods                                       | Description                                                                                                                                                                      |
| :-------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [saveLibraryItems](#savelibraryitems)         | Add one or more items to the current user's library. Accepts Spotify URIs for tracks, albums, episodes, shows, audiobooks, users, and playlists.                                 |
| [removeLibraryItems](#removelibraryitems)     | Remove one or more items from the current user's library. Accepts Spotify URIs for tracks, albums, episodes, shows, audiobooks, users, and playlists.                            |
| [checkLibraryContains](#checklibrarycontains) | Check if one or more items are already saved in the current user's library. Accepts Spotify URIs for tracks, albums, episodes, shows, audiobooks, artists, users, and playlists. |

## saveLibraryItems

Add one or more items to the current user's library. Accepts Spotify URIs for tracks, albums, episodes, shows, audiobooks, users, and playlists.

- HTTP Method: `PUT`
- Endpoint: `/me/library`

**Parameters**

| Name | Type   | Required | Description                                                                                                                                                                                                                                                                                                |
| :--- | :----- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| uris | string | ✅       | A comma-separated list of [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids). Maximum: 40 URIs. Supported URI types: - `spotify:track:{id}` - `spotify:album:{id}` - `spotify:episode:{id}` - `spotify:show:{id}` - `spotify:audiobook:{id}` - `spotify:user:{id}` - `spotify:playlist:{id}` |

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.library.saveLibraryItems({
    uris: 'spotify:track:7a3LWj5xSFhFRYmztS8wgK,spotify:album:4aawyAB9vmqN3uQ7FjRGTy',
  });

  console.log(data);
})();
```

## removeLibraryItems

Remove one or more items from the current user's library. Accepts Spotify URIs for tracks, albums, episodes, shows, audiobooks, users, and playlists.

- HTTP Method: `DELETE`
- Endpoint: `/me/library`

**Parameters**

| Name | Type   | Required | Description                                                                                                                                                                                                                                                                                                |
| :--- | :----- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| uris | string | ✅       | A comma-separated list of [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids). Maximum: 40 URIs. Supported URI types: - `spotify:track:{id}` - `spotify:album:{id}` - `spotify:episode:{id}` - `spotify:show:{id}` - `spotify:audiobook:{id}` - `spotify:user:{id}` - `spotify:playlist:{id}` |

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.library.removeLibraryItems({
    uris: 'spotify:track:7a3LWj5xSFhFRYmztS8wgK,spotify:album:4aawyAB9vmqN3uQ7FjRGTy',
  });

  console.log(data);
})();
```

## checkLibraryContains

Check if one or more items are already saved in the current user's library. Accepts Spotify URIs for tracks, albums, episodes, shows, audiobooks, artists, users, and playlists.

- HTTP Method: `GET`
- Endpoint: `/me/library/contains`

**Parameters**

| Name | Type   | Required | Description                                                                                                                                                                                                                                                                                                                        |
| :--- | :----- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| uris | string | ✅       | A comma-separated list of [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids). Maximum: 40 URIs. Supported URI types: - `spotify:track:{id}` - `spotify:album:{id}` - `spotify:episode:{id}` - `spotify:show:{id}` - `spotify:audiobook:{id}` - `spotify:artist:{id}` - `spotify:user:{id}` - `spotify:playlist:{id}` |

**Return Type**

`boolean[]`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.library.checkLibraryContains({
    uris: 'spotify:track:7a3LWj5xSFhFRYmztS8wgK,spotify:album:4aawyAB9vmqN3uQ7FjRGTy,spotify:artist:2takcwOaAZWiXQijPHIx7B',
  });

  console.log(data);
})();
```
