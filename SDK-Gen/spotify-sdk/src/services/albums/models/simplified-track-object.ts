import { z } from 'zod';
import {
  SimplifiedArtistObject,
  simplifiedArtistObject,
  simplifiedArtistObjectRequest,
  simplifiedArtistObjectResponse,
} from '../../common/simplified-artist-object';
import {
  ExternalUrlObject,
  externalUrlObject,
  externalUrlObjectRequest,
  externalUrlObjectResponse,
} from '../../common/external-url-object';
import {
  LinkedTrackObject,
  linkedTrackObject,
  linkedTrackObjectRequest,
  linkedTrackObjectResponse,
} from './linked-track-object';
import {
  TrackRestrictionObject,
  trackRestrictionObject,
  trackRestrictionObjectRequest,
  trackRestrictionObjectResponse,
} from '../../common/track-restriction-object';

/**
 * Zod schema for the SimplifiedTrackObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const simplifiedTrackObject = z.lazy(() => {
  return z.object({
    artists: z.array(simplifiedArtistObject).optional(),
    availableMarkets: z.array(z.string()).optional(),
    discNumber: z.number().optional(),
    durationMs: z.number().optional(),
    explicit: z.boolean().optional(),
    externalUrls: externalUrlObject.optional(),
    href: z.string().optional(),
    id: z.string().optional(),
    isPlayable: z.boolean().optional(),
    linkedFrom: linkedTrackObject.optional(),
    restrictions: trackRestrictionObject.optional(),
    name: z.string().optional(),
    previewUrl: z.string().optional().nullable(),
    trackNumber: z.number().optional(),
    type: z.string().optional(),
    uri: z.string().optional(),
    isLocal: z.boolean().optional(),
  });
});

/**
 * 
 * @typedef  {SimplifiedTrackObject} simplifiedTrackObject   
 * @property {SimplifiedArtistObject[]} - The artists who performed the track. Each artist object includes a link in `href` to more detailed information about the artist.
 * @property {string[]} - A list of the countries in which the track can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.

 * @property {number} - The disc number (usually `1` unless the album consists of more than one disc).
 * @property {number} - The track length in milliseconds.
 * @property {boolean} - Whether or not the track has explicit lyrics ( `true` = yes it does; `false` = no it does not OR unknown).
 * @property {ExternalUrlObject} 
 * @property {string} - A link to the Web API endpoint providing full details of the track.
 * @property {string} - The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track.

 * @property {boolean} - Part of the response when [Track Relinking](/documentation/web-api/concepts/track-relinking/) is applied. If `true`, the track is playable in the given market. Otherwise `false`.

 * @property {LinkedTrackObject} 
 * @property {TrackRestrictionObject} 
 * @property {string} - The name of the track.
 * @property {string} - A URL to a 30 second preview (MP3 format) of the track.

 * @property {number} - The number of the track. If an album has several discs, the track number is the number on the specified disc.

 * @property {string} - The object type: "track".

 * @property {string} - The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the track.

 * @property {boolean} - Whether or not the track is from a local file.

 */
export type SimplifiedTrackObject = z.infer<typeof simplifiedTrackObject>;

/**
 * Zod schema for mapping API responses to the SimplifiedTrackObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const simplifiedTrackObjectResponse = z.lazy(() => {
  return z
    .object({
      artists: z.array(simplifiedArtistObjectResponse).optional(),
      available_markets: z.array(z.string()).optional(),
      disc_number: z.number().optional(),
      duration_ms: z.number().optional(),
      explicit: z.boolean().optional(),
      external_urls: externalUrlObjectResponse.optional(),
      href: z.string().optional(),
      id: z.string().optional(),
      is_playable: z.boolean().optional(),
      linked_from: linkedTrackObjectResponse.optional(),
      restrictions: trackRestrictionObjectResponse.optional(),
      name: z.string().optional(),
      preview_url: z.string().optional().nullable(),
      track_number: z.number().optional(),
      type: z.string().optional(),
      uri: z.string().optional(),
      is_local: z.boolean().optional(),
    })
    .transform((data) => ({
      artists: data['artists'],
      availableMarkets: data['available_markets'],
      discNumber: data['disc_number'],
      durationMs: data['duration_ms'],
      explicit: data['explicit'],
      externalUrls: data['external_urls'],
      href: data['href'],
      id: data['id'],
      isPlayable: data['is_playable'],
      linkedFrom: data['linked_from'],
      restrictions: data['restrictions'],
      name: data['name'],
      previewUrl: data['preview_url'],
      trackNumber: data['track_number'],
      type: data['type'],
      uri: data['uri'],
      isLocal: data['is_local'],
    }));
});

/**
 * Zod schema for mapping the SimplifiedTrackObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const simplifiedTrackObjectRequest = z.lazy(() => {
  return z
    .object({
      artists: z.array(simplifiedArtistObjectRequest).optional(),
      availableMarkets: z.array(z.string()).optional(),
      discNumber: z.number().optional(),
      durationMs: z.number().optional(),
      explicit: z.boolean().optional(),
      externalUrls: externalUrlObjectRequest.optional(),
      href: z.string().optional(),
      id: z.string().optional(),
      isPlayable: z.boolean().optional(),
      linkedFrom: linkedTrackObjectRequest.optional(),
      restrictions: trackRestrictionObjectRequest.optional(),
      name: z.string().optional(),
      previewUrl: z.string().optional().nullable(),
      trackNumber: z.number().optional(),
      type: z.string().optional(),
      uri: z.string().optional(),
      isLocal: z.boolean().optional(),
    })
    .transform((data) => ({
      artists: data['artists'],
      available_markets: data['availableMarkets'],
      disc_number: data['discNumber'],
      duration_ms: data['durationMs'],
      explicit: data['explicit'],
      external_urls: data['externalUrls'],
      href: data['href'],
      id: data['id'],
      is_playable: data['isPlayable'],
      linked_from: data['linkedFrom'],
      restrictions: data['restrictions'],
      name: data['name'],
      preview_url: data['previewUrl'],
      track_number: data['trackNumber'],
      type: data['type'],
      uri: data['uri'],
      is_local: data['isLocal'],
    }));
});
