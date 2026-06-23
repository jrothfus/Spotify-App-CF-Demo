import { z } from 'zod';

/**
 * Zod schema for the Tracks model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const tracks = z.lazy(() => {
  return z.object({
    uri: z.string().optional(),
  });
});

/**
 *
 * @typedef  {Tracks} tracks
 * @property {string} - Spotify URI
 */
export type Tracks = z.infer<typeof tracks>;

/**
 * Zod schema for mapping API responses to the Tracks application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const tracksResponse = z.lazy(() => {
  return z
    .object({
      uri: z.string().optional(),
    })
    .transform((data) => ({
      uri: data['uri'],
    }));
});

/**
 * Zod schema for mapping the Tracks application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const tracksRequest = z.lazy(() => {
  return z
    .object({
      uri: z.string().optional(),
    })
    .transform((data) => ({
      uri: data['uri'],
    }));
});
