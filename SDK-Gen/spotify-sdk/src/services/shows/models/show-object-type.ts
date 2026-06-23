import { z } from 'zod';

export const showObjectType = z.literal('show');

export type ShowObjectType = z.infer<typeof showObjectType>;
