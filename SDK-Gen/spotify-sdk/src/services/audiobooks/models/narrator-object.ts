import { z } from 'zod';

/**
 * Zod schema for the NarratorObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const narratorObject = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
  });
});

/**
 * 
 * @typedef  {NarratorObject} narratorObject   
 * @property {string} - The name of the Narrator.

 */
export type NarratorObject = z.infer<typeof narratorObject>;

/**
 * Zod schema for mapping API responses to the NarratorObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const narratorObjectResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
    }));
});

/**
 * Zod schema for mapping the NarratorObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const narratorObjectRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
    }));
});
