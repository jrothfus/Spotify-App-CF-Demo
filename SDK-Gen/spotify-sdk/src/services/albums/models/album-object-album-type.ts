import { z } from 'zod';

export const albumObjectAlbumType = z.union([
  z.literal('album'),
  z.literal('single'),
  z.literal('compilation'),
]);

export type AlbumObjectAlbumType = z.infer<typeof albumObjectAlbumType>;
