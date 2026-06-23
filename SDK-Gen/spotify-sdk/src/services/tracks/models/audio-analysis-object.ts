import { z } from 'zod';
import { Meta, meta, metaRequest, metaResponse } from './meta';
import {
  AudioAnalysisObjectTrack,
  audioAnalysisObjectTrack,
  audioAnalysisObjectTrackRequest,
  audioAnalysisObjectTrackResponse,
} from './audio-analysis-object-track';
import {
  TimeIntervalObject,
  timeIntervalObject,
  timeIntervalObjectRequest,
  timeIntervalObjectResponse,
} from './time-interval-object';
import {
  SectionObject,
  sectionObject,
  sectionObjectRequest,
  sectionObjectResponse,
} from './section-object';
import {
  SegmentObject,
  segmentObject,
  segmentObjectRequest,
  segmentObjectResponse,
} from './segment-object';

/**
 * Zod schema for the AudioAnalysisObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const audioAnalysisObject = z.lazy(() => {
  return z.object({
    meta: meta.optional(),
    track: audioAnalysisObjectTrack.optional(),
    bars: z.array(timeIntervalObject).optional(),
    beats: z.array(timeIntervalObject).optional(),
    sections: z.array(sectionObject).optional(),
    segments: z.array(segmentObject).optional(),
    tatums: z.array(timeIntervalObject).optional(),
  });
});

/**
 *
 * @typedef  {AudioAnalysisObject} audioAnalysisObject
 * @property {Meta}
 * @property {AudioAnalysisObjectTrack}
 * @property {TimeIntervalObject[]} - The time intervals of the bars throughout the track. A bar (or measure) is a segment of time defined as a given number of beats.
 * @property {TimeIntervalObject[]} - The time intervals of beats throughout the track. A beat is the basic time unit of a piece of music; for example, each tick of a metronome. Beats are typically multiples of tatums.
 * @property {SectionObject[]} - Sections are defined by large variations in rhythm or timbre, e.g. chorus, verse, bridge, guitar solo, etc. Each section contains its own descriptions of tempo, key, mode, time_signature, and loudness.
 * @property {SegmentObject[]} - Each segment contains a roughly conisistent sound throughout its duration.
 * @property {TimeIntervalObject[]} - A tatum represents the lowest regular pulse train that a listener intuitively infers from the timing of perceived musical events (segments).
 */
export type AudioAnalysisObject = z.infer<typeof audioAnalysisObject>;

/**
 * Zod schema for mapping API responses to the AudioAnalysisObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const audioAnalysisObjectResponse = z.lazy(() => {
  return z
    .object({
      meta: metaResponse.optional(),
      track: audioAnalysisObjectTrackResponse.optional(),
      bars: z.array(timeIntervalObjectResponse).optional(),
      beats: z.array(timeIntervalObjectResponse).optional(),
      sections: z.array(sectionObjectResponse).optional(),
      segments: z.array(segmentObjectResponse).optional(),
      tatums: z.array(timeIntervalObjectResponse).optional(),
    })
    .transform((data) => ({
      meta: data['meta'],
      track: data['track'],
      bars: data['bars'],
      beats: data['beats'],
      sections: data['sections'],
      segments: data['segments'],
      tatums: data['tatums'],
    }));
});

/**
 * Zod schema for mapping the AudioAnalysisObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const audioAnalysisObjectRequest = z.lazy(() => {
  return z
    .object({
      meta: metaRequest.optional(),
      track: audioAnalysisObjectTrackRequest.optional(),
      bars: z.array(timeIntervalObjectRequest).optional(),
      beats: z.array(timeIntervalObjectRequest).optional(),
      sections: z.array(sectionObjectRequest).optional(),
      segments: z.array(segmentObjectRequest).optional(),
      tatums: z.array(timeIntervalObjectRequest).optional(),
    })
    .transform((data) => ({
      meta: data['meta'],
      track: data['track'],
      bars: data['bars'],
      beats: data['beats'],
      sections: data['sections'],
      segments: data['segments'],
      tatums: data['tatums'],
    }));
});
