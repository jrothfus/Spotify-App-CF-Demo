import { z } from 'zod';

export const followArtistsUsersType = z.union([z.literal('artist'), z.literal('user')]);

export type FollowArtistsUsersType = z.infer<typeof followArtistsUsersType>;
