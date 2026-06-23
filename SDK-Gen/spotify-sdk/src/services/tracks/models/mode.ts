import { z } from 'zod';

export const mode = z.union([z.literal(-1), z.literal(0), z.literal(1)]);

export type Mode = z.infer<typeof mode>;
