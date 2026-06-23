import { z } from 'zod';
import { Items, items, itemsRequest, itemsResponse } from './items';

/**
 * Zod schema for the RemoveItemsPlaylistRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const removeItemsPlaylistRequest = z.lazy(() => {
  return z.object({
    items: z.array(items),
    snapshotId: z.string().optional(),
  });
});

/**
 * 
 * @typedef  {RemoveItemsPlaylistRequest} removeItemsPlaylistRequest   
 * @property {Items[]} - An array of objects containing [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) of the tracks or episodes to remove.
For example: `{ "items": [{ "uri": "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" },{ "uri": "spotify:track:1301WleyT98MSxVHPZCA6M" }] }`. A maximum of 100 objects can be sent at once.

 * @property {string} - The playlist's snapshot ID against which you want to make the changes.
The API will validate that the specified items exist and in the specified positions and make the changes,
even if more recent changes have been made to the playlist.

 */
export type RemoveItemsPlaylistRequest = z.infer<typeof removeItemsPlaylistRequest>;

/**
 * Zod schema for mapping API responses to the RemoveItemsPlaylistRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const removeItemsPlaylistRequestResponse = z.lazy(() => {
  return z
    .object({
      items: z.array(itemsResponse),
      snapshot_id: z.string().optional(),
    })
    .transform((data) => ({
      items: data['items'],
      snapshotId: data['snapshot_id'],
    }));
});

/**
 * Zod schema for mapping the RemoveItemsPlaylistRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const removeItemsPlaylistRequestRequest = z.lazy(() => {
  return z
    .object({
      items: z.array(itemsRequest),
      snapshotId: z.string().optional(),
    })
    .transform((data) => ({
      items: data['items'],
      snapshot_id: data['snapshotId'],
    }));
});
