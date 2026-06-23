import { z } from 'zod';

export const checkCurrentUserFollowsType = z.union([z.literal('artist'), z.literal('user')]);

export type CheckCurrentUserFollowsType = z.infer<typeof checkCurrentUserFollowsType>;
