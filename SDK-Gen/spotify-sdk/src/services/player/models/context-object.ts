import { z } from 'zod';
import {
  ExternalUrlObject,
  externalUrlObject,
  externalUrlObjectRequest,
  externalUrlObjectResponse,
} from '../../common/external-url-object';

/**
 * Zod schema for the ContextObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const contextObject = z.lazy(() => {
  return z.object({
    type: z.string().optional(),
    href: z.string().optional(),
    externalUrls: externalUrlObject.optional(),
    uri: z.string().optional(),
  });
});

/**
 * 
 * @typedef  {ContextObject} contextObject   
 * @property {string} - The object type, e.g. "artist", "playlist", "album", "show".

 * @property {string} - A link to the Web API endpoint providing full details of the track.
 * @property {ExternalUrlObject} 
 * @property {string} - The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the context.

 */
export type ContextObject = z.infer<typeof contextObject>;

/**
 * Zod schema for mapping API responses to the ContextObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const contextObjectResponse = z.lazy(() => {
  return z
    .object({
      type: z.string().optional(),
      href: z.string().optional(),
      external_urls: externalUrlObjectResponse.optional(),
      uri: z.string().optional(),
    })
    .transform((data) => ({
      type: data['type'],
      href: data['href'],
      externalUrls: data['external_urls'],
      uri: data['uri'],
    }));
});

/**
 * Zod schema for mapping the ContextObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const contextObjectRequest = z.lazy(() => {
  return z
    .object({
      type: z.string().optional(),
      href: z.string().optional(),
      externalUrls: externalUrlObjectRequest.optional(),
      uri: z.string().optional(),
    })
    .transform((data) => ({
      type: data['type'],
      href: data['href'],
      external_urls: data['externalUrls'],
      uri: data['uri'],
    }));
});
