# ArtistDiscographyAlbumObject

**Properties**

| Name                 | Type                                                  | Required | Description                                                                                                                                                                                                                                           |
| :------------------- | :---------------------------------------------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| albumType            | ArtistDiscographyAlbumObjectAlbumType                 | ✅       | The type of the album.                                                                                                                                                                                                                                |
| totalTracks          | number                                                | ✅       | The number of tracks in the album.                                                                                                                                                                                                                    |
| availableMarkets     | string[]                                              | ✅       | The markets in which the album is available: [ISO 3166-1 alpha-2 country codes](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). _**NOTE**: an album is considered available in a market when at least 1 of its tracks is available in that market._ |
| externalUrls         | [ExternalUrlObject](ExternalUrlObject.md)             | ✅       |                                                                                                                                                                                                                                                       |
| href                 | string                                                | ✅       | A link to the Web API endpoint providing full details of the album.                                                                                                                                                                                   |
| id                   | string                                                | ✅       | The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the album.                                                                                                                                                                     |
| images               | [ImageObject](ImageObject.md)[]                       | ✅       | The cover art for the album in various sizes, widest first.                                                                                                                                                                                           |
| name                 | string                                                | ✅       | The name of the album. In case of an album takedown, the value may be an empty string.                                                                                                                                                                |
| releaseDate          | string                                                | ✅       | The date the album was first released.                                                                                                                                                                                                                |
| releaseDatePrecision | ArtistDiscographyAlbumObjectReleaseDatePrecision      | ✅       | The precision with which `release_date` value is known.                                                                                                                                                                                               |
| type                 | ArtistDiscographyAlbumObjectType                      | ✅       | The object type.                                                                                                                                                                                                                                      |
| uri                  | string                                                | ✅       | The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the album.                                                                                                                                                                    |
| artists              | [SimplifiedArtistObject](SimplifiedArtistObject.md)[] | ✅       | The artists of the album. Each artist object includes a link in `href` to more detailed information about the artist.                                                                                                                                 |
| albumGroup           | AlbumGroup                                            | ✅       | This field describes the relationship between the artist and the album.                                                                                                                                                                               |
| restrictions         | [AlbumRestrictionObject](AlbumRestrictionObject.md)   | ❌       |                                                                                                                                                                                                                                                       |

# ArtistDiscographyAlbumObjectAlbumType

The type of the album.

**Properties**

| Name        | Type   | Required | Description   |
| :---------- | :----- | :------- | :------------ |
| ALBUM       | string | ✅       | "album"       |
| SINGLE      | string | ✅       | "single"      |
| COMPILATION | string | ✅       | "compilation" |

# ArtistDiscographyAlbumObjectReleaseDatePrecision

The precision with which `release_date` value is known.

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| YEAR  | string | ✅       | "year"      |
| MONTH | string | ✅       | "month"     |
| DAY   | string | ✅       | "day"       |

# ArtistDiscographyAlbumObjectType

The object type.

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| ALBUM | string | ✅       | "album"     |

# AlbumGroup

This field describes the relationship between the artist and the album.

**Properties**

| Name        | Type   | Required | Description   |
| :---------- | :----- | :------- | :------------ |
| ALBUM       | string | ✅       | "album"       |
| SINGLE      | string | ✅       | "single"      |
| COMPILATION | string | ✅       | "compilation" |
| APPEARS_ON  | string | ✅       | "appears_on"  |
