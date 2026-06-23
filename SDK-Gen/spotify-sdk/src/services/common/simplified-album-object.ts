import { z } from 'zod';
import {
  SimplifiedAlbumObjectAlbumType,
  simplifiedAlbumObjectAlbumType,
} from '../albums/models/simplified-album-object-album-type';
import {
  ExternalUrlObject,
  externalUrlObject,
  externalUrlObjectRequest,
  externalUrlObjectResponse,
} from './external-url-object';
import { ImageObject, imageObject, imageObjectRequest, imageObjectResponse } from './image-object';
import {
  SimplifiedAlbumObjectReleaseDatePrecision,
  simplifiedAlbumObjectReleaseDatePrecision,
} from '../albums/models/simplified-album-object-release-date-precision';
import {
  AlbumRestrictionObject,
  albumRestrictionObject,
  albumRestrictionObjectRequest,
  albumRestrictionObjectResponse,
} from './album-restriction-object';
import {
  SimplifiedAlbumObjectType,
  simplifiedAlbumObjectType,
} from '../albums/models/simplified-album-object-type';
import {
  SimplifiedArtistObject,
  simplifiedArtistObject,
  simplifiedArtistObjectRequest,
  simplifiedArtistObjectResponse,
} from './simplified-artist-object';

/**
 * Zod schema for the SimplifiedAlbumObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const simplifiedAlbumObject = z.lazy(() => {
  return z.object({
    albumType: simplifiedAlbumObjectAlbumType,
    totalTracks: z.number(),
    availableMarkets: z.array(z.string()),
    externalUrls: externalUrlObject,
    href: z.string(),
    id: z.string(),
    images: z.array(imageObject),
    name: z.string(),
    releaseDate: z.string(),
    releaseDatePrecision: simplifiedAlbumObjectReleaseDatePrecision,
    restrictions: albumRestrictionObject.optional(),
    type: simplifiedAlbumObjectType,
    uri: z.string(),
    artists: z.array(simplifiedArtistObject),
  });
});

/**
 * 
 * @typedef  {SimplifiedAlbumObject} simplifiedAlbumObject   
 * @property {SimplifiedAlbumObjectAlbumType} - The type of the album.

 * @property {number} - The number of tracks in the album.
 * @property {string[]} - The markets in which the album is available: [ISO 3166-1 alpha-2 country codes](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). _``NOTE``: an album is considered available in a market when at least 1 of its tracks is available in that market._

 * @property {ExternalUrlObject} 
 * @property {string} - A link to the Web API endpoint providing full details of the album.

 * @property {string} - The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the album.

 * @property {ImageObject[]} - The cover art for the album in various sizes, widest first.

 * @property {string} - The name of the album. In case of an album takedown, the value may be an empty string.

 * @property {string} - The date the album was first released.

 * @property {SimplifiedAlbumObjectReleaseDatePrecision} - The precision with which `release_date` value is known.

 * @property {AlbumRestrictionObject} 
 * @property {SimplifiedAlbumObjectType} - The object type.

 * @property {string} - The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the album.

 * @property {SimplifiedArtistObject[]} - The artists of the album. Each artist object includes a link in `href` to more detailed information about the artist.

 */
export type SimplifiedAlbumObject = z.infer<typeof simplifiedAlbumObject>;

/**
 * Zod schema for mapping API responses to the SimplifiedAlbumObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const simplifiedAlbumObjectResponse = z.lazy(() => {
  return z
    .object({
      album_type: simplifiedAlbumObjectAlbumType,
      total_tracks: z.number(),
      available_markets: z.array(z.string()),
      external_urls: externalUrlObjectResponse,
      href: z.string(),
      id: z.string(),
      images: z.array(imageObjectResponse),
      name: z.string(),
      release_date: z.string(),
      release_date_precision: simplifiedAlbumObjectReleaseDatePrecision,
      restrictions: albumRestrictionObjectResponse.optional(),
      type: simplifiedAlbumObjectType,
      uri: z.string(),
      artists: z.array(simplifiedArtistObjectResponse),
    })
    .transform((data) => ({
      albumType: data['album_type'],
      totalTracks: data['total_tracks'],
      availableMarkets: data['available_markets'],
      externalUrls: data['external_urls'],
      href: data['href'],
      id: data['id'],
      images: data['images'],
      name: data['name'],
      releaseDate: data['release_date'],
      releaseDatePrecision: data['release_date_precision'],
      restrictions: data['restrictions'],
      type: data['type'],
      uri: data['uri'],
      artists: data['artists'],
    }));
});

/**
 * Zod schema for mapping the SimplifiedAlbumObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const simplifiedAlbumObjectRequest = z.lazy(() => {
  return z
    .object({
      albumType: simplifiedAlbumObjectAlbumType,
      totalTracks: z.number(),
      availableMarkets: z.array(z.string()),
      externalUrls: externalUrlObjectRequest,
      href: z.string(),
      id: z.string(),
      images: z.array(imageObjectRequest),
      name: z.string(),
      releaseDate: z.string(),
      releaseDatePrecision: simplifiedAlbumObjectReleaseDatePrecision,
      restrictions: albumRestrictionObjectRequest.optional(),
      type: simplifiedAlbumObjectType,
      uri: z.string(),
      artists: z.array(simplifiedArtistObjectRequest),
    })
    .transform((data) => ({
      album_type: data['albumType'],
      total_tracks: data['totalTracks'],
      available_markets: data['availableMarkets'],
      external_urls: data['externalUrls'],
      href: data['href'],
      id: data['id'],
      images: data['images'],
      name: data['name'],
      release_date: data['releaseDate'],
      release_date_precision: data['releaseDatePrecision'],
      restrictions: data['restrictions'],
      type: data['type'],
      uri: data['uri'],
      artists: data['artists'],
    }));
});
