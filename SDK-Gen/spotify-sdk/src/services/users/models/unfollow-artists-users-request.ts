import { z } from 'zod';

/**
 * Zod schema for the UnfollowArtistsUsersRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const unfollowArtistsUsersRequest = z.lazy(() => {
  return z.object({
    ids: z.array(z.string()).optional(),
    additionalProperties: z.record(z.unknown()).optional(),
  });
});

/**
 * 
 * @typedef  {UnfollowArtistsUsersRequest} unfollowArtistsUsersRequest   
 * @property {string[]} - A JSON array of the artist or user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `{ids:["74ASZWbe4lXaubB36ztrGX", "08td7MxkoHQkXnWAYD8d6Q"]}`. A maximum of 50 IDs can be sent in one request. _``Note``: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._

 */
export type UnfollowArtistsUsersRequest = z.infer<typeof unfollowArtistsUsersRequest>;

/**
 * Zod schema for mapping API responses to the UnfollowArtistsUsersRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const unfollowArtistsUsersRequestResponse = z.lazy(() => {
  return z
    .object({
      ids: z.array(z.string()).optional(),
    })
    .passthrough()
    .transform((data) => {
      const additionalProperties: { [key: string]: unknown } = {};
      const declaredKeys = new Set<string>(['ids']);
      for (const key of globalThis.Object.keys(data)) {
        if (!declaredKeys.has(key)) {
          additionalProperties[key] = (data as { [key: string]: unknown })[key];
        }
      }
      return {
        ids: data['ids'],
        additionalProperties,
      };
    });
});

/**
 * Zod schema for mapping the UnfollowArtistsUsersRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const unfollowArtistsUsersRequestRequest = z.lazy(() => {
  return z
    .object({
      ids: z.array(z.string()).optional(),
      additionalProperties: z.record(z.unknown()).optional(),
    })
    .transform((data) => ({
      ...(data['additionalProperties'] ?? {}),
      ids: data['ids'],
    }));
});
