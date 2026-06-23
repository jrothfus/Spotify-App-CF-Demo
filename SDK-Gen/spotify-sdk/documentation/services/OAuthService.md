# OAuthService

A list of all methods in the `OAuthService` service. Click on the method name to view detailed information about that method.

| Methods                           | Description |
| :-------------------------------- | :---------- |
| [getAccessToken](#getaccesstoken) |             |

## getAccessToken

- HTTP Method: `POST`
- Endpoint: `/api/token`

**Parameters**

| Name | Type                                                | Required | Description       |
| :--- | :-------------------------------------------------- | :------- | :---------------- |
| body | [OAuthTokenRequest](../models/OAuthTokenRequest.md) | ✅       | The request body. |

**Return Type**

`OAuthTokenResponse`

**Example Usage Code Snippet**

```typescript
import { OAuthTokenRequest, SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const grantType = 'authorization_code';

  const oAuthTokenRequest: OAuthTokenRequest = {
    grantType: grantType,
    clientId: 'your_client_id',
    clientSecret: 'your_client_secret',
    scope: 'read write',
  };

  const data = await spotifyWebApiSdk.oAuth.getAccessToken(oAuthTokenRequest);

  console.log(data);
})();
```
