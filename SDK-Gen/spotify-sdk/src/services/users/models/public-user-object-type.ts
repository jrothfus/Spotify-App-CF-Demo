import { z } from 'zod';

export const publicUserObjectType = z.literal('user');

export type PublicUserObjectType = z.infer<typeof publicUserObjectType>;
