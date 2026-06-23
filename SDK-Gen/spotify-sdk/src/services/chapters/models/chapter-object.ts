import { z } from 'zod';
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
  ChapterObjectReleaseDatePrecision,
  chapterObjectReleaseDatePrecision,
} from './chapter-object-release-date-precision';
import {
  ResumePointObject,
  resumePointObject,
  resumePointObjectRequest,
  resumePointObjectResponse,
} from '../../common/resume-point-object';
import { ChapterObjectType, chapterObjectType } from './chapter-object-type';
import {
  ChapterRestrictionObject,
  chapterRestrictionObject,
  chapterRestrictionObjectRequest,
  chapterRestrictionObjectResponse,
} from '../../common/chapter-restriction-object';
import {
  SimplifiedAudiobookObject,
  simplifiedAudiobookObject,
  simplifiedAudiobookObjectRequest,
  simplifiedAudiobookObjectResponse,
} from '../../common/simplified-audiobook-object';

/**
 * Zod schema for the ChapterObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const chapterObject = z.lazy(() => {
  return z.object({
    audioPreviewUrl: z.string().nullable(),
    availableMarkets: z.array(z.string()).optional(),
    chapterNumber: z.number(),
    description: z.string(),
    htmlDescription: z.string(),
    durationMs: z.number(),
    explicit: z.boolean(),
    externalUrls: externalUrlObject,
    href: z.string(),
    id: z.string(),
    images: z.array(imageObject),
    isPlayable: z.boolean(),
    languages: z.array(z.string()),
    name: z.string(),
    releaseDate: z.string(),
    releaseDatePrecision: chapterObjectReleaseDatePrecision,
    resumePoint: resumePointObject.optional(),
    type: chapterObjectType,
    uri: z.string(),
    restrictions: chapterRestrictionObject.optional(),
    audiobook: simplifiedAudiobookObject,
  });
});

/**
 * 
 * @typedef  {ChapterObject} chapterObject   
 * @property {string} - A URL to a 30 second preview (MP3 format) of the chapter. `null` if not available.

 * @property {string[]} - A list of the countries in which the chapter can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.

 * @property {number} - The number of the chapter

 * @property {string} - A description of the chapter. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.

 * @property {string} - A description of the chapter. This field may contain HTML tags.

 * @property {number} - The chapter length in milliseconds.

 * @property {boolean} - Whether or not the chapter has explicit content (true = yes it does; false = no it does not OR unknown).

 * @property {ExternalUrlObject} 
 * @property {string} - A link to the Web API endpoint providing full details of the chapter.

 * @property {string} - The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the chapter.

 * @property {ImageObject[]} - The cover art for the chapter in various sizes, widest first.

 * @property {boolean} - True if the chapter is playable in the given market. Otherwise false.

 * @property {string[]} - A list of the languages used in the chapter, identified by their [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639) code.

 * @property {string} - The name of the chapter.

 * @property {string} - The date the chapter was first released, for example `"1981-12-15"`. Depending on the precision, it might be shown as `"1981"` or `"1981-12"`.

 * @property {ChapterObjectReleaseDatePrecision} - The precision with which `release_date` value is known.

 * @property {ResumePointObject} 
 * @property {ChapterObjectType} - The object type.

 * @property {string} - The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the chapter.

 * @property {ChapterRestrictionObject} 
 * @property {SimplifiedAudiobookObject} 
 */
export type ChapterObject = z.infer<typeof chapterObject>;

/**
 * Zod schema for mapping API responses to the ChapterObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const chapterObjectResponse = z.lazy(() => {
  return z
    .object({
      audio_preview_url: z.string().nullable(),
      available_markets: z.array(z.string()).optional(),
      chapter_number: z.number(),
      description: z.string(),
      html_description: z.string(),
      duration_ms: z.number(),
      explicit: z.boolean(),
      external_urls: externalUrlObjectResponse,
      href: z.string(),
      id: z.string(),
      images: z.array(imageObjectResponse),
      is_playable: z.boolean(),
      languages: z.array(z.string()),
      name: z.string(),
      release_date: z.string(),
      release_date_precision: chapterObjectReleaseDatePrecision,
      resume_point: resumePointObjectResponse.optional(),
      type: chapterObjectType,
      uri: z.string(),
      restrictions: chapterRestrictionObjectResponse.optional(),
      audiobook: simplifiedAudiobookObjectResponse,
    })
    .transform((data) => ({
      audioPreviewUrl: data['audio_preview_url'],
      availableMarkets: data['available_markets'],
      chapterNumber: data['chapter_number'],
      description: data['description'],
      htmlDescription: data['html_description'],
      durationMs: data['duration_ms'],
      explicit: data['explicit'],
      externalUrls: data['external_urls'],
      href: data['href'],
      id: data['id'],
      images: data['images'],
      isPlayable: data['is_playable'],
      languages: data['languages'],
      name: data['name'],
      releaseDate: data['release_date'],
      releaseDatePrecision: data['release_date_precision'],
      resumePoint: data['resume_point'],
      type: data['type'],
      uri: data['uri'],
      restrictions: data['restrictions'],
      audiobook: data['audiobook'],
    }));
});

/**
 * Zod schema for mapping the ChapterObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const chapterObjectRequest = z.lazy(() => {
  return z
    .object({
      audioPreviewUrl: z.string().nullable(),
      availableMarkets: z.array(z.string()).optional(),
      chapterNumber: z.number(),
      description: z.string(),
      htmlDescription: z.string(),
      durationMs: z.number(),
      explicit: z.boolean(),
      externalUrls: externalUrlObjectRequest,
      href: z.string(),
      id: z.string(),
      images: z.array(imageObjectRequest),
      isPlayable: z.boolean(),
      languages: z.array(z.string()),
      name: z.string(),
      releaseDate: z.string(),
      releaseDatePrecision: chapterObjectReleaseDatePrecision,
      resumePoint: resumePointObjectRequest.optional(),
      type: chapterObjectType,
      uri: z.string(),
      restrictions: chapterRestrictionObjectRequest.optional(),
      audiobook: simplifiedAudiobookObjectRequest,
    })
    .transform((data) => ({
      audio_preview_url: data['audioPreviewUrl'],
      available_markets: data['availableMarkets'],
      chapter_number: data['chapterNumber'],
      description: data['description'],
      html_description: data['htmlDescription'],
      duration_ms: data['durationMs'],
      explicit: data['explicit'],
      external_urls: data['externalUrls'],
      href: data['href'],
      id: data['id'],
      images: data['images'],
      is_playable: data['isPlayable'],
      languages: data['languages'],
      name: data['name'],
      release_date: data['releaseDate'],
      release_date_precision: data['releaseDatePrecision'],
      resume_point: data['resumePoint'],
      type: data['type'],
      uri: data['uri'],
      restrictions: data['restrictions'],
      audiobook: data['audiobook'],
    }));
});
