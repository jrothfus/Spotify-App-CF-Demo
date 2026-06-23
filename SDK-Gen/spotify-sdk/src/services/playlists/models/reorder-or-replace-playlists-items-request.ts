import { z } from 'zod';

/**
 * Zod schema for the ReorderOrReplacePlaylistsItemsRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const reorderOrReplacePlaylistsItemsRequest = z.lazy(() => {
  return z.object({
    uris: z.array(z.string()).optional(),
    rangeStart: z.number().optional(),
    insertBefore: z.number().optional(),
    rangeLength: z.number().optional(),
    snapshotId: z.string().optional(),
    additionalProperties: z.record(z.unknown()).optional(),
  });
});

/**
 * 
 * @typedef  {ReorderOrReplacePlaylistsItemsRequest} reorderOrReplacePlaylistsItemsRequest   
 * @property {string[]} 
 * @property {number} - The position of the first item to be reordered.

 * @property {number} - The position where the items should be inserted.<br/>To reorder the items to the end of the playlist, simply set _insert_before_ to the position after the last item.<br/>Examples:<br/>To reorder the first item to the last position in a playlist with 10 items, set _range_start_ to 0, and _insert_before_ to 10.<br/>To reorder the last item in a playlist with 10 items to the start of the playlist, set _range_start_ to 9, and _insert_before_ to 0.

 * @property {number} - The amount of items to be reordered. Defaults to 1 if not set.<br/>The range of items to be reordered begins from the _range_start_ position, and includes the _range_length_ subsequent items.<br/>Example:<br/>To move the items at index 9-10 to the start of the playlist, _range_start_ is set to 9, and _range_length_ is set to 2.

 * @property {string} - The playlist's snapshot ID against which you want to make the changes.

 */
export type ReorderOrReplacePlaylistsItemsRequest = z.infer<
  typeof reorderOrReplacePlaylistsItemsRequest
>;

/**
 * Zod schema for mapping API responses to the ReorderOrReplacePlaylistsItemsRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const reorderOrReplacePlaylistsItemsRequestResponse = z.lazy(() => {
  return z
    .object({
      uris: z.array(z.string()).optional(),
      range_start: z.number().optional(),
      insert_before: z.number().optional(),
      range_length: z.number().optional(),
      snapshot_id: z.string().optional(),
    })
    .passthrough()
    .transform((data) => {
      const additionalProperties: { [key: string]: unknown } = {};
      const declaredKeys = new Set<string>([
        'uris',
        'range_start',
        'insert_before',
        'range_length',
        'snapshot_id',
      ]);
      for (const key of globalThis.Object.keys(data)) {
        if (!declaredKeys.has(key)) {
          additionalProperties[key] = (data as { [key: string]: unknown })[key];
        }
      }
      return {
        uris: data['uris'],
        rangeStart: data['range_start'],
        insertBefore: data['insert_before'],
        rangeLength: data['range_length'],
        snapshotId: data['snapshot_id'],
        additionalProperties,
      };
    });
});

/**
 * Zod schema for mapping the ReorderOrReplacePlaylistsItemsRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const reorderOrReplacePlaylistsItemsRequestRequest = z.lazy(() => {
  return z
    .object({
      uris: z.array(z.string()).optional(),
      rangeStart: z.number().optional(),
      insertBefore: z.number().optional(),
      rangeLength: z.number().optional(),
      snapshotId: z.string().optional(),
      additionalProperties: z.record(z.unknown()).optional(),
    })
    .transform((data) => ({
      ...(data['additionalProperties'] ?? {}),
      uris: data['uris'],
      range_start: data['rangeStart'],
      insert_before: data['insertBefore'],
      range_length: data['rangeLength'],
      snapshot_id: data['snapshotId'],
    }));
});
