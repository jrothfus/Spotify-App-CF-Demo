import { z } from 'zod';
import { Categories, categories, categoriesRequest, categoriesResponse } from './categories';

/**
 * Zod schema for the PagedCategories model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const pagedCategories = z.lazy(() => {
  return z.object({
    categories: categories,
  });
});

/**
 *
 * @typedef  {PagedCategories} pagedCategories
 * @property {Categories}
 */
export type PagedCategories = z.infer<typeof pagedCategories>;

/**
 * Zod schema for mapping API responses to the PagedCategories application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const pagedCategoriesResponse = z.lazy(() => {
  return z
    .object({
      categories: categoriesResponse,
    })
    .transform((data) => ({
      categories: data['categories'],
    }));
});

/**
 * Zod schema for mapping the PagedCategories application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const pagedCategoriesRequest = z.lazy(() => {
  return z
    .object({
      categories: categoriesRequest,
    })
    .transform((data) => ({
      categories: data['categories'],
    }));
});
