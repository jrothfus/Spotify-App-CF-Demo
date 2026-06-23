import { z } from 'zod';

export const searchType = z.union([
  z.literal('album'),
  z.literal('artist'),
  z.literal('playlist'),
  z.literal('track'),
  z.literal('show'),
  z.literal('episode'),
  z.literal('audiobook'),
]);

export type SearchType = z.infer<typeof searchType>;
