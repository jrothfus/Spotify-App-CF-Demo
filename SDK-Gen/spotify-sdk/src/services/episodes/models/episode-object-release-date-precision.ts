import { z } from 'zod';

export const episodeObjectReleaseDatePrecision = z.union([
  z.literal('year'),
  z.literal('month'),
  z.literal('day'),
]);

export type EpisodeObjectReleaseDatePrecision = z.infer<typeof episodeObjectReleaseDatePrecision>;
