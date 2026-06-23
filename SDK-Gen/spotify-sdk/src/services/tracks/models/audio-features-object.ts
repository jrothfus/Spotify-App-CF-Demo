import { z } from 'zod';
import { AudioFeaturesObjectType, audioFeaturesObjectType } from './audio-features-object-type';

/**
 * Zod schema for the AudioFeaturesObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const audioFeaturesObject = z.lazy(() => {
  return z.object({
    acousticness: z.number().gte(0).lte(1).optional(),
    analysisUrl: z.string().optional(),
    danceability: z.number().optional(),
    durationMs: z.number().optional(),
    energy: z.number().optional(),
    id: z.string().optional(),
    instrumentalness: z.number().optional(),
    key: z.number().gte(-1).lte(11).optional(),
    liveness: z.number().optional(),
    loudness: z.number().optional(),
    mode: z.number().optional(),
    speechiness: z.number().optional(),
    tempo: z.number().optional(),
    timeSignature: z.number().gte(3).lte(7).optional(),
    trackHref: z.string().optional(),
    type: audioFeaturesObjectType.optional(),
    uri: z.string().optional(),
    valence: z.number().gte(0).lte(1).optional(),
  });
});

/**
 * 
 * @typedef  {AudioFeaturesObject} audioFeaturesObject   
 * @property {number} - A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic.

 * @property {string} - A URL to access the full audio analysis of this track. An access token is required to access this data.

 * @property {number} - Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.

 * @property {number} - The duration of the track in milliseconds.

 * @property {number} - Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.

 * @property {string} - The Spotify ID for the track.

 * @property {number} - Predicts whether a track contains no vocals. "Ooh" and "aah" sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly "vocal". The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.

 * @property {number} - The key the track is in. Integers map to pitches using standard [Pitch Class notation](https://en.wikipedia.org/wiki/Pitch_class). E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on. If no key was detected, the value is -1.

 * @property {number} - Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live. A value above 0.8 provides strong likelihood that the track is live.

 * @property {number} - The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude). Values typically range between -60 and 0 db.

 * @property {number} - Mode indicates the modality (major or minor) of a track, the type of scale from which its melodic content is derived. Major is represented by 1 and minor is 0.

 * @property {number} - Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made entirely of spoken words. Values between 0.33 and 0.66 describe tracks that may contain both music and speech, either in sections or layered, including such cases as rap music. Values below 0.33 most likely represent music and other non-speech-like tracks.

 * @property {number} - The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.

 * @property {number} - An estimated time signature. The time signature (meter) is a notational convention to specify how many beats are in each bar (or measure). The time signature ranges from 3 to 7 indicating time signatures of "3/4", to "7/4".
 * @property {string} - A link to the Web API endpoint providing full details of the track.

 * @property {AudioFeaturesObjectType} - The object type.

 * @property {string} - The Spotify URI for the track.

 * @property {number} - A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).

 */
export type AudioFeaturesObject = z.infer<typeof audioFeaturesObject>;

/**
 * Zod schema for mapping API responses to the AudioFeaturesObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const audioFeaturesObjectResponse = z.lazy(() => {
  return z
    .object({
      acousticness: z.number().gte(0).lte(1).optional(),
      analysis_url: z.string().optional(),
      danceability: z.number().optional(),
      duration_ms: z.number().optional(),
      energy: z.number().optional(),
      id: z.string().optional(),
      instrumentalness: z.number().optional(),
      key: z.number().gte(-1).lte(11).optional(),
      liveness: z.number().optional(),
      loudness: z.number().optional(),
      mode: z.number().optional(),
      speechiness: z.number().optional(),
      tempo: z.number().optional(),
      time_signature: z.number().gte(3).lte(7).optional(),
      track_href: z.string().optional(),
      type: audioFeaturesObjectType.optional(),
      uri: z.string().optional(),
      valence: z.number().gte(0).lte(1).optional(),
    })
    .transform((data) => ({
      acousticness: data['acousticness'],
      analysisUrl: data['analysis_url'],
      danceability: data['danceability'],
      durationMs: data['duration_ms'],
      energy: data['energy'],
      id: data['id'],
      instrumentalness: data['instrumentalness'],
      key: data['key'],
      liveness: data['liveness'],
      loudness: data['loudness'],
      mode: data['mode'],
      speechiness: data['speechiness'],
      tempo: data['tempo'],
      timeSignature: data['time_signature'],
      trackHref: data['track_href'],
      type: data['type'],
      uri: data['uri'],
      valence: data['valence'],
    }));
});

/**
 * Zod schema for mapping the AudioFeaturesObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const audioFeaturesObjectRequest = z.lazy(() => {
  return z
    .object({
      acousticness: z.number().gte(0).lte(1).optional(),
      analysisUrl: z.string().optional(),
      danceability: z.number().optional(),
      durationMs: z.number().optional(),
      energy: z.number().optional(),
      id: z.string().optional(),
      instrumentalness: z.number().optional(),
      key: z.number().gte(-1).lte(11).optional(),
      liveness: z.number().optional(),
      loudness: z.number().optional(),
      mode: z.number().optional(),
      speechiness: z.number().optional(),
      tempo: z.number().optional(),
      timeSignature: z.number().gte(3).lte(7).optional(),
      trackHref: z.string().optional(),
      type: audioFeaturesObjectType.optional(),
      uri: z.string().optional(),
      valence: z.number().gte(0).lte(1).optional(),
    })
    .transform((data) => ({
      acousticness: data['acousticness'],
      analysis_url: data['analysisUrl'],
      danceability: data['danceability'],
      duration_ms: data['durationMs'],
      energy: data['energy'],
      id: data['id'],
      instrumentalness: data['instrumentalness'],
      key: data['key'],
      liveness: data['liveness'],
      loudness: data['loudness'],
      mode: data['mode'],
      speechiness: data['speechiness'],
      tempo: data['tempo'],
      time_signature: data['timeSignature'],
      track_href: data['trackHref'],
      type: data['type'],
      uri: data['uri'],
      valence: data['valence'],
    }));
});
