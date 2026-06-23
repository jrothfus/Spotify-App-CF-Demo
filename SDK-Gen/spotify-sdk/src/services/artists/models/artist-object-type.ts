import { z } from 'zod';

export const artistObjectType = z.literal('artist');

export type ArtistObjectType = z.infer<typeof artistObjectType>;
