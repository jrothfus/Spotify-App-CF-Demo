export interface GetTrackParams {
  market?: string;
}

export interface GetSeveralTracksParams {
  ids: string;
  market?: string;
}

export interface GetUsersSavedTracksParams {
  market?: string;
  limit?: number;
  offset?: number;
}

export interface RemoveTracksUserParams {
  ids: string;
}

export interface CheckUsersSavedTracksParams {
  ids: string;
}

export interface GetSeveralAudioFeaturesParams {
  ids: string;
}

export interface GetRecommendationsParams {
  seedArtists: string;
  seedGenres: string;
  seedTracks: string;
  limit?: number;
  market?: string;
  minAcousticness?: number;
  maxAcousticness?: number;
  targetAcousticness?: number;
  minDanceability?: number;
  maxDanceability?: number;
  targetDanceability?: number;
  minDurationMs?: number;
  maxDurationMs?: number;
  targetDurationMs?: number;
  minEnergy?: number;
  maxEnergy?: number;
  targetEnergy?: number;
  minInstrumentalness?: number;
  maxInstrumentalness?: number;
  targetInstrumentalness?: number;
  minKey?: number;
  maxKey?: number;
  targetKey?: number;
  minLiveness?: number;
  maxLiveness?: number;
  targetLiveness?: number;
  minLoudness?: number;
  maxLoudness?: number;
  targetLoudness?: number;
  minMode?: number;
  maxMode?: number;
  targetMode?: number;
  minPopularity?: number;
  maxPopularity?: number;
  targetPopularity?: number;
  minSpeechiness?: number;
  maxSpeechiness?: number;
  targetSpeechiness?: number;
  minTempo?: number;
  maxTempo?: number;
  targetTempo?: number;
  minTimeSignature?: number;
  maxTimeSignature?: number;
  targetTimeSignature?: number;
  minValence?: number;
  maxValence?: number;
  targetValence?: number;
}
