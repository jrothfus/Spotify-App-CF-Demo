import { z } from 'zod';
import {
  ArtistDiscographyAlbumObjectAlbumType,
  artistDiscographyAlbumObjectAlbumType,
} from './artist-discography-album-object-album-type';
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
  ArtistDiscographyAlbumObjectReleaseDatePrecision,
  artistDiscographyAlbumObjectReleaseDatePrecision,
} from './artist-discography-album-object-release-date-precision';
import {
  AlbumRestrictionObject,
  albumRestrictionObject,
  albumRestrictionObjectRequest,
  albumRestrictionObjectResponse,
} from '../../common/album-restriction-object';
import {
  ArtistDiscographyAlbumObjectType,
  artistDiscographyAlbumObjectType,
} from './artist-discography-album-object-type';
import {
  SimplifiedArtistObject,
  simplifiedArtistObject,
  simplifiedArtistObjectRequest,
  simplifiedArtistObjectResponse,
} from '../../common/simplified-artist-object';
import { AlbumGroup, albumGroup } from './album-group';

/**
 * Zod schema for the ArtistDiscographyAlbumObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const artistDiscographyAlbumObject = z.lazy(() => {
  return z.object({
    albumType: artistDiscographyAlbumObjectAlbumType,
    totalTracks: z.number(),
    availableMarkets: z.array(z.string()),
    externalUrls: externalUrlObject,
    href: z.string(),
    id: z.string(),
    images: z.array(imageObject),
    name: z.string(),
    releaseDate: z.string(),
    releaseDatePrecision: artistDiscographyAlbumObjectReleaseDatePrecision,
    restrictions: albumRestrictionObject.optional(),
    type: artistDiscographyAlbumObjectType,
    uri: z.string(),
    artists: z.array(simplifiedArtistObject),
    albumGroup: albumGroup,
  });
});

/**
 * 
 * @typedef  {ArtistDiscographyAlbumObject} artistDiscographyAlbumObject   
 * @property {ArtistDiscographyAlbumObjectAlbumType} - The type of the album.

 * @property {number} - The number of tracks in the album.
 * @property {string[]} - The markets in which the album is available: [ISO 3166-1 alpha-2 country codes](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). _``NOTE``: an album is considered available in a market when at least 1 of its tracks is available in that market._

 * @property {ExternalUrlObject} 
 * @property {string} - A link to the Web API endpoint providing full details of the album.

 * @property {string} - The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the album.

 * @property {ImageObject[]} - The cover art for the album in various sizes, widest first.

 * @property {string} - The name of the album. In case of an album takedown, the value may be an empty string.

 * @property {string} - The date the album was first released.

 * @property {ArtistDiscographyAlbumObjectReleaseDatePrecision} - The precision with which `release_date` value is known.

 * @property {AlbumRestrictionObject} 
 * @property {ArtistDiscographyAlbumObjectType} - The object type.

 * @property {string} - The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the album.

 * @property {SimplifiedArtistObject[]} - The artists of the album. Each artist object includes a link in `href` to more detailed information about the artist.

 * @property {AlbumGroup} - This field describes the relationship between the artist and the album.

 */
export type ArtistDiscographyAlbumObject = z.infer<typeof artistDiscographyAlbumObject>;

/**
 * Zod schema for mapping API responses to the ArtistDiscographyAlbumObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const artistDiscographyAlbumObjectResponse = z.lazy(() => {
  return z
    .object({
      album_type: artistDiscographyAlbumObjectAlbumType,
      total_tracks: z.number(),
      available_markets: z.array(z.string()),
      external_urls: externalUrlObjectResponse,
      href: z.string(),
      id: z.string(),
      images: z.array(imageObjectResponse),
      name: z.string(),
      release_date: z.string(),
      release_date_precision: artistDiscographyAlbumObjectReleaseDatePrecision,
      restrictions: albumRestrictionObjectResponse.optional(),
      type: artistDiscographyAlbumObjectType,
      uri: z.string(),
      artists: z.array(simplifiedArtistObjectResponse),
      album_group: albumGroup,
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
      albumGroup: data['album_group'],
    }));
});

/**
 * Zod schema for mapping the ArtistDiscographyAlbumObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const artistDiscographyAlbumObjectRequest = z.lazy(() => {
  return z
    .object({
      albumType: artistDiscographyAlbumObjectAlbumType,
      totalTracks: z.number(),
      availableMarkets: z.array(z.string()),
      externalUrls: externalUrlObjectRequest,
      href: z.string(),
      id: z.string(),
      images: z.array(imageObjectRequest),
      name: z.string(),
      releaseDate: z.string(),
      releaseDatePrecision: artistDiscographyAlbumObjectReleaseDatePrecision,
      restrictions: albumRestrictionObjectRequest.optional(),
      type: artistDiscographyAlbumObjectType,
      uri: z.string(),
      artists: z.array(simplifiedArtistObjectRequest),
      albumGroup: albumGroup,
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
      album_group: data['albumGroup'],
    }));
});
