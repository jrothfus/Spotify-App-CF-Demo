import { z } from 'zod';

/**
 * Zod schema for the ErrorObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const errorObject = z.lazy(() => {
  return z.object({
    status: z.number().gte(400).lte(599),
    message: z.string(),
  });
});

/**
 * 
 * @typedef  {ErrorObject} errorObject   
 * @property {number} - The HTTP status code (also returned in the response header; see [Response Status Codes](/documentation/web-api/concepts/api-calls#response-status-codes) for more information).

 * @property {string} - A short description of the cause of the error.

 */
export type ErrorObject = z.infer<typeof errorObject>;

/**
 * Zod schema for mapping API responses to the ErrorObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const errorObjectResponse = z.lazy(() => {
  return z
    .object({
      status: z.number().gte(400).lte(599),
      message: z.string(),
    })
    .transform((data) => ({
      status: data['status'],
      message: data['message'],
    }));
});

/**
 * Zod schema for mapping the ErrorObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const errorObjectRequest = z.lazy(() => {
  return z
    .object({
      status: z.number().gte(400).lte(599),
      message: z.string(),
    })
    .transform((data) => ({
      status: data['status'],
      message: data['message'],
    }));
});
