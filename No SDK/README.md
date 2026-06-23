# No SDK

This folder is for the Spotify app scenario that does not use an SDK.

No SDK will be used here. The app should call Spotify's HTTP APIs directly from the application code, including request construction, authentication handling, response parsing, and error handling.

## Run the app

This app calls Spotify's HTTP APIs directly from a tiny local Node server. The browser talks to the local server, and the server keeps your Spotify Client Secret out of frontend code.

```sh
cp .env.example .env
# edit .env and set SPOTIFY_CLIENT_SECRET
node server.js
```

Open `http://localhost:3000`.

The server uses Spotify's Client Credentials flow. No user login, redirect URI, or browser-stored Spotify token is required.

Spotify's public Web API spec does not include a charts endpoint. This app searches tracks by `year`, sorts the results by Spotify's `popularity` score, then derives the artist list from those tracks and fetches artist details/top tracks.

## Process

1. Asked it to make me an app using the API spec
```
I have trouble stayting up with current music and I want to be better about it so I can relate to the robotics students I mentor. Create a web app that I can use to look at the top spotify artists and songs. I want to be able to show these by year, by default show the current most popular but let me search by year. I want to be able to click on an artist and see their most popular tracks. Then if I click on them it opens up spotify to listen to that song. You can find the spotify API spec here `../official-spotify-open-api.yml`.
```

2. Took 4m 44s and it gave me a weird popup to put in my client id and redirect URI but no secret, so I gave it this:
```
Lets get rid of the popup asking for my client id and redirect URI, instead here is my client ID: **********
```

3. It gave me a "Connect Spotify" button, which is weird becasue the other one's didn't have that and it shouldn;t be needed.
```
Why do we need the connect to spotify button? I thought the articts and track endpoints could be used without having to login?
```

4. It told me that it couldn't use client id and secret safely
```
Ok but I only have the client id and secret. Can we use them safely?
```

5. It told me:
```
[...]
The safe setup is:

Browser app -> tiny local backend -> Spotify API
[...]
```
So I responded:
```
Lets do that
```

6. Asked if I wanted to stop the old server and start the new one

7. Asked if I wanted to start the other new server

8. I gave it my credentials
```
Here are my credentials:
id: ********
secret: **********
```

9. It asked if I wanted to restart the server, I said yes

10. I noticed it weirdly switched from python to javascript mid way through, very weird

11. Whole thing took about 30 minutes
    - 2 servers, one serving the client and one servicing the spotify API calls
    - Artist clicking worked
    - Songs clicking worked
    - Too simple, Junior engineer level setup