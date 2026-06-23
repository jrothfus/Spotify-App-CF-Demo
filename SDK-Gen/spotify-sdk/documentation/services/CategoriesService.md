# CategoriesService

A list of all methods in the `CategoriesService` service. Click on the method name to view detailed information about that method.

| Methods                         | Description                                                                                                 |
| :------------------------------ | :---------------------------------------------------------------------------------------------------------- |
| [getCategories](#getcategories) | Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab). |
| [getACategory](#getacategory)   | Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).    |

## getCategories

Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).

- HTTP Method: `GET`
- Endpoint: `/browse/categories`

**Parameters**

| Name   | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| :----- | :----- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| locale | string | ❌       | The desired language, consisting of an [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) language code and an [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), joined by an underscore. For example: `es_MX`, meaning "Spanish (Mexico)". Provide this parameter if you want the category strings returned in a particular language.\<br/\> _**Note**: if `locale` is not supplied, or if the specified language is not available, the category strings returned will be in the Spotify default language (American English)._ |
| limit  | number | ❌       | The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| offset | number | ❌       | The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

**Return Type**

`PagedCategories`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.categories.getCategories({
    locale: 'sv_SE',
    limit: 10,
    offset: 5,
  });

  console.log(data);
})();
```

## getACategory

Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).

- HTTP Method: `GET`
- Endpoint: `/browse/categories/{category_id}`

**Parameters**

| Name       | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| :--------- | :----- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| categoryId | string | ✅       | The [Spotify category ID](/documentation/web-api/concepts/spotify-uris-ids) for the category.                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| locale     | string | ❌       | The desired language, consisting of an [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) language code and an [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), joined by an underscore. For example: `es_MX`, meaning "Spanish (Mexico)". Provide this parameter if you want the category strings returned in a particular language.\<br/\> _**Note**: if `locale` is not supplied, or if the specified language is not available, the category strings returned will be in the Spotify default language (American English)._ |

**Return Type**

`CategoryObject`

**Example Usage Code Snippet**

```typescript
import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.categories.getACategory('dinner', {
    locale: 'sv_SE',
  });

  console.log(data);
})();
```
