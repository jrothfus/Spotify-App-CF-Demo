import { z } from 'zod';
import {
  ExternalUrlObject,
  externalUrlObject,
  externalUrlObjectRequest,
  externalUrlObjectResponse,
} from './external-url-object';
import {
  FollowersObject,
  followersObject,
  followersObjectRequest,
  followersObjectResponse,
} from './followers-object';
import { ImageObject, imageObject, imageObjectRequest, imageObjectResponse } from './image-object';
import { ArtistObjectType, artistObjectType } from '../artists/models/artist-object-type';

/**
 * Zod schema for the ArtistObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const artistObject = z.lazy(() => {
  return z.object({
    externalUrls: externalUrlObject.optional(),
    followers: followersObject.optional(),
    genres: z.array(z.string()).optional(),
    href: z.string().optional(),
    id: z.string().optional(),
    images: z.array(imageObject).optional(),
    name: z.string().optional(),
    popularity: z.number().optional(),
    type: artistObjectType.optional(),
    uri: z.string().optional(),
  });
});

/**
 * 
 * @typedef  {ArtistObject} artistObject   
 * @property {ExternalUrlObject} 
 * @property {FollowersObject} 
 * @property {string[]} - A list of the genres the artist is associated with. If not yet classified, the array is empty.

 * @property {string} - A link to the Web API endpoint providing full details of the artist.

 * @property {string} - The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the artist.

 * @property {ImageObject[]} - Images of the artist in various sizes, widest first.

 * @property {string} - The name of the artist.

 * @property {number} - The popularity of the artist. The value will be between 0 and 100, with 100 being the most popular. The artist's popularity is calculated from the popularity of all the artist's tracks.

 * @property {ArtistObjectType} - The object type.

 * @property {string} - The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the artist.

 */
export type ArtistObject = z.infer<typeof artistObject>;

/**
 * Zod schema for mapping API responses to the ArtistObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const artistObjectResponse = z.lazy(() => {
  return z
    .object({
      external_urls: externalUrlObjectResponse.optional(),
      followers: followersObjectResponse.optional(),
      genres: z.array(z.string()).optional(),
      href: z.string().optional(),
      id: z.string().optional(),
      images: z.array(imageObjectResponse).optional(),
      name: z.string().optional(),
      popularity: z.number().optional(),
      type: artistObjectType.optional(),
      uri: z.string().optional(),
    })
    .transform((data) => ({
      externalUrls: data['external_urls'],
      followers: data['followers'],
      genres: data['genres'],
      href: data['href'],
      id: data['id'],
      images: data['images'],
      name: data['name'],
      popularity: data['popularity'],
      type: data['type'],
      uri: data['uri'],
    }));
});

/**
 * Zod schema for mapping the ArtistObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const artistObjectRequest = z.lazy(() => {
  return z
    .object({
      externalUrls: externalUrlObjectRequest.optional(),
      followers: followersObjectRequest.optional(),
      genres: z.array(z.string()).optional(),
      href: z.string().optional(),
      id: z.string().optional(),
      images: z.array(imageObjectRequest).optional(),
      name: z.string().optional(),
      popularity: z.number().optional(),
      type: artistObjectType.optional(),
      uri: z.string().optional(),
    })
    .transform((data) => ({
      external_urls: data['externalUrls'],
      followers: data['followers'],
      genres: data['genres'],
      href: data['href'],
      id: data['id'],
      images: data['images'],
      name: data['name'],
      popularity: data['popularity'],
      type: data['type'],
      uri: data['uri'],
    }));
});
