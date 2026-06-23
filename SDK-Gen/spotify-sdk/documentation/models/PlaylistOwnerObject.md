# PlaylistOwnerObject

**Properties**

| Name         | Type                                      | Required | Description                                                                            |
| :----------- | :---------------------------------------- | :------- | :------------------------------------------------------------------------------------- |
| externalUrls | [ExternalUrlObject](ExternalUrlObject.md) | ❌       |                                                                                        |
| href         | string                                    | ❌       | A link to the Web API endpoint for this user.                                          |
| id           | string                                    | ❌       | The [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids) for this user. |
| type         | PlaylistOwnerObjectType                   | ❌       | The object type.                                                                       |
| uri          | string                                    | ❌       | The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for this user.     |
| displayName  | string                                    | ❌       | The name displayed on the user's profile. `null` if not available.                     |

# PlaylistOwnerObjectType

The object type.

**Properties**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| USER | string | ✅       | "user"      |
