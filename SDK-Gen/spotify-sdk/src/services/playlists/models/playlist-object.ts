import { z } from 'zod';
import {
  ExternalUrlObject,
  externalUrlObject,
  externalUrlObjectRequest,
  externalUrlObjectResponse,
} from '../../common/external-url-object';
import {
  ImageObject,
  imageObject,
  imageObjectRequest,
  imageObjectResponse,
} from '../../common/image-object';
import {
  PlaylistOwnerObject,
  playlistOwnerObject,
  playlistOwnerObjectRequest,
  playlistOwnerObjectResponse,
} from '../../common/playlist-owner-object';
import {
  PagingPlaylistTrackObject,
  pagingPlaylistTrackObject,
  pagingPlaylistTrackObjectRequest,
  pagingPlaylistTrackObjectResponse,
} from './paging-playlist-track-object';

/**
 * Zod schema for the PlaylistObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const playlistObject = z.lazy(() => {
  return z.object({
    collaborative: z.boolean().optional(),
    description: z.string().optional().nullable(),
    externalUrls: externalUrlObject.optional(),
    href: z.string().optional(),
    id: z.string().optional(),
    images: z.array(imageObject).optional(),
    name: z.string().optional(),
    owner: playlistOwnerObject.optional(),
    public: z.boolean().optional(),
    snapshotId: z.string().optional(),
    items: pagingPlaylistTrackObject.optional(),
    tracks: pagingPlaylistTrackObject.optional(),
    type: z.string().optional(),
    uri: z.string().optional(),
  });
});

/**
 * 
 * @typedef  {PlaylistObject} playlistObject   
 * @property {boolean} - `true` if the owner allows other users to modify the playlist.

 * @property {string} - The playlist description. _Only returned for modified, verified playlists, otherwise_ `null`.

 * @property {ExternalUrlObject} 
 * @property {string} - A link to the Web API endpoint providing full details of the playlist.

 * @property {string} - The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the playlist.

 * @property {ImageObject[]} - Images for the playlist. The array may be empty or contain up to three images. The images are returned by size in descending order. See [Working with Playlists](/documentation/web-api/concepts/playlists). _``Note``: If returned, the source URL for the image (`url`) is temporary and will expire in less than a day._

 * @property {string} - The name of the playlist.

 * @property {PlaylistOwnerObject} 
 * @property {boolean} - The playlist's public/private status (if it is added to the user's profile): `true` the playlist is public, `false` the playlist is private, `null` the playlist status is not relevant. For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)

 * @property {string} - The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version

 * @property {PagingPlaylistTrackObject} 
 * @property {PagingPlaylistTrackObject} 
 * @property {string} - The object type: "playlist"

 * @property {string} - The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the playlist.

 */
export type PlaylistObject = z.infer<typeof playlistObject>;

/**
 * Zod schema for mapping API responses to the PlaylistObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const playlistObjectResponse = z.lazy(() => {
  return z
    .object({
      collaborative: z.boolean().optional(),
      description: z.string().optional().nullable(),
      external_urls: externalUrlObjectResponse.optional(),
      href: z.string().optional(),
      id: z.string().optional(),
      images: z.array(imageObjectResponse).optional(),
      name: z.string().optional(),
      owner: playlistOwnerObjectResponse.optional(),
      public: z.boolean().optional(),
      snapshot_id: z.string().optional(),
      items: pagingPlaylistTrackObjectResponse.optional(),
      tracks: pagingPlaylistTrackObjectResponse.optional(),
      type: z.string().optional(),
      uri: z.string().optional(),
    })
    .transform((data) => ({
      collaborative: data['collaborative'],
      description: data['description'],
      externalUrls: data['external_urls'],
      href: data['href'],
      id: data['id'],
      images: data['images'],
      name: data['name'],
      owner: data['owner'],
      public: data['public'],
      snapshotId: data['snapshot_id'],
      items: data['items'],
      tracks: data['tracks'],
      type: data['type'],
      uri: data['uri'],
    }));
});

/**
 * Zod schema for mapping the PlaylistObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const playlistObjectRequest = z.lazy(() => {
  return z
    .object({
      collaborative: z.boolean().optional(),
      description: z.string().optional().nullable(),
      externalUrls: externalUrlObjectRequest.optional(),
      href: z.string().optional(),
      id: z.string().optional(),
      images: z.array(imageObjectRequest).optional(),
      name: z.string().optional(),
      owner: playlistOwnerObjectRequest.optional(),
      public: z.boolean().optional(),
      snapshotId: z.string().optional(),
      items: pagingPlaylistTrackObjectRequest.optional(),
      tracks: pagingPlaylistTrackObjectRequest.optional(),
      type: z.string().optional(),
      uri: z.string().optional(),
    })
    .transform((data) => ({
      collaborative: data['collaborative'],
      description: data['description'],
      external_urls: data['externalUrls'],
      href: data['href'],
      id: data['id'],
      images: data['images'],
      name: data['name'],
      owner: data['owner'],
      public: data['public'],
      snapshot_id: data['snapshotId'],
      items: data['items'],
      tracks: data['tracks'],
      type: data['type'],
      uri: data['uri'],
    }));
});
