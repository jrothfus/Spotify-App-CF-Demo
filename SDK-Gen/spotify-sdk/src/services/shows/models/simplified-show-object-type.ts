import { z } from 'zod';

export const simplifiedShowObjectType = z.literal('show');

export type SimplifiedShowObjectType = z.infer<typeof simplifiedShowObjectType>;
