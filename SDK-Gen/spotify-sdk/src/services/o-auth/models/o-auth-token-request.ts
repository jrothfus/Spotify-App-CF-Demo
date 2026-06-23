import { z } from 'zod';
import { GrantType, grantType } from './grant-type';

/**
 * Zod schema for the OAuthTokenRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const oAuthTokenRequest = z.lazy(() => {
  return z.object({
    grantType: grantType,
    clientId: z.string(),
    clientSecret: z.string(),
    scope: z.string(),
  });
});

/**
 *
 * @typedef  {OAuthTokenRequest} oAuthTokenRequest
 * @property {GrantType}
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type OAuthTokenRequest = z.infer<typeof oAuthTokenRequest>;

/**
 * Zod schema for mapping API responses to the OAuthTokenRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const oAuthTokenRequestResponse = z.lazy(() => {
  return z
    .object({
      grant_type: grantType,
      client_id: z.string(),
      client_secret: z.string(),
      scope: z.string(),
    })
    .transform((data) => ({
      grantType: data['grant_type'],
      clientId: data['client_id'],
      clientSecret: data['client_secret'],
      scope: data['scope'],
    }));
});

/**
 * Zod schema for mapping the OAuthTokenRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const oAuthTokenRequestRequest = z.lazy(() => {
  return z
    .object({
      grantType: grantType,
      clientId: z.string(),
      clientSecret: z.string(),
      scope: z.string(),
    })
    .transform((data) => ({
      grant_type: data['grantType'],
      client_id: data['clientId'],
      client_secret: data['clientSecret'],
      scope: data['scope'],
    }));
});
