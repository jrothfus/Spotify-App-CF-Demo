import { z } from 'zod';
import {
  PagingSimplifiedAlbumObject,
  pagingSimplifiedAlbumObject,
  pagingSimplifiedAlbumObjectRequest,
  pagingSimplifiedAlbumObjectResponse,
} from '../../common/paging-simplified-album-object';

/**
 * Zod schema for the PagedAlbums model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const pagedAlbums = z.lazy(() => {
  return z.object({
    albums: pagingSimplifiedAlbumObject,
  });
});

/**
 *
 * @typedef  {PagedAlbums} pagedAlbums
 * @property {PagingSimplifiedAlbumObject}
 */
export type PagedAlbums = z.infer<typeof pagedAlbums>;

/**
 * Zod schema for mapping API responses to the PagedAlbums application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const pagedAlbumsResponse = z.lazy(() => {
  return z
    .object({
      albums: pagingSimplifiedAlbumObjectResponse,
    })
    .transform((data) => ({
      albums: data['albums'],
    }));
});

/**
 * Zod schema for mapping the PagedAlbums application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const pagedAlbumsRequest = z.lazy(() => {
  return z
    .object({
      albums: pagingSimplifiedAlbumObjectRequest,
    })
    .transform((data) => ({
      albums: data['albums'],
    }));
});
