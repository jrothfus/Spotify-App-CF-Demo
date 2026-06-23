# SimplifiedArtistObject

**Properties**

| Name         | Type                                      | Required | Description                                                                         |
| :----------- | :---------------------------------------- | :------- | :---------------------------------------------------------------------------------- |
| externalUrls | [ExternalUrlObject](ExternalUrlObject.md) | ❌       |                                                                                     |
| href         | string                                    | ❌       | A link to the Web API endpoint providing full details of the artist.                |
| id           | string                                    | ❌       | The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the artist.  |
| name         | string                                    | ❌       | The name of the artist.                                                             |
| type         | SimplifiedArtistObjectType                | ❌       | The object type.                                                                    |
| uri          | string                                    | ❌       | The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the artist. |

# SimplifiedArtistObjectType

The object type.

**Properties**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| ARTIST | string | ✅       | "artist"    |
