import { z } from 'zod';

export const audioFeaturesObjectType = z.literal('audio_features');

export type AudioFeaturesObjectType = z.infer<typeof audioFeaturesObjectType>;
