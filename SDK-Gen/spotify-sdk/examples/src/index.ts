import { SpotifyWebApiSdk } from 'spotify-web-api-sdk';

(async () => {
  const spotifyWebApiSdk = new SpotifyWebApiSdk({});

  const data = await spotifyWebApiSdk.albums.getUsersSavedAlbums({
    limit: 10,
    offset: 5,
    market: 'ES',
  });

  console.log(data);
})();
