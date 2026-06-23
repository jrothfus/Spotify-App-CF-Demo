import { z } from 'zod';

export const chapterObjectType = z.literal('episode');

export type ChapterObjectType = z.infer<typeof chapterObjectType>;
