import { z } from 'zod';
import {
  ExplicitContentSettingsObject,
  explicitContentSettingsObject,
  explicitContentSettingsObjectRequest,
  explicitContentSettingsObjectResponse,
} from './explicit-content-settings-object';
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

/**
 * Zod schema for the PrivateUserObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const privateUserObject = z.lazy(() => {
  return z.object({
    accountId: z.string().optional(),
    country: z.string().optional(),
    displayName: z.string().optional(),
    email: z.string().optional(),
    explicitContent: explicitContentSettingsObject.optional(),
    externalUrls: externalUrlObject.optional(),
    followers: followersObject.optional(),
    href: z.string().optional(),
    id: z.string().optional(),
    images: z.array(imageObject).optional(),
    product: z.string().optional(),
    type: z.string().optional(),
    uri: z.string().optional(),
  });
});

/**
 * 
 * @typedef  {PrivateUserObject} privateUserObject   
 * @property {string} - A public, immutable, pseudoanonymous identifier for the user's account. Use this field for account linking rather than the `id` field, as it is stable and will not change over the lifetime of the account.

 * @property {string} - The country of the user, as set in the user's account profile. An [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). _This field is only available when the current user has granted access to the [user-read-private](/documentation/web-api/concepts/scopes/#list-of-scopes) scope._

 * @property {string} - The name displayed on the user's profile. `null` if not available.

 * @property {string} - The user's email address, as entered by the user when creating their account. _``Important!`` This email address is unverified; there is no proof that it actually belongs to the user._ _This field is only available when the current user has granted access to the [user-read-email](/documentation/web-api/concepts/scopes/#list-of-scopes) scope._

 * @property {ExplicitContentSettingsObject} 
 * @property {ExternalUrlObject} 
 * @property {FollowersObject} 
 * @property {string} - A link to the Web API endpoint for this user.

 * @property {string} - The [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids) for the user. Do not use this field for account linking — use `account_id` instead, which is immutable.

 * @property {ImageObject[]} - The user's profile image.
 * @property {string} - The user's Spotify subscription level: "premium", "free", etc. (The subscription level "open" can be considered the same as "free".) _This field is only available when the current user has granted access to the [user-read-private](/documentation/web-api/concepts/scopes/#list-of-scopes) scope._

 * @property {string} - The object type: "user"

 * @property {string} - The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the user.

 */
export type PrivateUserObject = z.infer<typeof privateUserObject>;

/**
 * Zod schema for mapping API responses to the PrivateUserObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const privateUserObjectResponse = z.lazy(() => {
  return z
    .object({
      account_id: z.string().optional(),
      country: z.string().optional(),
      display_name: z.string().optional(),
      email: z.string().optional(),
      explicit_content: explicitContentSettingsObjectResponse.optional(),
      external_urls: externalUrlObjectResponse.optional(),
      followers: followersObjectResponse.optional(),
      href: z.string().optional(),
      id: z.string().optional(),
      images: z.array(imageObjectResponse).optional(),
      product: z.string().optional(),
      type: z.string().optional(),
      uri: z.string().optional(),
    })
    .transform((data) => ({
      accountId: data['account_id'],
      country: data['country'],
      displayName: data['display_name'],
      email: data['email'],
      explicitContent: data['explicit_content'],
      externalUrls: data['external_urls'],
      followers: data['followers'],
      href: data['href'],
      id: data['id'],
      images: data['images'],
      product: data['product'],
      type: data['type'],
      uri: data['uri'],
    }));
});

/**
 * Zod schema for mapping the PrivateUserObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const privateUserObjectRequest = z.lazy(() => {
  return z
    .object({
      accountId: z.string().optional(),
      country: z.string().optional(),
      displayName: z.string().optional(),
      email: z.string().optional(),
      explicitContent: explicitContentSettingsObjectRequest.optional(),
      externalUrls: externalUrlObjectRequest.optional(),
      followers: followersObjectRequest.optional(),
      href: z.string().optional(),
      id: z.string().optional(),
      images: z.array(imageObjectRequest).optional(),
      product: z.string().optional(),
      type: z.string().optional(),
      uri: z.string().optional(),
    })
    .transform((data) => ({
      account_id: data['accountId'],
      country: data['country'],
      display_name: data['displayName'],
      email: data['email'],
      explicit_content: data['explicitContent'],
      external_urls: data['externalUrls'],
      followers: data['followers'],
      href: data['href'],
      id: data['id'],
      images: data['images'],
      product: data['product'],
      type: data['type'],
      uri: data['uri'],
    }));
});
