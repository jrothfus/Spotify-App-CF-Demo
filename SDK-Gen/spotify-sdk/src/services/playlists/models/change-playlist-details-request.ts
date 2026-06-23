import { z } from 'zod';

/**
 * Zod schema for the ChangePlaylistDetailsRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const changePlaylistDetailsRequest = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    public: z.boolean().optional(),
    collaborative: z.boolean().optional(),
    description: z.string().optional(),
    additionalProperties: z.record(z.unknown()).optional(),
  });
});

/**
 * 
 * @typedef  {ChangePlaylistDetailsRequest} changePlaylistDetailsRequest   
 * @property {string} - The new name for the playlist, for example `"My New Playlist Title"`

 * @property {boolean} - The playlist's public/private status (if it should be added to the user's profile or not): `true` the playlist will be public, `false` the playlist will be private, `null` the playlist status is not relevant. For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)

 * @property {boolean} - If `true`, the playlist will become collaborative and other users will be able to modify the playlist in their Spotify client. <br/>
_``Note``: You can only set `collaborative` to `true` on non-public playlists._

 * @property {string} - Value for playlist description as displayed in Spotify Clients and in the Web API.

 */
export type ChangePlaylistDetailsRequest = z.infer<typeof changePlaylistDetailsRequest>;

/**
 * Zod schema for mapping API responses to the ChangePlaylistDetailsRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const changePlaylistDetailsRequestResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      public: z.boolean().optional(),
      collaborative: z.boolean().optional(),
      description: z.string().optional(),
    })
    .passthrough()
    .transform((data) => {
      const additionalProperties: { [key: string]: unknown } = {};
      const declaredKeys = new Set<string>(['name', 'public', 'collaborative', 'description']);
      for (const key of globalThis.Object.keys(data)) {
        if (!declaredKeys.has(key)) {
          additionalProperties[key] = (data as { [key: string]: unknown })[key];
        }
      }
      return {
        name: data['name'],
        public: data['public'],
        collaborative: data['collaborative'],
        description: data['description'],
        additionalProperties,
      };
    });
});

/**
 * Zod schema for mapping the ChangePlaylistDetailsRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const changePlaylistDetailsRequestRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      public: z.boolean().optional(),
      collaborative: z.boolean().optional(),
      description: z.string().optional(),
      additionalProperties: z.record(z.unknown()).optional(),
    })
    .transform((data) => ({
      ...(data['additionalProperties'] ?? {}),
      name: data['name'],
      public: data['public'],
      collaborative: data['collaborative'],
      description: data['description'],
    }));
});
