import { z } from 'zod';

export const simplifiedAudiobookObjectType = z.literal('audiobook');

export type SimplifiedAudiobookObjectType = z.infer<typeof simplifiedAudiobookObjectType>;
