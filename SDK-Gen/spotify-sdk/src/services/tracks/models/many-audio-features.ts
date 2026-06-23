import { z } from 'zod';
import {
  AudioFeaturesObject,
  audioFeaturesObject,
  audioFeaturesObjectRequest,
  audioFeaturesObjectResponse,
} from './audio-features-object';

/**
 * Zod schema for the ManyAudioFeatures model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const manyAudioFeatures = z.lazy(() => {
  return z.object({
    audioFeatures: z.array(audioFeaturesObject),
  });
});

/**
 *
 * @typedef  {ManyAudioFeatures} manyAudioFeatures
 * @property {AudioFeaturesObject[]}
 */
export type ManyAudioFeatures = z.infer<typeof manyAudioFeatures>;

/**
 * Zod schema for mapping API responses to the ManyAudioFeatures application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const manyAudioFeaturesResponse = z.lazy(() => {
  return z
    .object({
      audio_features: z.array(audioFeaturesObjectResponse),
    })
    .transform((data) => ({
      audioFeatures: data['audio_features'],
    }));
});

/**
 * Zod schema for mapping the ManyAudioFeatures application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const manyAudioFeaturesRequest = z.lazy(() => {
  return z
    .object({
      audioFeatures: z.array(audioFeaturesObjectRequest),
    })
    .transform((data) => ({
      audio_features: data['audioFeatures'],
    }));
});
