import { z } from 'zod';

export const playlistOwnerObjectType = z.literal('user');

export type PlaylistOwnerObjectType = z.infer<typeof playlistOwnerObjectType>;
