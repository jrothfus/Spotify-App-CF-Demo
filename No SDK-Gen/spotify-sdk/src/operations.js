// Generated from official-spotify-open-api.yml. Do not edit by hand.
export const operations = Object.freeze([
  {
    "name": "getAnAlbum",
    "operationId": "get-an-album",
    "resourceName": "albums",
    "methodName": "getAnAlbum",
    "httpMethod": "GET",
    "path": "/albums/{id}",
    "tags": [
      "Albums"
    ],
    "summary": "Get Album",
    "description": "Get Spotify catalog information for a single album.",
    "deprecated": false,
    "parameters": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "type": "string",
        "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the album.",
        "example": "4aawyAB9vmqN3uQ7FjRGTy"
      },
      {
        "name": "market",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._ Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).",
        "example": "ES"
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [

    ]
  },
  {
    "name": "getMultipleAlbums",
    "operationId": "get-multiple-albums",
    "resourceName": "albums",
    "methodName": "getMultipleAlbums",
    "httpMethod": "GET",
    "path": "/albums",
    "tags": [
      "Albums"
    ],
    "summary": "Get Several Albums",
    "description": "Get Spotify catalog information for multiple albums identified by their Spotify IDs.",
    "deprecated": true,
    "parameters": [
      {
        "name": "ids",
        "in": "query",
        "required": true,
        "type": "string",
        "description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the albums. Maximum: 20 IDs.",
        "example": "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc"
      },
      {
        "name": "market",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._ Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).",
        "example": "ES"
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [

    ]
  },
  {
    "name": "getAnAlbumsTracks",
    "operationId": "get-an-albums-tracks",
    "resourceName": "albums",
    "methodName": "getAnAlbumsTracks",
    "httpMethod": "GET",
    "path": "/albums/{id}/tracks",
    "tags": [
      "Albums",
      "Tracks"
    ],
    "summary": "Get Album Tracks",
    "description": "Get Spotify catalog information about an album’s tracks. Optional parameters can be used to limit the number of tracks returned.",
    "deprecated": false,
    "parameters": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "type": "string",
        "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the album.",
        "example": "4aawyAB9vmqN3uQ7FjRGTy"
      },
      {
        "name": "market",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._ Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).",
        "example": "ES"
      },
      {
        "name": "limit",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.",
        "example": 10
      },
      {
        "name": "offset",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.",
        "example": 5
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [

    ]
  },
  {
    "name": "getAnArtist",
    "operationId": "get-an-artist",
    "resourceName": "artists",
    "methodName": "getAnArtist",
    "httpMethod": "GET",
    "path": "/artists/{id}",
    "tags": [
      "Artists"
    ],
    "summary": "Get Artist",
    "description": "Get Spotify catalog information for a single artist identified by their unique Spotify ID.",
    "deprecated": false,
    "parameters": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "type": "string",
        "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the artist.",
        "example": "0TnOYISbd1XYRBk9myaseg"
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [

    ]
  },
  {
    "name": "getMultipleArtists",
    "operationId": "get-multiple-artists",
    "resourceName": "artists",
    "methodName": "getMultipleArtists",
    "httpMethod": "GET",
    "path": "/artists",
    "tags": [
      "Artists"
    ],
    "summary": "Get Several Artists",
    "description": "Get Spotify catalog information for several artists based on their Spotify IDs.",
    "deprecated": true,
    "parameters": [
      {
        "name": "ids",
        "in": "query",
        "required": true,
        "type": "string",
        "description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the artists. Maximum: 50 IDs.",
        "example": "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6"
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [

    ]
  },
  {
    "name": "getAnArtistsAlbums",
    "operationId": "get-an-artists-albums",
    "resourceName": "artists",
    "methodName": "getAnArtistsAlbums",
    "httpMethod": "GET",
    "path": "/artists/{id}/albums",
    "tags": [
      "Artists",
      "Albums"
    ],
    "summary": "Get Artist's Albums",
    "description": "Get Spotify catalog information about an artist's albums.",
    "deprecated": false,
    "parameters": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "type": "string",
        "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the artist.",
        "example": "0TnOYISbd1XYRBk9myaseg"
      },
      {
        "name": "include_groups",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "A comma-separated list of keywords that will be used to filter the response. If not supplied, all album types will be returned. Valid values are: - `album` - `single` - `appears_on` - `compilation` For example: `include_groups=album,single`.",
        "example": "single,appears_on"
      },
      {
        "name": "market",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._ Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).",
        "example": "ES"
      },
      {
        "name": "limit",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "The maximum number of items to return. Default: 5. Minimum: 1. Maximum: 10.",
        "example": 5
      },
      {
        "name": "offset",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.",
        "example": 5
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [

    ]
  },
  {
    "name": "getAnArtistsTopTracks",
    "operationId": "get-an-artists-top-tracks",
    "resourceName": "artists",
    "methodName": "getAnArtistsTopTracks",
    "httpMethod": "GET",
    "path": "/artists/{id}/top-tracks",
    "tags": [
      "Artists",
      "Tracks"
    ],
    "summary": "Get Artist's Top Tracks",
    "description": "Get Spotify catalog information about an artist's top tracks by country.",
    "deprecated": true,
    "parameters": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "type": "string",
        "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the artist.",
        "example": "0TnOYISbd1XYRBk9myaseg"
      },
      {
        "name": "market",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._ Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).",
        "example": "ES"
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [

    ]
  },
  {
    "name": "getAnArtistsRelatedArtists",
    "operationId": "get-an-artists-related-artists",
    "resourceName": "artists",
    "methodName": "getAnArtistsRelatedArtists",
    "httpMethod": "GET",
    "path": "/artists/{id}/related-artists",
    "tags": [
      "Artists"
    ],
    "summary": "Get Artist's Related Artists",
    "description": "Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community's listening history.",
    "deprecated": true,
    "parameters": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "type": "string",
        "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the artist.",
        "example": "0TnOYISbd1XYRBk9myaseg"
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [

    ]
  },
  {
    "name": "getAShow",
    "operationId": "get-a-show",
    "resourceName": "shows",
    "methodName": "getAShow",
    "httpMethod": "GET",
    "path": "/shows/{id}",
    "tags": [
      "Shows"
    ],
    "summary": "Get Show",
    "description": "Get Spotify catalog information for a single show identified by its unique Spotify ID.",
    "deprecated": false,
    "parameters": [
      {
        "name": "market",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._ Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).",
        "example": "ES"
      },
      {
        "name": "id",
        "in": "path",
        "required": true,
        "type": "string",
        "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the show.",
        "example": "38bS44xjbVVZ3No3ByF1dJ"
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [
      "user-read-playback-position"
    ]
  },
  {
    "name": "getMultipleShows",
    "operationId": "get-multiple-shows",
    "resourceName": "shows",
    "methodName": "getMultipleShows",
    "httpMethod": "GET",
    "path": "/shows",
    "tags": [
      "Shows"
    ],
    "summary": "Get Several Shows",
    "description": "Get Spotify catalog information for several shows based on their Spotify IDs.",
    "deprecated": true,
    "parameters": [
      {
        "name": "market",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._ Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).",
        "example": "ES"
      },
      {
        "name": "ids",
        "in": "query",
        "required": true,
        "type": "string",
        "description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the shows. Maximum: 50 IDs.",
        "example": "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ"
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [

    ]
  },
  {
    "name": "getAShowsEpisodes",
    "operationId": "get-a-shows-episodes",
    "resourceName": "shows",
    "methodName": "getAShowsEpisodes",
    "httpMethod": "GET",
    "path": "/shows/{id}/episodes",
    "tags": [
      "Shows",
      "Episodes"
    ],
    "summary": "Get Show Episodes",
    "description": "Get Spotify catalog information about an show’s episodes. Optional parameters can be used to limit the number of episodes returned.",
    "deprecated": false,
    "parameters": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "type": "string",
        "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the show.",
        "example": "38bS44xjbVVZ3No3ByF1dJ"
      },
      {
        "name": "market",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._ Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).",
        "example": "ES"
      },
      {
        "name": "limit",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.",
        "example": 10
      },
      {
        "name": "offset",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.",
        "example": 5
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [
      "user-read-playback-position"
    ]
  },
  {
    "name": "getAnEpisode",
    "operationId": "get-an-episode",
    "resourceName": "episodes",
    "methodName": "getAnEpisode",
    "httpMethod": "GET",
    "path": "/episodes/{id}",
    "tags": [
      "Episodes"
    ],
    "summary": "Get Episode",
    "description": "Get Spotify catalog information for a single episode identified by its unique Spotify ID.",
    "deprecated": false,
    "parameters": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "type": "string",
        "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the episode.",
        "example": "512ojhOuo1ktJprKbVcKyQ"
      },
      {
        "name": "market",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._ Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).",
        "example": "ES"
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [
      "user-read-playback-position"
    ]
  },
  {
    "name": "getMultipleEpisodes",
    "operationId": "get-multiple-episodes",
    "resourceName": "episodes",
    "methodName": "getMultipleEpisodes",
    "httpMethod": "GET",
    "path": "/episodes",
    "tags": [
      "Episodes"
    ],
    "summary": "Get Several Episodes",
    "description": "Get Spotify catalog information for several episodes based on their Spotify IDs.",
    "deprecated": true,
    "parameters": [
      {
        "name": "ids",
        "in": "query",
        "required": true,
        "type": "string",
        "description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the episodes. Maximum: 50 IDs.",
        "example": "77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf"
      },
      {
        "name": "market",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._ Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).",
        "example": "ES"
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [
      "user-read-playback-position"
    ]
  },
  {
    "name": "getAnAudiobook",
    "operationId": "get-an-audiobook",
    "resourceName": "audiobooks",
    "methodName": "getAnAudiobook",
    "httpMethod": "GET",
    "path": "/audiobooks/{id}",
    "tags": [
      "Audiobooks"
    ],
    "summary": "Get an Audiobook",
    "description": "Get Spotify catalog information for a single audiobook. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.",
    "deprecated": false,
    "parameters": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "type": "string",
        "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the audiobook.",
        "example": "7iHfbu1YPACw6oZPAFJtqe"
      },
      {
        "name": "market",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._ Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).",
        "example": "ES"
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [

    ]
  },
  {
    "name": "getMultipleAudiobooks",
    "operationId": "get-multiple-audiobooks",
    "resourceName": "audiobooks",
    "methodName": "getMultipleAudiobooks",
    "httpMethod": "GET",
    "path": "/audiobooks",
    "tags": [
      "Audiobooks"
    ],
    "summary": "Get Several Audiobooks",
    "description": "Get Spotify catalog information for several audiobooks identified by their Spotify IDs. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.",
    "deprecated": true,
    "parameters": [
      {
        "name": "ids",
        "in": "query",
        "required": true,
        "type": "string",
        "description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ`. Maximum: 50 IDs.",
        "example": "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe"
      },
      {
        "name": "market",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._ Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).",
        "example": "ES"
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [

    ]
  },
  {
    "name": "getAudiobookChapters",
    "operationId": "get-audiobook-chapters",
    "resourceName": "audiobooks",
    "methodName": "getAudiobookChapters",
    "httpMethod": "GET",
    "path": "/audiobooks/{id}/chapters",
    "tags": [
      "Audiobooks",
      "Chapters"
    ],
    "summary": "Get Audiobook Chapters",
    "description": "Get Spotify catalog information about an audiobook's chapters. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.",
    "deprecated": false,
    "parameters": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "type": "string",
        "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the audiobook.",
        "example": "7iHfbu1YPACw6oZPAFJtqe"
      },
      {
        "name": "market",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._ Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).",
        "example": "ES"
      },
      {
        "name": "limit",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.",
        "example": 10
      },
      {
        "name": "offset",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.",
        "example": 5
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [

    ]
  },
  {
    "name": "getUsersSavedAudiobooks",
    "operationId": "get-users-saved-audiobooks",
    "resourceName": "audiobooks",
    "methodName": "getUsersSavedAudiobooks",
    "httpMethod": "GET",
    "path": "/me/audiobooks",
    "tags": [
      "Audiobooks",
      "Library"
    ],
    "summary": "Get User's Saved Audiobooks",
    "description": "Get a list of the audiobooks saved in the current Spotify user's 'Your Music' library.",
    "deprecated": false,
    "parameters": [
      {
        "name": "limit",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.",
        "example": 10
      },
      {
        "name": "offset",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.",
        "example": 5
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [
      "user-library-read"
    ]
  },
  {
    "name": "saveAudiobooksUser",
    "operationId": "save-audiobooks-user",
    "resourceName": "audiobooks",
    "methodName": "saveAudiobooksUser",
    "httpMethod": "PUT",
    "path": "/me/audiobooks",
    "tags": [
      "Audiobooks",
      "Library"
    ],
    "summary": "Save Audiobooks for Current User",
    "description": "Save one or more audiobooks to the current Spotify user's library. **Note:** This endpoint is deprecated. Use [Save Items to Library](/documentation/web-api/reference/save-library-items) instead.",
    "deprecated": true,
    "parameters": [
      {
        "name": "ids",
        "in": "query",
        "required": true,
        "type": "string",
        "description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ`. Maximum: 50 IDs.",
        "example": "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe"
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [
      "user-library-modify"
    ]
  },
  {
    "name": "removeAudiobooksUser",
    "operationId": "remove-audiobooks-user",
    "resourceName": "audiobooks",
    "methodName": "removeAudiobooksUser",
    "httpMethod": "DELETE",
    "path": "/me/audiobooks",
    "tags": [
      "Audiobooks",
      "Library"
    ],
    "summary": "Remove User's Saved Audiobooks",
    "description": "Remove one or more audiobooks from the Spotify user's library. **Note:** This endpoint is deprecated. Use [Remove Items from Library](/documentation/web-api/reference/remove-library-items) instead.",
    "deprecated": true,
    "parameters": [
      {
        "name": "ids",
        "in": "query",
        "required": true,
        "type": "string",
        "description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ`. Maximum: 50 IDs.",
        "example": "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe"
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [
      "user-library-modify"
    ]
  },
  {
    "name": "checkUsersSavedAudiobooks",
    "operationId": "check-users-saved-audiobooks",
    "resourceName": "audiobooks",
    "methodName": "checkUsersSavedAudiobooks",
    "httpMethod": "GET",
    "path": "/me/audiobooks/contains",
    "tags": [
      "Audiobooks",
      "Library"
    ],
    "summary": "Check User's Saved Audiobooks",
    "description": "Check if one or more audiobooks are already saved in the current Spotify user's library. **Note:** This endpoint is deprecated. Use [Check User's Saved Items](/documentation/web-api/reference/check-library-contains) instead.",
    "deprecated": true,
    "parameters": [
      {
        "name": "ids",
        "in": "query",
        "required": true,
        "type": "string",
        "description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ`. Maximum: 50 IDs.",
        "example": "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe"
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [
      "user-library-read"
    ]
  },
  {
    "name": "getAChapter",
    "operationId": "get-a-chapter",
    "resourceName": "chapters",
    "methodName": "getAChapter",
    "httpMethod": "GET",
    "path": "/chapters/{id}",
    "tags": [
      "Chapters"
    ],
    "summary": "Get a Chapter",
    "description": "Get Spotify catalog information for a single audiobook chapter. Chapters are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.",
    "deprecated": false,
    "parameters": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "type": "string",
        "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the chapter.",
        "example": "0D5wENdkdwbqlrHoaJ9g29"
      },
      {
        "name": "market",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._ Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).",
        "example": "ES"
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [

    ]
  },
  {
    "name": "getSeveralChapters",
    "operationId": "get-several-chapters",
    "resourceName": "chapters",
    "methodName": "getSeveralChapters",
    "httpMethod": "GET",
    "path": "/chapters",
    "tags": [
      "Chapters"
    ],
    "summary": "Get Several Chapters",
    "description": "Get Spotify catalog information for several audiobook chapters identified by their Spotify IDs. Chapters are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.",
    "deprecated": true,
    "parameters": [
      {
        "name": "ids",
        "in": "query",
        "required": true,
        "type": "string",
        "description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=0IsXVP0JmcB2adSE338GkK,3ZXb8FKZGU0EHALYX6uCzU`. Maximum: 50 IDs.",
        "example": "0IsXVP0JmcB2adSE338GkK,3ZXb8FKZGU0EHALYX6uCzU,0D5wENdkdwbqlrHoaJ9g29"
      },
      {
        "name": "market",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._ Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).",
        "example": "ES"
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [

    ]
  },
  {
    "name": "getTrack",
    "operationId": "get-track",
    "resourceName": "tracks",
    "methodName": "getTrack",
    "httpMethod": "GET",
    "path": "/tracks/{id}",
    "tags": [
      "Tracks"
    ],
    "summary": "Get Track",
    "description": "Get Spotify catalog information for a single track identified by its unique Spotify ID.",
    "deprecated": false,
    "parameters": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "type": "string",
        "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track.",
        "example": "11dFghVXANMlKmJXsNCbNl"
      },
      {
        "name": "market",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._ Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).",
        "example": "ES"
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [

    ]
  },
  {
    "name": "getSeveralTracks",
    "operationId": "get-several-tracks",
    "resourceName": "tracks",
    "methodName": "getSeveralTracks",
    "httpMethod": "GET",
    "path": "/tracks",
    "tags": [
      "Tracks"
    ],
    "summary": "Get Several Tracks",
    "description": "Get Spotify catalog information for multiple tracks based on their Spotify IDs.",
    "deprecated": true,
    "parameters": [
      {
        "name": "market",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._ Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).",
        "example": "ES"
      },
      {
        "name": "ids",
        "in": "query",
        "required": true,
        "type": "string",
        "description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M`. Maximum: 50 IDs.",
        "example": "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B"
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [

    ]
  },
  {
    "name": "search",
    "operationId": "search",
    "resourceName": "search",
    "methodName": "search",
    "httpMethod": "GET",
    "path": "/search",
    "tags": [
      "Search"
    ],
    "summary": "Search for Item",
    "description": "Get Spotify catalog information about albums, artists, playlists, tracks, shows, episodes or audiobooks that match a keyword string. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.",
    "deprecated": false,
    "parameters": [
      {
        "name": "q",
        "in": "query",
        "required": true,
        "type": "string",
        "description": "Your search query. You can narrow down your search using field filters. The available filters are `album`, `artist`, `track`, `year`, `upc`, `tag:hipster`, `tag:new`, `isrc`, and `genre`. Each field filter only applies to certain result types. The `artist` and `year` filters can be used while searching albums, artists and tracks. You can filter on a single `year` or a range (e.g. 1955-1960). The `album` filter can be used while searching albums and tracks. The `genre` filter can be used while searching artists and tracks. The `isrc` and `track` filters can be used while searching tracks. The `upc`, `tag:new` and `tag:hipster` filters can only be used while searching albums. The `tag:new` filter will return albums released in the past two weeks and `tag:hipster` can be used to return only albums with the lowest 10% popularity.",
        "example": "remaster%20track:Doxy%20artist:Miles%20Davis"
      },
      {
        "name": "type",
        "in": "query",
        "required": true,
        "type": "Array<\"album\" | \"artist\" | \"playlist\" | \"track\" | \"show\" | \"episode\" | \"audiobook\">",
        "description": "A comma-separated list of item types to search across. Search results include hits from all the specified item types. For example: `q=abacab&type=album,track` returns both albums and tracks matching \"abacab\".",
        "example": null
      },
      {
        "name": "market",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._ Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).",
        "example": "ES"
      },
      {
        "name": "limit",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "The maximum number of results to return in each item type.",
        "example": 10
      },
      {
        "name": "offset",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "The index of the first result to return. Use with limit to get the next page of search results.",
        "example": 5
      },
      {
        "name": "include_external",
        "in": "query",
        "required": false,
        "type": "\"audio\"",
        "description": "If `include_external=audio` is specified it signals that the client can play externally hosted audio content, and marks the content as playable in the response. By default externally hosted audio content is marked as unplayable in the response.",
        "example": null
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [

    ]
  },
  {
    "name": "getCurrentUsersProfile",
    "operationId": "get-current-users-profile",
    "resourceName": "users",
    "methodName": "getCurrentUsersProfile",
    "httpMethod": "GET",
    "path": "/me",
    "tags": [
      "Users"
    ],
    "summary": "Get Current User's Profile",
    "description": "Get detailed profile information about the current user (including the current user's username).",
    "deprecated": false,
    "parameters": [

    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [
      "user-read-private",
      "user-read-email"
    ]
  },
  {
    "name": "getPlaylist",
    "operationId": "get-playlist",
    "resourceName": "playlists",
    "methodName": "getPlaylist",
    "httpMethod": "GET",
    "path": "/playlists/{playlist_id}",
    "tags": [
      "Playlists"
    ],
    "summary": "Get Playlist",
    "description": "Get a playlist owned by a Spotify user.",
    "deprecated": false,
    "parameters": [
      {
        "name": "playlist_id",
        "in": "path",
        "required": true,
        "type": "string",
        "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.",
        "example": "3cEYpjA9oz9GiPac4AsH4n"
      },
      {
        "name": "market",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._ Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).",
        "example": "ES"
      },
      {
        "name": "fields",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "Filters for the query: a comma-separated list of the fields to return. If omitted, all fields are returned. For example, to get just the playlist''s description and URI: `fields=description,uri`. A dot separator can be used to specify non-reoccurring fields, while parentheses can be used to specify reoccurring fields within objects. For example, to get just the added date and user ID of the adder: `fields=tracks.items(added_at,added_by.id)`. Use multiple parentheses to drill down into nested objects, for example: `fields=tracks.items(track(name,href,album(name,href)))`. Fields can be excluded by prefixing them with an exclamation mark, for example: `fields=tracks.items(track(name,href,album(!name,href)))`",
        "example": "items(added_by.id,track(name,href,album(name,href)))"
      },
      {
        "name": "additional_types",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "A comma-separated list of item types that your client supports besides the default `track` type. Valid types are: `track` and `episode`. _**Note**: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future._ In addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the `type` field of each object.",
        "example": null
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [

    ]
  },
  {
    "name": "changePlaylistDetails",
    "operationId": "change-playlist-details",
    "resourceName": "playlists",
    "methodName": "changePlaylistDetails",
    "httpMethod": "PUT",
    "path": "/playlists/{playlist_id}",
    "tags": [
      "Playlists",
      "Library"
    ],
    "summary": "Change Playlist Details",
    "description": "Change a playlist's name and public/private state. (The user must, of course, own the playlist.)",
    "deprecated": false,
    "parameters": [
      {
        "name": "playlist_id",
        "in": "path",
        "required": true,
        "type": "string",
        "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.",
        "example": "3cEYpjA9oz9GiPac4AsH4n"
      }
    ],
    "requestContentType": "application/json",
    "successStatus": "200",
    "scopes": [
      "playlist-modify-public",
      "playlist-modify-private"
    ]
  },
  {
    "name": "getPlaylistsTracks",
    "operationId": "get-playlists-tracks",
    "resourceName": "playlists",
    "methodName": "getPlaylistsTracks",
    "httpMethod": "GET",
    "path": "/playlists/{playlist_id}/tracks",
    "tags": [
      "Playlists",
      "Tracks"
    ],
    "summary": "Get Playlist Items [DEPRECATED]",
    "description": "**Deprecated:** Use [Get Playlist Items](/documentation/web-api/reference/get-playlists-items) instead. Get full details of the items of a playlist owned by a Spotify user.",
    "deprecated": true,
    "parameters": [
      {
        "name": "playlist_id",
        "in": "path",
        "required": true,
        "type": "string",
        "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.",
        "example": "3cEYpjA9oz9GiPac4AsH4n"
      },
      {
        "name": "market",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._ Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).",
        "example": "ES"
      },
      {
        "name": "fields",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "Filters for the query: a comma-separated list of the fields to return. If omitted, all fields are returned. For example, to get just the total number of items and the request limit: `fields=total,limit` A dot separator can be used to specify non-reoccurring fields, while parentheses can be used to specify reoccurring fields within objects. For example, to get just the added date and user ID of the adder: `fields=items(added_at,added_by.id)` Use multiple parentheses to drill down into nested objects, for example: `fields=items(track(name,href,album(name,href)))` Fields can be excluded by prefixing them with an exclamation mark, for example: `fields=items.track.album(!external_urls,images)`",
        "example": "items(added_by.id,track(name,href,album(name,href)))"
      },
      {
        "name": "limit",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.",
        "example": 10
      },
      {
        "name": "offset",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.",
        "example": 5
      },
      {
        "name": "additional_types",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "A comma-separated list of item types that your client supports besides the default `track` type. Valid types are: `track` and `episode`. _**Note**: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future._ In addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the `type` field of each object.",
        "example": null
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [
      "playlist-read-private"
    ]
  },
  {
    "name": "addTracksToPlaylist",
    "operationId": "add-tracks-to-playlist",
    "resourceName": "playlists",
    "methodName": "addTracksToPlaylist",
    "httpMethod": "POST",
    "path": "/playlists/{playlist_id}/tracks",
    "tags": [
      "Playlists",
      "Tracks"
    ],
    "summary": "Add Items to Playlist [DEPRECATED]",
    "description": "**Deprecated:** Use [Add Items to Playlist](/documentation/web-api/reference/add-items-to-playlist) instead. Add one or more items to a user's playlist.",
    "deprecated": true,
    "parameters": [
      {
        "name": "playlist_id",
        "in": "path",
        "required": true,
        "type": "string",
        "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.",
        "example": "3cEYpjA9oz9GiPac4AsH4n"
      },
      {
        "name": "position",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "The position to insert the items, a zero-based index. For example, to insert the items in the first position: `position=0`; to insert the items in the third position: `position=2`. If omitted, the items will be appended to the playlist. Items are added in the order they are listed in the query string or request body.",
        "example": 0
      },
      {
        "name": "uris",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "A comma-separated list of [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) to add, can be track or episode URIs. For example: `uris=spotify:track:4iV5W9uYEdYUVa79Axb7Rh, spotify:track:1301WleyT98MSxVHPZCA6M, spotify:episode:512ojhOuo1ktJprKbVcKyQ` A maximum of 100 items can be added in one request. _**Note**: it is likely that passing a large number of item URIs as a query parameter will exceed the maximum length of the request URI. When adding a large number of items, it is recommended to pass them in the request body, see below._",
        "example": "spotify:track:4iV5W9uYEdYUVa79Axb7Rh,spotify:track:1301WleyT98MSxVHPZCA6M"
      }
    ],
    "requestContentType": "application/json",
    "successStatus": "201",
    "scopes": [
      "playlist-modify-public",
      "playlist-modify-private"
    ]
  },
  {
    "name": "reorderOrReplacePlaylistsTracks",
    "operationId": "reorder-or-replace-playlists-tracks",
    "resourceName": "playlists",
    "methodName": "reorderOrReplacePlaylistsTracks",
    "httpMethod": "PUT",
    "path": "/playlists/{playlist_id}/tracks",
    "tags": [
      "Playlists",
      "Tracks"
    ],
    "summary": "Update Playlist Items [DEPRECATED]",
    "description": "**Deprecated:** Use [Update Playlist Items](/documentation/web-api/reference/reorder-or-replace-playlists-items) instead. Either reorder or replace items in a playlist depending on the request's parameters. To reorder items, include `range_start`, `insert_before`, `range_length` and `snapshot_id` in the request's body. To replace items, include `uris` as either a query parameter or in the request's body. Replacing items in a playlist will overwrite its existing items. This operation can be used for replacing or clearing items in a playlist. **Note**: Replace and reorder are mutually exclusive operations which share the same endpoint, but have different parameters. These operations can't be applied together in a single request.",
    "deprecated": true,
    "parameters": [
      {
        "name": "playlist_id",
        "in": "path",
        "required": true,
        "type": "string",
        "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.",
        "example": "3cEYpjA9oz9GiPac4AsH4n"
      },
      {
        "name": "uris",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "A comma-separated list of [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) to set, can be track or episode URIs. For example: `uris=spotify:track:4iV5W9uYEdYUVa79Axb7Rh,spotify:track:1301WleyT98MSxVHPZCA6M,spotify:episode:512ojhOuo1ktJprKbVcKyQ` A maximum of 100 items can be set in one request.",
        "example": null
      }
    ],
    "requestContentType": "application/json",
    "successStatus": "200",
    "scopes": [
      "playlist-modify-public",
      "playlist-modify-private"
    ]
  },
  {
    "name": "removeTracksPlaylist",
    "operationId": "remove-tracks-playlist",
    "resourceName": "playlists",
    "methodName": "removeTracksPlaylist",
    "httpMethod": "DELETE",
    "path": "/playlists/{playlist_id}/tracks",
    "tags": [
      "Playlists",
      "Tracks"
    ],
    "summary": "Remove Playlist Items [DEPRECATED]",
    "description": "**Deprecated:** Use [Remove Playlist Items](/documentation/web-api/reference/remove-items-playlist) instead. Remove one or more items from a user's playlist.",
    "deprecated": true,
    "parameters": [
      {
        "name": "playlist_id",
        "in": "path",
        "required": true,
        "type": "string",
        "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.",
        "example": "3cEYpjA9oz9GiPac4AsH4n"
      }
    ],
    "requestContentType": "application/json",
    "successStatus": "200",
    "scopes": [
      "playlist-modify-public",
      "playlist-modify-private"
    ]
  },
  {
    "name": "getPlaylistsItems",
    "operationId": "get-playlists-items",
    "resourceName": "playlists",
    "methodName": "getPlaylistsItems",
    "httpMethod": "GET",
    "path": "/playlists/{playlist_id}/items",
    "tags": [
      "Playlists",
      "Tracks"
    ],
    "summary": "Get Playlist Items",
    "description": "Get full details of the items of a playlist owned by a Spotify user. **Note**: This endpoint is only accessible for playlists owned by the current user or playlists the user is a collaborator of. A `403 Forbidden` status code will be returned if the user is neither the owner nor a collaborator of the playlist.",
    "deprecated": false,
    "parameters": [
      {
        "name": "playlist_id",
        "in": "path",
        "required": true,
        "type": "string",
        "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.",
        "example": "3cEYpjA9oz9GiPac4AsH4n"
      },
      {
        "name": "market",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._ Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).",
        "example": "ES"
      },
      {
        "name": "fields",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "Filters for the query: a comma-separated list of the fields to return. If omitted, all fields are returned. For example, to get just the total number of items and the request limit: `fields=total,limit` A dot separator can be used to specify non-reoccurring fields, while parentheses can be used to specify reoccurring fields within objects. For example, to get just the added date and user ID of the adder: `fields=items(added_at,added_by.id)` Use multiple parentheses to drill down into nested objects, for example: `fields=items(track(name,href,album(name,href)))` Fields can be excluded by prefixing them with an exclamation mark, for example: `fields=items.track.album(!external_urls,images)`",
        "example": "items(added_by.id,track(name,href,album(name,href)))"
      },
      {
        "name": "limit",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.",
        "example": 10
      },
      {
        "name": "offset",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.",
        "example": 5
      },
      {
        "name": "additional_types",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "A comma-separated list of item types that your client supports besides the default `track` type. Valid types are: `track` and `episode`. _**Note**: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future._ In addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the `type` field of each object.",
        "example": null
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [
      "playlist-read-private"
    ]
  },
  {
    "name": "addItemsToPlaylist",
    "operationId": "add-items-to-playlist",
    "resourceName": "playlists",
    "methodName": "addItemsToPlaylist",
    "httpMethod": "POST",
    "path": "/playlists/{playlist_id}/items",
    "tags": [
      "Playlists",
      "Tracks"
    ],
    "summary": "Add Items to Playlist",
    "description": "Add one or more items to a user's playlist.",
    "deprecated": false,
    "parameters": [
      {
        "name": "playlist_id",
        "in": "path",
        "required": true,
        "type": "string",
        "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.",
        "example": "3cEYpjA9oz9GiPac4AsH4n"
      },
      {
        "name": "position",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "The position to insert the items, a zero-based index. For example, to insert the items in the first position: `position=0`; to insert the items in the third position: `position=2`. If omitted, the items will be appended to the playlist. Items are added in the order they are listed in the query string or request body.",
        "example": 0
      },
      {
        "name": "uris",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "A comma-separated list of [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) to add, can be track or episode URIs. For example: `uris=spotify:track:4iV5W9uYEdYUVa79Axb7Rh, spotify:track:1301WleyT98MSxVHPZCA6M, spotify:episode:512ojhOuo1ktJprKbVcKyQ` A maximum of 100 items can be added in one request. _**Note**: it is likely that passing a large number of item URIs as a query parameter will exceed the maximum length of the request URI. When adding a large number of items, it is recommended to pass them in the request body, see below._",
        "example": "spotify:track:4iV5W9uYEdYUVa79Axb7Rh,spotify:track:1301WleyT98MSxVHPZCA6M"
      }
    ],
    "requestContentType": "application/json",
    "successStatus": "201",
    "scopes": [
      "playlist-modify-public",
      "playlist-modify-private"
    ]
  },
  {
    "name": "reorderOrReplacePlaylistsItems",
    "operationId": "reorder-or-replace-playlists-items",
    "resourceName": "playlists",
    "methodName": "reorderOrReplacePlaylistsItems",
    "httpMethod": "PUT",
    "path": "/playlists/{playlist_id}/items",
    "tags": [
      "Playlists",
      "Tracks"
    ],
    "summary": "Update Playlist Items",
    "description": "Either reorder or replace items in a playlist depending on the request's parameters. To reorder items, include `range_start`, `insert_before`, `range_length` and `snapshot_id` in the request's body. To replace items, include `uris` as either a query parameter or in the request's body. Replacing items in a playlist will overwrite its existing items. This operation can be used for replacing or clearing items in a playlist. **Note**: Replace and reorder are mutually exclusive operations which share the same endpoint, but have different parameters. These operations can't be applied together in a single request.",
    "deprecated": false,
    "parameters": [
      {
        "name": "playlist_id",
        "in": "path",
        "required": true,
        "type": "string",
        "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.",
        "example": "3cEYpjA9oz9GiPac4AsH4n"
      },
      {
        "name": "uris",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "A comma-separated list of [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) to set, can be track or episode URIs. For example: `uris=spotify:track:4iV5W9uYEdYUVa79Axb7Rh,spotify:track:1301WleyT98MSxVHPZCA6M,spotify:episode:512ojhOuo1ktJprKbVcKyQ` A maximum of 100 items can be set in one request.",
        "example": null
      }
    ],
    "requestContentType": "application/json",
    "successStatus": "200",
    "scopes": [
      "playlist-modify-public",
      "playlist-modify-private"
    ]
  },
  {
    "name": "removeItemsPlaylist",
    "operationId": "remove-items-playlist",
    "resourceName": "playlists",
    "methodName": "removeItemsPlaylist",
    "httpMethod": "DELETE",
    "path": "/playlists/{playlist_id}/items",
    "tags": [
      "Playlists",
      "Tracks"
    ],
    "summary": "Remove Playlist Items",
    "description": "Remove one or more items from a user's playlist.",
    "deprecated": false,
    "parameters": [
      {
        "name": "playlist_id",
        "in": "path",
        "required": true,
        "type": "string",
        "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.",
        "example": "3cEYpjA9oz9GiPac4AsH4n"
      }
    ],
    "requestContentType": "application/json",
    "successStatus": "200",
    "scopes": [
      "playlist-modify-public",
      "playlist-modify-private"
    ]
  },
  {
    "name": "getAListOfCurrentUsersPlaylists",
    "operationId": "get-a-list-of-current-users-playlists",
    "resourceName": "playlists",
    "methodName": "getAListOfCurrentUsersPlaylists",
    "httpMethod": "GET",
    "path": "/me/playlists",
    "tags": [
      "Playlists",
      "Library"
    ],
    "summary": "Get Current User's Playlists",
    "description": "Get a list of the playlists owned or followed by the current Spotify user.",
    "deprecated": false,
    "parameters": [
      {
        "name": "limit",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.",
        "example": 10
      },
      {
        "name": "offset",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "'The index of the first playlist to return. Default: 0 (the first object). Maximum offset: 100.000\\. Use with `limit` to get the next set of playlists.'",
        "example": 5
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [
      "playlist-read-private"
    ]
  },
  {
    "name": "createPlaylist",
    "operationId": "create-playlist",
    "resourceName": "playlists",
    "methodName": "createPlaylist",
    "httpMethod": "POST",
    "path": "/me/playlists",
    "tags": [
      "Playlists",
      "Library"
    ],
    "summary": "Create Playlist",
    "description": "Create a playlist for the current Spotify user. (The playlist will be empty until you [add tracks](/documentation/web-api/reference/add-tracks-to-playlist).) Each user is generally limited to a maximum of 11000 playlists.",
    "deprecated": false,
    "parameters": [

    ],
    "requestContentType": "application/json",
    "successStatus": "201",
    "scopes": [
      "playlist-modify-public",
      "playlist-modify-private"
    ]
  },
  {
    "name": "saveLibraryItems",
    "operationId": "save-library-items",
    "resourceName": "library",
    "methodName": "saveLibraryItems",
    "httpMethod": "PUT",
    "path": "/me/library",
    "tags": [
      "Library"
    ],
    "summary": "Save Items to Library",
    "description": "Add one or more items to the current user's library. Accepts Spotify URIs for tracks, albums, episodes, shows, audiobooks, users, and playlists.",
    "deprecated": false,
    "parameters": [
      {
        "name": "uris",
        "in": "query",
        "required": true,
        "type": "string",
        "description": "A comma-separated list of [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids). Maximum: 40 URIs. Supported URI types: - `spotify:track:{id}` - `spotify:album:{id}` - `spotify:episode:{id}` - `spotify:show:{id}` - `spotify:audiobook:{id}` - `spotify:user:{id}` - `spotify:playlist:{id}`",
        "example": "spotify:track:7a3LWj5xSFhFRYmztS8wgK,spotify:album:4aawyAB9vmqN3uQ7FjRGTy"
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [
      "user-library-modify",
      "user-follow-modify",
      "playlist-modify-public"
    ]
  },
  {
    "name": "removeLibraryItems",
    "operationId": "remove-library-items",
    "resourceName": "library",
    "methodName": "removeLibraryItems",
    "httpMethod": "DELETE",
    "path": "/me/library",
    "tags": [
      "Library"
    ],
    "summary": "Remove Items from Library",
    "description": "Remove one or more items from the current user's library. Accepts Spotify URIs for tracks, albums, episodes, shows, audiobooks, users, and playlists.",
    "deprecated": false,
    "parameters": [
      {
        "name": "uris",
        "in": "query",
        "required": true,
        "type": "string",
        "description": "A comma-separated list of [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids). Maximum: 40 URIs. Supported URI types: - `spotify:track:{id}` - `spotify:album:{id}` - `spotify:episode:{id}` - `spotify:show:{id}` - `spotify:audiobook:{id}` - `spotify:user:{id}` - `spotify:playlist:{id}`",
        "example": "spotify:track:7a3LWj5xSFhFRYmztS8wgK,spotify:album:4aawyAB9vmqN3uQ7FjRGTy"
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [
      "user-library-modify",
      "user-follow-modify",
      "playlist-modify-public"
    ]
  },
  {
    "name": "checkLibraryContains",
    "operationId": "check-library-contains",
    "resourceName": "library",
    "methodName": "checkLibraryContains",
    "httpMethod": "GET",
    "path": "/me/library/contains",
    "tags": [
      "Library"
    ],
    "summary": "Check User's Saved Items",
    "description": "Check if one or more items are already saved in the current user's library. Accepts Spotify URIs for tracks, albums, episodes, shows, audiobooks, artists, users, and playlists.",
    "deprecated": false,
    "parameters": [
      {
        "name": "uris",
        "in": "query",
        "required": true,
        "type": "string",
        "description": "A comma-separated list of [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids). Maximum: 40 URIs. Supported URI types: - `spotify:track:{id}` - `spotify:album:{id}` - `spotify:episode:{id}` - `spotify:show:{id}` - `spotify:audiobook:{id}` - `spotify:artist:{id}` - `spotify:user:{id}` - `spotify:playlist:{id}`",
        "example": "spotify:track:7a3LWj5xSFhFRYmztS8wgK,spotify:album:4aawyAB9vmqN3uQ7FjRGTy,spotify:artist:2takcwOaAZWiXQijPHIx7B"
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [
      "user-library-read",
      "user-follow-read",
      "playlist-read-private"
    ]
  },
  {
    "name": "getUsersSavedAlbums",
    "operationId": "get-users-saved-albums",
    "resourceName": "albums",
    "methodName": "getUsersSavedAlbums",
    "httpMethod": "GET",
    "path": "/me/albums",
    "tags": [
      "Albums",
      "Library"
    ],
    "summary": "Get User's Saved Albums",
    "description": "Get a list of the albums saved in the current Spotify user's 'Your Music' library.",
    "deprecated": false,
    "parameters": [
      {
        "name": "limit",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.",
        "example": 10
      },
      {
        "name": "offset",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.",
        "example": 5
      },
      {
        "name": "market",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._ Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).",
        "example": "ES"
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [
      "user-library-read"
    ]
  },
  {
    "name": "saveAlbumsUser",
    "operationId": "save-albums-user",
    "resourceName": "albums",
    "methodName": "saveAlbumsUser",
    "httpMethod": "PUT",
    "path": "/me/albums",
    "tags": [
      "Albums",
      "Library"
    ],
    "summary": "Save Albums for Current User",
    "description": "Save one or more albums to the current user's 'Your Music' library. **Note:** This endpoint is deprecated. Use [Save Items to Library](/documentation/web-api/reference/save-library-items) instead.",
    "deprecated": true,
    "parameters": [
      {
        "name": "ids",
        "in": "query",
        "required": true,
        "type": "string",
        "description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the albums. Maximum: 20 IDs.",
        "example": "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc"
      }
    ],
    "requestContentType": "application/json",
    "successStatus": "200",
    "scopes": [
      "user-library-modify"
    ]
  },
  {
    "name": "removeAlbumsUser",
    "operationId": "remove-albums-user",
    "resourceName": "albums",
    "methodName": "removeAlbumsUser",
    "httpMethod": "DELETE",
    "path": "/me/albums",
    "tags": [
      "Albums",
      "Library"
    ],
    "summary": "Remove Users' Saved Albums",
    "description": "Remove one or more albums from the current user's 'Your Music' library. **Note:** This endpoint is deprecated. Use [Remove Items from Library](/documentation/web-api/reference/remove-library-items) instead.",
    "deprecated": true,
    "parameters": [
      {
        "name": "ids",
        "in": "query",
        "required": true,
        "type": "string",
        "description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the albums. Maximum: 20 IDs.",
        "example": "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc"
      }
    ],
    "requestContentType": "application/json",
    "successStatus": "200",
    "scopes": [
      "user-library-modify"
    ]
  },
  {
    "name": "checkUsersSavedAlbums",
    "operationId": "check-users-saved-albums",
    "resourceName": "albums",
    "methodName": "checkUsersSavedAlbums",
    "httpMethod": "GET",
    "path": "/me/albums/contains",
    "tags": [
      "Albums",
      "Library"
    ],
    "summary": "Check User's Saved Albums",
    "description": "Check if one or more albums is already saved in the current Spotify user's 'Your Music' library. **Note:** This endpoint is deprecated. Use [Check User's Saved Items](/documentation/web-api/reference/check-library-contains) instead.",
    "deprecated": true,
    "parameters": [
      {
        "name": "ids",
        "in": "query",
        "required": true,
        "type": "string",
        "description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the albums. Maximum: 20 IDs.",
        "example": "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc"
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [
      "user-library-read"
    ]
  },
  {
    "name": "getUsersSavedTracks",
    "operationId": "get-users-saved-tracks",
    "resourceName": "tracks",
    "methodName": "getUsersSavedTracks",
    "httpMethod": "GET",
    "path": "/me/tracks",
    "tags": [
      "Tracks",
      "Library"
    ],
    "summary": "Get User's Saved Tracks",
    "description": "Get a list of the songs saved in the current Spotify user's 'Your Music' library.",
    "deprecated": false,
    "parameters": [
      {
        "name": "market",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._ Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).",
        "example": "ES"
      },
      {
        "name": "limit",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.",
        "example": 10
      },
      {
        "name": "offset",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.",
        "example": 5
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [
      "user-library-read"
    ]
  },
  {
    "name": "saveTracksUser",
    "operationId": "save-tracks-user",
    "resourceName": "tracks",
    "methodName": "saveTracksUser",
    "httpMethod": "PUT",
    "path": "/me/tracks",
    "tags": [
      "Tracks",
      "Library"
    ],
    "summary": "Save Tracks for Current User",
    "description": "Save one or more tracks to the current user's 'Your Music' library. **Note:** This endpoint is deprecated. Use [Save Items to Library](/documentation/web-api/reference/save-library-items) instead.",
    "deprecated": true,
    "parameters": [

    ],
    "requestContentType": "application/json",
    "successStatus": "200",
    "scopes": [
      "user-library-modify"
    ]
  },
  {
    "name": "removeTracksUser",
    "operationId": "remove-tracks-user",
    "resourceName": "tracks",
    "methodName": "removeTracksUser",
    "httpMethod": "DELETE",
    "path": "/me/tracks",
    "tags": [
      "Tracks",
      "Library"
    ],
    "summary": "Remove User's Saved Tracks",
    "description": "Remove one or more tracks from the current user's 'Your Music' library. **Note:** This endpoint is deprecated. Use [Remove Items from Library](/documentation/web-api/reference/remove-library-items) instead.",
    "deprecated": true,
    "parameters": [
      {
        "name": "ids",
        "in": "query",
        "required": true,
        "type": "string",
        "description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M`. Maximum: 50 IDs.",
        "example": "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B"
      }
    ],
    "requestContentType": "application/json",
    "successStatus": "200",
    "scopes": [
      "user-library-modify"
    ]
  },
  {
    "name": "checkUsersSavedTracks",
    "operationId": "check-users-saved-tracks",
    "resourceName": "tracks",
    "methodName": "checkUsersSavedTracks",
    "httpMethod": "GET",
    "path": "/me/tracks/contains",
    "tags": [
      "Tracks",
      "Library"
    ],
    "summary": "Check User's Saved Tracks",
    "description": "Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library. **Note:** This endpoint is deprecated. Use [Check User's Saved Items](/documentation/web-api/reference/check-library-contains) instead.",
    "deprecated": true,
    "parameters": [
      {
        "name": "ids",
        "in": "query",
        "required": true,
        "type": "string",
        "description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M`. Maximum: 50 IDs.",
        "example": "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B"
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [
      "user-library-read"
    ]
  },
  {
    "name": "getUsersSavedEpisodes",
    "operationId": "get-users-saved-episodes",
    "resourceName": "episodes",
    "methodName": "getUsersSavedEpisodes",
    "httpMethod": "GET",
    "path": "/me/episodes",
    "tags": [
      "Episodes",
      "Library"
    ],
    "summary": "Get User's Saved Episodes",
    "description": "Get a list of the episodes saved in the current Spotify user's library.",
    "deprecated": false,
    "parameters": [
      {
        "name": "market",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._ Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).",
        "example": "ES"
      },
      {
        "name": "limit",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.",
        "example": 10
      },
      {
        "name": "offset",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.",
        "example": 5
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [
      "user-library-read",
      "user-read-playback-position"
    ]
  },
  {
    "name": "saveEpisodesUser",
    "operationId": "save-episodes-user",
    "resourceName": "episodes",
    "methodName": "saveEpisodesUser",
    "httpMethod": "PUT",
    "path": "/me/episodes",
    "tags": [
      "Episodes",
      "Library"
    ],
    "summary": "Save Episodes for Current User",
    "description": "Save one or more episodes to the current user's library. **Note:** This endpoint is deprecated. Use [Save Items to Library](/documentation/web-api/reference/save-library-items) instead.",
    "deprecated": true,
    "parameters": [
      {
        "name": "ids",
        "in": "query",
        "required": true,
        "type": "string",
        "description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). Maximum: 50 IDs.",
        "example": "77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf"
      }
    ],
    "requestContentType": "application/json",
    "successStatus": "200",
    "scopes": [
      "user-library-modify"
    ]
  },
  {
    "name": "removeEpisodesUser",
    "operationId": "remove-episodes-user",
    "resourceName": "episodes",
    "methodName": "removeEpisodesUser",
    "httpMethod": "DELETE",
    "path": "/me/episodes",
    "tags": [
      "Episodes",
      "Library"
    ],
    "summary": "Remove User's Saved Episodes",
    "description": "Remove one or more episodes from the current user's library. **Note:** This endpoint is deprecated. Use [Remove Items from Library](/documentation/web-api/reference/remove-library-items) instead.",
    "deprecated": true,
    "parameters": [
      {
        "name": "ids",
        "in": "query",
        "required": true,
        "type": "string",
        "description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M`. Maximum: 50 IDs.",
        "example": "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B"
      }
    ],
    "requestContentType": "application/json",
    "successStatus": "200",
    "scopes": [
      "user-library-modify"
    ]
  },
  {
    "name": "checkUsersSavedEpisodes",
    "operationId": "check-users-saved-episodes",
    "resourceName": "episodes",
    "methodName": "checkUsersSavedEpisodes",
    "httpMethod": "GET",
    "path": "/me/episodes/contains",
    "tags": [
      "Episodes",
      "Library"
    ],
    "summary": "Check User's Saved Episodes",
    "description": "Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes' library. **Note:** This endpoint is deprecated. Use [Check User's Saved Items](/documentation/web-api/reference/check-library-contains) instead.",
    "deprecated": true,
    "parameters": [
      {
        "name": "ids",
        "in": "query",
        "required": true,
        "type": "string",
        "description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the episodes. Maximum: 50 IDs.",
        "example": "77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf"
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [
      "user-library-read"
    ]
  },
  {
    "name": "getUsersSavedShows",
    "operationId": "get-users-saved-shows",
    "resourceName": "shows",
    "methodName": "getUsersSavedShows",
    "httpMethod": "GET",
    "path": "/me/shows",
    "tags": [
      "Shows",
      "Library"
    ],
    "summary": "Get User's Saved Shows",
    "description": "Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.",
    "deprecated": false,
    "parameters": [
      {
        "name": "limit",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.",
        "example": 10
      },
      {
        "name": "offset",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.",
        "example": 5
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [
      "user-library-read"
    ]
  },
  {
    "name": "saveShowsUser",
    "operationId": "save-shows-user",
    "resourceName": "shows",
    "methodName": "saveShowsUser",
    "httpMethod": "PUT",
    "path": "/me/shows",
    "tags": [
      "Shows",
      "Library"
    ],
    "summary": "Save Shows for Current User",
    "description": "Save one or more shows to current Spotify user's library. **Note:** This endpoint is deprecated. Use [Save Items to Library](/documentation/web-api/reference/save-library-items) instead.",
    "deprecated": true,
    "parameters": [
      {
        "name": "ids",
        "in": "query",
        "required": true,
        "type": "string",
        "description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the shows. Maximum: 50 IDs.",
        "example": "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ"
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [
      "user-library-modify"
    ]
  },
  {
    "name": "removeShowsUser",
    "operationId": "remove-shows-user",
    "resourceName": "shows",
    "methodName": "removeShowsUser",
    "httpMethod": "DELETE",
    "path": "/me/shows",
    "tags": [
      "Shows",
      "Library"
    ],
    "summary": "Remove User's Saved Shows",
    "description": "Delete one or more shows from current Spotify user's library. **Note:** This endpoint is deprecated. Use [Remove Items from Library](/documentation/web-api/reference/remove-library-items) instead.",
    "deprecated": true,
    "parameters": [
      {
        "name": "ids",
        "in": "query",
        "required": true,
        "type": "string",
        "description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the shows. Maximum: 50 IDs.",
        "example": "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ"
      },
      {
        "name": "market",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._ Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).",
        "example": "ES"
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [
      "user-library-modify"
    ]
  },
  {
    "name": "checkUsersSavedShows",
    "operationId": "check-users-saved-shows",
    "resourceName": "shows",
    "methodName": "checkUsersSavedShows",
    "httpMethod": "GET",
    "path": "/me/shows/contains",
    "tags": [
      "Shows",
      "Library"
    ],
    "summary": "Check User's Saved Shows",
    "description": "Check if one or more shows is already saved in the current Spotify user's library. **Note:** This endpoint is deprecated. Use [Check User's Saved Items](/documentation/web-api/reference/check-library-contains) instead.",
    "deprecated": true,
    "parameters": [
      {
        "name": "ids",
        "in": "query",
        "required": true,
        "type": "string",
        "description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the shows. Maximum: 50 IDs.",
        "example": "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ"
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [
      "user-library-read"
    ]
  },
  {
    "name": "getUsersTopArtistsAndTracks",
    "operationId": "get-users-top-artists-and-tracks",
    "resourceName": "users",
    "methodName": "getUsersTopArtistsAndTracks",
    "httpMethod": "GET",
    "path": "/me/top/{type}",
    "tags": [
      "Users",
      "Tracks",
      "Library"
    ],
    "summary": "Get User's Top Items",
    "description": "Get the current user's top artists or tracks based on calculated affinity.",
    "deprecated": false,
    "parameters": [
      {
        "name": "type",
        "in": "path",
        "required": true,
        "type": "\"artists\" | \"tracks\"",
        "description": "The type of entity to return. Valid values: `artists` or `tracks`",
        "example": null
      },
      {
        "name": "time_range",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "Over what time frame the affinities are computed. Valid values: `long_term` (calculated from ~1 year of data and including all new data as it becomes available), `medium_term` (approximately last 6 months), `short_term` (approximately last 4 weeks). Default: `medium_term`",
        "example": "medium_term"
      },
      {
        "name": "limit",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.",
        "example": 10
      },
      {
        "name": "offset",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.",
        "example": 5
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [
      "user-top-read"
    ]
  },
  {
    "name": "getUsersProfile",
    "operationId": "get-users-profile",
    "resourceName": "users",
    "methodName": "getUsersProfile",
    "httpMethod": "GET",
    "path": "/users/{user_id}",
    "tags": [
      "Users"
    ],
    "summary": "Get User's Profile",
    "description": "Get public profile information about a Spotify user.",
    "deprecated": true,
    "parameters": [
      {
        "name": "user_id",
        "in": "path",
        "required": true,
        "type": "string",
        "description": "The user's [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids).",
        "example": "smedjan"
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [

    ]
  },
  {
    "name": "getListUsersPlaylists",
    "operationId": "get-list-users-playlists",
    "resourceName": "playlists",
    "methodName": "getListUsersPlaylists",
    "httpMethod": "GET",
    "path": "/users/{user_id}/playlists",
    "tags": [
      "Playlists",
      "Users"
    ],
    "summary": "Get User's Playlists",
    "description": "Get a list of the playlists owned or followed by a Spotify user.",
    "deprecated": true,
    "parameters": [
      {
        "name": "user_id",
        "in": "path",
        "required": true,
        "type": "string",
        "description": "The user's [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids).",
        "example": "smedjan"
      },
      {
        "name": "limit",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.",
        "example": 10
      },
      {
        "name": "offset",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "The index of the first playlist to return. Default: 0 (the first object). Maximum offset: 100.000\\. Use with `limit` to get the next set of playlists.",
        "example": 5
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [
      "playlist-read-private",
      "playlist-read-collaborative"
    ]
  },
  {
    "name": "createPlaylistForUser",
    "operationId": "create-playlist-for-user",
    "resourceName": "playlists",
    "methodName": "createPlaylistForUser",
    "httpMethod": "POST",
    "path": "/users/{user_id}/playlists",
    "tags": [
      "Playlists",
      "Library"
    ],
    "summary": "Create Playlist for user",
    "description": "**Deprecated**: Use [Create Playlist](/documentation/web-api/reference/create-playlist) instead. Create a playlist for a Spotify user. (The playlist will be empty until you [add tracks](/documentation/web-api/reference/add-tracks-to-playlist).) Each user is generally limited to a maximum of 11000 playlists.",
    "deprecated": true,
    "parameters": [
      {
        "name": "user_id",
        "in": "path",
        "required": true,
        "type": "string",
        "description": "The user's [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids).",
        "example": "smedjan"
      }
    ],
    "requestContentType": "application/json",
    "successStatus": "201",
    "scopes": [
      "playlist-modify-public",
      "playlist-modify-private"
    ]
  },
  {
    "name": "followPlaylist",
    "operationId": "follow-playlist",
    "resourceName": "users",
    "methodName": "followPlaylist",
    "httpMethod": "PUT",
    "path": "/playlists/{playlist_id}/followers",
    "tags": [
      "Users",
      "Playlists"
    ],
    "summary": "Follow Playlist",
    "description": "Add the current user as a follower of a playlist. **Note:** This endpoint is deprecated. Use [Save Items to Library](/documentation/web-api/reference/save-library-items) instead.",
    "deprecated": true,
    "parameters": [
      {
        "name": "playlist_id",
        "in": "path",
        "required": true,
        "type": "string",
        "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.",
        "example": "3cEYpjA9oz9GiPac4AsH4n"
      }
    ],
    "requestContentType": "application/json",
    "successStatus": "200",
    "scopes": [
      "playlist-modify-public",
      "playlist-modify-private"
    ]
  },
  {
    "name": "unfollowPlaylist",
    "operationId": "unfollow-playlist",
    "resourceName": "users",
    "methodName": "unfollowPlaylist",
    "httpMethod": "DELETE",
    "path": "/playlists/{playlist_id}/followers",
    "tags": [
      "Users",
      "Playlists"
    ],
    "summary": "Unfollow Playlist",
    "description": "Remove the current user as a follower of a playlist. **Note:** This endpoint is deprecated. Use [Remove Items from Library](/documentation/web-api/reference/remove-library-items) instead.",
    "deprecated": true,
    "parameters": [
      {
        "name": "playlist_id",
        "in": "path",
        "required": true,
        "type": "string",
        "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.",
        "example": "3cEYpjA9oz9GiPac4AsH4n"
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [
      "playlist-modify-public",
      "playlist-modify-private"
    ]
  },
  {
    "name": "getFeaturedPlaylists",
    "operationId": "get-featured-playlists",
    "resourceName": "playlists",
    "methodName": "getFeaturedPlaylists",
    "httpMethod": "GET",
    "path": "/browse/featured-playlists",
    "tags": [
      "Playlists"
    ],
    "summary": "Get Featured Playlists",
    "description": "Get a list of Spotify featured playlists (shown, for example, on a Spotify player's 'Browse' tab).",
    "deprecated": true,
    "parameters": [
      {
        "name": "locale",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "The desired language, consisting of an [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) language code and an [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), joined by an underscore. For example: `es_MX`, meaning &quot;Spanish (Mexico)&quot;. Provide this parameter if you want the category strings returned in a particular language. _**Note**: if `locale` is not supplied, or if the specified language is not available, the category strings returned will be in the Spotify default language (American English)._",
        "example": "sv_SE"
      },
      {
        "name": "limit",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.",
        "example": 10
      },
      {
        "name": "offset",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.",
        "example": 5
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [

    ]
  },
  {
    "name": "getCategories",
    "operationId": "get-categories",
    "resourceName": "categories",
    "methodName": "getCategories",
    "httpMethod": "GET",
    "path": "/browse/categories",
    "tags": [
      "Categories"
    ],
    "summary": "Get Several Browse Categories",
    "description": "Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).",
    "deprecated": true,
    "parameters": [
      {
        "name": "locale",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "The desired language, consisting of an [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) language code and an [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), joined by an underscore. For example: `es_MX`, meaning &quot;Spanish (Mexico)&quot;. Provide this parameter if you want the category strings returned in a particular language. _**Note**: if `locale` is not supplied, or if the specified language is not available, the category strings returned will be in the Spotify default language (American English)._",
        "example": "sv_SE"
      },
      {
        "name": "limit",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.",
        "example": 10
      },
      {
        "name": "offset",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.",
        "example": 5
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [

    ]
  },
  {
    "name": "getACategory",
    "operationId": "get-a-category",
    "resourceName": "categories",
    "methodName": "getACategory",
    "httpMethod": "GET",
    "path": "/browse/categories/{category_id}",
    "tags": [
      "Categories"
    ],
    "summary": "Get Single Browse Category",
    "description": "Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).",
    "deprecated": true,
    "parameters": [
      {
        "name": "category_id",
        "in": "path",
        "required": true,
        "type": "string",
        "description": "The [Spotify category ID](/documentation/web-api/concepts/spotify-uris-ids) for the category.",
        "example": "dinner"
      },
      {
        "name": "locale",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "The desired language, consisting of an [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) language code and an [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), joined by an underscore. For example: `es_MX`, meaning &quot;Spanish (Mexico)&quot;. Provide this parameter if you want the category strings returned in a particular language. _**Note**: if `locale` is not supplied, or if the specified language is not available, the category strings returned will be in the Spotify default language (American English)._",
        "example": "sv_SE"
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [

    ]
  },
  {
    "name": "getACategoriesPlaylists",
    "operationId": "get-a-categories-playlists",
    "resourceName": "playlists",
    "methodName": "getACategoriesPlaylists",
    "httpMethod": "GET",
    "path": "/browse/categories/{category_id}/playlists",
    "tags": [
      "Playlists",
      "Categories"
    ],
    "summary": "Get Category's Playlists",
    "description": "Get a list of Spotify playlists tagged with a particular category.",
    "deprecated": true,
    "parameters": [
      {
        "name": "category_id",
        "in": "path",
        "required": true,
        "type": "string",
        "description": "The [Spotify category ID](/documentation/web-api/concepts/spotify-uris-ids) for the category.",
        "example": "dinner"
      },
      {
        "name": "limit",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.",
        "example": 10
      },
      {
        "name": "offset",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.",
        "example": 5
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [

    ]
  },
  {
    "name": "getPlaylistCover",
    "operationId": "get-playlist-cover",
    "resourceName": "playlists",
    "methodName": "getPlaylistCover",
    "httpMethod": "GET",
    "path": "/playlists/{playlist_id}/images",
    "tags": [
      "Playlists"
    ],
    "summary": "Get Playlist Cover Image",
    "description": "Get the current image associated with a specific playlist.",
    "deprecated": false,
    "parameters": [
      {
        "name": "playlist_id",
        "in": "path",
        "required": true,
        "type": "string",
        "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.",
        "example": "3cEYpjA9oz9GiPac4AsH4n"
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [

    ]
  },
  {
    "name": "uploadCustomPlaylistCover",
    "operationId": "upload-custom-playlist-cover",
    "resourceName": "playlists",
    "methodName": "uploadCustomPlaylistCover",
    "httpMethod": "PUT",
    "path": "/playlists/{playlist_id}/images",
    "tags": [
      "Playlists"
    ],
    "summary": "Add Custom Playlist Cover Image",
    "description": "Replace the image used to represent a specific playlist.",
    "deprecated": false,
    "parameters": [
      {
        "name": "playlist_id",
        "in": "path",
        "required": true,
        "type": "string",
        "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.",
        "example": "3cEYpjA9oz9GiPac4AsH4n"
      }
    ],
    "requestContentType": "image/jpeg",
    "successStatus": "202",
    "scopes": [
      "ugc-image-upload",
      "playlist-modify-public",
      "playlist-modify-private"
    ]
  },
  {
    "name": "getNewReleases",
    "operationId": "get-new-releases",
    "resourceName": "albums",
    "methodName": "getNewReleases",
    "httpMethod": "GET",
    "path": "/browse/new-releases",
    "tags": [
      "Albums"
    ],
    "summary": "Get New Releases",
    "description": "Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).",
    "deprecated": true,
    "parameters": [
      {
        "name": "limit",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.",
        "example": 10
      },
      {
        "name": "offset",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.",
        "example": 5
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [

    ]
  },
  {
    "name": "getFollowed",
    "operationId": "get-followed",
    "resourceName": "users",
    "methodName": "getFollowed",
    "httpMethod": "GET",
    "path": "/me/following",
    "tags": [
      "Users",
      "Library",
      "Artists"
    ],
    "summary": "Get Followed Artists",
    "description": "Get the current user's followed artists.",
    "deprecated": false,
    "parameters": [
      {
        "name": "type",
        "in": "query",
        "required": true,
        "type": "\"artist\"",
        "description": "The ID type: currently only `artist` is supported.",
        "example": "artist"
      },
      {
        "name": "after",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "The last artist ID retrieved from the previous request.",
        "example": "0I2XqVXqHScXjHhk6AYYRe"
      },
      {
        "name": "limit",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "The maximum number of items to return. Default: 20\\. Minimum: 1\\. Maximum: 50\\.",
        "example": 10
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [
      "user-follow-read"
    ]
  },
  {
    "name": "followArtistsUsers",
    "operationId": "follow-artists-users",
    "resourceName": "users",
    "methodName": "followArtistsUsers",
    "httpMethod": "PUT",
    "path": "/me/following",
    "tags": [
      "Users",
      "Artists",
      "Library"
    ],
    "summary": "Follow Artists or Users",
    "description": "Add the current user as a follower of one or more artists or other Spotify users. **Note:** This endpoint is deprecated. Use [Save Items to Library](/documentation/web-api/reference/save-library-items) instead.",
    "deprecated": true,
    "parameters": [
      {
        "name": "type",
        "in": "query",
        "required": true,
        "type": "\"artist\" | \"user\"",
        "description": "The ID type.",
        "example": "artist"
      },
      {
        "name": "ids",
        "in": "query",
        "required": true,
        "type": "string",
        "description": "A comma-separated list of the artist or the user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). A maximum of 50 IDs can be sent in one request.",
        "example": "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6"
      }
    ],
    "requestContentType": "application/json",
    "successStatus": "204",
    "scopes": [
      "user-follow-modify"
    ]
  },
  {
    "name": "unfollowArtistsUsers",
    "operationId": "unfollow-artists-users",
    "resourceName": "users",
    "methodName": "unfollowArtistsUsers",
    "httpMethod": "DELETE",
    "path": "/me/following",
    "tags": [
      "Users",
      "Artists",
      "Library"
    ],
    "summary": "Unfollow Artists or Users",
    "description": "Remove the current user as a follower of one or more artists or other Spotify users. **Note:** This endpoint is deprecated. Use [Remove Items from Library](/documentation/web-api/reference/remove-library-items) instead.",
    "deprecated": true,
    "parameters": [
      {
        "name": "type",
        "in": "query",
        "required": true,
        "type": "\"artist\" | \"user\"",
        "description": "The ID type: either `artist` or `user`.",
        "example": "artist"
      },
      {
        "name": "ids",
        "in": "query",
        "required": true,
        "type": "string",
        "description": "A comma-separated list of the artist or the user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=74ASZWbe4lXaubB36ztrGX,08td7MxkoHQkXnWAYD8d6Q`. A maximum of 50 IDs can be sent in one request.",
        "example": "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6"
      }
    ],
    "requestContentType": "application/json",
    "successStatus": "204",
    "scopes": [
      "user-follow-modify"
    ]
  },
  {
    "name": "checkCurrentUserFollows",
    "operationId": "check-current-user-follows",
    "resourceName": "users",
    "methodName": "checkCurrentUserFollows",
    "httpMethod": "GET",
    "path": "/me/following/contains",
    "tags": [
      "Users",
      "Artists",
      "Library"
    ],
    "summary": "Check If User Follows Artists or Users",
    "description": "Check to see if the current user is following one or more artists or other Spotify users. **Note:** This endpoint is deprecated. Use [Check User's Saved Items](/documentation/web-api/reference/check-library-contains) instead.",
    "deprecated": true,
    "parameters": [
      {
        "name": "type",
        "in": "query",
        "required": true,
        "type": "\"artist\" | \"user\"",
        "description": "The ID type: either `artist` or `user`.",
        "example": "artist"
      },
      {
        "name": "ids",
        "in": "query",
        "required": true,
        "type": "string",
        "description": "A comma-separated list of the artist or the user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) to check. For example: `ids=74ASZWbe4lXaubB36ztrGX,08td7MxkoHQkXnWAYD8d6Q`. A maximum of 50 IDs can be sent in one request.",
        "example": "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6"
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [
      "user-follow-read"
    ]
  },
  {
    "name": "checkIfUserFollowsPlaylist",
    "operationId": "check-if-user-follows-playlist",
    "resourceName": "users",
    "methodName": "checkIfUserFollowsPlaylist",
    "httpMethod": "GET",
    "path": "/playlists/{playlist_id}/followers/contains",
    "tags": [
      "Users",
      "Playlists"
    ],
    "summary": "Check if Current User Follows Playlist",
    "description": "Check to see if the current user is following a specified playlist. **Note:** This endpoint is deprecated. Use [Check User's Saved Items](/documentation/web-api/reference/check-library-contains) instead.",
    "deprecated": true,
    "parameters": [
      {
        "name": "playlist_id",
        "in": "path",
        "required": true,
        "type": "string",
        "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.",
        "example": "3cEYpjA9oz9GiPac4AsH4n"
      },
      {
        "name": "ids",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "**Deprecated** A single item list containing current user's [Spotify Username](/documentation/web-api/concepts/spotify-uris-ids). Maximum: 1 id.",
        "example": "jmperezperez"
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [

    ]
  },
  {
    "name": "getSeveralAudioFeatures",
    "operationId": "get-several-audio-features",
    "resourceName": "tracks",
    "methodName": "getSeveralAudioFeatures",
    "httpMethod": "GET",
    "path": "/audio-features",
    "tags": [
      "Tracks"
    ],
    "summary": "Get Several Tracks' Audio Features",
    "description": "Get audio features for multiple tracks based on their Spotify IDs.",
    "deprecated": true,
    "parameters": [
      {
        "name": "ids",
        "in": "query",
        "required": true,
        "type": "string",
        "description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the tracks. Maximum: 100 IDs.",
        "example": "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B"
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [

    ]
  },
  {
    "name": "getAudioFeatures",
    "operationId": "get-audio-features",
    "resourceName": "tracks",
    "methodName": "getAudioFeatures",
    "httpMethod": "GET",
    "path": "/audio-features/{id}",
    "tags": [
      "Tracks"
    ],
    "summary": "Get Track's Audio Features",
    "description": "Get audio feature information for a single track identified by its unique Spotify ID.",
    "deprecated": true,
    "parameters": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "type": "string",
        "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track.",
        "example": "11dFghVXANMlKmJXsNCbNl"
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [

    ]
  },
  {
    "name": "getAudioAnalysis",
    "operationId": "get-audio-analysis",
    "resourceName": "tracks",
    "methodName": "getAudioAnalysis",
    "httpMethod": "GET",
    "path": "/audio-analysis/{id}",
    "tags": [
      "Tracks"
    ],
    "summary": "Get Track's Audio Analysis",
    "description": "Get a low-level audio analysis for a track in the Spotify catalog. The audio analysis describes the track’s structure and musical content, including rhythm, pitch, and timbre.",
    "deprecated": true,
    "parameters": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "type": "string",
        "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track.",
        "example": "11dFghVXANMlKmJXsNCbNl"
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [

    ]
  },
  {
    "name": "getRecommendations",
    "operationId": "get-recommendations",
    "resourceName": "tracks",
    "methodName": "getRecommendations",
    "httpMethod": "GET",
    "path": "/recommendations",
    "tags": [
      "Tracks"
    ],
    "summary": "Get Recommendations",
    "description": "Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks. If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details. For artists and tracks that are very new or obscure there might not be enough data to generate a list of tracks.",
    "deprecated": true,
    "parameters": [
      {
        "name": "limit",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "The target size of the list of recommended tracks. For seeds with unusually small pools or when highly restrictive filtering is applied, it may be impossible to generate the requested number of recommended tracks. Debugging information for such cases is available in the response. Default: 20\\. Minimum: 1\\. Maximum: 100.",
        "example": 10
      },
      {
        "name": "market",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._ Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).",
        "example": "ES"
      },
      {
        "name": "seed_artists",
        "in": "query",
        "required": true,
        "type": "string",
        "description": "A comma separated list of [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for seed artists. Up to 5 seed values may be provided in any combination of `seed_artists`, `seed_tracks` and `seed_genres`. _**Note**: only required if `seed_genres` and `seed_tracks` are not set_.",
        "example": "4NHQUGzhtTLFvgF5SZesLK"
      },
      {
        "name": "seed_genres",
        "in": "query",
        "required": true,
        "type": "string",
        "description": "A comma separated list of any genres in the set of [available genre seeds](/documentation/web-api/reference/get-recommendation-genres). Up to 5 seed values may be provided in any combination of `seed_artists`, `seed_tracks` and `seed_genres`. _**Note**: only required if `seed_artists` and `seed_tracks` are not set_.",
        "example": "classical,country"
      },
      {
        "name": "seed_tracks",
        "in": "query",
        "required": true,
        "type": "string",
        "description": "A comma separated list of [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for a seed track. Up to 5 seed values may be provided in any combination of `seed_artists`, `seed_tracks` and `seed_genres`. _**Note**: only required if `seed_artists` and `seed_genres` are not set_.",
        "example": "0c6xIDDpzE81m2q797ordA"
      },
      {
        "name": "min_acousticness",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.",
        "example": null
      },
      {
        "name": "max_acousticness",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.",
        "example": null
      },
      {
        "name": "target_acousticness",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.",
        "example": null
      },
      {
        "name": "min_danceability",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.",
        "example": null
      },
      {
        "name": "max_danceability",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.",
        "example": null
      },
      {
        "name": "target_danceability",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.",
        "example": null
      },
      {
        "name": "min_duration_ms",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.",
        "example": null
      },
      {
        "name": "max_duration_ms",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.",
        "example": null
      },
      {
        "name": "target_duration_ms",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "Target duration of the track (ms)",
        "example": null
      },
      {
        "name": "min_energy",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.",
        "example": null
      },
      {
        "name": "max_energy",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.",
        "example": null
      },
      {
        "name": "target_energy",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.",
        "example": null
      },
      {
        "name": "min_instrumentalness",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.",
        "example": null
      },
      {
        "name": "max_instrumentalness",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.",
        "example": null
      },
      {
        "name": "target_instrumentalness",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.",
        "example": null
      },
      {
        "name": "min_key",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.",
        "example": null
      },
      {
        "name": "max_key",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.",
        "example": null
      },
      {
        "name": "target_key",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.",
        "example": null
      },
      {
        "name": "min_liveness",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.",
        "example": null
      },
      {
        "name": "max_liveness",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.",
        "example": null
      },
      {
        "name": "target_liveness",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.",
        "example": null
      },
      {
        "name": "min_loudness",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.",
        "example": null
      },
      {
        "name": "max_loudness",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.",
        "example": null
      },
      {
        "name": "target_loudness",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.",
        "example": null
      },
      {
        "name": "min_mode",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.",
        "example": null
      },
      {
        "name": "max_mode",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.",
        "example": null
      },
      {
        "name": "target_mode",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.",
        "example": null
      },
      {
        "name": "min_popularity",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.",
        "example": null
      },
      {
        "name": "max_popularity",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.",
        "example": null
      },
      {
        "name": "target_popularity",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.",
        "example": null
      },
      {
        "name": "min_speechiness",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.",
        "example": null
      },
      {
        "name": "max_speechiness",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.",
        "example": null
      },
      {
        "name": "target_speechiness",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.",
        "example": null
      },
      {
        "name": "min_tempo",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.",
        "example": null
      },
      {
        "name": "max_tempo",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.",
        "example": null
      },
      {
        "name": "target_tempo",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "Target tempo (BPM)",
        "example": null
      },
      {
        "name": "min_time_signature",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.",
        "example": null
      },
      {
        "name": "max_time_signature",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.",
        "example": null
      },
      {
        "name": "target_time_signature",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.",
        "example": null
      },
      {
        "name": "min_valence",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.",
        "example": null
      },
      {
        "name": "max_valence",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.",
        "example": null
      },
      {
        "name": "target_valence",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.",
        "example": null
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [

    ]
  },
  {
    "name": "getRecommendationGenres",
    "operationId": "get-recommendation-genres",
    "resourceName": "genres",
    "methodName": "getRecommendationGenres",
    "httpMethod": "GET",
    "path": "/recommendations/available-genre-seeds",
    "tags": [
      "Genres"
    ],
    "summary": "Get Available Genre Seeds",
    "description": "Retrieve a list of available genres seed parameter values for [recommendations](/documentation/web-api/reference/get-recommendations).",
    "deprecated": true,
    "parameters": [

    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [

    ]
  },
  {
    "name": "getInformationAboutTheUsersCurrentPlayback",
    "operationId": "get-information-about-the-users-current-playback",
    "resourceName": "player",
    "methodName": "getInformationAboutTheUsersCurrentPlayback",
    "httpMethod": "GET",
    "path": "/me/player",
    "tags": [
      "Player"
    ],
    "summary": "Get Playback State",
    "description": "Get information about the user’s current playback state, including track or episode, progress, and active device.",
    "deprecated": false,
    "parameters": [
      {
        "name": "market",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._ Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).",
        "example": "ES"
      },
      {
        "name": "additional_types",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "A comma-separated list of item types that your client supports besides the default `track` type. Valid types are: `track` and `episode`. _**Note**: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future._ In addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the `type` field of each object.",
        "example": null
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [
      "user-read-playback-state"
    ]
  },
  {
    "name": "transferAUsersPlayback",
    "operationId": "transfer-a-users-playback",
    "resourceName": "player",
    "methodName": "transferAUsersPlayback",
    "httpMethod": "PUT",
    "path": "/me/player",
    "tags": [
      "Player"
    ],
    "summary": "Transfer Playback",
    "description": "Transfer playback to a new device and optionally begin playback. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.",
    "deprecated": false,
    "parameters": [

    ],
    "requestContentType": "application/json",
    "successStatus": "204",
    "scopes": [
      "user-modify-playback-state"
    ]
  },
  {
    "name": "getAUsersAvailableDevices",
    "operationId": "get-a-users-available-devices",
    "resourceName": "player",
    "methodName": "getAUsersAvailableDevices",
    "httpMethod": "GET",
    "path": "/me/player/devices",
    "tags": [
      "Player"
    ],
    "summary": "Get Available Devices",
    "description": "Get information about a user’s available Spotify Connect devices. Some device models are not supported and will not be listed in the API response.",
    "deprecated": false,
    "parameters": [

    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [
      "user-read-playback-state"
    ]
  },
  {
    "name": "getTheUsersCurrentlyPlayingTrack",
    "operationId": "get-the-users-currently-playing-track",
    "resourceName": "player",
    "methodName": "getTheUsersCurrentlyPlayingTrack",
    "httpMethod": "GET",
    "path": "/me/player/currently-playing",
    "tags": [
      "Player"
    ],
    "summary": "Get Currently Playing Track",
    "description": "Get the object currently being played on the user's Spotify account.",
    "deprecated": false,
    "parameters": [
      {
        "name": "market",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._ Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).",
        "example": "ES"
      },
      {
        "name": "additional_types",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "A comma-separated list of item types that your client supports besides the default `track` type. Valid types are: `track` and `episode`. _**Note**: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future._ In addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the `type` field of each object.",
        "example": null
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [
      "user-read-currently-playing"
    ]
  },
  {
    "name": "startAUsersPlayback",
    "operationId": "start-a-users-playback",
    "resourceName": "player",
    "methodName": "startAUsersPlayback",
    "httpMethod": "PUT",
    "path": "/me/player/play",
    "tags": [
      "Player"
    ],
    "summary": "Start/Resume Playback",
    "description": "Start a new context or resume current playback on the user's active device. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.",
    "deprecated": false,
    "parameters": [
      {
        "name": "device_id",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "The id of the device this command is targeting. If not supplied, the user's currently active device is the target.",
        "example": "0d1841b0976bae2a3a310dd74c0f3df354899bc8"
      }
    ],
    "requestContentType": "application/json",
    "successStatus": "204",
    "scopes": [
      "user-modify-playback-state"
    ]
  },
  {
    "name": "pauseAUsersPlayback",
    "operationId": "pause-a-users-playback",
    "resourceName": "player",
    "methodName": "pauseAUsersPlayback",
    "httpMethod": "PUT",
    "path": "/me/player/pause",
    "tags": [
      "Player"
    ],
    "summary": "Pause Playback",
    "description": "Pause playback on the user's account. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.",
    "deprecated": false,
    "parameters": [
      {
        "name": "device_id",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "The id of the device this command is targeting. If not supplied, the user's currently active device is the target.",
        "example": "0d1841b0976bae2a3a310dd74c0f3df354899bc8"
      }
    ],
    "requestContentType": null,
    "successStatus": "204",
    "scopes": [
      "user-modify-playback-state"
    ]
  },
  {
    "name": "skipUsersPlaybackToNextTrack",
    "operationId": "skip-users-playback-to-next-track",
    "resourceName": "player",
    "methodName": "skipUsersPlaybackToNextTrack",
    "httpMethod": "POST",
    "path": "/me/player/next",
    "tags": [
      "Player"
    ],
    "summary": "Skip To Next",
    "description": "Skips to next track in the user’s queue. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.",
    "deprecated": false,
    "parameters": [
      {
        "name": "device_id",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "The id of the device this command is targeting. If not supplied, the user's currently active device is the target.",
        "example": "0d1841b0976bae2a3a310dd74c0f3df354899bc8"
      }
    ],
    "requestContentType": null,
    "successStatus": "204",
    "scopes": [
      "user-modify-playback-state"
    ]
  },
  {
    "name": "skipUsersPlaybackToPreviousTrack",
    "operationId": "skip-users-playback-to-previous-track",
    "resourceName": "player",
    "methodName": "skipUsersPlaybackToPreviousTrack",
    "httpMethod": "POST",
    "path": "/me/player/previous",
    "tags": [
      "Player"
    ],
    "summary": "Skip To Previous",
    "description": "Skips to previous track in the user’s queue. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.",
    "deprecated": false,
    "parameters": [
      {
        "name": "device_id",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "The id of the device this command is targeting. If not supplied, the user's currently active device is the target.",
        "example": "0d1841b0976bae2a3a310dd74c0f3df354899bc8"
      }
    ],
    "requestContentType": null,
    "successStatus": "204",
    "scopes": [
      "user-modify-playback-state"
    ]
  },
  {
    "name": "seekToPositionInCurrentlyPlayingTrack",
    "operationId": "seek-to-position-in-currently-playing-track",
    "resourceName": "player",
    "methodName": "seekToPositionInCurrentlyPlayingTrack",
    "httpMethod": "PUT",
    "path": "/me/player/seek",
    "tags": [
      "Player"
    ],
    "summary": "Seek To Position",
    "description": "Seeks to the given position in the user’s currently playing track. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.",
    "deprecated": false,
    "parameters": [
      {
        "name": "position_ms",
        "in": "query",
        "required": true,
        "type": "number",
        "description": "The position in milliseconds to seek to. Must be a positive number. Passing in a position that is greater than the length of the track will cause the player to start playing the next song.",
        "example": 25000
      },
      {
        "name": "device_id",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "The id of the device this command is targeting. If not supplied, the user's currently active device is the target.",
        "example": "0d1841b0976bae2a3a310dd74c0f3df354899bc8"
      }
    ],
    "requestContentType": null,
    "successStatus": "204",
    "scopes": [
      "user-modify-playback-state"
    ]
  },
  {
    "name": "setRepeatModeOnUsersPlayback",
    "operationId": "set-repeat-mode-on-users-playback",
    "resourceName": "player",
    "methodName": "setRepeatModeOnUsersPlayback",
    "httpMethod": "PUT",
    "path": "/me/player/repeat",
    "tags": [
      "Player"
    ],
    "summary": "Set Repeat Mode",
    "description": "Set the repeat mode for the user's playback. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.",
    "deprecated": false,
    "parameters": [
      {
        "name": "state",
        "in": "query",
        "required": true,
        "type": "string",
        "description": "**track**, **context** or **off**. **track** will repeat the current track. **context** will repeat the current context. **off** will turn repeat off.",
        "example": "context"
      },
      {
        "name": "device_id",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "The id of the device this command is targeting. If not supplied, the user's currently active device is the target.",
        "example": "0d1841b0976bae2a3a310dd74c0f3df354899bc8"
      }
    ],
    "requestContentType": null,
    "successStatus": "204",
    "scopes": [
      "user-modify-playback-state"
    ]
  },
  {
    "name": "setVolumeForUsersPlayback",
    "operationId": "set-volume-for-users-playback",
    "resourceName": "player",
    "methodName": "setVolumeForUsersPlayback",
    "httpMethod": "PUT",
    "path": "/me/player/volume",
    "tags": [
      "Player"
    ],
    "summary": "Set Playback Volume",
    "description": "Set the volume for the user’s current playback device. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.",
    "deprecated": false,
    "parameters": [
      {
        "name": "volume_percent",
        "in": "query",
        "required": true,
        "type": "number",
        "description": "The volume to set. Must be a value from 0 to 100 inclusive.",
        "example": 50
      },
      {
        "name": "device_id",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "The id of the device this command is targeting. If not supplied, the user's currently active device is the target.",
        "example": "0d1841b0976bae2a3a310dd74c0f3df354899bc8"
      }
    ],
    "requestContentType": null,
    "successStatus": "204",
    "scopes": [
      "user-modify-playback-state"
    ]
  },
  {
    "name": "toggleShuffleForUsersPlayback",
    "operationId": "toggle-shuffle-for-users-playback",
    "resourceName": "player",
    "methodName": "toggleShuffleForUsersPlayback",
    "httpMethod": "PUT",
    "path": "/me/player/shuffle",
    "tags": [
      "Player"
    ],
    "summary": "Toggle Playback Shuffle",
    "description": "Toggle shuffle on or off for user’s playback. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.",
    "deprecated": false,
    "parameters": [
      {
        "name": "state",
        "in": "query",
        "required": true,
        "type": "boolean",
        "description": "**true** : Shuffle user's playback. **false** : Do not shuffle user's playback.",
        "example": true
      },
      {
        "name": "device_id",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "The id of the device this command is targeting. If not supplied, the user's currently active device is the target.",
        "example": "0d1841b0976bae2a3a310dd74c0f3df354899bc8"
      }
    ],
    "requestContentType": null,
    "successStatus": "204",
    "scopes": [
      "user-modify-playback-state"
    ]
  },
  {
    "name": "getRecentlyPlayed",
    "operationId": "get-recently-played",
    "resourceName": "player",
    "methodName": "getRecentlyPlayed",
    "httpMethod": "GET",
    "path": "/me/player/recently-played",
    "tags": [
      "Player"
    ],
    "summary": "Get Recently Played Tracks",
    "description": "Get tracks from the current user's recently played tracks. _**Note**: Currently doesn't support podcast episodes._",
    "deprecated": false,
    "parameters": [
      {
        "name": "limit",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.",
        "example": 10
      },
      {
        "name": "after",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "A Unix timestamp in milliseconds. Returns all items after (but not including) this cursor position. If `after` is specified, `before` must not be specified.",
        "example": 1484811043508
      },
      {
        "name": "before",
        "in": "query",
        "required": false,
        "type": "number",
        "description": "A Unix timestamp in milliseconds. Returns all items before (but not including) this cursor position. If `before` is specified, `after` must not be specified.",
        "example": null
      }
    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [
      "user-read-recently-played"
    ]
  },
  {
    "name": "getQueue",
    "operationId": "get-queue",
    "resourceName": "player",
    "methodName": "getQueue",
    "httpMethod": "GET",
    "path": "/me/player/queue",
    "tags": [
      "Player"
    ],
    "summary": "Get the User's Queue",
    "description": "Get the list of objects that make up the user's queue.",
    "deprecated": false,
    "parameters": [

    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [
      "user-read-currently-playing",
      "user-read-playback-state"
    ]
  },
  {
    "name": "addToQueue",
    "operationId": "add-to-queue",
    "resourceName": "player",
    "methodName": "addToQueue",
    "httpMethod": "POST",
    "path": "/me/player/queue",
    "tags": [
      "Player"
    ],
    "summary": "Add Item to Playback Queue",
    "description": "Add an item to be played next in the user's current playback queue. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.",
    "deprecated": false,
    "parameters": [
      {
        "name": "uri",
        "in": "query",
        "required": true,
        "type": "string",
        "description": "The uri of the item to add to the queue. Must be a track or an episode uri.",
        "example": "spotify:track:4iV5W9uYEdYUVa79Axb7Rh"
      },
      {
        "name": "device_id",
        "in": "query",
        "required": false,
        "type": "string",
        "description": "The id of the device this command is targeting. If not supplied, the user's currently active device is the target.",
        "example": "0d1841b0976bae2a3a310dd74c0f3df354899bc8"
      }
    ],
    "requestContentType": null,
    "successStatus": "204",
    "scopes": [
      "user-modify-playback-state"
    ]
  },
  {
    "name": "getAvailableMarkets",
    "operationId": "get-available-markets",
    "resourceName": "markets",
    "methodName": "getAvailableMarkets",
    "httpMethod": "GET",
    "path": "/markets",
    "tags": [
      "Markets"
    ],
    "summary": "Get Available Markets",
    "description": "Get the list of markets where Spotify is available.",
    "deprecated": true,
    "parameters": [

    ],
    "requestContentType": null,
    "successStatus": "200",
    "scopes": [

    ]
  }
]);

export const operationByName = Object.freeze(Object.fromEntries(
  operations.map((operation) => [operation.name, operation])
));

export const resources = Object.freeze([
  {
    "name": "albums",
    "tags": [
      "Albums",
      "Tracks",
      "Library"
    ],
    "operations": [
      "getAnAlbum",
      "getMultipleAlbums",
      "getAnAlbumsTracks",
      "getUsersSavedAlbums",
      "saveAlbumsUser",
      "removeAlbumsUser",
      "checkUsersSavedAlbums",
      "getNewReleases"
    ]
  },
  {
    "name": "artists",
    "tags": [
      "Artists",
      "Albums",
      "Tracks"
    ],
    "operations": [
      "getAnArtist",
      "getMultipleArtists",
      "getAnArtistsAlbums",
      "getAnArtistsTopTracks",
      "getAnArtistsRelatedArtists"
    ]
  },
  {
    "name": "shows",
    "tags": [
      "Shows",
      "Episodes",
      "Library"
    ],
    "operations": [
      "getAShow",
      "getMultipleShows",
      "getAShowsEpisodes",
      "getUsersSavedShows",
      "saveShowsUser",
      "removeShowsUser",
      "checkUsersSavedShows"
    ]
  },
  {
    "name": "episodes",
    "tags": [
      "Episodes",
      "Library"
    ],
    "operations": [
      "getAnEpisode",
      "getMultipleEpisodes",
      "getUsersSavedEpisodes",
      "saveEpisodesUser",
      "removeEpisodesUser",
      "checkUsersSavedEpisodes"
    ]
  },
  {
    "name": "audiobooks",
    "tags": [
      "Audiobooks",
      "Chapters",
      "Library"
    ],
    "operations": [
      "getAnAudiobook",
      "getMultipleAudiobooks",
      "getAudiobookChapters",
      "getUsersSavedAudiobooks",
      "saveAudiobooksUser",
      "removeAudiobooksUser",
      "checkUsersSavedAudiobooks"
    ]
  },
  {
    "name": "chapters",
    "tags": [
      "Chapters"
    ],
    "operations": [
      "getAChapter",
      "getSeveralChapters"
    ]
  },
  {
    "name": "tracks",
    "tags": [
      "Tracks",
      "Library"
    ],
    "operations": [
      "getTrack",
      "getSeveralTracks",
      "getUsersSavedTracks",
      "saveTracksUser",
      "removeTracksUser",
      "checkUsersSavedTracks",
      "getSeveralAudioFeatures",
      "getAudioFeatures",
      "getAudioAnalysis",
      "getRecommendations"
    ]
  },
  {
    "name": "search",
    "tags": [
      "Search"
    ],
    "operations": [
      "search"
    ]
  },
  {
    "name": "users",
    "tags": [
      "Users",
      "Tracks",
      "Library",
      "Playlists",
      "Artists"
    ],
    "operations": [
      "getCurrentUsersProfile",
      "getUsersTopArtistsAndTracks",
      "getUsersProfile",
      "followPlaylist",
      "unfollowPlaylist",
      "getFollowed",
      "followArtistsUsers",
      "unfollowArtistsUsers",
      "checkCurrentUserFollows",
      "checkIfUserFollowsPlaylist"
    ]
  },
  {
    "name": "playlists",
    "tags": [
      "Playlists",
      "Library",
      "Tracks",
      "Users",
      "Categories"
    ],
    "operations": [
      "getPlaylist",
      "changePlaylistDetails",
      "getPlaylistsTracks",
      "addTracksToPlaylist",
      "reorderOrReplacePlaylistsTracks",
      "removeTracksPlaylist",
      "getPlaylistsItems",
      "addItemsToPlaylist",
      "reorderOrReplacePlaylistsItems",
      "removeItemsPlaylist",
      "getAListOfCurrentUsersPlaylists",
      "createPlaylist",
      "getListUsersPlaylists",
      "createPlaylistForUser",
      "getFeaturedPlaylists",
      "getACategoriesPlaylists",
      "getPlaylistCover",
      "uploadCustomPlaylistCover"
    ]
  },
  {
    "name": "library",
    "tags": [
      "Library"
    ],
    "operations": [
      "saveLibraryItems",
      "removeLibraryItems",
      "checkLibraryContains"
    ]
  },
  {
    "name": "categories",
    "tags": [
      "Categories"
    ],
    "operations": [
      "getCategories",
      "getACategory"
    ]
  },
  {
    "name": "genres",
    "tags": [
      "Genres"
    ],
    "operations": [
      "getRecommendationGenres"
    ]
  },
  {
    "name": "player",
    "tags": [
      "Player"
    ],
    "operations": [
      "getInformationAboutTheUsersCurrentPlayback",
      "transferAUsersPlayback",
      "getAUsersAvailableDevices",
      "getTheUsersCurrentlyPlayingTrack",
      "startAUsersPlayback",
      "pauseAUsersPlayback",
      "skipUsersPlaybackToNextTrack",
      "skipUsersPlaybackToPreviousTrack",
      "seekToPositionInCurrentlyPlayingTrack",
      "setRepeatModeOnUsersPlayback",
      "setVolumeForUsersPlayback",
      "toggleShuffleForUsersPlayback",
      "getRecentlyPlayed",
      "getQueue",
      "addToQueue"
    ]
  },
  {
    "name": "markets",
    "tags": [
      "Markets"
    ],
    "operations": [
      "getAvailableMarkets"
    ]
  }
]);
