import { z } from 'zod';

/**
 * Zod schema for the DeviceObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const deviceObject = z.lazy(() => {
  return z.object({
    id: z.string().optional().nullable(),
    isActive: z.boolean().optional(),
    isPrivateSession: z.boolean().optional(),
    isRestricted: z.boolean().optional(),
    name: z.string().optional(),
    type: z.string().optional(),
    volumePercent: z.number().gte(0).lte(100).optional().nullable(),
    supportsVolume: z.boolean().optional(),
  });
});

/**
 *
 * @typedef  {DeviceObject} deviceObject
 * @property {string} - The device ID. This ID is unique and persistent to some extent. However, this is not guaranteed and any cached `device_id` should periodically be cleared out and refetched as necessary.
 * @property {boolean} - If this device is the currently active device.
 * @property {boolean} - If this device is currently in a private session.
 * @property {boolean} - Whether controlling this device is restricted. At present if this is "true" then no Web API commands will be accepted by this device.
 * @property {string} - A human-readable name for the device. Some devices have a name that the user can configure (e.g. \"Loudest speaker\") and some devices have a generic name associated with the manufacturer or device model.
 * @property {string} - Device type, such as "computer", "smartphone" or "speaker".
 * @property {number} - The current volume in percent.
 * @property {boolean} - If this device can be used to set the volume.
 */
export type DeviceObject = z.infer<typeof deviceObject>;

/**
 * Zod schema for mapping API responses to the DeviceObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const deviceObjectResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
      is_active: z.boolean().optional(),
      is_private_session: z.boolean().optional(),
      is_restricted: z.boolean().optional(),
      name: z.string().optional(),
      type: z.string().optional(),
      volume_percent: z.number().gte(0).lte(100).optional().nullable(),
      supports_volume: z.boolean().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      isActive: data['is_active'],
      isPrivateSession: data['is_private_session'],
      isRestricted: data['is_restricted'],
      name: data['name'],
      type: data['type'],
      volumePercent: data['volume_percent'],
      supportsVolume: data['supports_volume'],
    }));
});

/**
 * Zod schema for mapping the DeviceObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const deviceObjectRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
      isActive: z.boolean().optional(),
      isPrivateSession: z.boolean().optional(),
      isRestricted: z.boolean().optional(),
      name: z.string().optional(),
      type: z.string().optional(),
      volumePercent: z.number().gte(0).lte(100).optional().nullable(),
      supportsVolume: z.boolean().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      is_active: data['isActive'],
      is_private_session: data['isPrivateSession'],
      is_restricted: data['isRestricted'],
      name: data['name'],
      type: data['type'],
      volume_percent: data['volumePercent'],
      supports_volume: data['supportsVolume'],
    }));
});
