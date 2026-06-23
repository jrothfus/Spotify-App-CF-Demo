import { z } from 'zod';

export const playlistUserObjectType = z.literal('user');

export type PlaylistUserObjectType = z.infer<typeof playlistUserObjectType>;
