import { z } from 'zod';

export const audiobookObjectType = z.literal('audiobook');

export type AudiobookObjectType = z.infer<typeof audiobookObjectType>;
