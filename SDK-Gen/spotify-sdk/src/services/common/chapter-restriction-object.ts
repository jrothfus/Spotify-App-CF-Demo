import { z } from 'zod';

/**
 * Zod schema for the ChapterRestrictionObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const chapterRestrictionObject = z.lazy(() => {
  return z.object({
    reason: z.string().optional(),
  });
});

/**
 * 
 * @typedef  {ChapterRestrictionObject} chapterRestrictionObject   
 * @property {string} - The reason for the restriction. Supported values:
- `market` - The content item is not available in the given market.
- `product` - The content item is not available for the user's subscription type.
- `explicit` - The content item is explicit and the user's account is set to not play explicit content.
- `payment_required` - Payment is required to play the content item.

Additional reasons may be added in the future.
``Note``: If you use this field, make sure that your application safely handles unknown values.

 */
export type ChapterRestrictionObject = z.infer<typeof chapterRestrictionObject>;

/**
 * Zod schema for mapping API responses to the ChapterRestrictionObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const chapterRestrictionObjectResponse = z.lazy(() => {
  return z
    .object({
      reason: z.string().optional(),
    })
    .transform((data) => ({
      reason: data['reason'],
    }));
});

/**
 * Zod schema for mapping the ChapterRestrictionObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const chapterRestrictionObjectRequest = z.lazy(() => {
  return z
    .object({
      reason: z.string().optional(),
    })
    .transform((data) => ({
      reason: data['reason'],
    }));
});
