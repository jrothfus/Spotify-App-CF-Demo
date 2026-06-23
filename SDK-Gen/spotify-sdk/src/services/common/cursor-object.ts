import { z } from 'zod';

/**
 * Zod schema for the CursorObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const cursorObject = z.lazy(() => {
  return z.object({
    after: z.string().optional(),
    before: z.string().optional(),
  });
});

/**
 *
 * @typedef  {CursorObject} cursorObject
 * @property {string} - The cursor to use as key to find the next page of items.
 * @property {string} - The cursor to use as key to find the previous page of items.
 */
export type CursorObject = z.infer<typeof cursorObject>;

/**
 * Zod schema for mapping API responses to the CursorObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const cursorObjectResponse = z.lazy(() => {
  return z
    .object({
      after: z.string().optional(),
      before: z.string().optional(),
    })
    .transform((data) => ({
      after: data['after'],
      before: data['before'],
    }));
});

/**
 * Zod schema for mapping the CursorObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const cursorObjectRequest = z.lazy(() => {
  return z
    .object({
      after: z.string().optional(),
      before: z.string().optional(),
    })
    .transform((data) => ({
      after: data['after'],
      before: data['before'],
    }));
});
