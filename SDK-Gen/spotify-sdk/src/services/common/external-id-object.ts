import { z } from 'zod';

/**
 * Zod schema for the ExternalIdObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const externalIdObject = z.lazy(() => {
  return z.object({
    isrc: z.string().optional(),
    ean: z.string().optional(),
    upc: z.string().optional(),
  });
});

/**
 * 
 * @typedef  {ExternalIdObject} externalIdObject   
 * @property {string} - [International Standard Recording Code](http://en.wikipedia.org/wiki/International_Standard_Recording_Code)

 * @property {string} - [International Article Number](http://en.wikipedia.org/wiki/International_Article_Number_%28EAN%29)

 * @property {string} - [Universal Product Code](http://en.wikipedia.org/wiki/Universal_Product_Code)

 */
export type ExternalIdObject = z.infer<typeof externalIdObject>;

/**
 * Zod schema for mapping API responses to the ExternalIdObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const externalIdObjectResponse = z.lazy(() => {
  return z
    .object({
      isrc: z.string().optional(),
      ean: z.string().optional(),
      upc: z.string().optional(),
    })
    .transform((data) => ({
      isrc: data['isrc'],
      ean: data['ean'],
      upc: data['upc'],
    }));
});

/**
 * Zod schema for mapping the ExternalIdObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const externalIdObjectRequest = z.lazy(() => {
  return z
    .object({
      isrc: z.string().optional(),
      ean: z.string().optional(),
      upc: z.string().optional(),
    })
    .transform((data) => ({
      isrc: data['isrc'],
      ean: data['ean'],
      upc: data['upc'],
    }));
});
