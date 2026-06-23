# ChapterObject

**Properties**

| Name                 | Type                                                      | Required | Description                                                                                                                                                 |
| :------------------- | :-------------------------------------------------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| audioPreviewUrl      | string                                                    | ✅       | A URL to a 30 second preview (MP3 format) of the chapter. `null` if not available.                                                                          |
| chapterNumber        | number                                                    | ✅       | The number of the chapter                                                                                                                                   |
| description          | string                                                    | ✅       | A description of the chapter. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.                       |
| htmlDescription      | string                                                    | ✅       | A description of the chapter. This field may contain HTML tags.                                                                                             |
| durationMs           | number                                                    | ✅       | The chapter length in milliseconds.                                                                                                                         |
| explicit             | boolean                                                   | ✅       | Whether or not the chapter has explicit content (true = yes it does; false = no it does not OR unknown).                                                    |
| externalUrls         | [ExternalUrlObject](ExternalUrlObject.md)                 | ✅       |                                                                                                                                                             |
| href                 | string                                                    | ✅       | A link to the Web API endpoint providing full details of the chapter.                                                                                       |
| id                   | string                                                    | ✅       | The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the chapter.                                                                         |
| images               | [ImageObject](ImageObject.md)[]                           | ✅       | The cover art for the chapter in various sizes, widest first.                                                                                               |
| isPlayable           | boolean                                                   | ✅       | True if the chapter is playable in the given market. Otherwise false.                                                                                       |
| languages            | string[]                                                  | ✅       | A list of the languages used in the chapter, identified by their [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639) code.                                   |
| name                 | string                                                    | ✅       | The name of the chapter.                                                                                                                                    |
| releaseDate          | string                                                    | ✅       | The date the chapter was first released, for example `"1981-12-15"`. Depending on the precision, it might be shown as `"1981"` or `"1981-12"`.              |
| releaseDatePrecision | ChapterObjectReleaseDatePrecision                         | ✅       | The precision with which `release_date` value is known.                                                                                                     |
| type                 | ChapterObjectType                                         | ✅       | The object type.                                                                                                                                            |
| uri                  | string                                                    | ✅       | The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the chapter.                                                                        |
| audiobook            | [SimplifiedAudiobookObject](SimplifiedAudiobookObject.md) | ✅       |                                                                                                                                                             |
| availableMarkets     | string[]                                                  | ❌       | A list of the countries in which the chapter can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code. |
| resumePoint          | [ResumePointObject](ResumePointObject.md)                 | ❌       |                                                                                                                                                             |
| restrictions         | [ChapterRestrictionObject](ChapterRestrictionObject.md)   | ❌       |                                                                                                                                                             |

# ChapterObjectReleaseDatePrecision

The precision with which `release_date` value is known.

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| YEAR  | string | ✅       | "year"      |
| MONTH | string | ✅       | "month"     |
| DAY   | string | ✅       | "day"       |

# ChapterObjectType

The object type.

**Properties**

| Name    | Type   | Required | Description |
| :------ | :----- | :------- | :---------- |
| EPISODE | string | ✅       | "episode"   |
