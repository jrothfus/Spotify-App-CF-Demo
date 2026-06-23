import { z } from 'zod';

export const artistDiscographyAlbumObjectReleaseDatePrecision = z.union([
  z.literal('year'),
  z.literal('month'),
  z.literal('day'),
]);

export type ArtistDiscographyAlbumObjectReleaseDatePrecision = z.infer<
  typeof artistDiscographyAlbumObjectReleaseDatePrecision
>;
