export interface GetAnEpisodeParams {
  market?: string;
}

export interface GetMultipleEpisodesParams {
  ids: string;
  market?: string;
}

export interface GetUsersSavedEpisodesParams {
  market?: string;
  limit?: number;
  offset?: number;
}

export interface SaveEpisodesUserParams {
  ids: string;
}

export interface RemoveEpisodesUserParams {
  ids: string;
}

export interface CheckUsersSavedEpisodesParams {
  ids: string;
}
