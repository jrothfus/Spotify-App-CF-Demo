# AudiobookObject

**Properties**

| Name             | Type                                                              | Required | Description                                                                                                                                                   |
| :--------------- | :---------------------------------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| authors          | [AuthorObject](AuthorObject.md)[]                                 | ✅       | The author(s) for the audiobook.                                                                                                                              |
| availableMarkets | string[]                                                          | ✅       | A list of the countries in which the audiobook can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code. |
| copyrights       | [CopyrightObject](CopyrightObject.md)[]                           | ✅       | The copyright statements of the audiobook.                                                                                                                    |
| description      | string                                                            | ✅       | A description of the audiobook. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.                       |
| htmlDescription  | string                                                            | ✅       | A description of the audiobook. This field may contain HTML tags.                                                                                             |
| explicit         | boolean                                                           | ✅       | Whether or not the audiobook has explicit content (true = yes it does; false = no it does not OR unknown).                                                    |
| externalUrls     | [ExternalUrlObject](ExternalUrlObject.md)                         | ✅       |                                                                                                                                                               |
| href             | string                                                            | ✅       | A link to the Web API endpoint providing full details of the audiobook.                                                                                       |
| id               | string                                                            | ✅       | The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the audiobook.                                                                         |
| images           | [ImageObject](ImageObject.md)[]                                   | ✅       | The cover art for the audiobook in various sizes, widest first.                                                                                               |
| languages        | string[]                                                          | ✅       | A list of the languages used in the audiobook, identified by their [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code.                                     |
| mediaType        | string                                                            | ✅       | The media type of the audiobook.                                                                                                                              |
| name             | string                                                            | ✅       | The name of the audiobook.                                                                                                                                    |
| narrators        | [NarratorObject](NarratorObject.md)[]                             | ✅       | The narrator(s) for the audiobook.                                                                                                                            |
| publisher        | string                                                            | ✅       | The publisher of the audiobook.                                                                                                                               |
| type             | AudiobookObjectType                                               | ✅       | The object type.                                                                                                                                              |
| uri              | string                                                            | ✅       | The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the audiobook.                                                                        |
| totalChapters    | number                                                            | ✅       | The number of chapters in this audiobook.                                                                                                                     |
| chapters         | [PagingSimplifiedChapterObject](PagingSimplifiedChapterObject.md) | ✅       |                                                                                                                                                               |
| edition          | string                                                            | ❌       | The edition of the audiobook.                                                                                                                                 |

# AudiobookObjectType

The object type.

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| AUDIOBOOK | string | ✅       | "audiobook" |
