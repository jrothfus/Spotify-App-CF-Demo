import { z } from 'zod';
import { trackObject, trackObjectRequest, trackObjectResponse } from '../../common/track-object';
import {
  episodeObject,
  episodeObjectRequest,
  episodeObjectResponse,
} from '../../common/episode-object';

/**
 * Zod schema for the Queue model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const queue = z.lazy(() => {
  return z.union([trackObject, episodeObject]);
});

/**
 *
 * @typedef  {Queue} queue
 * @property {TrackObject}
 * @property {EpisodeObject}
 */
export type Queue = z.infer<typeof queue>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const queueResponse = z.lazy(() => {
  return z.union([trackObjectResponse, episodeObjectResponse]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const queueRequest = z.lazy(() => {
  return z.union([trackObjectRequest, episodeObjectRequest]);
});
