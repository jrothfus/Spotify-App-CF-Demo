import { z } from 'zod';
import {
  ExternalUrlObject,
  externalUrlObject,
  externalUrlObjectRequest,
  externalUrlObjectResponse,
} from '../../common/external-url-object';

/**
 * Zod schema for the LinkedTrackObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const linkedTrackObject = z.lazy(() => {
  return z.object({
    externalUrls: externalUrlObject.optional(),
    href: z.string().optional(),
    id: z.string().optional(),
    type: z.string().optional(),
    uri: z.string().optional(),
  });
});

/**
 * 
 * @typedef  {LinkedTrackObject} linkedTrackObject   
 * @property {ExternalUrlObject} 
 * @property {string} - A link to the Web API endpoint providing full details of the track.

 * @property {string} - The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track.

 * @property {string} - The object type: "track".

 * @property {string} - The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the track.

 */
export type LinkedTrackObject = z.infer<typeof linkedTrackObject>;

/**
 * Zod schema for mapping API responses to the LinkedTrackObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const linkedTrackObjectResponse = z.lazy(() => {
  return z
    .object({
      external_urls: externalUrlObjectResponse.optional(),
      href: z.string().optional(),
      id: z.string().optional(),
      type: z.string().optional(),
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
 * Zod schema for mapping the LinkedTrackObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const linkedTrackObjectRequest = z.lazy(() => {
  return z
    .object({
      externalUrls: externalUrlObjectRequest.optional(),
      href: z.string().optional(),
      id: z.string().optional(),
      type: z.string().optional(),
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
