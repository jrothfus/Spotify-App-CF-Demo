import { z } from 'zod';

export const albumGroup = z.union([
  z.literal('album'),
  z.literal('single'),
  z.literal('compilation'),
  z.literal('appears_on'),
]);

export type AlbumGroup = z.infer<typeof albumGroup>;
