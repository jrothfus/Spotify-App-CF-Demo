import { z } from 'zod';
import {
  RecommendationSeedObject,
  recommendationSeedObject,
  recommendationSeedObjectRequest,
  recommendationSeedObjectResponse,
} from './recommendation-seed-object';
import {
  TrackObject,
  trackObject,
  trackObjectRequest,
  trackObjectResponse,
} from '../../common/track-object';

/**
 * Zod schema for the RecommendationsObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const recommendationsObject = z.lazy(() => {
  return z.object({
    seeds: z.array(recommendationSeedObject),
    tracks: z.array(trackObject),
  });
});

/**
 * 
 * @typedef  {RecommendationsObject} recommendationsObject   
 * @property {RecommendationSeedObject[]} - An array of recommendation seed objects.

 * @property {TrackObject[]} - An array of track object (simplified) ordered according to the parameters supplied.

 */
export type RecommendationsObject = z.infer<typeof recommendationsObject>;

/**
 * Zod schema for mapping API responses to the RecommendationsObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const recommendationsObjectResponse = z.lazy(() => {
  return z
    .object({
      seeds: z.array(recommendationSeedObjectResponse),
      tracks: z.array(trackObjectResponse),
    })
    .transform((data) => ({
      seeds: data['seeds'],
      tracks: data['tracks'],
    }));
});

/**
 * Zod schema for mapping the RecommendationsObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const recommendationsObjectRequest = z.lazy(() => {
  return z
    .object({
      seeds: z.array(recommendationSeedObjectRequest),
      tracks: z.array(trackObjectRequest),
    })
    .transform((data) => ({
      seeds: data['seeds'],
      tracks: data['tracks'],
    }));
});
