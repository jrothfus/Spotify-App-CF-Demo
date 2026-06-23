import { z } from 'zod';

/**
 * Zod schema for the TimeIntervalObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const timeIntervalObject = z.lazy(() => {
  return z.object({
    start: z.number().optional(),
    duration: z.number().optional(),
    confidence: z.number().gte(0).lte(1).optional(),
  });
});

/**
 *
 * @typedef  {TimeIntervalObject} timeIntervalObject
 * @property {number} - The starting point (in seconds) of the time interval.
 * @property {number} - The duration (in seconds) of the time interval.
 * @property {number} - The confidence, from 0.0 to 1.0, of the reliability of the interval.
 */
export type TimeIntervalObject = z.infer<typeof timeIntervalObject>;

/**
 * Zod schema for mapping API responses to the TimeIntervalObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const timeIntervalObjectResponse = z.lazy(() => {
  return z
    .object({
      start: z.number().optional(),
      duration: z.number().optional(),
      confidence: z.number().gte(0).lte(1).optional(),
    })
    .transform((data) => ({
      start: data['start'],
      duration: data['duration'],
      confidence: data['confidence'],
    }));
});

/**
 * Zod schema for mapping the TimeIntervalObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const timeIntervalObjectRequest = z.lazy(() => {
  return z
    .object({
      start: z.number().optional(),
      duration: z.number().optional(),
      confidence: z.number().gte(0).lte(1).optional(),
    })
    .transform((data) => ({
      start: data['start'],
      duration: data['duration'],
      confidence: data['confidence'],
    }));
});
