# PlaylistTrackObject

**Properties**

| Name    | Type                                        | Required | Description                                                                                                            |
| :------ | :------------------------------------------ | :------- | :--------------------------------------------------------------------------------------------------------------------- |
| addedAt | string                                      | ❌       | The date and time the track or episode was added. _**Note**: some very old playlists may return `null` in this field._ |
| addedBy | [PlaylistUserObject](PlaylistUserObject.md) | ❌       |                                                                                                                        |
| isLocal | boolean                                     | ❌       | Whether this track or episode is a [local file](/documentation/web-api/concepts/playlists/#local-files) or not.        |
| item    | PlaylistTrackObjectItem                     | ❌       | Information about the track or episode.                                                                                |
| track   | PlaylistTrackObjectTrack                    | ❌       | **Deprecated:** Use `item` instead. Information about the track or episode.                                            |

# PlaylistTrackObjectItem

Information about the track or episode.

# PlaylistTrackObjectTrack

**Deprecated:** Use `item` instead. Information about the track or episode.
