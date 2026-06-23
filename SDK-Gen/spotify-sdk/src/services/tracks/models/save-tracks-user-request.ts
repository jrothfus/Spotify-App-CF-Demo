import { z } from 'zod';
import {
  TimestampedIds,
  timestampedIds,
  timestampedIdsRequest,
  timestampedIdsResponse,
} from './timestamped-ids';

/**
 * Zod schema for the SaveTracksUserRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const saveTracksUserRequest = z.lazy(() => {
  return z.object({
    ids: z.array(z.string()).optional(),
    timestampedIds: z.array(timestampedIds).optional(),
    additionalProperties: z.record(z.unknown()).optional(),
  });
});

/**
 * 
 * @typedef  {SaveTracksUserRequest} saveTracksUserRequest   
 * @property {string[]} - A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _``Note``: if the `timestamped_ids` is present in the body, any IDs listed in the query parameters (deprecated) or the `ids` field in the body will be ignored._

 * @property {TimestampedIds[]} - A JSON array of objects containing track IDs with their corresponding timestamps. Each object must include a track ID and an `added_at` timestamp. This allows you to specify when tracks were added to maintain a specific chronological order in the user's library.<br/>A maximum of 50 items can be specified in one request. _``Note``: if the `timestamped_ids` is present in the body, any IDs listed in the query parameters (deprecated) or the `ids` field in the body will be ignored._

 */
export type SaveTracksUserRequest = z.infer<typeof saveTracksUserRequest>;

/**
 * Zod schema for mapping API responses to the SaveTracksUserRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const saveTracksUserRequestResponse = z.lazy(() => {
  return z
    .object({
      ids: z.array(z.string()).optional(),
      timestamped_ids: z.array(timestampedIdsResponse).optional(),
    })
    .passthrough()
    .transform((data) => {
      const additionalProperties: { [key: string]: unknown } = {};
      const declaredKeys = new Set<string>(['ids', 'timestamped_ids']);
      for (const key of globalThis.Object.keys(data)) {
        if (!declaredKeys.has(key)) {
          additionalProperties[key] = (data as { [key: string]: unknown })[key];
        }
      }
      return {
        ids: data['ids'],
        timestampedIds: data['timestamped_ids'],
        additionalProperties,
      };
    });
});

/**
 * Zod schema for mapping the SaveTracksUserRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const saveTracksUserRequestRequest = z.lazy(() => {
  return z
    .object({
      ids: z.array(z.string()).optional(),
      timestampedIds: z.array(timestampedIdsRequest).optional(),
      additionalProperties: z.record(z.unknown()).optional(),
    })
    .transform((data) => ({
      ...(data['additionalProperties'] ?? {}),
      ids: data['ids'],
      timestamped_ids: data['timestampedIds'],
    }));
});
