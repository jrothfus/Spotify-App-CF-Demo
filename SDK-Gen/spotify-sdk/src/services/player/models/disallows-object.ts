import { z } from 'zod';

/**
 * Zod schema for the DisallowsObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const disallowsObject = z.lazy(() => {
  return z.object({
    interruptingPlayback: z.boolean().optional(),
    pausing: z.boolean().optional(),
    resuming: z.boolean().optional(),
    seeking: z.boolean().optional(),
    skippingNext: z.boolean().optional(),
    skippingPrev: z.boolean().optional(),
    togglingRepeatContext: z.boolean().optional(),
    togglingShuffle: z.boolean().optional(),
    togglingRepeatTrack: z.boolean().optional(),
    transferringPlayback: z.boolean().optional(),
  });
});

/**
 *
 * @typedef  {DisallowsObject} disallowsObject
 * @property {boolean} - Interrupting playback. Optional field.
 * @property {boolean} - Pausing. Optional field.
 * @property {boolean} - Resuming. Optional field.
 * @property {boolean} - Seeking playback location. Optional field.
 * @property {boolean} - Skipping to the next context. Optional field.
 * @property {boolean} - Skipping to the previous context. Optional field.
 * @property {boolean} - Toggling repeat context flag. Optional field.
 * @property {boolean} - Toggling shuffle flag. Optional field.
 * @property {boolean} - Toggling repeat track flag. Optional field.
 * @property {boolean} - Transfering playback between devices. Optional field.
 */
export type DisallowsObject = z.infer<typeof disallowsObject>;

/**
 * Zod schema for mapping API responses to the DisallowsObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const disallowsObjectResponse = z.lazy(() => {
  return z
    .object({
      interrupting_playback: z.boolean().optional(),
      pausing: z.boolean().optional(),
      resuming: z.boolean().optional(),
      seeking: z.boolean().optional(),
      skipping_next: z.boolean().optional(),
      skipping_prev: z.boolean().optional(),
      toggling_repeat_context: z.boolean().optional(),
      toggling_shuffle: z.boolean().optional(),
      toggling_repeat_track: z.boolean().optional(),
      transferring_playback: z.boolean().optional(),
    })
    .transform((data) => ({
      interruptingPlayback: data['interrupting_playback'],
      pausing: data['pausing'],
      resuming: data['resuming'],
      seeking: data['seeking'],
      skippingNext: data['skipping_next'],
      skippingPrev: data['skipping_prev'],
      togglingRepeatContext: data['toggling_repeat_context'],
      togglingShuffle: data['toggling_shuffle'],
      togglingRepeatTrack: data['toggling_repeat_track'],
      transferringPlayback: data['transferring_playback'],
    }));
});

/**
 * Zod schema for mapping the DisallowsObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const disallowsObjectRequest = z.lazy(() => {
  return z
    .object({
      interruptingPlayback: z.boolean().optional(),
      pausing: z.boolean().optional(),
      resuming: z.boolean().optional(),
      seeking: z.boolean().optional(),
      skippingNext: z.boolean().optional(),
      skippingPrev: z.boolean().optional(),
      togglingRepeatContext: z.boolean().optional(),
      togglingShuffle: z.boolean().optional(),
      togglingRepeatTrack: z.boolean().optional(),
      transferringPlayback: z.boolean().optional(),
    })
    .transform((data) => ({
      interrupting_playback: data['interruptingPlayback'],
      pausing: data['pausing'],
      resuming: data['resuming'],
      seeking: data['seeking'],
      skipping_next: data['skippingNext'],
      skipping_prev: data['skippingPrev'],
      toggling_repeat_context: data['togglingRepeatContext'],
      toggling_shuffle: data['togglingShuffle'],
      toggling_repeat_track: data['togglingRepeatTrack'],
      transferring_playback: data['transferringPlayback'],
    }));
});
