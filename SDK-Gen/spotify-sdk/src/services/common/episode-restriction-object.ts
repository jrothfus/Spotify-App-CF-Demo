import { z } from 'zod';

/**
 * Zod schema for the EpisodeRestrictionObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const episodeRestrictionObject = z.lazy(() => {
  return z.object({
    reason: z.string().optional(),
  });
});

/**
 * 
 * @typedef  {EpisodeRestrictionObject} episodeRestrictionObject   
 * @property {string} - The reason for the restriction. Supported values:
- `market` - The content item is not available in the given market.
- `product` - The content item is not available for the user's subscription type.
- `explicit` - The content item is explicit and the user's account is set to not play explicit content.

Additional reasons may be added in the future.
``Note``: If you use this field, make sure that your application safely handles unknown values.

 */
export type EpisodeRestrictionObject = z.infer<typeof episodeRestrictionObject>;

/**
 * Zod schema for mapping API responses to the EpisodeRestrictionObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const episodeRestrictionObjectResponse = z.lazy(() => {
  return z
    .object({
      reason: z.string().optional(),
    })
    .transform((data) => ({
      reason: data['reason'],
    }));
});

/**
 * Zod schema for mapping the EpisodeRestrictionObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const episodeRestrictionObjectRequest = z.lazy(() => {
  return z
    .object({
      reason: z.string().optional(),
    })
    .transform((data) => ({
      reason: data['reason'],
    }));
});
