# No SDK-Gen

This folder is for the Spotify app scenario that uses an SDK created with help from an AI assistant.

An SDK will be used here, but it will not be created with the Postman SDK generator. Instead, the SDK should be manually designed, scaffolded, and refined with AI assistance, then used by the app code as the interface to Spotify's APIs.

The SDK package lives in [`spotify-sdk`](spotify-sdk).

## AI + Agent Details
For the SDK generation I used Codex + GPT 5.5 (the most recent and best coding LLM available through OpenAI, and my personal choice for most development tasks right now)

## Process:
## Process:
1. Prompted it to create ann SDK, here is the prompt
```
Inside the No SDK Gen folder, can you make a spotify SDK for me using the spec here: official-spotify-open-api.yml. This SDK needs to be very useable by AI and should be at the level of a senior software engineer
```
I wrote it this way because ideally I don't need to know any technical details and the only thing I have is the spotify API specification. I tried to let it know that the primary use case would be an AI agent using it to build an application, and that it should be at the level of a senior engineer.

2. I got an output SDK and it too about **5 minutes** with medium effort for Codex and about 1,500 lines of code written.

3. The files were just everywhere so I moved them into a folder. It also modified the README here and so I had to move it's modiications as well:
```
Can you put this in a sub folder called spotify-sdk and move all the files into there, and remove your changes to the readme and make a new readme in that sub folder
```
The fact that it changed the files I already had also messed me up while I was setting everything up.

4. I started a new conversation and asked the AI to create a spotify app for me using the same prompt that will be used on every version of this project:
```
I have trouble stayting up with current music and I want to be better about it so I can relate to the robotics students I mentor. Create a web app that I can use to look at the top spotify artists and songs. I want to be able to show these by year, by default show the current most popular but let me search by year. I want to be able to click on an artist and see their most popular tracks. Then if I click on them it opens up spotify to listen to that song. Use the sdk at `No SDK-Gen/spotify-sdk`
```
The only part of this that was changed was the end of the prompt saying where the SDK is.

5. It took about 3:40s for it to run (~5min)

6. Asked me if I wanted to start the app on localhost

6. I gave it my client id and client secret from the spotify app. It modified the server quite a bit to fulfill this request. Then it started the app for me and I could see it! It didn't work :(
```
It says "Set SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET before starting the app." 

I have a client id and client secret, can you add them into the app then we can start it:
id: **********
secret: *************
```

7. It asked if I wanted to restart the server, I said yes

8. The whole process took about 10min
    - 1 single server serving up the client and servicing API calls
    - Clicking on artists didn't work
    - Opening songs did
    - Simple, but junior level project setup

## Spotify Mentor Mix App

This project now includes a small Spotify chart-style browser that uses the local SDK in [`spotify-sdk`](spotify-sdk). It defaults to the current year, lets you search past years, shows popular songs and artists, and opens Spotify when you click a song. Clicking an artist opens a side panel with that artist's popular tracks.

Spotify's public Web API does not provide an official global "top songs by year" chart endpoint, so the app searches Spotify's catalog by year and ranks the returned tracks and artists by Spotify popularity.

### Setup

1. Create a Spotify app in the Spotify developer dashboard.
2. Create a `.env` file or export these variables:

```sh
SPOTIFY_CLIENT_ID=your-client-id
SPOTIFY_CLIENT_SECRET=your-client-secret
SPOTIFY_MARKET=US
PORT=3000
```

3. Run:

```sh
npm start
```

Open `http://localhost:3000` and browse current or historical popular music.
