import { z } from 'zod';
import {
  PagingTrackObject,
  pagingTrackObject,
  pagingTrackObjectRequest,
  pagingTrackObjectResponse,
} from './paging-track-object';
import {
  PagingArtistObject,
  pagingArtistObject,
  pagingArtistObjectRequest,
  pagingArtistObjectResponse,
} from './paging-artist-object';
import {
  PagingSimplifiedAlbumObject,
  pagingSimplifiedAlbumObject,
  pagingSimplifiedAlbumObjectRequest,
  pagingSimplifiedAlbumObjectResponse,
} from '../../common/paging-simplified-album-object';
import {
  PagingPlaylistObject,
  pagingPlaylistObject,
  pagingPlaylistObjectRequest,
  pagingPlaylistObjectResponse,
} from '../../common/paging-playlist-object';
import {
  PagingSimplifiedShowObject,
  pagingSimplifiedShowObject,
  pagingSimplifiedShowObjectRequest,
  pagingSimplifiedShowObjectResponse,
} from './paging-simplified-show-object';
import {
  PagingSimplifiedEpisodeObject,
  pagingSimplifiedEpisodeObject,
  pagingSimplifiedEpisodeObjectRequest,
  pagingSimplifiedEpisodeObjectResponse,
} from '../../common/paging-simplified-episode-object';
import {
  PagingSimplifiedAudiobookObject,
  pagingSimplifiedAudiobookObject,
  pagingSimplifiedAudiobookObjectRequest,
  pagingSimplifiedAudiobookObjectResponse,
} from '../../common/paging-simplified-audiobook-object';

/**
 * Zod schema for the SearchItems model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const searchItems = z.lazy(() => {
  return z.object({
    tracks: pagingTrackObject.optional(),
    artists: pagingArtistObject.optional(),
    albums: pagingSimplifiedAlbumObject.optional(),
    playlists: pagingPlaylistObject.optional(),
    shows: pagingSimplifiedShowObject.optional(),
    episodes: pagingSimplifiedEpisodeObject.optional(),
    audiobooks: pagingSimplifiedAudiobookObject.optional(),
  });
});

/**
 *
 * @typedef  {SearchItems} searchItems
 * @property {PagingTrackObject}
 * @property {PagingArtistObject}
 * @property {PagingSimplifiedAlbumObject}
 * @property {PagingPlaylistObject}
 * @property {PagingSimplifiedShowObject}
 * @property {PagingSimplifiedEpisodeObject}
 * @property {PagingSimplifiedAudiobookObject}
 */
export type SearchItems = z.infer<typeof searchItems>;

/**
 * Zod schema for mapping API responses to the SearchItems application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchItemsResponse = z.lazy(() => {
  return z
    .object({
      tracks: pagingTrackObjectResponse.optional(),
      artists: pagingArtistObjectResponse.optional(),
      albums: pagingSimplifiedAlbumObjectResponse.optional(),
      playlists: pagingPlaylistObjectResponse.optional(),
      shows: pagingSimplifiedShowObjectResponse.optional(),
      episodes: pagingSimplifiedEpisodeObjectResponse.optional(),
      audiobooks: pagingSimplifiedAudiobookObjectResponse.optional(),
    })
    .transform((data) => ({
      tracks: data['tracks'],
      artists: data['artists'],
      albums: data['albums'],
      playlists: data['playlists'],
      shows: data['shows'],
      episodes: data['episodes'],
      audiobooks: data['audiobooks'],
    }));
});

/**
 * Zod schema for mapping the SearchItems application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchItemsRequest = z.lazy(() => {
  return z
    .object({
      tracks: pagingTrackObjectRequest.optional(),
      artists: pagingArtistObjectRequest.optional(),
      albums: pagingSimplifiedAlbumObjectRequest.optional(),
      playlists: pagingPlaylistObjectRequest.optional(),
      shows: pagingSimplifiedShowObjectRequest.optional(),
      episodes: pagingSimplifiedEpisodeObjectRequest.optional(),
      audiobooks: pagingSimplifiedAudiobookObjectRequest.optional(),
    })
    .transform((data) => ({
      tracks: data['tracks'],
      artists: data['artists'],
      albums: data['albums'],
      playlists: data['playlists'],
      shows: data['shows'],
      episodes: data['episodes'],
      audiobooks: data['audiobooks'],
    }));
});
