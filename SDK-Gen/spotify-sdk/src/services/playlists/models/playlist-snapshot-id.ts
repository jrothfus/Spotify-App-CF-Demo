import { z } from 'zod';

/**
 * Zod schema for the PlaylistSnapshotId model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const playlistSnapshotId = z.lazy(() => {
  return z.object({
    snapshotId: z.string().optional(),
  });
});

/**
 *
 * @typedef  {PlaylistSnapshotId} playlistSnapshotId
 * @property {string}
 */
export type PlaylistSnapshotId = z.infer<typeof playlistSnapshotId>;

/**
 * Zod schema for mapping API responses to the PlaylistSnapshotId application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const playlistSnapshotIdResponse = z.lazy(() => {
  return z
    .object({
      snapshot_id: z.string().optional(),
    })
    .transform((data) => ({
      snapshotId: data['snapshot_id'],
    }));
});

/**
 * Zod schema for mapping the PlaylistSnapshotId application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const playlistSnapshotIdRequest = z.lazy(() => {
  return z
    .object({
      snapshotId: z.string().optional(),
    })
    .transform((data) => ({
      snapshot_id: data['snapshotId'],
    }));
});
