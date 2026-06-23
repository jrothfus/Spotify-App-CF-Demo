import { z } from 'zod';

/**
 * Zod schema for the OAuthTokenResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const oAuthTokenResponse = z.lazy(() => {
  return z.object({
    accessToken: z.string().optional(),
    expiresIn: z.number().optional().nullable(),
  });
});

/**
 *
 * @typedef  {OAuthTokenResponse} oAuthTokenResponse
 * @property {string}
 * @property {number}
 */
export type OAuthTokenResponse = z.infer<typeof oAuthTokenResponse>;

/**
 * Zod schema for mapping API responses to the OAuthTokenResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const oAuthTokenResponseResponse = z.lazy(() => {
  return z
    .object({
      access_token: z.string().optional(),
      expires_in: z.number().optional().nullable(),
    })
    .transform((data) => ({
      accessToken: data['access_token'],
      expiresIn: data['expires_in'],
    }));
});

/**
 * Zod schema for mapping the OAuthTokenResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const oAuthTokenResponseRequest = z.lazy(() => {
  return z
    .object({
      accessToken: z.string().optional(),
      expiresIn: z.number().optional().nullable(),
    })
    .transform((data) => ({
      access_token: data['accessToken'],
      expires_in: data['expiresIn'],
    }));
});
