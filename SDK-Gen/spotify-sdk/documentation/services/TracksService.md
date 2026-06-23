# TracksService

A list of all methods in the `TracksService` service. Click on the method name to view detailed information about that method.

| Methods                                             | Description                                                                                                                                                                                                                                                                                                                                                                               |
| :-------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getTrack](#gettrack)                               | Get Spotify catalog information for a single track identified by its unique Spotify ID.                                                                                                                                                                                                                                                                                                   |
| [getSeveralTracks](#getseveraltracks)               | Get Spotify catalog information for multiple tracks based on their Spotify IDs.                                                                                                                                                                                                                                                                                                           |
| [getUsersSavedTracks](#getuserssavedtracks)         | Get a list of the songs saved in the current Spotify user's 'Your Music' library.                                                                                                                                                                                                                                                                                                         |
| [saveTracksUser](#savetracksuser)                   | Save one or more tracks to the current user's 'Your Music' library. **Note:** This endpoint is deprecated. Use [Save Items to Library](/documentation/web-api/reference/save-library-items) instead.                                                                                                                                                                                      |
| [removeTracksUser](#removetracksuser)               | Remove one or more tracks from the current user's 'Your Music' library. **Note:** This endpoint is deprecated. Use [Remove Items from Library](/documentation/web-api/reference/remove-library-items) instead.                                                                                                                                                                            |
| [checkUsersSavedTracks](#checkuserssavedtracks)     | Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library. **Note:** This endpoint is deprecated. Use [Check User's Saved Items](/documentation/web-api/reference/check-library-contains) instead.                                                                                                                                                  |
| [getSeveralAudioFeatures](#getseveralaudiofeatures) | Get audio features for multiple tracks based on their Spotify IDs.                                                                                                                                                                                                                                                                                                                        |
| [getAudioFeatures](#getaudiofeatures)               | Get audio feature information for a single track identified by its unique Spotify ID.                                                                                                                                                                                                                                                                                                     |
| [getAudioAnalysis](#getaudioanalysis)               | Get a low-level audio analysis for a track in the Spotify catalog. The audio analysis describes the track’s structure and musical content, including rhythm, pitch, and timbre.                                                                                                                                                                                                           |
| [getRecommendations](#getrecommendations)           | Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks. If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details. For artists and tracks that are very new or obscure there might not be enough data to generate a list of tracks. |

## getTrack

Get Spotify catalog information for a single track identified by its unique Spotify ID.

- HTTP Method: `GET`
- Endpoint: `/tracks/{id}`

**Parameters**

| Name   | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :----- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id     | string | ✅       | The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| market | string | ❌       | An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned.\<br/\> If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.\<br/\> _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._\<br/\> Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/). |

**Return Type**

`TrackObject`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.tracks.getTrack('11dFghVXANMlKmJXsNCbNl', {
    market: 'ES',
  });

  console.log(data);
})();
```

## getSeveralTracks

Get Spotify catalog information for multiple tracks based on their Spotify IDs.

- HTTP Method: `GET`
- Endpoint: `/tracks`

**Parameters**

| Name   | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :----- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ids    | string | ✅       | A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M`. Maximum: 50 IDs.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| market | string | ❌       | An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned.\<br/\> If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.\<br/\> _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._\<br/\> Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/). |

**Return Type**

`ManyTracks`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.tracks.getSeveralTracks({
    market: 'ES',
    ids: '7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B',
  });

  console.log(data);
})();
```

## getUsersSavedTracks

Get a list of the songs saved in the current Spotify user's 'Your Music' library.

- HTTP Method: `GET`
- Endpoint: `/me/tracks`

**Parameters**

| Name   | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :----- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| market | string | ❌       | An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned.\<br/\> If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.\<br/\> _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._\<br/\> Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/). |
| limit  | number | ❌       | The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| offset | number | ❌       | The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

**Return Type**

`PagingSavedTrackObject`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.tracks.getUsersSavedTracks({
    market: 'ES',
    limit: 10,
    offset: 5,
  });

  console.log(data);
})();
```

## saveTracksUser

Save one or more tracks to the current user's 'Your Music' library. **Note:** This endpoint is deprecated. Use [Save Items to Library](/documentation/web-api/reference/save-library-items) instead.

- HTTP Method: `PUT`
- Endpoint: `/me/tracks`

**Parameters**

| Name | Type                                                        | Required | Description       |
| :--- | :---------------------------------------------------------- | :------- | :---------------- |
| body | [SaveTracksUserRequest](../models/SaveTracksUserRequest.md) | ❌       | The request body. |

**Example Usage Code Snippet**

```typescript
import { SaveTracksUserRequest, SpotifyWebApiSdk, TimestampedIds } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const timestampedIds: TimestampedIds = {
    id: 'id',
    addedAt: '2023-08-30T05:25:27.275Z',
  };

  const saveTracksUserRequest: SaveTracksUserRequest = {
    ids: ['ids'],
    timestampedIds: [timestampedIds],
  };

  const data = await spotifyWebApiSdk.tracks.saveTracksUser(saveTracksUserRequest);

  console.log(data);
})();
```

## removeTracksUser

Remove one or more tracks from the current user's 'Your Music' library. **Note:** This endpoint is deprecated. Use [Remove Items from Library](/documentation/web-api/reference/remove-library-items) instead.

- HTTP Method: `DELETE`
- Endpoint: `/me/tracks`

**Parameters**

| Name | Type                                                            | Required | Description                                                                                                                                                                       |
| :--- | :-------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| body | [RemoveTracksUserRequest](../models/RemoveTracksUserRequest.md) | ❌       | The request body.                                                                                                                                                                 |
| ids  | string                                                          | ✅       | A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M`. Maximum: 50 IDs. |

**Example Usage Code Snippet**

```typescript
import { RemoveTracksUserRequest, SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const removeTracksUserRequest: RemoveTracksUserRequest = {
    ids: ['ids'],
  };

  const data = await spotifyWebApiSdk.tracks.removeTracksUser(removeTracksUserRequest, {
    ids: '7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B',
  });

  console.log(data);
})();
```

## checkUsersSavedTracks

Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library. **Note:** This endpoint is deprecated. Use [Check User's Saved Items](/documentation/web-api/reference/check-library-contains) instead.

- HTTP Method: `GET`
- Endpoint: `/me/tracks/contains`

**Parameters**

| Name | Type   | Required | Description                                                                                                                                                                       |
| :--- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ids  | string | ✅       | A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M`. Maximum: 50 IDs. |

**Return Type**

`boolean[]`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.tracks.checkUsersSavedTracks({
    ids: '7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B',
  });

  console.log(data);
})();
```

## getSeveralAudioFeatures

Get audio features for multiple tracks based on their Spotify IDs.

- HTTP Method: `GET`
- Endpoint: `/audio-features`

**Parameters**

| Name | Type   | Required | Description                                                                                                                     |
| :--- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------ |
| ids  | string | ✅       | A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the tracks. Maximum: 100 IDs. |

**Return Type**

`ManyAudioFeatures`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.tracks.getSeveralAudioFeatures({
    ids: '7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B',
  });

  console.log(data);
})();
```

## getAudioFeatures

Get audio feature information for a single track identified by its unique Spotify ID.

- HTTP Method: `GET`
- Endpoint: `/audio-features/{id}`

**Parameters**

| Name | Type   | Required | Description                                                                       |
| :--- | :----- | :------- | :-------------------------------------------------------------------------------- |
| id   | string | ✅       | The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track. |

**Return Type**

`AudioFeaturesObject`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.tracks.getAudioFeatures('11dFghVXANMlKmJXsNCbNl');

  console.log(data);
})();
```

## getAudioAnalysis

Get a low-level audio analysis for a track in the Spotify catalog. The audio analysis describes the track’s structure and musical content, including rhythm, pitch, and timbre.

- HTTP Method: `GET`
- Endpoint: `/audio-analysis/{id}`

**Parameters**

| Name | Type   | Required | Description                                                                       |
| :--- | :----- | :------- | :-------------------------------------------------------------------------------- |
| id   | string | ✅       | The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track. |

**Return Type**

`AudioAnalysisObject`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.tracks.getAudioAnalysis('11dFghVXANMlKmJXsNCbNl');

  console.log(data);
})();
```

## getRecommendations

Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks. If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details. For artists and tracks that are very new or obscure there might not be enough data to generate a list of tracks.

- HTTP Method: `GET`
- Endpoint: `/recommendations`

**Parameters**

| Name                   | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :--------------------- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| seedArtists            | string | ✅       | A comma separated list of [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for seed artists. Up to 5 seed values may be provided in any combination of `seed_artists`, `seed_tracks` and `seed_genres`.\<br/\> _**Note**: only required if `seed_genres` and `seed_tracks` are not set_.                                                                                                                                                                                                                                                                                                                     |
| seedGenres             | string | ✅       | A comma separated list of any genres in the set of [available genre seeds](/documentation/web-api/reference/get-recommendation-genres). Up to 5 seed values may be provided in any combination of `seed_artists`, `seed_tracks` and `seed_genres`.\<br/\> _**Note**: only required if `seed_artists` and `seed_tracks` are not set_.                                                                                                                                                                                                                                                                                        |
| seedTracks             | string | ✅       | A comma separated list of [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for a seed track. Up to 5 seed values may be provided in any combination of `seed_artists`, `seed_tracks` and `seed_genres`.\<br/\> _**Note**: only required if `seed_artists` and `seed_genres` are not set_.                                                                                                                                                                                                                                                                                                                    |
| limit                  | number | ❌       | The target size of the list of recommended tracks. For seeds with unusually small pools or when highly restrictive filtering is applied, it may be impossible to generate the requested number of recommended tracks. Debugging information for such cases is available in the response. Default: 20\. Minimum: 1\. Maximum: 100.                                                                                                                                                                                                                                                                                           |
| market                 | string | ❌       | An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned.\<br/\> If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.\<br/\> _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._\<br/\> Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/). |
| minAcousticness        | number | ❌       | For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.                                                                                                                                                                                                                                                                                                                   |
| maxAcousticness        | number | ❌       | For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.                                                                                                                                                                                                                                                                                                                                   |
| targetAcousticness     | number | ❌       | For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.                                                                                                                                                                                                                                                                                                           |
| minDanceability        | number | ❌       | For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.                                                                                                                                                                                                                                                                                                                   |
| maxDanceability        | number | ❌       | For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.                                                                                                                                                                                                                                                                                                                                   |
| targetDanceability     | number | ❌       | For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.                                                                                                                                                                                                                                                                                                           |
| minDurationMs          | number | ❌       | For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.                                                                                                                                                                                                                                                                                                                   |
| maxDurationMs          | number | ❌       | For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.                                                                                                                                                                                                                                                                                                                                   |
| targetDurationMs       | number | ❌       | Target duration of the track (ms)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| minEnergy              | number | ❌       | For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.                                                                                                                                                                                                                                                                                                                   |
| maxEnergy              | number | ❌       | For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.                                                                                                                                                                                                                                                                                                                                   |
| targetEnergy           | number | ❌       | For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.                                                                                                                                                                                                                                                                                                           |
| minInstrumentalness    | number | ❌       | For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.                                                                                                                                                                                                                                                                                                                   |
| maxInstrumentalness    | number | ❌       | For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.                                                                                                                                                                                                                                                                                                                                   |
| targetInstrumentalness | number | ❌       | For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.                                                                                                                                                                                                                                                                                                           |
| minKey                 | number | ❌       | For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.                                                                                                                                                                                                                                                                                                                   |
| maxKey                 | number | ❌       | For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.                                                                                                                                                                                                                                                                                                                                   |
| targetKey              | number | ❌       | For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.                                                                                                                                                                                                                                                                                                           |
| minLiveness            | number | ❌       | For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.                                                                                                                                                                                                                                                                                                                   |
| maxLiveness            | number | ❌       | For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.                                                                                                                                                                                                                                                                                                                                   |
| targetLiveness         | number | ❌       | For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.                                                                                                                                                                                                                                                                                                           |
| minLoudness            | number | ❌       | For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.                                                                                                                                                                                                                                                                                                                   |
| maxLoudness            | number | ❌       | For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.                                                                                                                                                                                                                                                                                                                                   |
| targetLoudness         | number | ❌       | For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.                                                                                                                                                                                                                                                                                                           |
| minMode                | number | ❌       | For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.                                                                                                                                                                                                                                                                                                                   |
| maxMode                | number | ❌       | For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.                                                                                                                                                                                                                                                                                                                                   |
| targetMode             | number | ❌       | For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.                                                                                                                                                                                                                                                                                                           |
| minPopularity          | number | ❌       | For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.                                                                                                                                                                                                                                                                                                                   |
| maxPopularity          | number | ❌       | For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.                                                                                                                                                                                                                                                                                                                                   |
| targetPopularity       | number | ❌       | For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.                                                                                                                                                                                                                                                                                                           |
| minSpeechiness         | number | ❌       | For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.                                                                                                                                                                                                                                                                                                                   |
| maxSpeechiness         | number | ❌       | For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.                                                                                                                                                                                                                                                                                                                                   |
| targetSpeechiness      | number | ❌       | For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.                                                                                                                                                                                                                                                                                                           |
| minTempo               | number | ❌       | For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.                                                                                                                                                                                                                                                                                                                   |
| maxTempo               | number | ❌       | For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.                                                                                                                                                                                                                                                                                                                                   |
| targetTempo            | number | ❌       | Target tempo (BPM)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| minTimeSignature       | number | ❌       | For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.                                                                                                                                                                                                                                                                                                                   |
| maxTimeSignature       | number | ❌       | For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.                                                                                                                                                                                                                                                                                                                                   |
| targetTimeSignature    | number | ❌       | For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.                                                                                                                                                                                                                                                                                                           |
| minValence             | number | ❌       | For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.                                                                                                                                                                                                                                                                                                                   |
| maxValence             | number | ❌       | For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.                                                                                                                                                                                                                                                                                                                                   |
| targetValence          | number | ❌       | For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.                                                                                                                                                                                                                                                                                                           |

**Return Type**

`RecommendationsObject`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.tracks.getRecommendations({
    limit: 10,
    market: 'ES',
    seedArtists: '4NHQUGzhtTLFvgF5SZesLK',
    seedGenres: 'classical,country',
    seedTracks: '0c6xIDDpzE81m2q797ordA',
    minAcousticness: 0.79,
    maxAcousticness: 0.67,
    targetAcousticness: 0.02,
    minDanceability: 0.1,
    maxDanceability: 0.26,
    targetDanceability: 0.54,
    minDurationMs: 2,
    maxDurationMs: 10,
    targetDurationMs: 5,
    minEnergy: 0.26,
    maxEnergy: 0.83,
    targetEnergy: 0.02,
    minInstrumentalness: 0.84,
    maxInstrumentalness: 0.68,
    targetInstrumentalness: 0.11,
    minKey: 11,
    maxKey: 2,
    targetKey: 7,
    minLiveness: 0.74,
    maxLiveness: 0.01,
    targetLiveness: 0.07,
    minLoudness: 6.44,
    maxLoudness: 5.74,
    targetLoudness: 4.44,
    minMode: 1,
    maxMode: 123,
    targetMode: 1,
    minPopularity: 36,
    maxPopularity: 92,
    targetPopularity: 52,
    minSpeechiness: 0.58,
    maxSpeechiness: 0.64,
    targetSpeechiness: 0.99,
    minTempo: 5.36,
    maxTempo: 0.7,
    targetTempo: 7.26,
    minTimeSignature: 11,
    maxTimeSignature: 1,
    targetTimeSignature: 8,
    minValence: 0.2,
    maxValence: 0.99,
    targetValence: 0.81,
  });

  console.log(data);
})();
```
