export interface GetAShowParams {
  market?: string;
}

export interface GetMultipleShowsParams {
  ids: string;
  market?: string;
}

export interface GetAShowsEpisodesParams {
  market?: string;
  limit?: number;
  offset?: number;
}

export interface GetUsersSavedShowsParams {
  limit?: number;
  offset?: number;
}

export interface SaveShowsUserParams {
  ids: string;
}

export interface RemoveShowsUserParams {
  ids: string;
  market?: string;
}

export interface CheckUsersSavedShowsParams {
  ids: string;
}
