import { z } from 'zod';

export const albumObjectType = z.literal('album');

export type AlbumObjectType = z.infer<typeof albumObjectType>;
