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
  SimplifiedEpisodeObjectReleaseDatePrecision,
  simplifiedEpisodeObjectReleaseDatePrecision,
} from './simplified-episode-object-release-date-precision';
import {
  ResumePointObject,
  resumePointObject,
  resumePointObjectRequest,
  resumePointObjectResponse,
} from '../../common/resume-point-object';
import {
  SimplifiedEpisodeObjectType,
  simplifiedEpisodeObjectType,
} from './simplified-episode-object-type';
import {
  EpisodeRestrictionObject,
  episodeRestrictionObject,
  episodeRestrictionObjectRequest,
  episodeRestrictionObjectResponse,
} from '../../common/episode-restriction-object';

/**
 * Zod schema for the SimplifiedEpisodeObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const simplifiedEpisodeObject = z.lazy(() => {
  return z.object({
    audioPreviewUrl: z.string().nullable(),
    description: z.string(),
    htmlDescription: z.string(),
    durationMs: z.number(),
    explicit: z.boolean(),
    externalUrls: externalUrlObject,
    href: z.string(),
    id: z.string(),
    images: z.array(imageObject),
    isExternallyHosted: z.boolean(),
    isPlayable: z.boolean(),
    language: z.string().optional(),
    languages: z.array(z.string()),
    name: z.string(),
    releaseDate: z.string(),
    releaseDatePrecision: simplifiedEpisodeObjectReleaseDatePrecision,
    resumePoint: resumePointObject.optional(),
    type: simplifiedEpisodeObjectType,
    uri: z.string(),
    restrictions: episodeRestrictionObject.optional(),
  });
});

/**
 * 
 * @typedef  {SimplifiedEpisodeObject} simplifiedEpisodeObject   
 * @property {string} - A URL to a 30 second preview (MP3 format) of the episode. `null` if not available.

 * @property {string} - A description of the episode. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.

 * @property {string} - A description of the episode. This field may contain HTML tags.

 * @property {number} - The episode length in milliseconds.

 * @property {boolean} - Whether or not the episode has explicit content (true = yes it does; false = no it does not OR unknown).

 * @property {ExternalUrlObject} 
 * @property {string} - A link to the Web API endpoint providing full details of the episode.

 * @property {string} - The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the episode.

 * @property {ImageObject[]} - The cover art for the episode in various sizes, widest first.

 * @property {boolean} - True if the episode is hosted outside of Spotify's CDN.

 * @property {boolean} - True if the episode is playable in the given market. Otherwise false.

 * @property {string} - The language used in the episode, identified by a [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code. This field is deprecated and might be removed in the future. Please use the `languages` field instead.

 * @property {string[]} - A list of the languages used in the episode, identified by their [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639) code.

 * @property {string} - The name of the episode.

 * @property {string} - The date the episode was first released, for example `"1981-12-15"`. Depending on the precision, it might be shown as `"1981"` or `"1981-12"`.

 * @property {SimplifiedEpisodeObjectReleaseDatePrecision} - The precision with which `release_date` value is known.

 * @property {ResumePointObject} 
 * @property {SimplifiedEpisodeObjectType} - The object type.

 * @property {string} - The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the episode.

 * @property {EpisodeRestrictionObject} 
 */
export type SimplifiedEpisodeObject = z.infer<typeof simplifiedEpisodeObject>;

/**
 * Zod schema for mapping API responses to the SimplifiedEpisodeObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const simplifiedEpisodeObjectResponse = z.lazy(() => {
  return z
    .object({
      audio_preview_url: z.string().nullable(),
      description: z.string(),
      html_description: z.string(),
      duration_ms: z.number(),
      explicit: z.boolean(),
      external_urls: externalUrlObjectResponse,
      href: z.string(),
      id: z.string(),
      images: z.array(imageObjectResponse),
      is_externally_hosted: z.boolean(),
      is_playable: z.boolean(),
      language: z.string().optional(),
      languages: z.array(z.string()),
      name: z.string(),
      release_date: z.string(),
      release_date_precision: simplifiedEpisodeObjectReleaseDatePrecision,
      resume_point: resumePointObjectResponse.optional(),
      type: simplifiedEpisodeObjectType,
      uri: z.string(),
      restrictions: episodeRestrictionObjectResponse.optional(),
    })
    .transform((data) => ({
      audioPreviewUrl: data['audio_preview_url'],
      description: data['description'],
      htmlDescription: data['html_description'],
      durationMs: data['duration_ms'],
      explicit: data['explicit'],
      externalUrls: data['external_urls'],
      href: data['href'],
      id: data['id'],
      images: data['images'],
      isExternallyHosted: data['is_externally_hosted'],
      isPlayable: data['is_playable'],
      language: data['language'],
      languages: data['languages'],
      name: data['name'],
      releaseDate: data['release_date'],
      releaseDatePrecision: data['release_date_precision'],
      resumePoint: data['resume_point'],
      type: data['type'],
      uri: data['uri'],
      restrictions: data['restrictions'],
    }));
});

/**
 * Zod schema for mapping the SimplifiedEpisodeObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const simplifiedEpisodeObjectRequest = z.lazy(() => {
  return z
    .object({
      audioPreviewUrl: z.string().nullable(),
      description: z.string(),
      htmlDescription: z.string(),
      durationMs: z.number(),
      explicit: z.boolean(),
      externalUrls: externalUrlObjectRequest,
      href: z.string(),
      id: z.string(),
      images: z.array(imageObjectRequest),
      isExternallyHosted: z.boolean(),
      isPlayable: z.boolean(),
      language: z.string().optional(),
      languages: z.array(z.string()),
      name: z.string(),
      releaseDate: z.string(),
      releaseDatePrecision: simplifiedEpisodeObjectReleaseDatePrecision,
      resumePoint: resumePointObjectRequest.optional(),
      type: simplifiedEpisodeObjectType,
      uri: z.string(),
      restrictions: episodeRestrictionObjectRequest.optional(),
    })
    .transform((data) => ({
      audio_preview_url: data['audioPreviewUrl'],
      description: data['description'],
      html_description: data['htmlDescription'],
      duration_ms: data['durationMs'],
      explicit: data['explicit'],
      external_urls: data['externalUrls'],
      href: data['href'],
      id: data['id'],
      images: data['images'],
      is_externally_hosted: data['isExternallyHosted'],
      is_playable: data['isPlayable'],
      language: data['language'],
      languages: data['languages'],
      name: data['name'],
      release_date: data['releaseDate'],
      release_date_precision: data['releaseDatePrecision'],
      resume_point: data['resumePoint'],
      type: data['type'],
      uri: data['uri'],
      restrictions: data['restrictions'],
    }));
});
