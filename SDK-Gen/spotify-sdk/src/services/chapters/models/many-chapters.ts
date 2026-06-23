import { z } from 'zod';
import {
  ChapterObject,
  chapterObject,
  chapterObjectRequest,
  chapterObjectResponse,
} from './chapter-object';

/**
 * Zod schema for the ManyChapters model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const manyChapters = z.lazy(() => {
  return z.object({
    chapters: z.array(chapterObject),
  });
});

/**
 *
 * @typedef  {ManyChapters} manyChapters
 * @property {ChapterObject[]}
 */
export type ManyChapters = z.infer<typeof manyChapters>;

/**
 * Zod schema for mapping API responses to the ManyChapters application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const manyChaptersResponse = z.lazy(() => {
  return z
    .object({
      chapters: z.array(chapterObjectResponse),
    })
    .transform((data) => ({
      chapters: data['chapters'],
    }));
});

/**
 * Zod schema for mapping the ManyChapters application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const manyChaptersRequest = z.lazy(() => {
  return z
    .object({
      chapters: z.array(chapterObjectRequest),
    })
    .transform((data) => ({
      chapters: data['chapters'],
    }));
});
