import { z } from 'zod';

/**
 * Zod schema for the Items model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const items = z.lazy(() => {
  return z.object({
    uri: z.string().optional(),
  });
});

/**
 *
 * @typedef  {Items} items
 * @property {string} - Spotify URI
 */
export type Items = z.infer<typeof items>;

/**
 * Zod schema for mapping API responses to the Items application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const itemsResponse = z.lazy(() => {
  return z
    .object({
      uri: z.string().optional(),
    })
    .transform((data) => ({
      uri: data['uri'],
    }));
});

/**
 * Zod schema for mapping the Items application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const itemsRequest = z.lazy(() => {
  return z
    .object({
      uri: z.string().optional(),
    })
    .transform((data) => ({
      uri: data['uri'],
    }));
});
