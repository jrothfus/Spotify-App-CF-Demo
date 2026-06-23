import { z } from 'zod';
import { Tracks, tracks, tracksRequest, tracksResponse } from './tracks';

/**
 * Zod schema for the RemoveTracksPlaylistRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const removeTracksPlaylistRequest = z.lazy(() => {
  return z.object({
    tracks: z.array(tracks),
    snapshotId: z.string().optional(),
  });
});

/**
 * 
 * @typedef  {RemoveTracksPlaylistRequest} removeTracksPlaylistRequest   
 * @property {Tracks[]} - An array of objects containing [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) of the tracks or episodes to remove.
For example: `{ "tracks": [{ "uri": "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" },{ "uri": "spotify:track:1301WleyT98MSxVHPZCA6M" }] }`. A maximum of 100 objects can be sent at once.

 * @property {string} - The playlist's snapshot ID against which you want to make the changes.
The API will validate that the specified items exist and in the specified positions and make the changes,
even if more recent changes have been made to the playlist.

 */
export type RemoveTracksPlaylistRequest = z.infer<typeof removeTracksPlaylistRequest>;

/**
 * Zod schema for mapping API responses to the RemoveTracksPlaylistRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const removeTracksPlaylistRequestResponse = z.lazy(() => {
  return z
    .object({
      tracks: z.array(tracksResponse),
      snapshot_id: z.string().optional(),
    })
    .transform((data) => ({
      tracks: data['tracks'],
      snapshotId: data['snapshot_id'],
    }));
});

/**
 * Zod schema for mapping the RemoveTracksPlaylistRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const removeTracksPlaylistRequestRequest = z.lazy(() => {
  return z
    .object({
      tracks: z.array(tracksRequest),
      snapshotId: z.string().optional(),
    })
    .transform((data) => ({
      tracks: data['tracks'],
      snapshot_id: data['snapshotId'],
    }));
});
