import { z } from 'zod';

export const simplifiedChapterObjectType = z.literal('episode');

export type SimplifiedChapterObjectType = z.infer<typeof simplifiedChapterObjectType>;
