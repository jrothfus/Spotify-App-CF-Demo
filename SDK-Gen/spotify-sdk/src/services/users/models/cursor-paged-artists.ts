import { z } from 'zod';
import {
  CursorPagingSimplifiedArtistObject,
  cursorPagingSimplifiedArtistObject,
  cursorPagingSimplifiedArtistObjectRequest,
  cursorPagingSimplifiedArtistObjectResponse,
} from './cursor-paging-simplified-artist-object';

/**
 * Zod schema for the CursorPagedArtists model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const cursorPagedArtists = z.lazy(() => {
  return z.object({
    artists: cursorPagingSimplifiedArtistObject,
  });
});

/**
 *
 * @typedef  {CursorPagedArtists} cursorPagedArtists
 * @property {CursorPagingSimplifiedArtistObject}
 */
export type CursorPagedArtists = z.infer<typeof cursorPagedArtists>;

/**
 * Zod schema for mapping API responses to the CursorPagedArtists application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const cursorPagedArtistsResponse = z.lazy(() => {
  return z
    .object({
      artists: cursorPagingSimplifiedArtistObjectResponse,
    })
    .transform((data) => ({
      artists: data['artists'],
    }));
});

/**
 * Zod schema for mapping the CursorPagedArtists application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const cursorPagedArtistsRequest = z.lazy(() => {
  return z
    .object({
      artists: cursorPagingSimplifiedArtistObjectRequest,
    })
    .transform((data) => ({
      artists: data['artists'],
    }));
});
