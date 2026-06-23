import { z } from 'zod';

/**
 * Zod schema for the ImageObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const imageObject = z.lazy(() => {
  return z.object({
    url: z.string(),
    height: z.number().nullable(),
    width: z.number().nullable(),
  });
});

/**
 * 
 * @typedef  {ImageObject} imageObject   
 * @property {string} - The source URL of the image.

 * @property {number} - The image height in pixels.

 * @property {number} - The image width in pixels.

 */
export type ImageObject = z.infer<typeof imageObject>;

/**
 * Zod schema for mapping API responses to the ImageObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const imageObjectResponse = z.lazy(() => {
  return z
    .object({
      url: z.string(),
      height: z.number().nullable(),
      width: z.number().nullable(),
    })
    .transform((data) => ({
      url: data['url'],
      height: data['height'],
      width: data['width'],
    }));
});

/**
 * Zod schema for mapping the ImageObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const imageObjectRequest = z.lazy(() => {
  return z
    .object({
      url: z.string(),
      height: z.number().nullable(),
      width: z.number().nullable(),
    })
    .transform((data) => ({
      url: data['url'],
      height: data['height'],
      width: data['width'],
    }));
});
