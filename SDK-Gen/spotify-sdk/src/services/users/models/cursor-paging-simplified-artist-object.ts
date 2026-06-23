import { z } from 'zod';
import {
  CursorObject,
  cursorObject,
  cursorObjectRequest,
  cursorObjectResponse,
} from '../../common/cursor-object';
import {
  ArtistObject,
  artistObject,
  artistObjectRequest,
  artistObjectResponse,
} from '../../common/artist-object';

/**
 * Zod schema for the CursorPagingSimplifiedArtistObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const cursorPagingSimplifiedArtistObject = z.lazy(() => {
  return z.object({
    href: z.string().optional(),
    limit: z.number().optional(),
    next: z.string().optional(),
    cursors: cursorObject.optional(),
    total: z.number().optional(),
    items: z.array(artistObject).optional(),
  });
});

/**
 *
 * @typedef  {CursorPagingSimplifiedArtistObject} cursorPagingSimplifiedArtistObject
 * @property {string} - A link to the Web API endpoint returning the full result of the request.
 * @property {number} - The maximum number of items in the response (as set in the query or by default).
 * @property {string} - URL to the next page of items. ( `null` if none)
 * @property {CursorObject}
 * @property {number} - The total number of items available to return.
 * @property {ArtistObject[]}
 */
export type CursorPagingSimplifiedArtistObject = z.infer<typeof cursorPagingSimplifiedArtistObject>;

/**
 * Zod schema for mapping API responses to the CursorPagingSimplifiedArtistObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const cursorPagingSimplifiedArtistObjectResponse = z.lazy(() => {
  return z
    .object({
      href: z.string().optional(),
      limit: z.number().optional(),
      next: z.string().optional(),
      cursors: cursorObjectResponse.optional(),
      total: z.number().optional(),
      items: z.array(artistObjectResponse).optional(),
    })
    .transform((data) => ({
      href: data['href'],
      limit: data['limit'],
      next: data['next'],
      cursors: data['cursors'],
      total: data['total'],
      items: data['items'],
    }));
});

/**
 * Zod schema for mapping the CursorPagingSimplifiedArtistObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const cursorPagingSimplifiedArtistObjectRequest = z.lazy(() => {
  return z
    .object({
      href: z.string().optional(),
      limit: z.number().optional(),
      next: z.string().optional(),
      cursors: cursorObjectRequest.optional(),
      total: z.number().optional(),
      items: z.array(artistObjectRequest).optional(),
    })
    .transform((data) => ({
      href: data['href'],
      limit: data['limit'],
      next: data['next'],
      cursors: data['cursors'],
      total: data['total'],
      items: data['items'],
    }));
});
