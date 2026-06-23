import { z } from 'zod';
import {
  AudiobookObject,
  audiobookObject,
  audiobookObjectRequest,
  audiobookObjectResponse,
} from './audiobook-object';

/**
 * Zod schema for the ManyAudiobooks model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const manyAudiobooks = z.lazy(() => {
  return z.object({
    audiobooks: z.array(audiobookObject),
  });
});

/**
 *
 * @typedef  {ManyAudiobooks} manyAudiobooks
 * @property {AudiobookObject[]}
 */
export type ManyAudiobooks = z.infer<typeof manyAudiobooks>;

/**
 * Zod schema for mapping API responses to the ManyAudiobooks application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const manyAudiobooksResponse = z.lazy(() => {
  return z
    .object({
      audiobooks: z.array(audiobookObjectResponse),
    })
    .transform((data) => ({
      audiobooks: data['audiobooks'],
    }));
});

/**
 * Zod schema for mapping the ManyAudiobooks application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const manyAudiobooksRequest = z.lazy(() => {
  return z
    .object({
      audiobooks: z.array(audiobookObjectRequest),
    })
    .transform((data) => ({
      audiobooks: data['audiobooks'],
    }));
});
