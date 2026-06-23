import { z } from 'zod';
import {
  PagingPlaylistObject,
  pagingPlaylistObject,
  pagingPlaylistObjectRequest,
  pagingPlaylistObjectResponse,
} from '../../common/paging-playlist-object';

/**
 * Zod schema for the PagingFeaturedPlaylistObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const pagingFeaturedPlaylistObject = z.lazy(() => {
  return z.object({
    message: z.string().optional(),
    playlists: pagingPlaylistObject.optional(),
  });
});

/**
 * 
 * @typedef  {PagingFeaturedPlaylistObject} pagingFeaturedPlaylistObject   
 * @property {string} - The localized message of a playlist.

 * @property {PagingPlaylistObject} 
 */
export type PagingFeaturedPlaylistObject = z.infer<typeof pagingFeaturedPlaylistObject>;

/**
 * Zod schema for mapping API responses to the PagingFeaturedPlaylistObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const pagingFeaturedPlaylistObjectResponse = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
      playlists: pagingPlaylistObjectResponse.optional(),
    })
    .transform((data) => ({
      message: data['message'],
      playlists: data['playlists'],
    }));
});

/**
 * Zod schema for mapping the PagingFeaturedPlaylistObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const pagingFeaturedPlaylistObjectRequest = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
      playlists: pagingPlaylistObjectRequest.optional(),
    })
    .transform((data) => ({
      message: data['message'],
      playlists: data['playlists'],
    }));
});
