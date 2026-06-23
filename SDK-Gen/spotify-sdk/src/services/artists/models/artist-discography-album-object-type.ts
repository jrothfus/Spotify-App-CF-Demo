import { z } from 'zod';

export const artistDiscographyAlbumObjectType = z.literal('album');

export type ArtistDiscographyAlbumObjectType = z.infer<typeof artistDiscographyAlbumObjectType>;
