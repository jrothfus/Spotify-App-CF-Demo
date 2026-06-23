import { z } from 'zod';

export const simplifiedEpisodeObjectReleaseDatePrecision = z.union([
  z.literal('year'),
  z.literal('month'),
  z.literal('day'),
]);

export type SimplifiedEpisodeObjectReleaseDatePrecision = z.infer<
  typeof simplifiedEpisodeObjectReleaseDatePrecision
>;
