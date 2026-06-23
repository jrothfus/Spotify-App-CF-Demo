import { z } from 'zod';

/**
 * Zod schema for the StartAUsersPlaybackRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const startAUsersPlaybackRequest = z.lazy(() => {
  return z.object({
    contextUri: z.string().optional(),
    uris: z.array(z.string()).optional(),
    offset: z.any().optional(),
    positionMs: z.number().optional(),
    additionalProperties: z.record(z.unknown()).optional(),
  });
});

/**
 * 
 * @typedef  {StartAUsersPlaybackRequest} startAUsersPlaybackRequest   
 * @property {string} - Optional. Spotify URI of the context to play.
Valid contexts are albums, artists & playlists.
`{context_uri:"spotify:album:1Je1IMUlBXcx1Fz0WE7oPT"}`

 * @property {string[]} - Optional. A JSON array of the Spotify track URIs to play.
For example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"]}`

 * @property {any} - Optional. Indicates from where in the context playback should start. Only available when context_uri corresponds to an album or playlist object
"position" is zero based and can’t be negative. Example: `"offset": {"position": 5}`
"uri" is a string representing the uri of the item to start at. Example: `"offset": {"uri": "spotify:track:1301WleyT98MSxVHPZCA6M"}`

 * @property {number} - integer
 */
export type StartAUsersPlaybackRequest = z.infer<typeof startAUsersPlaybackRequest>;

/**
 * Zod schema for mapping API responses to the StartAUsersPlaybackRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const startAUsersPlaybackRequestResponse = z.lazy(() => {
  return z
    .object({
      context_uri: z.string().optional(),
      uris: z.array(z.string()).optional(),
      offset: z.any().optional(),
      position_ms: z.number().optional(),
    })
    .passthrough()
    .transform((data) => {
      const additionalProperties: { [key: string]: unknown } = {};
      const declaredKeys = new Set<string>(['context_uri', 'uris', 'offset', 'position_ms']);
      for (const key of globalThis.Object.keys(data)) {
        if (!declaredKeys.has(key)) {
          additionalProperties[key] = (data as { [key: string]: unknown })[key];
        }
      }
      return {
        contextUri: data['context_uri'],
        uris: data['uris'],
        offset: data['offset'],
        positionMs: data['position_ms'],
        additionalProperties,
      };
    });
});

/**
 * Zod schema for mapping the StartAUsersPlaybackRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const startAUsersPlaybackRequestRequest = z.lazy(() => {
  return z
    .object({
      contextUri: z.string().optional(),
      uris: z.array(z.string()).optional(),
      offset: z.any().optional(),
      positionMs: z.number().optional(),
      additionalProperties: z.record(z.unknown()).optional(),
    })
    .transform((data) => ({
      ...(data['additionalProperties'] ?? {}),
      context_uri: data['contextUri'],
      uris: data['uris'],
      offset: data['offset'],
      position_ms: data['positionMs'],
    }));
});
