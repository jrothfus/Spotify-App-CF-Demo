import { z } from 'zod';
import {
  SavedShowObject,
  savedShowObject,
  savedShowObjectRequest,
  savedShowObjectResponse,
} from './saved-show-object';

/**
 * Zod schema for the PagingSavedShowObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const pagingSavedShowObject = z.lazy(() => {
  return z.object({
    href: z.string(),
    limit: z.number(),
    next: z.string().nullable(),
    offset: z.number(),
    previous: z.string().nullable(),
    total: z.number(),
    items: z.array(savedShowObject),
  });
});

/**
 * 
 * @typedef  {PagingSavedShowObject} pagingSavedShowObject   
 * @property {string} - A link to the Web API endpoint returning the full result of the request

 * @property {number} - The maximum number of items in the response (as set in the query or by default).

 * @property {string} - URL to the next page of items. ( `null` if none)

 * @property {number} - The offset of the items returned (as set in the query or by default)

 * @property {string} - URL to the previous page of items. ( `null` if none)

 * @property {number} - The total number of items available to return.

 * @property {SavedShowObject[]} 
 */
export type PagingSavedShowObject = z.infer<typeof pagingSavedShowObject>;

/**
 * Zod schema for mapping API responses to the PagingSavedShowObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const pagingSavedShowObjectResponse = z.lazy(() => {
  return z
    .object({
      href: z.string(),
      limit: z.number(),
      next: z.string().nullable(),
      offset: z.number(),
      previous: z.string().nullable(),
      total: z.number(),
      items: z.array(savedShowObjectResponse),
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
 * Zod schema for mapping the PagingSavedShowObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const pagingSavedShowObjectRequest = z.lazy(() => {
  return z
    .object({
      href: z.string(),
      limit: z.number(),
      next: z.string().nullable(),
      offset: z.number(),
      previous: z.string().nullable(),
      total: z.number(),
      items: z.array(savedShowObjectRequest),
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
