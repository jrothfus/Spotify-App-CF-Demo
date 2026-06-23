export interface GetAnAudiobookParams {
  market?: string;
}

export interface GetMultipleAudiobooksParams {
  ids: string;
  market?: string;
}

export interface GetAudiobookChaptersParams {
  market?: string;
  limit?: number;
  offset?: number;
}

export interface GetUsersSavedAudiobooksParams {
  limit?: number;
  offset?: number;
}

export interface SaveAudiobooksUserParams {
  ids: string;
}

export interface RemoveAudiobooksUserParams {
  ids: string;
}

export interface CheckUsersSavedAudiobooksParams {
  ids: string;
}
