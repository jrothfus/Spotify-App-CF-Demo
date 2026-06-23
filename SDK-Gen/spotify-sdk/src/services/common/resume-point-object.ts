import { z } from 'zod';

/**
 * Zod schema for the ResumePointObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const resumePointObject = z.lazy(() => {
  return z.object({
    fullyPlayed: z.boolean().optional(),
    resumePositionMs: z.number().optional(),
  });
});

/**
 * 
 * @typedef  {ResumePointObject} resumePointObject   
 * @property {boolean} - Whether or not the episode has been fully played by the user.

 * @property {number} - The user's most recent position in the episode in milliseconds.

 */
export type ResumePointObject = z.infer<typeof resumePointObject>;

/**
 * Zod schema for mapping API responses to the ResumePointObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const resumePointObjectResponse = z.lazy(() => {
  return z
    .object({
      fully_played: z.boolean().optional(),
      resume_position_ms: z.number().optional(),
    })
    .transform((data) => ({
      fullyPlayed: data['fully_played'],
      resumePositionMs: data['resume_position_ms'],
    }));
});

/**
 * Zod schema for mapping the ResumePointObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const resumePointObjectRequest = z.lazy(() => {
  return z
    .object({
      fullyPlayed: z.boolean().optional(),
      resumePositionMs: z.number().optional(),
    })
    .transform((data) => ({
      fully_played: data['fullyPlayed'],
      resume_position_ms: data['resumePositionMs'],
    }));
});
