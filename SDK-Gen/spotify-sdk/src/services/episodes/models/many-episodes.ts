import { z } from 'zod';
import {
  EpisodeObject,
  episodeObject,
  episodeObjectRequest,
  episodeObjectResponse,
} from '../../common/episode-object';

/**
 * Zod schema for the ManyEpisodes model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const manyEpisodes = z.lazy(() => {
  return z.object({
    episodes: z.array(episodeObject),
  });
});

/**
 *
 * @typedef  {ManyEpisodes} manyEpisodes
 * @property {EpisodeObject[]}
 */
export type ManyEpisodes = z.infer<typeof manyEpisodes>;

/**
 * Zod schema for mapping API responses to the ManyEpisodes application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const manyEpisodesResponse = z.lazy(() => {
  return z
    .object({
      episodes: z.array(episodeObjectResponse),
    })
    .transform((data) => ({
      episodes: data['episodes'],
    }));
});

/**
 * Zod schema for mapping the ManyEpisodes application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const manyEpisodesRequest = z.lazy(() => {
  return z
    .object({
      episodes: z.array(episodeObjectRequest),
    })
    .transform((data) => ({
      episodes: data['episodes'],
    }));
});
