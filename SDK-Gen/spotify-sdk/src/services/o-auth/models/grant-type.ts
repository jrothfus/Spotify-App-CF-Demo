import { z } from 'zod';

export const grantType = z.literal('authorization_code');

export type GrantType = z.infer<typeof grantType>;
