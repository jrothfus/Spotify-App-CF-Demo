import { z } from 'zod';

export const albumObjectReleaseDatePrecision = z.union([
  z.literal('year'),
  z.literal('month'),
  z.literal('day'),
]);

export type AlbumObjectReleaseDatePrecision = z.infer<typeof albumObjectReleaseDatePrecision>;
