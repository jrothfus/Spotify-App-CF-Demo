import { z } from 'zod';
import {
  SimplifiedShowObject,
  simplifiedShowObject,
  simplifiedShowObjectRequest,
  simplifiedShowObjectResponse,
} from '../../common/simplified-show-object';

/**
 * Zod schema for the SavedShowObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const savedShowObject = z.lazy(() => {
  return z.object({
    addedAt: z.string().optional(),
    show: simplifiedShowObject.optional(),
  });
});

/**
 * 
 * @typedef  {SavedShowObject} savedShowObject   
 * @property {string} - The date and time the show was saved.
Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.
If the time is imprecise (for example, the date/time of an album release), an additional field indicates the precision; see for example, release_date in an album object.

 * @property {SimplifiedShowObject} 
 */
export type SavedShowObject = z.infer<typeof savedShowObject>;

/**
 * Zod schema for mapping API responses to the SavedShowObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const savedShowObjectResponse = z.lazy(() => {
  return z
    .object({
      added_at: z.string().optional(),
      show: simplifiedShowObjectResponse.optional(),
    })
    .transform((data) => ({
      addedAt: data['added_at'],
      show: data['show'],
    }));
});

/**
 * Zod schema for mapping the SavedShowObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const savedShowObjectRequest = z.lazy(() => {
  return z
    .object({
      addedAt: z.string().optional(),
      show: simplifiedShowObjectRequest.optional(),
    })
    .transform((data) => ({
      added_at: data['addedAt'],
      show: data['show'],
    }));
});
