import { z } from 'zod';

/**
 * Zod schema for the GetAvailableMarketsOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getAvailableMarketsOkResponse = z.lazy(() => {
  return z.object({
    markets: z.array(z.string()).optional(),
  });
});

/**
 *
 * @typedef  {GetAvailableMarketsOkResponse} getAvailableMarketsOkResponse
 * @property {string[]}
 */
export type GetAvailableMarketsOkResponse = z.infer<typeof getAvailableMarketsOkResponse>;

/**
 * Zod schema for mapping API responses to the GetAvailableMarketsOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAvailableMarketsOkResponseResponse = z.lazy(() => {
  return z
    .object({
      markets: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      markets: data['markets'],
    }));
});

/**
 * Zod schema for mapping the GetAvailableMarketsOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAvailableMarketsOkResponseRequest = z.lazy(() => {
  return z
    .object({
      markets: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      markets: data['markets'],
    }));
});
