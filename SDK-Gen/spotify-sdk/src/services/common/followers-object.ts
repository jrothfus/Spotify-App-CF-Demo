import { z } from 'zod';

/**
 * Zod schema for the FollowersObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const followersObject = z.lazy(() => {
  return z.object({
    href: z.string().optional().nullable(),
    total: z.number().optional(),
  });
});

/**
 * 
 * @typedef  {FollowersObject} followersObject   
 * @property {string} - This will always be set to null, as the Web API does not support it at the moment.

 * @property {number} - The total number of followers.

 */
export type FollowersObject = z.infer<typeof followersObject>;

/**
 * Zod schema for mapping API responses to the FollowersObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const followersObjectResponse = z.lazy(() => {
  return z
    .object({
      href: z.string().optional().nullable(),
      total: z.number().optional(),
    })
    .transform((data) => ({
      href: data['href'],
      total: data['total'],
    }));
});

/**
 * Zod schema for mapping the FollowersObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const followersObjectRequest = z.lazy(() => {
  return z
    .object({
      href: z.string().optional().nullable(),
      total: z.number().optional(),
    })
    .transform((data) => ({
      href: data['href'],
      total: data['total'],
    }));
});
