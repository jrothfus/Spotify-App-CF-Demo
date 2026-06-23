import { z } from 'zod';
import {
  DeviceObject,
  deviceObject,
  deviceObjectRequest,
  deviceObjectResponse,
} from './device-object';
import {
  ContextObject,
  contextObject,
  contextObjectRequest,
  contextObjectResponse,
} from './context-object';
import {
  CurrentlyPlayingContextObjectItem,
  currentlyPlayingContextObjectItem,
  currentlyPlayingContextObjectItemRequest,
  currentlyPlayingContextObjectItemResponse,
} from './currently-playing-context-object-item';
import {
  DisallowsObject,
  disallowsObject,
  disallowsObjectRequest,
  disallowsObjectResponse,
} from './disallows-object';

/**
 * Zod schema for the CurrentlyPlayingContextObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const currentlyPlayingContextObject = z.lazy(() => {
  return z.object({
    device: deviceObject.optional(),
    repeatState: z.string().optional(),
    shuffleState: z.boolean().optional(),
    context: contextObject.optional(),
    timestamp: z.number().optional(),
    progressMs: z.number().optional(),
    isPlaying: z.boolean().optional(),
    item: currentlyPlayingContextObjectItem.optional(),
    currentlyPlayingType: z.string().optional(),
    actions: disallowsObject.optional(),
  });
});

/**
 * 
 * @typedef  {CurrentlyPlayingContextObject} currentlyPlayingContextObject   
 * @property {DeviceObject} 
 * @property {string} - off, track, context
 * @property {boolean} - If shuffle is on or off.
 * @property {ContextObject} 
 * @property {number} - Unix Millisecond Timestamp when playback state was last changed (play, pause, skip, scrub, new song, etc.).
 * @property {number} - Progress into the currently playing track or episode. Can be `null`.
 * @property {boolean} - If something is currently playing, return `true`.
 * @property {CurrentlyPlayingContextObjectItem} - The currently playing track or episode. Can be `null`.
 * @property {string} - The object type of the currently playing item. Can be one of `track`, `episode`, `ad` or `unknown`.

 * @property {DisallowsObject} 
 */
export type CurrentlyPlayingContextObject = z.infer<typeof currentlyPlayingContextObject>;

/**
 * Zod schema for mapping API responses to the CurrentlyPlayingContextObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const currentlyPlayingContextObjectResponse = z.lazy(() => {
  return z
    .object({
      device: deviceObjectResponse.optional(),
      repeat_state: z.string().optional(),
      shuffle_state: z.boolean().optional(),
      context: contextObjectResponse.optional(),
      timestamp: z.number().optional(),
      progress_ms: z.number().optional(),
      is_playing: z.boolean().optional(),
      item: currentlyPlayingContextObjectItemResponse.optional(),
      currently_playing_type: z.string().optional(),
      actions: disallowsObjectResponse.optional(),
    })
    .transform((data) => ({
      device: data['device'],
      repeatState: data['repeat_state'],
      shuffleState: data['shuffle_state'],
      context: data['context'],
      timestamp: data['timestamp'],
      progressMs: data['progress_ms'],
      isPlaying: data['is_playing'],
      item: data['item'],
      currentlyPlayingType: data['currently_playing_type'],
      actions: data['actions'],
    }));
});

/**
 * Zod schema for mapping the CurrentlyPlayingContextObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const currentlyPlayingContextObjectRequest = z.lazy(() => {
  return z
    .object({
      device: deviceObjectRequest.optional(),
      repeatState: z.string().optional(),
      shuffleState: z.boolean().optional(),
      context: contextObjectRequest.optional(),
      timestamp: z.number().optional(),
      progressMs: z.number().optional(),
      isPlaying: z.boolean().optional(),
      item: currentlyPlayingContextObjectItemRequest.optional(),
      currentlyPlayingType: z.string().optional(),
      actions: disallowsObjectRequest.optional(),
    })
    .transform((data) => ({
      device: data['device'],
      repeat_state: data['repeatState'],
      shuffle_state: data['shuffleState'],
      context: data['context'],
      timestamp: data['timestamp'],
      progress_ms: data['progressMs'],
      is_playing: data['isPlaying'],
      item: data['item'],
      currently_playing_type: data['currentlyPlayingType'],
      actions: data['actions'],
    }));
});
