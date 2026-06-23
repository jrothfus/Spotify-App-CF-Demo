import { z } from 'zod';

export const episodeObjectType = z.literal('episode');

export type EpisodeObjectType = z.infer<typeof episodeObjectType>;
