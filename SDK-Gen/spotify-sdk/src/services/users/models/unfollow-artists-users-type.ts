import { z } from 'zod';

export const unfollowArtistsUsersType = z.union([z.literal('artist'), z.literal('user')]);

export type UnfollowArtistsUsersType = z.infer<typeof unfollowArtistsUsersType>;
