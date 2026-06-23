import { z } from 'zod';
import {
  ImageObject,
  imageObject,
  imageObjectRequest,
  imageObjectResponse,
} from '../../common/image-object';

/**
 * Zod schema for the CategoryObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const categoryObject = z.lazy(() => {
  return z.object({
    href: z.string(),
    icons: z.array(imageObject),
    id: z.string(),
    name: z.string(),
  });
});

/**
 * 
 * @typedef  {CategoryObject} categoryObject   
 * @property {string} - A link to the Web API endpoint returning full details of the category.

 * @property {ImageObject[]} - The category icon, in various sizes.

 * @property {string} - The [Spotify category ID](/documentation/web-api/concepts/spotify-uris-ids) of the category.

 * @property {string} - The name of the category.

 */
export type CategoryObject = z.infer<typeof categoryObject>;

/**
 * Zod schema for mapping API responses to the CategoryObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const categoryObjectResponse = z.lazy(() => {
  return z
    .object({
      href: z.string(),
      icons: z.array(imageObjectResponse),
      id: z.string(),
      name: z.string(),
    })
    .transform((data) => ({
      href: data['href'],
      icons: data['icons'],
      id: data['id'],
      name: data['name'],
    }));
});

/**
 * Zod schema for mapping the CategoryObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const categoryObjectRequest = z.lazy(() => {
  return z
    .object({
      href: z.string(),
      icons: z.array(imageObjectRequest),
      id: z.string(),
      name: z.string(),
    })
    .transform((data) => ({
      href: data['href'],
      icons: data['icons'],
      id: data['id'],
      name: data['name'],
    }));
});
