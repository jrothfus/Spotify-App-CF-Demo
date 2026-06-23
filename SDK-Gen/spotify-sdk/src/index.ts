import { Environment } from './http/environment';
import { SdkConfig } from './http/types';
import { AlbumsService } from './services/albums';
import { ArtistsService } from './services/artists';
import { ShowsService } from './services/shows';
import { EpisodesService } from './services/episodes';
import { AudiobooksService } from './services/audiobooks';
import { ChaptersService } from './services/chapters';
import { TracksService } from './services/tracks';
import { SearchService } from './services/search';
import { UsersService } from './services/users';
import { PlaylistsService } from './services/playlists';
import { LibraryService } from './services/library';
import { CategoriesService } from './services/categories';
import { GenresService } from './services/genres';
import { PlayerService } from './services/player';
import { MarketsService } from './services/markets';
import { OAuthService } from './services/o-auth';

export * from './services/albums';
export * from './services/artists';
export * from './services/shows';
export * from './services/episodes';
export * from './services/audiobooks';
export * from './services/chapters';
export * from './services/tracks';
export * from './services/search';
export * from './services/users';
export * from './services/playlists';
export * from './services/library';
export * from './services/categories';
export * from './services/genres';
export * from './services/player';
export * from './services/markets';
export * from './services/o-auth';
export * from './services/common';

export * from './http';
export { Environment } from './http/environment';

export class SpotifyWebApiSdk {
  public readonly albums: AlbumsService;

  public readonly artists: ArtistsService;

  public readonly shows: ShowsService;

  public readonly episodes: EpisodesService;

  public readonly audiobooks: AudiobooksService;

  public readonly chapters: ChaptersService;

  public readonly tracks: TracksService;

  public readonly search: SearchService;

  public readonly users: UsersService;

  public readonly playlists: PlaylistsService;

  public readonly library: LibraryService;

  public readonly categories: CategoriesService;

  public readonly genres: GenresService;

  public readonly player: PlayerService;

  public readonly markets: MarketsService;

  public readonly oAuth: OAuthService;

  constructor(public config: SdkConfig) {
    this.albums = new AlbumsService(this.config);

    this.artists = new ArtistsService(this.config);

    this.shows = new ShowsService(this.config);

    this.episodes = new EpisodesService(this.config);

    this.audiobooks = new AudiobooksService(this.config);

    this.chapters = new ChaptersService(this.config);

    this.tracks = new TracksService(this.config);

    this.search = new SearchService(this.config);

    this.users = new UsersService(this.config);

    this.playlists = new PlaylistsService(this.config);

    this.library = new LibraryService(this.config);

    this.categories = new CategoriesService(this.config);

    this.genres = new GenresService(this.config);

    this.player = new PlayerService(this.config);

    this.markets = new MarketsService(this.config);

    this.oAuth = new OAuthService(this.config);
  }

  set baseUrl(baseUrl: string) {
    this.albums.baseUrl = baseUrl;
    this.artists.baseUrl = baseUrl;
    this.shows.baseUrl = baseUrl;
    this.episodes.baseUrl = baseUrl;
    this.audiobooks.baseUrl = baseUrl;
    this.chapters.baseUrl = baseUrl;
    this.tracks.baseUrl = baseUrl;
    this.search.baseUrl = baseUrl;
    this.users.baseUrl = baseUrl;
    this.playlists.baseUrl = baseUrl;
    this.library.baseUrl = baseUrl;
    this.categories.baseUrl = baseUrl;
    this.genres.baseUrl = baseUrl;
    this.player.baseUrl = baseUrl;
    this.markets.baseUrl = baseUrl;
    this.oAuth.baseUrl = baseUrl;
  }

  set environment(environment: Environment) {
    this.albums.baseUrl = environment;
    this.artists.baseUrl = environment;
    this.shows.baseUrl = environment;
    this.episodes.baseUrl = environment;
    this.audiobooks.baseUrl = environment;
    this.chapters.baseUrl = environment;
    this.tracks.baseUrl = environment;
    this.search.baseUrl = environment;
    this.users.baseUrl = environment;
    this.playlists.baseUrl = environment;
    this.library.baseUrl = environment;
    this.categories.baseUrl = environment;
    this.genres.baseUrl = environment;
    this.player.baseUrl = environment;
    this.markets.baseUrl = environment;
    this.oAuth.baseUrl = environment;
  }

  set timeoutMs(timeoutMs: number) {
    this.albums.timeoutMs = timeoutMs;
    this.artists.timeoutMs = timeoutMs;
    this.shows.timeoutMs = timeoutMs;
    this.episodes.timeoutMs = timeoutMs;
    this.audiobooks.timeoutMs = timeoutMs;
    this.chapters.timeoutMs = timeoutMs;
    this.tracks.timeoutMs = timeoutMs;
    this.search.timeoutMs = timeoutMs;
    this.users.timeoutMs = timeoutMs;
    this.playlists.timeoutMs = timeoutMs;
    this.library.timeoutMs = timeoutMs;
    this.categories.timeoutMs = timeoutMs;
    this.genres.timeoutMs = timeoutMs;
    this.player.timeoutMs = timeoutMs;
    this.markets.timeoutMs = timeoutMs;
    this.oAuth.timeoutMs = timeoutMs;
  }
}

// c029837e0e474b76bc487506e8799df5e3335891efe4fb02bda7a1441840310c
