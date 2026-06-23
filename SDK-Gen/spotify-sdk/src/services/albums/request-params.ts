export interface GetAnAlbumParams {
  market?: string;
}

export interface GetMultipleAlbumsParams {
  ids: string;
  market?: string;
}

export interface GetAnAlbumsTracksParams {
  market?: string;
  limit?: number;
  offset?: number;
}

export interface GetUsersSavedAlbumsParams {
  limit?: number;
  offset?: number;
  market?: string;
}

export interface SaveAlbumsUserParams {
  ids: string;
}

export interface RemoveAlbumsUserParams {
  ids: string;
}

export interface CheckUsersSavedAlbumsParams {
  ids: string;
}

export interface GetNewReleasesParams {
  limit?: number;
  offset?: number;
}
