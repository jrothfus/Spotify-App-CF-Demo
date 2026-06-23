# EpisodeObject

**Properties**

| Name                 | Type                                                    | Required | Description                                                                                                                                                                                                     |
| :------------------- | :------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| audioPreviewUrl      | string                                                  | ✅       | A URL to a 30 second preview (MP3 format) of the episode. `null` if not available.                                                                                                                              |
| description          | string                                                  | ✅       | A description of the episode. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.                                                                           |
| htmlDescription      | string                                                  | ✅       | A description of the episode. This field may contain HTML tags.                                                                                                                                                 |
| durationMs           | number                                                  | ✅       | The episode length in milliseconds.                                                                                                                                                                             |
| explicit             | boolean                                                 | ✅       | Whether or not the episode has explicit content (true = yes it does; false = no it does not OR unknown).                                                                                                        |
| externalUrls         | [ExternalUrlObject](ExternalUrlObject.md)               | ✅       |                                                                                                                                                                                                                 |
| href                 | string                                                  | ✅       | A link to the Web API endpoint providing full details of the episode.                                                                                                                                           |
| id                   | string                                                  | ✅       | The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the episode.                                                                                                                             |
| images               | [ImageObject](ImageObject.md)[]                         | ✅       | The cover art for the episode in various sizes, widest first.                                                                                                                                                   |
| isExternallyHosted   | boolean                                                 | ✅       | True if the episode is hosted outside of Spotify's CDN.                                                                                                                                                         |
| isPlayable           | boolean                                                 | ✅       | True if the episode is playable in the given market. Otherwise false.                                                                                                                                           |
| languages            | string[]                                                | ✅       | A list of the languages used in the episode, identified by their [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639) code.                                                                                       |
| name                 | string                                                  | ✅       | The name of the episode.                                                                                                                                                                                        |
| releaseDate          | string                                                  | ✅       | The date the episode was first released, for example `"1981-12-15"`. Depending on the precision, it might be shown as `"1981"` or `"1981-12"`.                                                                  |
| releaseDatePrecision | EpisodeObjectReleaseDatePrecision                       | ✅       | The precision with which `release_date` value is known.                                                                                                                                                         |
| type                 | EpisodeObjectType                                       | ✅       | The object type.                                                                                                                                                                                                |
| uri                  | string                                                  | ✅       | The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the episode.                                                                                                                            |
| show                 | [SimplifiedShowObject](SimplifiedShowObject.md)         | ✅       |                                                                                                                                                                                                                 |
| language             | string                                                  | ❌       | The language used in the episode, identified by a [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code. This field is deprecated and might be removed in the future. Please use the `languages` field instead. |
| resumePoint          | [ResumePointObject](ResumePointObject.md)               | ❌       |                                                                                                                                                                                                                 |
| restrictions         | [EpisodeRestrictionObject](EpisodeRestrictionObject.md) | ❌       |                                                                                                                                                                                                                 |

# EpisodeObjectReleaseDatePrecision

The precision with which `release_date` value is known.

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| YEAR  | string | ✅       | "year"      |
| MONTH | string | ✅       | "month"     |
| DAY   | string | ✅       | "day"       |

# EpisodeObjectType

The object type.

**Properties**

| Name    | Type   | Required | Description |
| :------ | :----- | :------- | :---------- |
| EPISODE | string | ✅       | "episode"   |
