import { z } from 'zod';
import {
  CopyrightObject,
  copyrightObject,
  copyrightObjectRequest,
  copyrightObjectResponse,
} from './copyright-object';
import {
  ExternalUrlObject,
  externalUrlObject,
  externalUrlObjectRequest,
  externalUrlObjectResponse,
} from './external-url-object';
import { ImageObject, imageObject, imageObjectRequest, imageObjectResponse } from './image-object';
import {
  SimplifiedShowObjectType,
  simplifiedShowObjectType,
} from '../shows/models/simplified-show-object-type';

/**
 * Zod schema for the SimplifiedShowObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const simplifiedShowObject = z.lazy(() => {
  return z.object({
    availableMarkets: z.array(z.string()),
    copyrights: z.array(copyrightObject),
    description: z.string(),
    htmlDescription: z.string(),
    explicit: z.boolean(),
    externalUrls: externalUrlObject,
    href: z.string(),
    id: z.string(),
    images: z.array(imageObject),
    isExternallyHosted: z.boolean(),
    languages: z.array(z.string()),
    mediaType: z.string(),
    name: z.string(),
    publisher: z.string(),
    type: simplifiedShowObjectType,
    uri: z.string(),
    totalEpisodes: z.number(),
  });
});

/**
 * 
 * @typedef  {SimplifiedShowObject} simplifiedShowObject   
 * @property {string[]} - A list of the countries in which the show can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.

 * @property {CopyrightObject[]} - The copyright statements of the show.

 * @property {string} - A description of the show. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.

 * @property {string} - A description of the show. This field may contain HTML tags.

 * @property {boolean} - Whether or not the show has explicit content (true = yes it does; false = no it does not OR unknown).

 * @property {ExternalUrlObject} 
 * @property {string} - A link to the Web API endpoint providing full details of the show.

 * @property {string} - The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the show.

 * @property {ImageObject[]} - The cover art for the show in various sizes, widest first.

 * @property {boolean} - True if all of the shows episodes are hosted outside of Spotify's CDN. This field might be `null` in some cases.

 * @property {string[]} - A list of the languages used in the show, identified by their [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code.

 * @property {string} - The media type of the show.

 * @property {string} - The name of the episode.

 * @property {string} - The publisher of the show.

 * @property {SimplifiedShowObjectType} - The object type.

 * @property {string} - The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the show.

 * @property {number} - The total number of episodes in the show.

 */
export type SimplifiedShowObject = z.infer<typeof simplifiedShowObject>;

/**
 * Zod schema for mapping API responses to the SimplifiedShowObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const simplifiedShowObjectResponse = z.lazy(() => {
  return z
    .object({
      available_markets: z.array(z.string()),
      copyrights: z.array(copyrightObjectResponse),
      description: z.string(),
      html_description: z.string(),
      explicit: z.boolean(),
      external_urls: externalUrlObjectResponse,
      href: z.string(),
      id: z.string(),
      images: z.array(imageObjectResponse),
      is_externally_hosted: z.boolean(),
      languages: z.array(z.string()),
      media_type: z.string(),
      name: z.string(),
      publisher: z.string(),
      type: simplifiedShowObjectType,
      uri: z.string(),
      total_episodes: z.number(),
    })
    .transform((data) => ({
      availableMarkets: data['available_markets'],
      copyrights: data['copyrights'],
      description: data['description'],
      htmlDescription: data['html_description'],
      explicit: data['explicit'],
      externalUrls: data['external_urls'],
      href: data['href'],
      id: data['id'],
      images: data['images'],
      isExternallyHosted: data['is_externally_hosted'],
      languages: data['languages'],
      mediaType: data['media_type'],
      name: data['name'],
      publisher: data['publisher'],
      type: data['type'],
      uri: data['uri'],
      totalEpisodes: data['total_episodes'],
    }));
});

/**
 * Zod schema for mapping the SimplifiedShowObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const simplifiedShowObjectRequest = z.lazy(() => {
  return z
    .object({
      availableMarkets: z.array(z.string()),
      copyrights: z.array(copyrightObjectRequest),
      description: z.string(),
      htmlDescription: z.string(),
      explicit: z.boolean(),
      externalUrls: externalUrlObjectRequest,
      href: z.string(),
      id: z.string(),
      images: z.array(imageObjectRequest),
      isExternallyHosted: z.boolean(),
      languages: z.array(z.string()),
      mediaType: z.string(),
      name: z.string(),
      publisher: z.string(),
      type: simplifiedShowObjectType,
      uri: z.string(),
      totalEpisodes: z.number(),
    })
    .transform((data) => ({
      available_markets: data['availableMarkets'],
      copyrights: data['copyrights'],
      description: data['description'],
      html_description: data['htmlDescription'],
      explicit: data['explicit'],
      external_urls: data['externalUrls'],
      href: data['href'],
      id: data['id'],
      images: data['images'],
      is_externally_hosted: data['isExternallyHosted'],
      languages: data['languages'],
      media_type: data['mediaType'],
      name: data['name'],
      publisher: data['publisher'],
      type: data['type'],
      uri: data['uri'],
      total_episodes: data['totalEpisodes'],
    }));
});
