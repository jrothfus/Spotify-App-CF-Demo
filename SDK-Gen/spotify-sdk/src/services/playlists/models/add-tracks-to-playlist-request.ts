import { z } from 'zod';

/**
 * Zod schema for the AddTracksToPlaylistRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const addTracksToPlaylistRequest = z.lazy(() => {
  return z.object({
    uris: z.array(z.string()).optional(),
    position: z.number().optional(),
    additionalProperties: z.record(z.unknown()).optional(),
  });
});

/**
 * 
 * @typedef  {AddTracksToPlaylistRequest} addTracksToPlaylistRequest   
 * @property {string[]} - A JSON array of the [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) to add. For example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M", "spotify:episode:512ojhOuo1ktJprKbVcKyQ"]}`<br/>A maximum of 100 items can be added in one request. _``Note``: if the `uris` parameter is present in the query string, any URIs listed here in the body will be ignored._

 * @property {number} - The position to insert the items, a zero-based index. For example, to insert the items in the first position: `position=0` ; to insert the items in the third position: `position=2`. If omitted, the items will be appended to the playlist. Items are added in the order they appear in the uris array. For example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M"], "position": 3}`

 */
export type AddTracksToPlaylistRequest = z.infer<typeof addTracksToPlaylistRequest>;

/**
 * Zod schema for mapping API responses to the AddTracksToPlaylistRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addTracksToPlaylistRequestResponse = z.lazy(() => {
  return z
    .object({
      uris: z.array(z.string()).optional(),
      position: z.number().optional(),
    })
    .passthrough()
    .transform((data) => {
      const additionalProperties: { [key: string]: unknown } = {};
      const declaredKeys = new Set<string>(['uris', 'position']);
      for (const key of globalThis.Object.keys(data)) {
        if (!declaredKeys.has(key)) {
          additionalProperties[key] = (data as { [key: string]: unknown })[key];
        }
      }
      return {
        uris: data['uris'],
        position: data['position'],
        additionalProperties,
      };
    });
});

/**
 * Zod schema for mapping the AddTracksToPlaylistRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addTracksToPlaylistRequestRequest = z.lazy(() => {
  return z
    .object({
      uris: z.array(z.string()).optional(),
      position: z.number().optional(),
      additionalProperties: z.record(z.unknown()).optional(),
    })
    .transform((data) => ({
      ...(data['additionalProperties'] ?? {}),
      uris: data['uris'],
      position: data['position'],
    }));
});
