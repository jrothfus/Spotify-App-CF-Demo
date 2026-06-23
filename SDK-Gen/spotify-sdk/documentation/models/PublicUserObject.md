# PublicUserObject

**Properties**

| Name         | Type                                      | Required | Description                                                                            |
| :----------- | :---------------------------------------- | :------- | :------------------------------------------------------------------------------------- |
| displayName  | string                                    | ❌       | The name displayed on the user's profile. `null` if not available.                     |
| externalUrls | [ExternalUrlObject](ExternalUrlObject.md) | ❌       |                                                                                        |
| followers    | [FollowersObject](FollowersObject.md)     | ❌       |                                                                                        |
| href         | string                                    | ❌       | A link to the Web API endpoint for this user.                                          |
| id           | string                                    | ❌       | The [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids) for this user. |
| images       | [ImageObject](ImageObject.md)[]           | ❌       | The user's profile image.                                                              |
| type         | PublicUserObjectType                      | ❌       | The object type.                                                                       |
| uri          | string                                    | ❌       | The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for this user.     |

# PublicUserObjectType

The object type.

**Properties**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| USER | string | ✅       | "user"      |
