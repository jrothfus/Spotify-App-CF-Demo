import { z } from 'zod';

export const simplifiedAlbumObjectAlbumType = z.union([
  z.literal('album'),
  z.literal('single'),
  z.literal('compilation'),
]);

export type SimplifiedAlbumObjectAlbumType = z.infer<typeof simplifiedAlbumObjectAlbumType>;
