import { z } from 'zod';
import { AlbumObject, albumObject, albumObjectRequest, albumObjectResponse } from './album-object';

/**
 * Zod schema for the SavedAlbumObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const savedAlbumObject = z.lazy(() => {
  return z.object({
    addedAt: z.string().optional(),
    album: albumObject.optional(),
  });
});

/**
 * 
 * @typedef  {SavedAlbumObject} savedAlbumObject   
 * @property {string} - The date and time the album was saved
Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.
If the time is imprecise (for example, the date/time of an album release), an additional field indicates the precision; see for example, release_date in an album object.

 * @property {AlbumObject} 
 */
export type SavedAlbumObject = z.infer<typeof savedAlbumObject>;

/**
 * Zod schema for mapping API responses to the SavedAlbumObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const savedAlbumObjectResponse = z.lazy(() => {
  return z
    .object({
      added_at: z.string().optional(),
      album: albumObjectResponse.optional(),
    })
    .transform((data) => ({
      addedAt: data['added_at'],
      album: data['album'],
    }));
});

/**
 * Zod schema for mapping the SavedAlbumObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const savedAlbumObjectRequest = z.lazy(() => {
  return z
    .object({
      addedAt: z.string().optional(),
      album: albumObjectRequest.optional(),
    })
    .transform((data) => ({
      added_at: data['addedAt'],
      album: data['album'],
    }));
});
