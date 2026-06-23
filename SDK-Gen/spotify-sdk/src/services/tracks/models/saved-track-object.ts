import { z } from 'zod';
import {
  TrackObject,
  trackObject,
  trackObjectRequest,
  trackObjectResponse,
} from '../../common/track-object';

/**
 * Zod schema for the SavedTrackObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const savedTrackObject = z.lazy(() => {
  return z.object({
    addedAt: z.string().optional(),
    track: trackObject.optional(),
  });
});

/**
 * 
 * @typedef  {SavedTrackObject} savedTrackObject   
 * @property {string} - The date and time the track was saved.
Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.
If the time is imprecise (for example, the date/time of an album release), an additional field indicates the precision; see for example, release_date in an album object.

 * @property {TrackObject} 
 */
export type SavedTrackObject = z.infer<typeof savedTrackObject>;

/**
 * Zod schema for mapping API responses to the SavedTrackObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const savedTrackObjectResponse = z.lazy(() => {
  return z
    .object({
      added_at: z.string().optional(),
      track: trackObjectResponse.optional(),
    })
    .transform((data) => ({
      addedAt: data['added_at'],
      track: data['track'],
    }));
});

/**
 * Zod schema for mapping the SavedTrackObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const savedTrackObjectRequest = z.lazy(() => {
  return z
    .object({
      addedAt: z.string().optional(),
      track: trackObjectRequest.optional(),
    })
    .transform((data) => ({
      added_at: data['addedAt'],
      track: data['track'],
    }));
});
