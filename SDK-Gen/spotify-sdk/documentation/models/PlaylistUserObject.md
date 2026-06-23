# PlaylistUserObject

**Properties**

| Name         | Type                                      | Required | Description                                                                            |
| :----------- | :---------------------------------------- | :------- | :------------------------------------------------------------------------------------- |
| externalUrls | [ExternalUrlObject](ExternalUrlObject.md) | ❌       |                                                                                        |
| href         | string                                    | ❌       | A link to the Web API endpoint for this user.                                          |
| id           | string                                    | ❌       | The [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids) for this user. |
| type         | PlaylistUserObjectType                    | ❌       | The object type.                                                                       |
| uri          | string                                    | ❌       | The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for this user.     |

# PlaylistUserObjectType

The object type.

**Properties**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| USER | string | ✅       | "user"      |
