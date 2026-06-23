import { z } from 'zod';
import { AlbumObjectAlbumType, albumObjectAlbumType } from './album-object-album-type';
import {
  ExternalUrlObject,
  externalUrlObject,
  externalUrlObjectRequest,
  externalUrlObjectResponse,
} from '../../common/external-url-object';
import {
  ImageObject,
  imageObject,
  imageObjectRequest,
  imageObjectResponse,
} from '../../common/image-object';
import {
  AlbumObjectReleaseDatePrecision,
  albumObjectReleaseDatePrecision,
} from './album-object-release-date-precision';
import {
  AlbumRestrictionObject,
  albumRestrictionObject,
  albumRestrictionObjectRequest,
  albumRestrictionObjectResponse,
} from '../../common/album-restriction-object';
import { AlbumObjectType, albumObjectType } from './album-object-type';
import {
  SimplifiedArtistObject,
  simplifiedArtistObject,
  simplifiedArtistObjectRequest,
  simplifiedArtistObjectResponse,
} from '../../common/simplified-artist-object';
import {
  PagingSimplifiedTrackObject,
  pagingSimplifiedTrackObject,
  pagingSimplifiedTrackObjectRequest,
  pagingSimplifiedTrackObjectResponse,
} from './paging-simplified-track-object';
import {
  CopyrightObject,
  copyrightObject,
  copyrightObjectRequest,
  copyrightObjectResponse,
} from '../../common/copyright-object';
import {
  ExternalIdObject,
  externalIdObject,
  externalIdObjectRequest,
  externalIdObjectResponse,
} from '../../common/external-id-object';

/**
 * Zod schema for the AlbumObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const albumObject = z.lazy(() => {
  return z.object({
    albumType: albumObjectAlbumType,
    totalTracks: z.number(),
    availableMarkets: z.array(z.string()),
    externalUrls: externalUrlObject,
    href: z.string(),
    id: z.string(),
    images: z.array(imageObject),
    name: z.string(),
    releaseDate: z.string(),
    releaseDatePrecision: albumObjectReleaseDatePrecision,
    restrictions: albumRestrictionObject.optional(),
    type: albumObjectType,
    uri: z.string(),
    artists: z.array(simplifiedArtistObject).optional(),
    tracks: pagingSimplifiedTrackObject.optional(),
    copyrights: z.array(copyrightObject).optional(),
    externalIds: externalIdObject.optional(),
    genres: z.array(z.string()).optional(),
    label: z.string().optional(),
    popularity: z.number().optional(),
  });
});

/**
 * 
 * @typedef  {AlbumObject} albumObject   
 * @property {AlbumObjectAlbumType} - The type of the album.

 * @property {number} - The number of tracks in the album.
 * @property {string[]} - The markets in which the album is available: [ISO 3166-1 alpha-2 country codes](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). _``NOTE``: an album is considered available in a market when at least 1 of its tracks is available in that market._

 * @property {ExternalUrlObject} 
 * @property {string} - A link to the Web API endpoint providing full details of the album.

 * @property {string} - The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the album.

 * @property {ImageObject[]} - The cover art for the album in various sizes, widest first.

 * @property {string} - The name of the album. In case of an album takedown, the value may be an empty string.

 * @property {string} - The date the album was first released.

 * @property {AlbumObjectReleaseDatePrecision} - The precision with which `release_date` value is known.

 * @property {AlbumRestrictionObject} 
 * @property {AlbumObjectType} - The object type.

 * @property {string} - The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the album.

 * @property {SimplifiedArtistObject[]} - The artists of the album. Each artist object includes a link in `href` to more detailed information about the artist.

 * @property {PagingSimplifiedTrackObject} 
 * @property {CopyrightObject[]} - The copyright statements of the album.

 * @property {ExternalIdObject} 
 * @property {string[]} - ``Deprecated`` The array is always empty.

 * @property {string} - The label associated with the album.

 * @property {number} - The popularity of the album. The value will be between 0 and 100, with 100 being the most popular.

 */
export type AlbumObject = z.infer<typeof albumObject>;

/**
 * Zod schema for mapping API responses to the AlbumObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const albumObjectResponse = z.lazy(() => {
  return z
    .object({
      album_type: albumObjectAlbumType,
      total_tracks: z.number(),
      available_markets: z.array(z.string()),
      external_urls: externalUrlObjectResponse,
      href: z.string(),
      id: z.string(),
      images: z.array(imageObjectResponse),
      name: z.string(),
      release_date: z.string(),
      release_date_precision: albumObjectReleaseDatePrecision,
      restrictions: albumRestrictionObjectResponse.optional(),
      type: albumObjectType,
      uri: z.string(),
      artists: z.array(simplifiedArtistObjectResponse).optional(),
      tracks: pagingSimplifiedTrackObjectResponse.optional(),
      copyrights: z.array(copyrightObjectResponse).optional(),
      external_ids: externalIdObjectResponse.optional(),
      genres: z.array(z.string()).optional(),
      label: z.string().optional(),
      popularity: z.number().optional(),
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
      tracks: data['tracks'],
      copyrights: data['copyrights'],
      externalIds: data['external_ids'],
      genres: data['genres'],
      label: data['label'],
      popularity: data['popularity'],
    }));
});

/**
 * Zod schema for mapping the AlbumObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const albumObjectRequest = z.lazy(() => {
  return z
    .object({
      albumType: albumObjectAlbumType,
      totalTracks: z.number(),
      availableMarkets: z.array(z.string()),
      externalUrls: externalUrlObjectRequest,
      href: z.string(),
      id: z.string(),
      images: z.array(imageObjectRequest),
      name: z.string(),
      releaseDate: z.string(),
      releaseDatePrecision: albumObjectReleaseDatePrecision,
      restrictions: albumRestrictionObjectRequest.optional(),
      type: albumObjectType,
      uri: z.string(),
      artists: z.array(simplifiedArtistObjectRequest).optional(),
      tracks: pagingSimplifiedTrackObjectRequest.optional(),
      copyrights: z.array(copyrightObjectRequest).optional(),
      externalIds: externalIdObjectRequest.optional(),
      genres: z.array(z.string()).optional(),
      label: z.string().optional(),
      popularity: z.number().optional(),
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
      tracks: data['tracks'],
      copyrights: data['copyrights'],
      external_ids: data['externalIds'],
      genres: data['genres'],
      label: data['label'],
      popularity: data['popularity'],
    }));
});
