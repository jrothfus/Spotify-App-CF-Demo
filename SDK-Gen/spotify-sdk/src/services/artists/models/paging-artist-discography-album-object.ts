import { z } from 'zod';
import {
  ArtistDiscographyAlbumObject,
  artistDiscographyAlbumObject,
  artistDiscographyAlbumObjectRequest,
  artistDiscographyAlbumObjectResponse,
} from './artist-discography-album-object';

/**
 * Zod schema for the PagingArtistDiscographyAlbumObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const pagingArtistDiscographyAlbumObject = z.lazy(() => {
  return z.object({
    href: z.string(),
    limit: z.number(),
    next: z.string().nullable(),
    offset: z.number(),
    previous: z.string().nullable(),
    total: z.number(),
    items: z.array(artistDiscographyAlbumObject),
  });
});

/**
 * 
 * @typedef  {PagingArtistDiscographyAlbumObject} pagingArtistDiscographyAlbumObject   
 * @property {string} - A link to the Web API endpoint returning the full result of the request

 * @property {number} - The maximum number of items in the response (as set in the query or by default).

 * @property {string} - URL to the next page of items. ( `null` if none)

 * @property {number} - The offset of the items returned (as set in the query or by default)

 * @property {string} - URL to the previous page of items. ( `null` if none)

 * @property {number} - The total number of items available to return.

 * @property {ArtistDiscographyAlbumObject[]} 
 */
export type PagingArtistDiscographyAlbumObject = z.infer<typeof pagingArtistDiscographyAlbumObject>;

/**
 * Zod schema for mapping API responses to the PagingArtistDiscographyAlbumObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const pagingArtistDiscographyAlbumObjectResponse = z.lazy(() => {
  return z
    .object({
      href: z.string(),
      limit: z.number(),
      next: z.string().nullable(),
      offset: z.number(),
      previous: z.string().nullable(),
      total: z.number(),
      items: z.array(artistDiscographyAlbumObjectResponse),
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
 * Zod schema for mapping the PagingArtistDiscographyAlbumObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const pagingArtistDiscographyAlbumObjectRequest = z.lazy(() => {
  return z
    .object({
      href: z.string(),
      limit: z.number(),
      next: z.string().nullable(),
      offset: z.number(),
      previous: z.string().nullable(),
      total: z.number(),
      items: z.array(artistDiscographyAlbumObjectRequest),
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
