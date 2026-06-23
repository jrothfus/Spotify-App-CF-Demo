import { z } from 'zod';

/**
 * Zod schema for the AudioAnalysisObjectTrack model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const audioAnalysisObjectTrack = z.lazy(() => {
  return z.object({
    numSamples: z.number().optional(),
    duration: z.number().optional(),
    sampleMd5: z.string().optional(),
    offsetSeconds: z.number().optional(),
    windowSeconds: z.number().optional(),
    analysisSampleRate: z.number().optional(),
    analysisChannels: z.number().optional(),
    endOfFadeIn: z.number().optional(),
    startOfFadeOut: z.number().optional(),
    loudness: z.number().optional(),
    tempo: z.number().optional(),
    tempoConfidence: z.number().gte(0).lte(1).optional(),
    timeSignature: z.number().gte(3).lte(7).optional(),
    timeSignatureConfidence: z.number().gte(0).lte(1).optional(),
    key: z.number().gte(-1).lte(11).optional(),
    keyConfidence: z.number().gte(0).lte(1).optional(),
    mode: z.number().optional(),
    modeConfidence: z.number().gte(0).lte(1).optional(),
    codestring: z.string().optional(),
    codeVersion: z.number().optional(),
    echoprintstring: z.string().optional(),
    echoprintVersion: z.number().optional(),
    synchstring: z.string().optional(),
    synchVersion: z.number().optional(),
    rhythmstring: z.string().optional(),
    rhythmVersion: z.number().optional(),
  });
});

/**
 * 
 * @typedef  {AudioAnalysisObjectTrack} audioAnalysisObjectTrack   
 * @property {number} - The exact number of audio samples analyzed from this track. See also `analysis_sample_rate`.
 * @property {number} - Length of the track in seconds.
 * @property {string} - This field will always contain the empty string.
 * @property {number} - An offset to the start of the region of the track that was analyzed. (As the entire track is analyzed, this should always be 0.)
 * @property {number} - The length of the region of the track was analyzed, if a subset of the track was analyzed. (As the entire track is analyzed, this should always be 0.)
 * @property {number} - The sample rate used to decode and analyze this track. May differ from the actual sample rate of this track available on Spotify.
 * @property {number} - The number of channels used for analysis. If 1, all channels are summed together to mono before analysis.
 * @property {number} - The time, in seconds, at which the track's fade-in period ends. If the track has no fade-in, this will be 0.0.
 * @property {number} - The time, in seconds, at which the track's fade-out period starts. If the track has no fade-out, this should match the track's length.
 * @property {number} - The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude). Values typically range between -60 and 0 db.

 * @property {number} - The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.

 * @property {number} - The confidence, from 0.0 to 1.0, of the reliability of the `tempo`.
 * @property {number} - An estimated time signature. The time signature (meter) is a notational convention to specify how many beats are in each bar (or measure). The time signature ranges from 3 to 7 indicating time signatures of "3/4", to "7/4".
 * @property {number} - The confidence, from 0.0 to 1.0, of the reliability of the `time_signature`.
 * @property {number} - The key the track is in. Integers map to pitches using standard [Pitch Class notation](https://en.wikipedia.org/wiki/Pitch_class). E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on. If no key was detected, the value is -1.

 * @property {number} - The confidence, from 0.0 to 1.0, of the reliability of the `key`.
 * @property {number} - Mode indicates the modality (major or minor) of a track, the type of scale from which its melodic content is derived. Major is represented by 1 and minor is 0.

 * @property {number} - The confidence, from 0.0 to 1.0, of the reliability of the `mode`.
 * @property {string} - An [Echo Nest Musical Fingerprint (ENMFP)](https://academiccommons.columbia.edu/doi/10.7916/D8Q248M4) codestring for this track.
 * @property {number} - A version number for the Echo Nest Musical Fingerprint format used in the codestring field.
 * @property {string} - An [EchoPrint](https://github.com/spotify/echoprint-codegen) codestring for this track.
 * @property {number} - A version number for the EchoPrint format used in the echoprintstring field.
 * @property {string} - A [Synchstring](https://github.com/echonest/synchdata) for this track.
 * @property {number} - A version number for the Synchstring used in the synchstring field.
 * @property {string} - A Rhythmstring for this track. The format of this string is similar to the Synchstring.
 * @property {number} - A version number for the Rhythmstring used in the rhythmstring field.
 */
export type AudioAnalysisObjectTrack = z.infer<typeof audioAnalysisObjectTrack>;

/**
 * Zod schema for mapping API responses to the AudioAnalysisObjectTrack application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const audioAnalysisObjectTrackResponse = z.lazy(() => {
  return z
    .object({
      num_samples: z.number().optional(),
      duration: z.number().optional(),
      sample_md5: z.string().optional(),
      offset_seconds: z.number().optional(),
      window_seconds: z.number().optional(),
      analysis_sample_rate: z.number().optional(),
      analysis_channels: z.number().optional(),
      end_of_fade_in: z.number().optional(),
      start_of_fade_out: z.number().optional(),
      loudness: z.number().optional(),
      tempo: z.number().optional(),
      tempo_confidence: z.number().gte(0).lte(1).optional(),
      time_signature: z.number().gte(3).lte(7).optional(),
      time_signature_confidence: z.number().gte(0).lte(1).optional(),
      key: z.number().gte(-1).lte(11).optional(),
      key_confidence: z.number().gte(0).lte(1).optional(),
      mode: z.number().optional(),
      mode_confidence: z.number().gte(0).lte(1).optional(),
      codestring: z.string().optional(),
      code_version: z.number().optional(),
      echoprintstring: z.string().optional(),
      echoprint_version: z.number().optional(),
      synchstring: z.string().optional(),
      synch_version: z.number().optional(),
      rhythmstring: z.string().optional(),
      rhythm_version: z.number().optional(),
    })
    .transform((data) => ({
      numSamples: data['num_samples'],
      duration: data['duration'],
      sampleMd5: data['sample_md5'],
      offsetSeconds: data['offset_seconds'],
      windowSeconds: data['window_seconds'],
      analysisSampleRate: data['analysis_sample_rate'],
      analysisChannels: data['analysis_channels'],
      endOfFadeIn: data['end_of_fade_in'],
      startOfFadeOut: data['start_of_fade_out'],
      loudness: data['loudness'],
      tempo: data['tempo'],
      tempoConfidence: data['tempo_confidence'],
      timeSignature: data['time_signature'],
      timeSignatureConfidence: data['time_signature_confidence'],
      key: data['key'],
      keyConfidence: data['key_confidence'],
      mode: data['mode'],
      modeConfidence: data['mode_confidence'],
      codestring: data['codestring'],
      codeVersion: data['code_version'],
      echoprintstring: data['echoprintstring'],
      echoprintVersion: data['echoprint_version'],
      synchstring: data['synchstring'],
      synchVersion: data['synch_version'],
      rhythmstring: data['rhythmstring'],
      rhythmVersion: data['rhythm_version'],
    }));
});

/**
 * Zod schema for mapping the AudioAnalysisObjectTrack application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const audioAnalysisObjectTrackRequest = z.lazy(() => {
  return z
    .object({
      numSamples: z.number().optional(),
      duration: z.number().optional(),
      sampleMd5: z.string().optional(),
      offsetSeconds: z.number().optional(),
      windowSeconds: z.number().optional(),
      analysisSampleRate: z.number().optional(),
      analysisChannels: z.number().optional(),
      endOfFadeIn: z.number().optional(),
      startOfFadeOut: z.number().optional(),
      loudness: z.number().optional(),
      tempo: z.number().optional(),
      tempoConfidence: z.number().gte(0).lte(1).optional(),
      timeSignature: z.number().gte(3).lte(7).optional(),
      timeSignatureConfidence: z.number().gte(0).lte(1).optional(),
      key: z.number().gte(-1).lte(11).optional(),
      keyConfidence: z.number().gte(0).lte(1).optional(),
      mode: z.number().optional(),
      modeConfidence: z.number().gte(0).lte(1).optional(),
      codestring: z.string().optional(),
      codeVersion: z.number().optional(),
      echoprintstring: z.string().optional(),
      echoprintVersion: z.number().optional(),
      synchstring: z.string().optional(),
      synchVersion: z.number().optional(),
      rhythmstring: z.string().optional(),
      rhythmVersion: z.number().optional(),
    })
    .transform((data) => ({
      num_samples: data['numSamples'],
      duration: data['duration'],
      sample_md5: data['sampleMd5'],
      offset_seconds: data['offsetSeconds'],
      window_seconds: data['windowSeconds'],
      analysis_sample_rate: data['analysisSampleRate'],
      analysis_channels: data['analysisChannels'],
      end_of_fade_in: data['endOfFadeIn'],
      start_of_fade_out: data['startOfFadeOut'],
      loudness: data['loudness'],
      tempo: data['tempo'],
      tempo_confidence: data['tempoConfidence'],
      time_signature: data['timeSignature'],
      time_signature_confidence: data['timeSignatureConfidence'],
      key: data['key'],
      key_confidence: data['keyConfidence'],
      mode: data['mode'],
      mode_confidence: data['modeConfidence'],
      codestring: data['codestring'],
      code_version: data['codeVersion'],
      echoprintstring: data['echoprintstring'],
      echoprint_version: data['echoprintVersion'],
      synchstring: data['synchstring'],
      synch_version: data['synchVersion'],
      rhythmstring: data['rhythmstring'],
      rhythm_version: data['rhythmVersion'],
    }));
});
