import { z } from 'zod';

export const simplifiedChapterObjectReleaseDatePrecision = z.union([
  z.literal('year'),
  z.literal('month'),
  z.literal('day'),
]);

export type SimplifiedChapterObjectReleaseDatePrecision = z.infer<
  typeof simplifiedChapterObjectReleaseDatePrecision
>;
