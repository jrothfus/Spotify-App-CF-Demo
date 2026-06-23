import { z } from 'zod';

export const simplifiedArtistObjectType = z.literal('artist');

export type SimplifiedArtistObjectType = z.infer<typeof simplifiedArtistObjectType>;
