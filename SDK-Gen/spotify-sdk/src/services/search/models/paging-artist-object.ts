import { z } from 'zod';
import {
  ArtistObject,
  artistObject,
  artistObjectRequest,
  artistObjectResponse,
} from '../../common/artist-object';

/**
 * Zod schema for the PagingArtistObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const pagingArtistObject = z.lazy(() => {
  return z.object({
    href: z.string(),
    limit: z.number(),
    next: z.string().nullable(),
    offset: z.number(),
    previous: z.string().nullable(),
    total: z.number(),
    items: z.array(artistObject),
  });
});

/**
 * 
 * @typedef  {PagingArtistObject} pagingArtistObject   
 * @property {string} - A link to the Web API endpoint returning the full result of the request

 * @property {number} - The maximum number of items in the response (as set in the query or by default).

 * @property {string} - URL to the next page of items. ( `null` if none)

 * @property {number} - The offset of the items returned (as set in the query or by default)

 * @property {string} - URL to the previous page of items. ( `null` if none)

 * @property {number} - The total number of items available to return.

 * @property {ArtistObject[]} 
 */
export type PagingArtistObject = z.infer<typeof pagingArtistObject>;

/**
 * Zod schema for mapping API responses to the PagingArtistObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const pagingArtistObjectResponse = z.lazy(() => {
  return z
    .object({
      href: z.string(),
      limit: z.number(),
      next: z.string().nullable(),
      offset: z.number(),
      previous: z.string().nullable(),
      total: z.number(),
      items: z.array(artistObjectResponse),
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
 * Zod schema for mapping the PagingArtistObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const pagingArtistObjectRequest = z.lazy(() => {
  return z
    .object({
      href: z.string(),
      limit: z.number(),
      next: z.string().nullable(),
      offset: z.number(),
      previous: z.string().nullable(),
      total: z.number(),
      items: z.array(artistObjectRequest),
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
