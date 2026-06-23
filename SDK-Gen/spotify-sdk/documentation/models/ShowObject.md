# ShowObject

**Properties**

| Name               | Type                                                              | Required | Description                                                                                                                                              |
| :----------------- | :---------------------------------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| availableMarkets   | string[]                                                          | ✅       | A list of the countries in which the show can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code. |
| copyrights         | [CopyrightObject](CopyrightObject.md)[]                           | ✅       | The copyright statements of the show.                                                                                                                    |
| description        | string                                                            | ✅       | A description of the show. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.                       |
| htmlDescription    | string                                                            | ✅       | A description of the show. This field may contain HTML tags.                                                                                             |
| explicit           | boolean                                                           | ✅       | Whether or not the show has explicit content (true = yes it does; false = no it does not OR unknown).                                                    |
| externalUrls       | [ExternalUrlObject](ExternalUrlObject.md)                         | ✅       |                                                                                                                                                          |
| href               | string                                                            | ✅       | A link to the Web API endpoint providing full details of the show.                                                                                       |
| id                 | string                                                            | ✅       | The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the show.                                                                         |
| images             | [ImageObject](ImageObject.md)[]                                   | ✅       | The cover art for the show in various sizes, widest first.                                                                                               |
| isExternallyHosted | boolean                                                           | ✅       | True if all of the shows episodes are hosted outside of Spotify's CDN. This field might be `null` in some cases.                                         |
| languages          | string[]                                                          | ✅       | A list of the languages used in the show, identified by their [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code.                                     |
| mediaType          | string                                                            | ✅       | The media type of the show.                                                                                                                              |
| name               | string                                                            | ✅       | The name of the episode.                                                                                                                                 |
| publisher          | string                                                            | ✅       | The publisher of the show.                                                                                                                               |
| type               | ShowObjectType                                                    | ✅       | The object type.                                                                                                                                         |
| uri                | string                                                            | ✅       | The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the show.                                                                        |
| totalEpisodes      | number                                                            | ✅       | The total number of episodes in the show.                                                                                                                |
| episodes           | [PagingSimplifiedEpisodeObject](PagingSimplifiedEpisodeObject.md) | ✅       |                                                                                                                                                          |

# ShowObjectType

The object type.

**Properties**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| SHOW | string | ✅       | "show"      |
