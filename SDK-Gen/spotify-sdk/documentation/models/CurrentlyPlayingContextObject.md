# CurrentlyPlayingContextObject

**Properties**

| Name                 | Type                                  | Required | Description                                                                                                 |
| :------------------- | :------------------------------------ | :------- | :---------------------------------------------------------------------------------------------------------- |
| device               | [DeviceObject](DeviceObject.md)       | ❌       |                                                                                                             |
| repeatState          | string                                | ❌       | off, track, context                                                                                         |
| shuffleState         | boolean                               | ❌       | If shuffle is on or off.                                                                                    |
| context              | [ContextObject](ContextObject.md)     | ❌       |                                                                                                             |
| timestamp            | number                                | ❌       | Unix Millisecond Timestamp when playback state was last changed (play, pause, skip, scrub, new song, etc.). |
| progressMs           | number                                | ❌       | Progress into the currently playing track or episode. Can be `null`.                                        |
| isPlaying            | boolean                               | ❌       | If something is currently playing, return `true`.                                                           |
| item                 | CurrentlyPlayingContextObjectItem     | ❌       | The currently playing track or episode. Can be `null`.                                                      |
| currentlyPlayingType | string                                | ❌       | The object type of the currently playing item. Can be one of `track`, `episode`, `ad` or `unknown`.         |
| actions              | [DisallowsObject](DisallowsObject.md) | ❌       |                                                                                                             |

# CurrentlyPlayingContextObjectItem

The currently playing track or episode. Can be `null`.
