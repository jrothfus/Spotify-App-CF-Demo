import { z } from 'zod';

/**
 * Zod schema for the PlaylistTracksRefObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const playlistTracksRefObject = z.lazy(() => {
  return z.object({
    href: z.string().optional(),
    total: z.number().optional(),
  });
});

/**
 * 
 * @typedef  {PlaylistTracksRefObject} playlistTracksRefObject   
 * @property {string} - A link to the Web API endpoint where full details of the playlist's tracks can be retrieved.

 * @property {number} - Number of tracks in the playlist.

 */
export type PlaylistTracksRefObject = z.infer<typeof playlistTracksRefObject>;

/**
 * Zod schema for mapping API responses to the PlaylistTracksRefObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const playlistTracksRefObjectResponse = z.lazy(() => {
  return z
    .object({
      href: z.string().optional(),
      total: z.number().optional(),
    })
    .transform((data) => ({
      href: data['href'],
      total: data['total'],
    }));
});

/**
 * Zod schema for mapping the PlaylistTracksRefObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const playlistTracksRefObjectRequest = z.lazy(() => {
  return z
    .object({
      href: z.string().optional(),
      total: z.number().optional(),
    })
    .transform((data) => ({
      href: data['href'],
      total: data['total'],
    }));
});
