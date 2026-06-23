import { z } from 'zod';

export const simplifiedAlbumObjectType = z.literal('album');

export type SimplifiedAlbumObjectType = z.infer<typeof simplifiedAlbumObjectType>;
