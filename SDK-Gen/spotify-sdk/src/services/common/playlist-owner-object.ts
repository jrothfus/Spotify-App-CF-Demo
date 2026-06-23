import { z } from 'zod';
import {
  ExternalUrlObject,
  externalUrlObject,
  externalUrlObjectRequest,
  externalUrlObjectResponse,
} from './external-url-object';
import {
  PlaylistOwnerObjectType,
  playlistOwnerObjectType,
} from '../search/models/playlist-owner-object-type';

/**
 * Zod schema for the PlaylistOwnerObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const playlistOwnerObject = z.lazy(() => {
  return z.object({
    externalUrls: externalUrlObject.optional(),
    href: z.string().optional(),
    id: z.string().optional(),
    type: playlistOwnerObjectType.optional(),
    uri: z.string().optional(),
    displayName: z.string().optional().nullable(),
  });
});

/**
 * 
 * @typedef  {PlaylistOwnerObject} playlistOwnerObject   
 * @property {ExternalUrlObject} 
 * @property {string} - A link to the Web API endpoint for this user.

 * @property {string} - The [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids) for this user.

 * @property {PlaylistOwnerObjectType} - The object type.

 * @property {string} - The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for this user.

 * @property {string} - The name displayed on the user's profile. `null` if not available.

 */
export type PlaylistOwnerObject = z.infer<typeof playlistOwnerObject>;

/**
 * Zod schema for mapping API responses to the PlaylistOwnerObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const playlistOwnerObjectResponse = z.lazy(() => {
  return z
    .object({
      external_urls: externalUrlObjectResponse.optional(),
      href: z.string().optional(),
      id: z.string().optional(),
      type: playlistOwnerObjectType.optional(),
      uri: z.string().optional(),
      display_name: z.string().optional().nullable(),
    })
    .transform((data) => ({
      externalUrls: data['external_urls'],
      href: data['href'],
      id: data['id'],
      type: data['type'],
      uri: data['uri'],
      displayName: data['display_name'],
    }));
});

/**
 * Zod schema for mapping the PlaylistOwnerObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const playlistOwnerObjectRequest = z.lazy(() => {
  return z
    .object({
      externalUrls: externalUrlObjectRequest.optional(),
      href: z.string().optional(),
      id: z.string().optional(),
      type: playlistOwnerObjectType.optional(),
      uri: z.string().optional(),
      displayName: z.string().optional().nullable(),
    })
    .transform((data) => ({
      external_urls: data['externalUrls'],
      href: data['href'],
      id: data['id'],
      type: data['type'],
      uri: data['uri'],
      display_name: data['displayName'],
    }));
});
