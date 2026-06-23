import { z } from 'zod';
import { trackObject, trackObjectRequest, trackObjectResponse } from '../../common/track-object';
import {
  episodeObject,
  episodeObjectRequest,
  episodeObjectResponse,
} from '../../common/episode-object';

/**
 * Zod schema for the CurrentlyPlaying model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const currentlyPlaying = z.lazy(() => {
  return z.union([trackObject, episodeObject]);
});

/**
 * The currently playing track or episode. Can be `null`.
 * @typedef  {CurrentlyPlaying} currentlyPlaying - The currently playing track or episode. Can be `null`. - The currently playing track or episode. Can be `null`.
 * @property {TrackObject}
 * @property {EpisodeObject}
 */
export type CurrentlyPlaying = z.infer<typeof currentlyPlaying>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const currentlyPlayingResponse = z.lazy(() => {
  return z.union([trackObjectResponse, episodeObjectResponse]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const currentlyPlayingRequest = z.lazy(() => {
  return z.union([trackObjectRequest, episodeObjectRequest]);
});
