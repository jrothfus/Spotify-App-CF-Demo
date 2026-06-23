import { z } from 'zod';

/**
 * Zod schema for the CreatePlaylistForUserRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createPlaylistForUserRequest = z.lazy(() => {
  return z.object({
    name: z.string(),
    public: z.boolean().optional(),
    collaborative: z.boolean().optional(),
    description: z.string().optional(),
    additionalProperties: z.record(z.unknown()).optional(),
  });
});

/**
 * 
 * @typedef  {CreatePlaylistForUserRequest} createPlaylistForUserRequest   
 * @property {string} - The name for the new playlist, for example `"Your Coolest Playlist"`. This name does not need to be unique; a user may have several playlists with the same name.

 * @property {boolean} - Defaults to `true`. The playlist's public/private status (if it should be added to the user's profile or not): `true` the playlist will be public, `false` the playlist will be private. To be able to create private playlists, the user must have granted the `playlist-modify-private` [scope](/documentation/web-api/concepts/scopes/#list-of-scopes). For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)

 * @property {boolean} - Defaults to `false`. If `true` the playlist will be collaborative. _``Note``: to create a collaborative playlist you must also set `public` to `false`. To create collaborative playlists you must have granted `playlist-modify-private` and `playlist-modify-public` [scopes](/documentation/web-api/concepts/scopes/#list-of-scopes)._

 * @property {string} - value for playlist description as displayed in Spotify Clients and in the Web API.

 */
export type CreatePlaylistForUserRequest = z.infer<typeof createPlaylistForUserRequest>;

/**
 * Zod schema for mapping API responses to the CreatePlaylistForUserRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createPlaylistForUserRequestResponse = z.lazy(() => {
  return z
    .object({
      name: z.string(),
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
 * Zod schema for mapping the CreatePlaylistForUserRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createPlaylistForUserRequestRequest = z.lazy(() => {
  return z
    .object({
      name: z.string(),
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
