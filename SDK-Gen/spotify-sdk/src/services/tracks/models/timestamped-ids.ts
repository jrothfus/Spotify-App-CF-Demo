import { z } from 'zod';

/**
 * Zod schema for the TimestampedIds model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const timestampedIds = z.lazy(() => {
  return z.object({
    id: z.string(),
    addedAt: z.string(),
  });
});

/**
 * 
 * @typedef  {TimestampedIds} timestampedIds   
 * @property {string} - The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track.

 * @property {string} - The timestamp when the track was added to the library. Use ISO 8601 format with UTC timezone (e.g., `2023-01-15T14:30:00Z`). You can specify past timestamps to insert tracks at specific positions in the library's chronological order. The API uses minute-level granularity for ordering, though the timestamp supports millisecond precision.

 */
export type TimestampedIds = z.infer<typeof timestampedIds>;

/**
 * Zod schema for mapping API responses to the TimestampedIds application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const timestampedIdsResponse = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      added_at: z.string(),
    })
    .transform((data) => ({
      id: data['id'],
      addedAt: data['added_at'],
    }));
});

/**
 * Zod schema for mapping the TimestampedIds application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const timestampedIdsRequest = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      addedAt: z.string(),
    })
    .transform((data) => ({
      id: data['id'],
      added_at: data['addedAt'],
    }));
});
