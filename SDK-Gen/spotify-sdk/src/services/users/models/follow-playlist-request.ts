import { z } from 'zod';

/**
 * Zod schema for the FollowPlaylistRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const followPlaylistRequest = z.lazy(() => {
  return z.object({
    public: z.boolean().optional(),
    additionalProperties: z.record(z.unknown()).optional(),
  });
});

/**
 * 
 * @typedef  {FollowPlaylistRequest} followPlaylistRequest   
 * @property {boolean} - Defaults to `true`. If `true` the playlist will be included in user's public playlists (added to profile), if `false` it will remain private. For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)

 */
export type FollowPlaylistRequest = z.infer<typeof followPlaylistRequest>;

/**
 * Zod schema for mapping API responses to the FollowPlaylistRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const followPlaylistRequestResponse = z.lazy(() => {
  return z
    .object({
      public: z.boolean().optional(),
    })
    .passthrough()
    .transform((data) => {
      const additionalProperties: { [key: string]: unknown } = {};
      const declaredKeys = new Set<string>(['public']);
      for (const key of globalThis.Object.keys(data)) {
        if (!declaredKeys.has(key)) {
          additionalProperties[key] = (data as { [key: string]: unknown })[key];
        }
      }
      return {
        public: data['public'],
        additionalProperties,
      };
    });
});

/**
 * Zod schema for mapping the FollowPlaylistRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const followPlaylistRequestRequest = z.lazy(() => {
  return z
    .object({
      public: z.boolean().optional(),
      additionalProperties: z.record(z.unknown()).optional(),
    })
    .transform((data) => ({
      ...(data['additionalProperties'] ?? {}),
      public: data['public'],
    }));
});
