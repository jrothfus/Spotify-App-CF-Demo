import { z } from 'zod';
import { AlbumObject, albumObject, albumObjectRequest, albumObjectResponse } from './album-object';

/**
 * Zod schema for the ManyAlbums model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const manyAlbums = z.lazy(() => {
  return z.object({
    albums: z.array(albumObject),
  });
});

/**
 *
 * @typedef  {ManyAlbums} manyAlbums
 * @property {AlbumObject[]}
 */
export type ManyAlbums = z.infer<typeof manyAlbums>;

/**
 * Zod schema for mapping API responses to the ManyAlbums application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const manyAlbumsResponse = z.lazy(() => {
  return z
    .object({
      albums: z.array(albumObjectResponse),
    })
    .transform((data) => ({
      albums: data['albums'],
    }));
});

/**
 * Zod schema for mapping the ManyAlbums application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const manyAlbumsRequest = z.lazy(() => {
  return z
    .object({
      albums: z.array(albumObjectRequest),
    })
    .transform((data) => ({
      albums: data['albums'],
    }));
});
