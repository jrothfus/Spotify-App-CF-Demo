import { z } from 'zod';

/**
 * Zod schema for the AuthorObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const authorObject = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
  });
});

/**
 * 
 * @typedef  {AuthorObject} authorObject   
 * @property {string} - The name of the author.

 */
export type AuthorObject = z.infer<typeof authorObject>;

/**
 * Zod schema for mapping API responses to the AuthorObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const authorObjectResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
    }));
});

/**
 * Zod schema for mapping the AuthorObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const authorObjectRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
    }));
});
