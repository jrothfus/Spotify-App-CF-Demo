import { z } from 'zod';
import {
  TrackObject,
  trackObject,
  trackObjectRequest,
  trackObjectResponse,
} from '../../common/track-object';
import {
  ContextObject,
  contextObject,
  contextObjectRequest,
  contextObjectResponse,
} from './context-object';

/**
 * Zod schema for the PlayHistoryObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const playHistoryObject = z.lazy(() => {
  return z.object({
    track: trackObject.optional(),
    playedAt: z.string().optional(),
    context: contextObject.optional(),
  });
});

/**
 *
 * @typedef  {PlayHistoryObject} playHistoryObject
 * @property {TrackObject}
 * @property {string} - The date and time the track was played.
 * @property {ContextObject}
 */
export type PlayHistoryObject = z.infer<typeof playHistoryObject>;

/**
 * Zod schema for mapping API responses to the PlayHistoryObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const playHistoryObjectResponse = z.lazy(() => {
  return z
    .object({
      track: trackObjectResponse.optional(),
      played_at: z.string().optional(),
      context: contextObjectResponse.optional(),
    })
    .transform((data) => ({
      track: data['track'],
      playedAt: data['played_at'],
      context: data['context'],
    }));
});

/**
 * Zod schema for mapping the PlayHistoryObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const playHistoryObjectRequest = z.lazy(() => {
  return z
    .object({
      track: trackObjectRequest.optional(),
      playedAt: z.string().optional(),
      context: contextObjectRequest.optional(),
    })
    .transform((data) => ({
      track: data['track'],
      played_at: data['playedAt'],
      context: data['context'],
    }));
});
