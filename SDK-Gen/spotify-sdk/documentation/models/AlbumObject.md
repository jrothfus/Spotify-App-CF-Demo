# AlbumObject

**Properties**

| Name                 | Type                                                          | Required | Description                                                                                                                                                                                                                                           |
| :------------------- | :------------------------------------------------------------ | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| albumType            | AlbumObjectAlbumType                                          | ✅       | The type of the album.                                                                                                                                                                                                                                |
| totalTracks          | number                                                        | ✅       | The number of tracks in the album.                                                                                                                                                                                                                    |
| availableMarkets     | string[]                                                      | ✅       | The markets in which the album is available: [ISO 3166-1 alpha-2 country codes](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). _**NOTE**: an album is considered available in a market when at least 1 of its tracks is available in that market._ |
| externalUrls         | [ExternalUrlObject](ExternalUrlObject.md)                     | ✅       |                                                                                                                                                                                                                                                       |
| href                 | string                                                        | ✅       | A link to the Web API endpoint providing full details of the album.                                                                                                                                                                                   |
| id                   | string                                                        | ✅       | The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the album.                                                                                                                                                                     |
| images               | [ImageObject](ImageObject.md)[]                               | ✅       | The cover art for the album in various sizes, widest first.                                                                                                                                                                                           |
| name                 | string                                                        | ✅       | The name of the album. In case of an album takedown, the value may be an empty string.                                                                                                                                                                |
| releaseDate          | string                                                        | ✅       | The date the album was first released.                                                                                                                                                                                                                |
| releaseDatePrecision | AlbumObjectReleaseDatePrecision                               | ✅       | The precision with which `release_date` value is known.                                                                                                                                                                                               |
| type                 | AlbumObjectType                                               | ✅       | The object type.                                                                                                                                                                                                                                      |
| uri                  | string                                                        | ✅       | The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the album.                                                                                                                                                                    |
| restrictions         | [AlbumRestrictionObject](AlbumRestrictionObject.md)           | ❌       |                                                                                                                                                                                                                                                       |
| artists              | [SimplifiedArtistObject](SimplifiedArtistObject.md)[]         | ❌       | The artists of the album. Each artist object includes a link in `href` to more detailed information about the artist.                                                                                                                                 |
| tracks               | [PagingSimplifiedTrackObject](PagingSimplifiedTrackObject.md) | ❌       |                                                                                                                                                                                                                                                       |
| copyrights           | [CopyrightObject](CopyrightObject.md)[]                       | ❌       | The copyright statements of the album.                                                                                                                                                                                                                |
| externalIds          | [ExternalIdObject](ExternalIdObject.md)                       | ❌       |                                                                                                                                                                                                                                                       |
| genres               | string[]                                                      | ❌       | **Deprecated** The array is always empty.                                                                                                                                                                                                             |
| label                | string                                                        | ❌       | The label associated with the album.                                                                                                                                                                                                                  |
| popularity           | number                                                        | ❌       | The popularity of the album. The value will be between 0 and 100, with 100 being the most popular.                                                                                                                                                    |

# AlbumObjectAlbumType

The type of the album.

**Properties**

| Name        | Type   | Required | Description   |
| :---------- | :----- | :------- | :------------ |
| ALBUM       | string | ✅       | "album"       |
| SINGLE      | string | ✅       | "single"      |
| COMPILATION | string | ✅       | "compilation" |

# AlbumObjectReleaseDatePrecision

The precision with which `release_date` value is known.

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| YEAR  | string | ✅       | "year"      |
| MONTH | string | ✅       | "month"     |
| DAY   | string | ✅       | "day"       |

# AlbumObjectType

The object type.

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| ALBUM | string | ✅       | "album"     |
