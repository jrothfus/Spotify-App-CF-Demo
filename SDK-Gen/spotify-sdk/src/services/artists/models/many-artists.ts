import { z } from 'zod';
import {
  ArtistObject,
  artistObject,
  artistObjectRequest,
  artistObjectResponse,
} from '../../common/artist-object';

/**
 * Zod schema for the ManyArtists model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const manyArtists = z.lazy(() => {
  return z.object({
    artists: z.array(artistObject),
  });
});

/**
 *
 * @typedef  {ManyArtists} manyArtists
 * @property {ArtistObject[]}
 */
export type ManyArtists = z.infer<typeof manyArtists>;

/**
 * Zod schema for mapping API responses to the ManyArtists application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const manyArtistsResponse = z.lazy(() => {
  return z
    .object({
      artists: z.array(artistObjectResponse),
    })
    .transform((data) => ({
      artists: data['artists'],
    }));
});

/**
 * Zod schema for mapping the ManyArtists application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const manyArtistsRequest = z.lazy(() => {
  return z
    .object({
      artists: z.array(artistObjectRequest),
    })
    .transform((data) => ({
      artists: data['artists'],
    }));
});
