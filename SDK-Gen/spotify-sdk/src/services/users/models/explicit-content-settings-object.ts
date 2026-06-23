import { z } from 'zod';

/**
 * Zod schema for the ExplicitContentSettingsObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const explicitContentSettingsObject = z.lazy(() => {
  return z.object({
    filterEnabled: z.boolean().optional(),
    filterLocked: z.boolean().optional(),
  });
});

/**
 * 
 * @typedef  {ExplicitContentSettingsObject} explicitContentSettingsObject   
 * @property {boolean} - When `true`, indicates that explicit content should not be played.

 * @property {boolean} - When `true`, indicates that the explicit content setting is locked and can't be changed by the user.

 */
export type ExplicitContentSettingsObject = z.infer<typeof explicitContentSettingsObject>;

/**
 * Zod schema for mapping API responses to the ExplicitContentSettingsObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const explicitContentSettingsObjectResponse = z.lazy(() => {
  return z
    .object({
      filter_enabled: z.boolean().optional(),
      filter_locked: z.boolean().optional(),
    })
    .transform((data) => ({
      filterEnabled: data['filter_enabled'],
      filterLocked: data['filter_locked'],
    }));
});

/**
 * Zod schema for mapping the ExplicitContentSettingsObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const explicitContentSettingsObjectRequest = z.lazy(() => {
  return z
    .object({
      filterEnabled: z.boolean().optional(),
      filterLocked: z.boolean().optional(),
    })
    .transform((data) => ({
      filter_enabled: data['filterEnabled'],
      filter_locked: data['filterLocked'],
    }));
});
