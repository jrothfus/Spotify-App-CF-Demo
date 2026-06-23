import { z } from 'zod';

export const artistDiscographyAlbumObjectAlbumType = z.union([
  z.literal('album'),
  z.literal('single'),
  z.literal('compilation'),
]);

export type ArtistDiscographyAlbumObjectAlbumType = z.infer<
  typeof artistDiscographyAlbumObjectAlbumType
>;
