import { z } from 'zod';
import {
  SimplifiedEpisodeObject,
  simplifiedEpisodeObject,
  simplifiedEpisodeObjectRequest,
  simplifiedEpisodeObjectResponse,
} from '../shows/models/simplified-episode-object';

/**
 * Zod schema for the PagingSimplifiedEpisodeObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const pagingSimplifiedEpisodeObject = z.lazy(() => {
  return z.object({
    href: z.string(),
    limit: z.number(),
    next: z.string().nullable(),
    offset: z.number(),
    previous: z.string().nullable(),
    total: z.number(),
    items: z.array(simplifiedEpisodeObject),
  });
});

/**
 * 
 * @typedef  {PagingSimplifiedEpisodeObject} pagingSimplifiedEpisodeObject   
 * @property {string} - A link to the Web API endpoint returning the full result of the request

 * @property {number} - The maximum number of items in the response (as set in the query or by default).

 * @property {string} - URL to the next page of items. ( `null` if none)

 * @property {number} - The offset of the items returned (as set in the query or by default)

 * @property {string} - URL to the previous page of items. ( `null` if none)

 * @property {number} - The total number of items available to return.

 * @property {SimplifiedEpisodeObject[]} 
 */
export type PagingSimplifiedEpisodeObject = z.infer<typeof pagingSimplifiedEpisodeObject>;

/**
 * Zod schema for mapping API responses to the PagingSimplifiedEpisodeObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const pagingSimplifiedEpisodeObjectResponse = z.lazy(() => {
  return z
    .object({
      href: z.string(),
      limit: z.number(),
      next: z.string().nullable(),
      offset: z.number(),
      previous: z.string().nullable(),
      total: z.number(),
      items: z.array(simplifiedEpisodeObjectResponse),
    })
    .transform((data) => ({
      href: data['href'],
      limit: data['limit'],
      next: data['next'],
      offset: data['offset'],
      previous: data['previous'],
      total: data['total'],
      items: data['items'],
    }));
});

/**
 * Zod schema for mapping the PagingSimplifiedEpisodeObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const pagingSimplifiedEpisodeObjectRequest = z.lazy(() => {
  return z
    .object({
      href: z.string(),
      limit: z.number(),
      next: z.string().nullable(),
      offset: z.number(),
      previous: z.string().nullable(),
      total: z.number(),
      items: z.array(simplifiedEpisodeObjectRequest),
    })
    .transform((data) => ({
      href: data['href'],
      limit: data['limit'],
      next: data['next'],
      offset: data['offset'],
      previous: data['previous'],
      total: data['total'],
      items: data['items'],
    }));
});
