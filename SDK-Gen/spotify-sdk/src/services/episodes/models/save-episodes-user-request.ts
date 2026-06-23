import { z } from 'zod';

/**
 * Zod schema for the SaveEpisodesUserRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const saveEpisodesUserRequest = z.lazy(() => {
  return z.object({
    ids: z.array(z.string()).optional(),
    additionalProperties: z.record(z.unknown()).optional(),
  });
});

/**
 * 
 * @typedef  {SaveEpisodesUserRequest} saveEpisodesUserRequest   
 * @property {string[]} - A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). <br/>A maximum of 50 items can be specified in one request. _``Note``: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._

 */
export type SaveEpisodesUserRequest = z.infer<typeof saveEpisodesUserRequest>;

/**
 * Zod schema for mapping API responses to the SaveEpisodesUserRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const saveEpisodesUserRequestResponse = z.lazy(() => {
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
 * Zod schema for mapping the SaveEpisodesUserRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const saveEpisodesUserRequestRequest = z.lazy(() => {
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
