import { z } from 'zod';
import { TrackObject, trackObject, trackObjectRequest, trackObjectResponse } from './track-object';

/**
 * Zod schema for the ManyTracks model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const manyTracks = z.lazy(() => {
  return z.object({
    tracks: z.array(trackObject),
  });
});

/**
 *
 * @typedef  {ManyTracks} manyTracks
 * @property {TrackObject[]}
 */
export type ManyTracks = z.infer<typeof manyTracks>;

/**
 * Zod schema for mapping API responses to the ManyTracks application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const manyTracksResponse = z.lazy(() => {
  return z
    .object({
      tracks: z.array(trackObjectResponse),
    })
    .transform((data) => ({
      tracks: data['tracks'],
    }));
});

/**
 * Zod schema for mapping the ManyTracks application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const manyTracksRequest = z.lazy(() => {
  return z
    .object({
      tracks: z.array(trackObjectRequest),
    })
    .transform((data) => ({
      tracks: data['tracks'],
    }));
});
