import { z } from 'zod';

export const getFollowedType = z.literal('artist');

export type GetFollowedType = z.infer<typeof getFollowedType>;
