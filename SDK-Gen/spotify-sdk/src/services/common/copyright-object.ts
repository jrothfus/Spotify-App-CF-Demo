import { z } from 'zod';

/**
 * Zod schema for the CopyrightObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const copyrightObject = z.lazy(() => {
  return z.object({
    text: z.string().optional(),
    type: z.string().optional(),
  });
});

/**
 * 
 * @typedef  {CopyrightObject} copyrightObject   
 * @property {string} - The copyright text for this content.

 * @property {string} - The type of copyright: `C` = the copyright, `P` = the sound recording (performance) copyright.

 */
export type CopyrightObject = z.infer<typeof copyrightObject>;

/**
 * Zod schema for mapping API responses to the CopyrightObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const copyrightObjectResponse = z.lazy(() => {
  return z
    .object({
      text: z.string().optional(),
      type: z.string().optional(),
    })
    .transform((data) => ({
      text: data['text'],
      type: data['type'],
    }));
});

/**
 * Zod schema for mapping the CopyrightObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const copyrightObjectRequest = z.lazy(() => {
  return z
    .object({
      text: z.string().optional(),
      type: z.string().optional(),
    })
    .transform((data) => ({
      text: data['text'],
      type: data['type'],
    }));
});
