import { z } from 'zod';

export const simplifiedAlbumObjectReleaseDatePrecision = z.union([
  z.literal('year'),
  z.literal('month'),
  z.literal('day'),
]);

export type SimplifiedAlbumObjectReleaseDatePrecision = z.infer<
  typeof simplifiedAlbumObjectReleaseDatePrecision
>;
