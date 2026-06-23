import { z } from 'zod';

export const chapterObjectReleaseDatePrecision = z.union([
  z.literal('year'),
  z.literal('month'),
  z.literal('day'),
]);

export type ChapterObjectReleaseDatePrecision = z.infer<typeof chapterObjectReleaseDatePrecision>;
