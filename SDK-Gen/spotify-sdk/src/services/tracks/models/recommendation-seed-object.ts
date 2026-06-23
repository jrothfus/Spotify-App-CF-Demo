import { z } from 'zod';

/**
 * Zod schema for the RecommendationSeedObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const recommendationSeedObject = z.lazy(() => {
  return z.object({
    afterFilteringSize: z.number().optional(),
    afterRelinkingSize: z.number().optional(),
    href: z.string().optional(),
    id: z.string().optional(),
    initialPoolSize: z.number().optional(),
    type: z.string().optional(),
  });
});

/**
 * 
 * @typedef  {RecommendationSeedObject} recommendationSeedObject   
 * @property {number} - The number of tracks available after min\_\` and max\_\` filters have been applied.

 * @property {number} - The number of tracks available after relinking for regional availability.

 * @property {string} - A link to the full track or artist data for this seed. For tracks this will be a link to a Track Object. For artists a link to an Artist Object. For genre seeds, this value will be `null`.

 * @property {string} - The id used to select this seed. This will be the same as the string used in the `seed_artists`, `seed_tracks` or `seed_genres` parameter.

 * @property {number} - The number of recommended tracks available for this seed.

 * @property {string} - The entity type of this seed. One of `artist`, `track` or `genre`.

 */
export type RecommendationSeedObject = z.infer<typeof recommendationSeedObject>;

/**
 * Zod schema for mapping API responses to the RecommendationSeedObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const recommendationSeedObjectResponse = z.lazy(() => {
  return z
    .object({
      afterFilteringSize: z.number().optional(),
      afterRelinkingSize: z.number().optional(),
      href: z.string().optional(),
      id: z.string().optional(),
      initialPoolSize: z.number().optional(),
      type: z.string().optional(),
    })
    .transform((data) => ({
      afterFilteringSize: data['afterFilteringSize'],
      afterRelinkingSize: data['afterRelinkingSize'],
      href: data['href'],
      id: data['id'],
      initialPoolSize: data['initialPoolSize'],
      type: data['type'],
    }));
});

/**
 * Zod schema for mapping the RecommendationSeedObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const recommendationSeedObjectRequest = z.lazy(() => {
  return z
    .object({
      afterFilteringSize: z.number().optional(),
      afterRelinkingSize: z.number().optional(),
      href: z.string().optional(),
      id: z.string().optional(),
      initialPoolSize: z.number().optional(),
      type: z.string().optional(),
    })
    .transform((data) => ({
      afterFilteringSize: data['afterFilteringSize'],
      afterRelinkingSize: data['afterRelinkingSize'],
      href: data['href'],
      id: data['id'],
      initialPoolSize: data['initialPoolSize'],
      type: data['type'],
    }));
});
