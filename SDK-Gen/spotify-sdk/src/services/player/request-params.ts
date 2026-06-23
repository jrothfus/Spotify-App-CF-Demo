export interface GetInformationAboutTheUsersCurrentPlaybackParams {
  market?: string;
  additionalTypes?: string;
}

export interface GetTheUsersCurrentlyPlayingTrackParams {
  market?: string;
  additionalTypes?: string;
}

export interface StartAUsersPlaybackParams {
  deviceId?: string;
}

export interface PauseAUsersPlaybackParams {
  deviceId?: string;
}

export interface SkipUsersPlaybackToNextTrackParams {
  deviceId?: string;
}

export interface SkipUsersPlaybackToPreviousTrackParams {
  deviceId?: string;
}

export interface SeekToPositionInCurrentlyPlayingTrackParams {
  positionMs: number;
  deviceId?: string;
}

export interface SetRepeatModeOnUsersPlaybackParams {
  state: string;
  deviceId?: string;
}

export interface SetVolumeForUsersPlaybackParams {
  volumePercent: number;
  deviceId?: string;
}

export interface ToggleShuffleForUsersPlaybackParams {
  state: boolean;
  deviceId?: string;
}

export interface GetRecentlyPlayedParams {
  limit?: number;
  after?: number;
  before?: number;
}

export interface AddToQueueParams {
  uri: string;
  deviceId?: string;
}
