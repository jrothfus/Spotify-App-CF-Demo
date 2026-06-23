# ArtistObject

**Properties**

| Name         | Type                                      | Required | Description                                                                                                                                                                               |
| :----------- | :---------------------------------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| externalUrls | [ExternalUrlObject](ExternalUrlObject.md) | ❌       |                                                                                                                                                                                           |
| followers    | [FollowersObject](FollowersObject.md)     | ❌       |                                                                                                                                                                                           |
| genres       | string[]                                  | ❌       | A list of the genres the artist is associated with. If not yet classified, the array is empty.                                                                                            |
| href         | string                                    | ❌       | A link to the Web API endpoint providing full details of the artist.                                                                                                                      |
| id           | string                                    | ❌       | The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the artist.                                                                                                        |
| images       | [ImageObject](ImageObject.md)[]           | ❌       | Images of the artist in various sizes, widest first.                                                                                                                                      |
| name         | string                                    | ❌       | The name of the artist.                                                                                                                                                                   |
| popularity   | number                                    | ❌       | The popularity of the artist. The value will be between 0 and 100, with 100 being the most popular. The artist's popularity is calculated from the popularity of all the artist's tracks. |
| type         | ArtistObjectType                          | ❌       | The object type.                                                                                                                                                                          |
| uri          | string                                    | ❌       | The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the artist.                                                                                                       |

# ArtistObjectType

The object type.

**Properties**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| ARTIST | string | ✅       | "artist"    |
