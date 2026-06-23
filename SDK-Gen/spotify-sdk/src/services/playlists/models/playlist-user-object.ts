import { z } from 'zod';
import {
  ExternalUrlObject,
  externalUrlObject,
  externalUrlObjectRequest,
  externalUrlObjectResponse,
} from '../../common/external-url-object';
import { PlaylistUserObjectType, playlistUserObjectType } from './playlist-user-object-type';

/**
 * Zod schema for the PlaylistUserObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const playlistUserObject = z.lazy(() => {
  return z.object({
    externalUrls: externalUrlObject.optional(),
    href: z.string().optional(),
    id: z.string().optional(),
    type: playlistUserObjectType.optional(),
    uri: z.string().optional(),
  });
});

/**
 * 
 * @typedef  {PlaylistUserObject} playlistUserObject   
 * @property {ExternalUrlObject} 
 * @property {string} - A link to the Web API endpoint for this user.

 * @property {string} - The [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids) for this user.

 * @property {PlaylistUserObjectType} - The object type.

 * @property {string} - The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for this user.

 */
export type PlaylistUserObject = z.infer<typeof playlistUserObject>;

/**
 * Zod schema for mapping API responses to the PlaylistUserObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const playlistUserObjectResponse = z.lazy(() => {
  return z
    .object({
      external_urls: externalUrlObjectResponse.optional(),
      href: z.string().optional(),
      id: z.string().optional(),
      type: playlistUserObjectType.optional(),
      uri: z.string().optional(),
    })
    .transform((data) => ({
      externalUrls: data['external_urls'],
      href: data['href'],
      id: data['id'],
      type: data['type'],
      uri: data['uri'],
    }));
});

/**
 * Zod schema for mapping the PlaylistUserObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const playlistUserObjectRequest = z.lazy(() => {
  return z
    .object({
      externalUrls: externalUrlObjectRequest.optional(),
      href: z.string().optional(),
      id: z.string().optional(),
      type: playlistUserObjectType.optional(),
      uri: z.string().optional(),
    })
    .transform((data) => ({
      external_urls: data['externalUrls'],
      href: data['href'],
      id: data['id'],
      type: data['type'],
      uri: data['uri'],
    }));
});
