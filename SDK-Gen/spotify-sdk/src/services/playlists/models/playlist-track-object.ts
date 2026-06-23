import { z } from 'zod';
import {
  PlaylistUserObject,
  playlistUserObject,
  playlistUserObjectRequest,
  playlistUserObjectResponse,
} from './playlist-user-object';
import {
  PlaylistTrackObjectItem,
  playlistTrackObjectItem,
  playlistTrackObjectItemRequest,
  playlistTrackObjectItemResponse,
} from './playlist-track-object-item';
import {
  PlaylistTrackObjectTrack,
  playlistTrackObjectTrack,
  playlistTrackObjectTrackRequest,
  playlistTrackObjectTrackResponse,
} from './playlist-track-object-track';

/**
 * Zod schema for the PlaylistTrackObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const playlistTrackObject = z.lazy(() => {
  return z.object({
    addedAt: z.string().optional(),
    addedBy: playlistUserObject.optional(),
    isLocal: z.boolean().optional(),
    item: playlistTrackObjectItem.optional(),
    track: playlistTrackObjectTrack.optional(),
  });
});

/**
 * 
 * @typedef  {PlaylistTrackObject} playlistTrackObject   
 * @property {string} - The date and time the track or episode was added. _``Note``: some very old playlists may return `null` in this field._

 * @property {PlaylistUserObject} 
 * @property {boolean} - Whether this track or episode is a [local file](/documentation/web-api/concepts/playlists/#local-files) or not.

 * @property {PlaylistTrackObjectItem} - Information about the track or episode.
 * @property {PlaylistTrackObjectTrack} - ``Deprecated:`` Use `item` instead. Information about the track or episode.

 */
export type PlaylistTrackObject = z.infer<typeof playlistTrackObject>;

/**
 * Zod schema for mapping API responses to the PlaylistTrackObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const playlistTrackObjectResponse = z.lazy(() => {
  return z
    .object({
      added_at: z.string().optional(),
      added_by: playlistUserObjectResponse.optional(),
      is_local: z.boolean().optional(),
      item: playlistTrackObjectItemResponse.optional(),
      track: playlistTrackObjectTrackResponse.optional(),
    })
    .transform((data) => ({
      addedAt: data['added_at'],
      addedBy: data['added_by'],
      isLocal: data['is_local'],
      item: data['item'],
      track: data['track'],
    }));
});

/**
 * Zod schema for mapping the PlaylistTrackObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const playlistTrackObjectRequest = z.lazy(() => {
  return z
    .object({
      addedAt: z.string().optional(),
      addedBy: playlistUserObjectRequest.optional(),
      isLocal: z.boolean().optional(),
      item: playlistTrackObjectItemRequest.optional(),
      track: playlistTrackObjectTrackRequest.optional(),
    })
    .transform((data) => ({
      added_at: data['addedAt'],
      added_by: data['addedBy'],
      is_local: data['isLocal'],
      item: data['item'],
      track: data['track'],
    }));
});
