import { z } from 'zod';
import {
  DeviceObject,
  deviceObject,
  deviceObjectRequest,
  deviceObjectResponse,
} from './device-object';

/**
 * Zod schema for the ManyDevices model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const manyDevices = z.lazy(() => {
  return z.object({
    devices: z.array(deviceObject),
  });
});

/**
 *
 * @typedef  {ManyDevices} manyDevices
 * @property {DeviceObject[]}
 */
export type ManyDevices = z.infer<typeof manyDevices>;

/**
 * Zod schema for mapping API responses to the ManyDevices application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const manyDevicesResponse = z.lazy(() => {
  return z
    .object({
      devices: z.array(deviceObjectResponse),
    })
    .transform((data) => ({
      devices: data['devices'],
    }));
});

/**
 * Zod schema for mapping the ManyDevices application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const manyDevicesRequest = z.lazy(() => {
  return z
    .object({
      devices: z.array(deviceObjectRequest),
    })
    .transform((data) => ({
      devices: data['devices'],
    }));
});
