import { z } from 'zod';

export const getUsersTopArtistsAndTracksType = z.union([z.literal('artists'), z.literal('tracks')]);

export type GetUsersTopArtistsAndTracksType = z.infer<typeof getUsersTopArtistsAndTracksType>;
