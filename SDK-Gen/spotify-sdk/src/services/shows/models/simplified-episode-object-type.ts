import { z } from 'zod';

export const simplifiedEpisodeObjectType = z.literal('episode');

export type SimplifiedEpisodeObjectType = z.infer<typeof simplifiedEpisodeObjectType>;
