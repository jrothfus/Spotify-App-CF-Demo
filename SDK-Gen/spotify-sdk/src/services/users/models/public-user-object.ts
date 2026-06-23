import { z } from 'zod';
import {
  ExternalUrlObject,
  externalUrlObject,
  externalUrlObjectRequest,
  externalUrlObjectResponse,
} from '../../common/external-url-object';
import {
  FollowersObject,
  followersObject,
  followersObjectRequest,
  followersObjectResponse,
} from '../../common/followers-object';
import {
  ImageObject,
  imageObject,
  imageObjectRequest,
  imageObjectResponse,
} from '../../common/image-object';
import { PublicUserObjectType, publicUserObjectType } from './public-user-object-type';

/**
 * Zod schema for the PublicUserObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const publicUserObject = z.lazy(() => {
  return z.object({
    displayName: z.string().optional().nullable(),
    externalUrls: externalUrlObject.optional(),
    followers: followersObject.optional(),
    href: z.string().optional(),
    id: z.string().optional(),
    images: z.array(imageObject).optional(),
    type: publicUserObjectType.optional(),
    uri: z.string().optional(),
  });
});

/**
 * 
 * @typedef  {PublicUserObject} publicUserObject   
 * @property {string} - The name displayed on the user's profile. `null` if not available.

 * @property {ExternalUrlObject} 
 * @property {FollowersObject} 
 * @property {string} - A link to the Web API endpoint for this user.

 * @property {string} - The [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids) for this user.

 * @property {ImageObject[]} - The user's profile image.

 * @property {PublicUserObjectType} - The object type.

 * @property {string} - The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for this user.

 */
export type PublicUserObject = z.infer<typeof publicUserObject>;

/**
 * Zod schema for mapping API responses to the PublicUserObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const publicUserObjectResponse = z.lazy(() => {
  return z
    .object({
      display_name: z.string().optional().nullable(),
      external_urls: externalUrlObjectResponse.optional(),
      followers: followersObjectResponse.optional(),
      href: z.string().optional(),
      id: z.string().optional(),
      images: z.array(imageObjectResponse).optional(),
      type: publicUserObjectType.optional(),
      uri: z.string().optional(),
    })
    .transform((data) => ({
      displayName: data['display_name'],
      externalUrls: data['external_urls'],
      followers: data['followers'],
      href: data['href'],
      id: data['id'],
      images: data['images'],
      type: data['type'],
      uri: data['uri'],
    }));
});

/**
 * Zod schema for mapping the PublicUserObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const publicUserObjectRequest = z.lazy(() => {
  return z
    .object({
      displayName: z.string().optional().nullable(),
      externalUrls: externalUrlObjectRequest.optional(),
      followers: followersObjectRequest.optional(),
      href: z.string().optional(),
      id: z.string().optional(),
      images: z.array(imageObjectRequest).optional(),
      type: publicUserObjectType.optional(),
      uri: z.string().optional(),
    })
    .transform((data) => ({
      display_name: data['displayName'],
      external_urls: data['externalUrls'],
      followers: data['followers'],
      href: data['href'],
      id: data['id'],
      images: data['images'],
      type: data['type'],
      uri: data['uri'],
    }));
});
