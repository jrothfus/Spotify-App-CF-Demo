import { z } from 'zod';
import {
  CurrentlyPlaying,
  currentlyPlaying,
  currentlyPlayingRequest,
  currentlyPlayingResponse,
} from './currently-playing';
import { Queue, queue, queueRequest, queueResponse } from './queue';

/**
 * Zod schema for the QueueObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const queueObject = z.lazy(() => {
  return z.object({
    currentlyPlaying: currentlyPlaying.optional(),
    queue: z.array(queue).optional(),
  });
});

/**
 *
 * @typedef  {QueueObject} queueObject
 * @property {CurrentlyPlaying} - The currently playing track or episode. Can be `null`.
 * @property {Queue[]} - The tracks or episodes in the queue. Can be empty.
 */
export type QueueObject = z.infer<typeof queueObject>;

/**
 * Zod schema for mapping API responses to the QueueObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const queueObjectResponse = z.lazy(() => {
  return z
    .object({
      currently_playing: currentlyPlayingResponse.optional(),
      queue: z.array(queueResponse).optional(),
    })
    .transform((data) => ({
      currentlyPlaying: data['currently_playing'],
      queue: data['queue'],
    }));
});

/**
 * Zod schema for mapping the QueueObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const queueObjectRequest = z.lazy(() => {
  return z
    .object({
      currentlyPlaying: currentlyPlayingRequest.optional(),
      queue: z.array(queueRequest).optional(),
    })
    .transform((data) => ({
      currently_playing: data['currentlyPlaying'],
      queue: data['queue'],
    }));
});
