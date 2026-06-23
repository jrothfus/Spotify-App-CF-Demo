# GenresService

A list of all methods in the `GenresService` service. Click on the method name to view detailed information about that method.

| Methods                                             | Description                                                                                                                            |
| :-------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| [getRecommendationGenres](#getrecommendationgenres) | Retrieve a list of available genres seed parameter values for [recommendations](/documentation/web-api/reference/get-recommendations). |

## getRecommendationGenres

Retrieve a list of available genres seed parameter values for [recommendations](/documentation/web-api/reference/get-recommendations).

- HTTP Method: `GET`
- Endpoint: `/recommendations/available-genre-seeds`

**Return Type**

`ManyGenres`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.genres.getRecommendationGenres();

  console.log(data);
})();
```
