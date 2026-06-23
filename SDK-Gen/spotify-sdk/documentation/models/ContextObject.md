# ContextObject

**Properties**

| Name         | Type                                      | Required | Description                                                                          |
| :----------- | :---------------------------------------- | :------- | :----------------------------------------------------------------------------------- |
| type         | string                                    | ❌       | The object type, e.g. "artist", "playlist", "album", "show".                         |
| href         | string                                    | ❌       | A link to the Web API endpoint providing full details of the track.                  |
| externalUrls | [ExternalUrlObject](ExternalUrlObject.md) | ❌       |                                                                                      |
| uri          | string                                    | ❌       | The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the context. |
