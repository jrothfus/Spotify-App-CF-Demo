import { z } from 'zod';
import {
  AuthorObject,
  authorObject,
  authorObjectRequest,
  authorObjectResponse,
} from './author-object';
import {
  CopyrightObject,
  copyrightObject,
  copyrightObjectRequest,
  copyrightObjectResponse,
} from '../../common/copyright-object';
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
  NarratorObject,
  narratorObject,
  narratorObjectRequest,
  narratorObjectResponse,
} from './narrator-object';
import { AudiobookObjectType, audiobookObjectType } from './audiobook-object-type';
import {
  PagingSimplifiedChapterObject,
  pagingSimplifiedChapterObject,
  pagingSimplifiedChapterObjectRequest,
  pagingSimplifiedChapterObjectResponse,
} from './paging-simplified-chapter-object';

/**
 * Zod schema for the AudiobookObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const audiobookObject = z.lazy(() => {
  return z.object({
    authors: z.array(authorObject),
    availableMarkets: z.array(z.string()),
    copyrights: z.array(copyrightObject),
    description: z.string(),
    htmlDescription: z.string(),
    edition: z.string().optional(),
    explicit: z.boolean(),
    externalUrls: externalUrlObject,
    href: z.string(),
    id: z.string(),
    images: z.array(imageObject),
    languages: z.array(z.string()),
    mediaType: z.string(),
    name: z.string(),
    narrators: z.array(narratorObject),
    publisher: z.string(),
    type: audiobookObjectType,
    uri: z.string(),
    totalChapters: z.number(),
    chapters: pagingSimplifiedChapterObject,
  });
});

/**
 * 
 * @typedef  {AudiobookObject} audiobookObject   
 * @property {AuthorObject[]} - The author(s) for the audiobook.

 * @property {string[]} - A list of the countries in which the audiobook can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.

 * @property {CopyrightObject[]} - The copyright statements of the audiobook.

 * @property {string} - A description of the audiobook. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.

 * @property {string} - A description of the audiobook. This field may contain HTML tags.

 * @property {string} - The edition of the audiobook.

 * @property {boolean} - Whether or not the audiobook has explicit content (true = yes it does; false = no it does not OR unknown).

 * @property {ExternalUrlObject} 
 * @property {string} - A link to the Web API endpoint providing full details of the audiobook.

 * @property {string} - The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the audiobook.

 * @property {ImageObject[]} - The cover art for the audiobook in various sizes, widest first.

 * @property {string[]} - A list of the languages used in the audiobook, identified by their [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code.

 * @property {string} - The media type of the audiobook.

 * @property {string} - The name of the audiobook.

 * @property {NarratorObject[]} - The narrator(s) for the audiobook.

 * @property {string} - The publisher of the audiobook.

 * @property {AudiobookObjectType} - The object type.

 * @property {string} - The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the audiobook.

 * @property {number} - The number of chapters in this audiobook.

 * @property {PagingSimplifiedChapterObject} 
 */
export type AudiobookObject = z.infer<typeof audiobookObject>;

/**
 * Zod schema for mapping API responses to the AudiobookObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const audiobookObjectResponse = z.lazy(() => {
  return z
    .object({
      authors: z.array(authorObjectResponse),
      available_markets: z.array(z.string()),
      copyrights: z.array(copyrightObjectResponse),
      description: z.string(),
      html_description: z.string(),
      edition: z.string().optional(),
      explicit: z.boolean(),
      external_urls: externalUrlObjectResponse,
      href: z.string(),
      id: z.string(),
      images: z.array(imageObjectResponse),
      languages: z.array(z.string()),
      media_type: z.string(),
      name: z.string(),
      narrators: z.array(narratorObjectResponse),
      publisher: z.string(),
      type: audiobookObjectType,
      uri: z.string(),
      total_chapters: z.number(),
      chapters: pagingSimplifiedChapterObjectResponse,
    })
    .transform((data) => ({
      authors: data['authors'],
      availableMarkets: data['available_markets'],
      copyrights: data['copyrights'],
      description: data['description'],
      htmlDescription: data['html_description'],
      edition: data['edition'],
      explicit: data['explicit'],
      externalUrls: data['external_urls'],
      href: data['href'],
      id: data['id'],
      images: data['images'],
      languages: data['languages'],
      mediaType: data['media_type'],
      name: data['name'],
      narrators: data['narrators'],
      publisher: data['publisher'],
      type: data['type'],
      uri: data['uri'],
      totalChapters: data['total_chapters'],
      chapters: data['chapters'],
    }));
});

/**
 * Zod schema for mapping the AudiobookObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const audiobookObjectRequest = z.lazy(() => {
  return z
    .object({
      authors: z.array(authorObjectRequest),
      availableMarkets: z.array(z.string()),
      copyrights: z.array(copyrightObjectRequest),
      description: z.string(),
      htmlDescription: z.string(),
      edition: z.string().optional(),
      explicit: z.boolean(),
      externalUrls: externalUrlObjectRequest,
      href: z.string(),
      id: z.string(),
      images: z.array(imageObjectRequest),
      languages: z.array(z.string()),
      mediaType: z.string(),
      name: z.string(),
      narrators: z.array(narratorObjectRequest),
      publisher: z.string(),
      type: audiobookObjectType,
      uri: z.string(),
      totalChapters: z.number(),
      chapters: pagingSimplifiedChapterObjectRequest,
    })
    .transform((data) => ({
      authors: data['authors'],
      available_markets: data['availableMarkets'],
      copyrights: data['copyrights'],
      description: data['description'],
      html_description: data['htmlDescription'],
      edition: data['edition'],
      explicit: data['explicit'],
      external_urls: data['externalUrls'],
      href: data['href'],
      id: data['id'],
      images: data['images'],
      languages: data['languages'],
      media_type: data['mediaType'],
      name: data['name'],
      narrators: data['narrators'],
      publisher: data['publisher'],
      type: data['type'],
      uri: data['uri'],
      total_chapters: data['totalChapters'],
      chapters: data['chapters'],
    }));
});
