import { z } from 'zod';
import { Mode, mode } from './mode';

/**
 * Zod schema for the SectionObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const sectionObject = z.lazy(() => {
  return z.object({
    start: z.number().optional(),
    duration: z.number().optional(),
    confidence: z.number().gte(0).lte(1).optional(),
    loudness: z.number().optional(),
    tempo: z.number().optional(),
    tempoConfidence: z.number().gte(0).lte(1).optional(),
    key: z.number().optional(),
    keyConfidence: z.number().gte(0).lte(1).optional(),
    mode: mode.optional(),
    modeConfidence: z.number().gte(0).lte(1).optional(),
    timeSignature: z.number().gte(3).lte(7).optional(),
    timeSignatureConfidence: z.number().gte(0).lte(1).optional(),
  });
});

/**
 *
 * @typedef  {SectionObject} sectionObject
 * @property {number} - The starting point (in seconds) of the section.
 * @property {number} - The duration (in seconds) of the section.
 * @property {number} - The confidence, from 0.0 to 1.0, of the reliability of the section's "designation".
 * @property {number} - The overall loudness of the section in decibels (dB). Loudness values are useful for comparing relative loudness of sections within tracks.
 * @property {number} - The overall estimated tempo of the section in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.
 * @property {number} - The confidence, from 0.0 to 1.0, of the reliability of the tempo. Some tracks contain tempo changes or sounds which don't contain tempo (like pure speech) which would correspond to a low value in this field.
 * @property {number} - The estimated overall key of the section. The values in this field ranging from 0 to 11 mapping to pitches using standard Pitch Class notation (E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on). If no key was detected, the value is -1.
 * @property {number} - The confidence, from 0.0 to 1.0, of the reliability of the key. Songs with many key changes may correspond to low values in this field.
 * @property {Mode} - Indicates the modality (major or minor) of a section, the type of scale from which its melodic content is derived. This field will contain a 0 for "minor", a 1 for "major", or a -1 for no result. Note that the major key (e.g. C major) could more likely be confused with the minor key at 3 semitones lower (e.g. A minor) as both keys carry the same pitches.
 * @property {number} - The confidence, from 0.0 to 1.0, of the reliability of the `mode`.
 * @property {number} - An estimated time signature. The time signature (meter) is a notational convention to specify how many beats are in each bar (or measure). The time signature ranges from 3 to 7 indicating time signatures of "3/4", to "7/4".
 * @property {number} - The confidence, from 0.0 to 1.0, of the reliability of the `time_signature`. Sections with time signature changes may correspond to low values in this field.
 */
export type SectionObject = z.infer<typeof sectionObject>;

/**
 * Zod schema for mapping API responses to the SectionObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const sectionObjectResponse = z.lazy(() => {
  return z
    .object({
      start: z.number().optional(),
      duration: z.number().optional(),
      confidence: z.number().gte(0).lte(1).optional(),
      loudness: z.number().optional(),
      tempo: z.number().optional(),
      tempo_confidence: z.number().gte(0).lte(1).optional(),
      key: z.number().optional(),
      key_confidence: z.number().gte(0).lte(1).optional(),
      mode: mode.optional(),
      mode_confidence: z.number().gte(0).lte(1).optional(),
      time_signature: z.number().gte(3).lte(7).optional(),
      time_signature_confidence: z.number().gte(0).lte(1).optional(),
    })
    .transform((data) => ({
      start: data['start'],
      duration: data['duration'],
      confidence: data['confidence'],
      loudness: data['loudness'],
      tempo: data['tempo'],
      tempoConfidence: data['tempo_confidence'],
      key: data['key'],
      keyConfidence: data['key_confidence'],
      mode: data['mode'],
      modeConfidence: data['mode_confidence'],
      timeSignature: data['time_signature'],
      timeSignatureConfidence: data['time_signature_confidence'],
    }));
});

/**
 * Zod schema for mapping the SectionObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const sectionObjectRequest = z.lazy(() => {
  return z
    .object({
      start: z.number().optional(),
      duration: z.number().optional(),
      confidence: z.number().gte(0).lte(1).optional(),
      loudness: z.number().optional(),
      tempo: z.number().optional(),
      tempoConfidence: z.number().gte(0).lte(1).optional(),
      key: z.number().optional(),
      keyConfidence: z.number().gte(0).lte(1).optional(),
      mode: mode.optional(),
      modeConfidence: z.number().gte(0).lte(1).optional(),
      timeSignature: z.number().gte(3).lte(7).optional(),
      timeSignatureConfidence: z.number().gte(0).lte(1).optional(),
    })
    .transform((data) => ({
      start: data['start'],
      duration: data['duration'],
      confidence: data['confidence'],
      loudness: data['loudness'],
      tempo: data['tempo'],
      tempo_confidence: data['tempoConfidence'],
      key: data['key'],
      key_confidence: data['keyConfidence'],
      mode: data['mode'],
      mode_confidence: data['modeConfidence'],
      time_signature: data['timeSignature'],
      time_signature_confidence: data['timeSignatureConfidence'],
    }));
});
