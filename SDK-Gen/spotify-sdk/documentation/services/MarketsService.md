# MarketsService

A list of all methods in the `MarketsService` service. Click on the method name to view detailed information about that method.

| Methods                                     | Description                                         |
| :------------------------------------------ | :-------------------------------------------------- |
| [getAvailableMarkets](#getavailablemarkets) | Get the list of markets where Spotify is available. |

## getAvailableMarkets

Get the list of markets where Spotify is available.

- HTTP Method: `GET`
- Endpoint: `/markets`

**Return Type**

`GetAvailableMarketsOkResponse`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.markets.getAvailableMarkets();

  console.log(data);
})();
```
