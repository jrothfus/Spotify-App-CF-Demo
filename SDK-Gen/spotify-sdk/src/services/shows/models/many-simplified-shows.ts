import { z } from 'zod';
import {
  SimplifiedShowObject,
  simplifiedShowObject,
  simplifiedShowObjectRequest,
  simplifiedShowObjectResponse,
} from '../../common/simplified-show-object';

/**
 * Zod schema for the ManySimplifiedShows model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const manySimplifiedShows = z.lazy(() => {
  return z.object({
    shows: z.array(simplifiedShowObject),
  });
});

/**
 *
 * @typedef  {ManySimplifiedShows} manySimplifiedShows
 * @property {SimplifiedShowObject[]}
 */
export type ManySimplifiedShows = z.infer<typeof manySimplifiedShows>;

/**
 * Zod schema for mapping API responses to the ManySimplifiedShows application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const manySimplifiedShowsResponse = z.lazy(() => {
  return z
    .object({
      shows: z.array(simplifiedShowObjectResponse),
    })
    .transform((data) => ({
      shows: data['shows'],
    }));
});

/**
 * Zod schema for mapping the ManySimplifiedShows application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const manySimplifiedShowsRequest = z.lazy(() => {
  return z
    .object({
      shows: z.array(simplifiedShowObjectRequest),
    })
    .transform((data) => ({
      shows: data['shows'],
    }));
});
