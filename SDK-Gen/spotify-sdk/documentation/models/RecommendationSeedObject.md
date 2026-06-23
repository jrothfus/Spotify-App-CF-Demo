# RecommendationSeedObject

**Properties**

| Name               | Type   | Required | Description                                                                                                                                                                                  |
| :----------------- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| afterFilteringSize | number | ❌       | The number of tracks available after min\_\* and max\_\* filters have been applied.                                                                                                          |
| afterRelinkingSize | number | ❌       | The number of tracks available after relinking for regional availability.                                                                                                                    |
| href               | string | ❌       | A link to the full track or artist data for this seed. For tracks this will be a link to a Track Object. For artists a link to an Artist Object. For genre seeds, this value will be `null`. |
| id                 | string | ❌       | The id used to select this seed. This will be the same as the string used in the `seed_artists`, `seed_tracks` or `seed_genres` parameter.                                                   |
| initialPoolSize    | number | ❌       | The number of recommended tracks available for this seed.                                                                                                                                    |
| type               | string | ❌       | The entity type of this seed. One of `artist`, `track` or `genre`.                                                                                                                           |
