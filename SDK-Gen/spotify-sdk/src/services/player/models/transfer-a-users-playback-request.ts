import { z } from 'zod';

/**
 * Zod schema for the TransferAUsersPlaybackRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const transferAUsersPlaybackRequest = z.lazy(() => {
  return z.object({
    deviceIds: z.array(z.string()),
    play: z.boolean().optional(),
    additionalProperties: z.record(z.unknown()).optional(),
  });
});

/**
 * 
 * @typedef  {TransferAUsersPlaybackRequest} transferAUsersPlaybackRequest   
 * @property {string[]} - A JSON array containing the ID of the device on which playback should be started/transferred.<br/>For example:`{device_ids:["74ASZWbe4lXaubB36ztrGX"]}`<br/>_``Note``: Although an array is accepted, only a single device_id is currently supported. Supplying more than one will return `400 Bad Request`_

 * @property {boolean} - ``true``: ensure playback happens on new device.<br/>``false`` or not provided: keep the current playback state.

 */
export type TransferAUsersPlaybackRequest = z.infer<typeof transferAUsersPlaybackRequest>;

/**
 * Zod schema for mapping API responses to the TransferAUsersPlaybackRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const transferAUsersPlaybackRequestResponse = z.lazy(() => {
  return z
    .object({
      device_ids: z.array(z.string()),
      play: z.boolean().optional(),
    })
    .passthrough()
    .transform((data) => {
      const additionalProperties: { [key: string]: unknown } = {};
      const declaredKeys = new Set<string>(['device_ids', 'play']);
      for (const key of globalThis.Object.keys(data)) {
        if (!declaredKeys.has(key)) {
          additionalProperties[key] = (data as { [key: string]: unknown })[key];
        }
      }
      return {
        deviceIds: data['device_ids'],
        play: data['play'],
        additionalProperties,
      };
    });
});

/**
 * Zod schema for mapping the TransferAUsersPlaybackRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const transferAUsersPlaybackRequestRequest = z.lazy(() => {
  return z
    .object({
      deviceIds: z.array(z.string()),
      play: z.boolean().optional(),
      additionalProperties: z.record(z.unknown()).optional(),
    })
    .transform((data) => ({
      ...(data['additionalProperties'] ?? {}),
      device_ids: data['deviceIds'],
      play: data['play'],
    }));
});
