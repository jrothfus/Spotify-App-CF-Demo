import { z } from 'zod';

export const trackObjectType = z.literal('track');

export type TrackObjectType = z.infer<typeof trackObjectType>;
