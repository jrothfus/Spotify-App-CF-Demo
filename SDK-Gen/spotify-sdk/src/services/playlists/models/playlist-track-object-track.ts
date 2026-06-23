import { z } from 'zod';
import { trackObject, trackObjectRequest, trackObjectResponse } from '../../common/track-object';
import {
  episodeObject,
  episodeObjectRequest,
  episodeObjectResponse,
} from '../../common/episode-object';

/**
 * Zod schema for the PlaylistTrackObjectTrack model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const playlistTrackObjectTrack = z.lazy(() => {
  return z.union([trackObject, episodeObject]);
});

/**
 * **Deprecated:** Use `item` instead. Information about the track or episode.

 * @typedef  {PlaylistTrackObjectTrack} playlistTrackObjectTrack - **Deprecated:** Use `item` instead. Information about the track or episode.
 - **Deprecated:** Use `item` instead. Information about the track or episode.

 * @property {TrackObject} 
 * @property {EpisodeObject} 
 */
export type PlaylistTrackObjectTrack = z.infer<typeof playlistTrackObjectTrack>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const playlistTrackObjectTrackResponse = z.lazy(() => {
  return z.union([trackObjectResponse, episodeObjectResponse]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const playlistTrackObjectTrackRequest = z.lazy(() => {
  return z.union([trackObjectRequest, episodeObjectRequest]);
});
