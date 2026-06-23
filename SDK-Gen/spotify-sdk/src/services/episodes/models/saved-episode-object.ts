import { z } from 'zod';
import {
  EpisodeObject,
  episodeObject,
  episodeObjectRequest,
  episodeObjectResponse,
} from '../../common/episode-object';

/**
 * Zod schema for the SavedEpisodeObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const savedEpisodeObject = z.lazy(() => {
  return z.object({
    addedAt: z.string().optional(),
    episode: episodeObject.optional(),
  });
});

/**
 * 
 * @typedef  {SavedEpisodeObject} savedEpisodeObject   
 * @property {string} - The date and time the episode was saved.
Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.

 * @property {EpisodeObject} 
 */
export type SavedEpisodeObject = z.infer<typeof savedEpisodeObject>;

/**
 * Zod schema for mapping API responses to the SavedEpisodeObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const savedEpisodeObjectResponse = z.lazy(() => {
  return z
    .object({
      added_at: z.string().optional(),
      episode: episodeObjectResponse.optional(),
    })
    .transform((data) => ({
      addedAt: data['added_at'],
      episode: data['episode'],
    }));
});

/**
 * Zod schema for mapping the SavedEpisodeObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const savedEpisodeObjectRequest = z.lazy(() => {
  return z
    .object({
      addedAt: z.string().optional(),
      episode: episodeObjectRequest.optional(),
    })
    .transform((data) => ({
      added_at: data['addedAt'],
      episode: data['episode'],
    }));
});
