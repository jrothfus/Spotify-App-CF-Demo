import { z } from 'zod';
import { Reason, reason } from '../albums/models/reason';

/**
 * Zod schema for the AlbumRestrictionObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const albumRestrictionObject = z.lazy(() => {
  return z.object({
    reason: reason.optional(),
  });
});

/**
 * 
 * @typedef  {AlbumRestrictionObject} albumRestrictionObject   
 * @property {Reason} - The reason for the restriction. Albums may be restricted if the content is not available in a given market, to the user's subscription type, or when the user's account is set to not play explicit content.
Additional reasons may be added in the future.

 */
export type AlbumRestrictionObject = z.infer<typeof albumRestrictionObject>;

/**
 * Zod schema for mapping API responses to the AlbumRestrictionObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const albumRestrictionObjectResponse = z.lazy(() => {
  return z
    .object({
      reason: reason.optional(),
    })
    .transform((data) => ({
      reason: data['reason'],
    }));
});

/**
 * Zod schema for mapping the AlbumRestrictionObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const albumRestrictionObjectRequest = z.lazy(() => {
  return z
    .object({
      reason: reason.optional(),
    })
    .transform((data) => ({
      reason: data['reason'],
    }));
});
