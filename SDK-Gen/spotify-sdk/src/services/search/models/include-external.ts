import { z } from 'zod';

export const includeExternal = z.literal('audio');

export type IncludeExternal = z.infer<typeof includeExternal>;
