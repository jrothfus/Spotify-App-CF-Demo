import { z } from 'zod';

/**
 * Zod schema for the ExternalUrlObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const externalUrlObject = z.lazy(() => {
  return z.object({
    spotify: z.string().optional(),
  });
});

/**
 * 
 * @typedef  {ExternalUrlObject} externalUrlObject   
 * @property {string} - The [Spotify URL](/documentation/web-api/concepts/spotify-uris-ids) for the object.

 */
export type ExternalUrlObject = z.infer<typeof externalUrlObject>;

/**
 * Zod schema for mapping API responses to the ExternalUrlObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const externalUrlObjectResponse = z.lazy(() => {
  return z
    .object({
      spotify: z.string().optional(),
    })
    .transform((data) => ({
      spotify: data['spotify'],
    }));
});

/**
 * Zod schema for mapping the ExternalUrlObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const externalUrlObjectRequest = z.lazy(() => {
  return z
    .object({
      spotify: z.string().optional(),
    })
    .transform((data) => ({
      spotify: data['spotify'],
    }));
});
