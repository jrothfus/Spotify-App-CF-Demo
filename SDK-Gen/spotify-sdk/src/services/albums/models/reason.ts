import { z } from 'zod';

export const reason = z.union([z.literal('market'), z.literal('product'), z.literal('explicit')]);

export type Reason = z.infer<typeof reason>;
