import { z } from 'zod';

/**
 * Zod schema for the ManyGenres model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const manyGenres = z.lazy(() => {
  return z.object({
    genres: z.array(z.string()),
  });
});

/**
 *
 * @typedef  {ManyGenres} manyGenres
 * @property {string[]}
 */
export type ManyGenres = z.infer<typeof manyGenres>;

/**
 * Zod schema for mapping API responses to the ManyGenres application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const manyGenresResponse = z.lazy(() => {
  return z
    .object({
      genres: z.array(z.string()),
    })
    .transform((data) => ({
      genres: data['genres'],
    }));
});

/**
 * Zod schema for mapping the ManyGenres application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const manyGenresRequest = z.lazy(() => {
  return z
    .object({
      genres: z.array(z.string()),
    })
    .transform((data) => ({
      genres: data['genres'],
    }));
});
