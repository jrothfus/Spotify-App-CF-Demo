import { z } from 'zod';
import {
  SimplifiedAlbumObject,
  simplifiedAlbumObject,
  simplifiedAlbumObjectRequest,
  simplifiedAlbumObjectResponse,
} from './simplified-album-object';
import {
  SimplifiedArtistObject,
  simplifiedArtistObject,
  simplifiedArtistObjectRequest,
  simplifiedArtistObjectResponse,
} from './simplified-artist-object';
import {
  ExternalIdObject,
  externalIdObject,
  externalIdObjectRequest,
  externalIdObjectResponse,
} from './external-id-object';
import {
  ExternalUrlObject,
  externalUrlObject,
  externalUrlObjectRequest,
  externalUrlObjectResponse,
} from './external-url-object';
import {
  TrackRestrictionObject,
  trackRestrictionObject,
  trackRestrictionObjectRequest,
  trackRestrictionObjectResponse,
} from './track-restriction-object';
import { TrackObjectType, trackObjectType } from '../artists/models/track-object-type';

/**
 * Zod schema for the TrackObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const trackObject = z.lazy(() => {
  return z.object({
    album: simplifiedAlbumObject.optional(),
    artists: z.array(simplifiedArtistObject).optional(),
    availableMarkets: z.array(z.string()).optional(),
    discNumber: z.number().optional(),
    durationMs: z.number().optional(),
    explicit: z.boolean().optional(),
    externalIds: externalIdObject.optional(),
    externalUrls: externalUrlObject.optional(),
    href: z.string().optional(),
    id: z.string().optional(),
    isPlayable: z.boolean().optional(),
    linkedFrom: z.any().optional(),
    restrictions: trackRestrictionObject.optional(),
    name: z.string().optional(),
    popularity: z.number().optional(),
    previewUrl: z.string().optional().nullable(),
    trackNumber: z.number().optional(),
    type: trackObjectType.optional(),
    uri: z.string().optional(),
    isLocal: z.boolean().optional(),
  });
});

/**
 * 
 * @typedef  {TrackObject} trackObject   
 * @property {SimplifiedAlbumObject} 
 * @property {SimplifiedArtistObject[]} - The artists who performed the track. Each artist object includes a link in `href` to more detailed information about the artist.

 * @property {string[]} - A list of the countries in which the track can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.

 * @property {number} - The disc number (usually `1` unless the album consists of more than one disc).

 * @property {number} - The track length in milliseconds.

 * @property {boolean} - Whether or not the track has explicit lyrics ( `true` = yes it does; `false` = no it does not OR unknown).

 * @property {ExternalIdObject} 
 * @property {ExternalUrlObject} 
 * @property {string} - A link to the Web API endpoint providing full details of the track.

 * @property {string} - The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track.

 * @property {boolean} - Part of the response when [Track Relinking](/documentation/web-api/concepts/track-relinking) is applied. If `true`, the track is playable in the given market. Otherwise `false`.

 * @property {any} - Part of the response when [Track Relinking](/documentation/web-api/concepts/track-relinking) is applied, and the requested track has been replaced with different track. The track in the `linked_from` object contains information about the originally requested track.

 * @property {TrackRestrictionObject} 
 * @property {string} - The name of the track.

 * @property {number} - The popularity of the track. The value will be between 0 and 100, with 100 being the most popular.<br/>The popularity of a track is a value between 0 and 100, with 100 being the most popular. The popularity is calculated by algorithm and is based, in the most part, on the total number of plays the track has had and how recent those plays are.<br/>Generally speaking, songs that are being played a lot now will have a higher popularity than songs that were played a lot in the past. Duplicate tracks (e.g. the same track from a single and an album) are rated independently. Artist and album popularity is derived mathematically from track popularity. _``Note``: the popularity value may lag actual popularity by a few days: the value is not updated in real time._

 * @property {string} - A link to a 30 second preview (MP3 format) of the track. Can be `null`

 * @property {number} - The number of the track. If an album has several discs, the track number is the number on the specified disc.

 * @property {TrackObjectType} - The object type: "track".

 * @property {string} - The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the track.

 * @property {boolean} - Whether or not the track is from a local file.

 */
export type TrackObject = z.infer<typeof trackObject>;

/**
 * Zod schema for mapping API responses to the TrackObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const trackObjectResponse = z.lazy(() => {
  return z
    .object({
      album: simplifiedAlbumObjectResponse.optional(),
      artists: z.array(simplifiedArtistObjectResponse).optional(),
      available_markets: z.array(z.string()).optional(),
      disc_number: z.number().optional(),
      duration_ms: z.number().optional(),
      explicit: z.boolean().optional(),
      external_ids: externalIdObjectResponse.optional(),
      external_urls: externalUrlObjectResponse.optional(),
      href: z.string().optional(),
      id: z.string().optional(),
      is_playable: z.boolean().optional(),
      linked_from: z.any().optional(),
      restrictions: trackRestrictionObjectResponse.optional(),
      name: z.string().optional(),
      popularity: z.number().optional(),
      preview_url: z.string().optional().nullable(),
      track_number: z.number().optional(),
      type: trackObjectType.optional(),
      uri: z.string().optional(),
      is_local: z.boolean().optional(),
    })
    .transform((data) => ({
      album: data['album'],
      artists: data['artists'],
      availableMarkets: data['available_markets'],
      discNumber: data['disc_number'],
      durationMs: data['duration_ms'],
      explicit: data['explicit'],
      externalIds: data['external_ids'],
      externalUrls: data['external_urls'],
      href: data['href'],
      id: data['id'],
      isPlayable: data['is_playable'],
      linkedFrom: data['linked_from'],
      restrictions: data['restrictions'],
      name: data['name'],
      popularity: data['popularity'],
      previewUrl: data['preview_url'],
      trackNumber: data['track_number'],
      type: data['type'],
      uri: data['uri'],
      isLocal: data['is_local'],
    }));
});

/**
 * Zod schema for mapping the TrackObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const trackObjectRequest = z.lazy(() => {
  return z
    .object({
      album: simplifiedAlbumObjectRequest.optional(),
      artists: z.array(simplifiedArtistObjectRequest).optional(),
      availableMarkets: z.array(z.string()).optional(),
      discNumber: z.number().optional(),
      durationMs: z.number().optional(),
      explicit: z.boolean().optional(),
      externalIds: externalIdObjectRequest.optional(),
      externalUrls: externalUrlObjectRequest.optional(),
      href: z.string().optional(),
      id: z.string().optional(),
      isPlayable: z.boolean().optional(),
      linkedFrom: z.any().optional(),
      restrictions: trackRestrictionObjectRequest.optional(),
      name: z.string().optional(),
      popularity: z.number().optional(),
      previewUrl: z.string().optional().nullable(),
      trackNumber: z.number().optional(),
      type: trackObjectType.optional(),
      uri: z.string().optional(),
      isLocal: z.boolean().optional(),
    })
    .transform((data) => ({
      album: data['album'],
      artists: data['artists'],
      available_markets: data['availableMarkets'],
      disc_number: data['discNumber'],
      duration_ms: data['durationMs'],
      explicit: data['explicit'],
      external_ids: data['externalIds'],
      external_urls: data['externalUrls'],
      href: data['href'],
      id: data['id'],
      is_playable: data['isPlayable'],
      linked_from: data['linkedFrom'],
      restrictions: data['restrictions'],
      name: data['name'],
      popularity: data['popularity'],
      preview_url: data['previewUrl'],
      track_number: data['trackNumber'],
      type: data['type'],
      uri: data['uri'],
      is_local: data['isLocal'],
    }));
});
