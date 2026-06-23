import { z } from 'zod';
import {
  ExternalUrlObject,
  externalUrlObject,
  externalUrlObjectRequest,
  externalUrlObjectResponse,
} from './external-url-object';
import {
  SimplifiedArtistObjectType,
  simplifiedArtistObjectType,
} from '../albums/models/simplified-artist-object-type';

/**
 * Zod schema for the SimplifiedArtistObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const simplifiedArtistObject = z.lazy(() => {
  return z.object({
    externalUrls: externalUrlObject.optional(),
    href: z.string().optional(),
    id: z.string().optional(),
    name: z.string().optional(),
    type: simplifiedArtistObjectType.optional(),
    uri: z.string().optional(),
  });
});

/**
 * 
 * @typedef  {SimplifiedArtistObject} simplifiedArtistObject   
 * @property {ExternalUrlObject} 
 * @property {string} - A link to the Web API endpoint providing full details of the artist.

 * @property {string} - The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the artist.

 * @property {string} - The name of the artist.

 * @property {SimplifiedArtistObjectType} - The object type.

 * @property {string} - The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the artist.

 */
export type SimplifiedArtistObject = z.infer<typeof simplifiedArtistObject>;

/**
 * Zod schema for mapping API responses to the SimplifiedArtistObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const simplifiedArtistObjectResponse = z.lazy(() => {
  return z
    .object({
      external_urls: externalUrlObjectResponse.optional(),
      href: z.string().optional(),
      id: z.string().optional(),
      name: z.string().optional(),
      type: simplifiedArtistObjectType.optional(),
      uri: z.string().optional(),
    })
    .transform((data) => ({
      externalUrls: data['external_urls'],
      href: data['href'],
      id: data['id'],
      name: data['name'],
      type: data['type'],
      uri: data['uri'],
    }));
});

/**
 * Zod schema for mapping the SimplifiedArtistObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const simplifiedArtistObjectRequest = z.lazy(() => {
  return z
    .object({
      externalUrls: externalUrlObjectRequest.optional(),
      href: z.string().optional(),
      id: z.string().optional(),
      name: z.string().optional(),
      type: simplifiedArtistObjectType.optional(),
      uri: z.string().optional(),
    })
    .transform((data) => ({
      external_urls: data['externalUrls'],
      href: data['href'],
      id: data['id'],
      name: data['name'],
      type: data['type'],
      uri: data['uri'],
    }));
});
