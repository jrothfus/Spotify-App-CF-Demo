export interface GetMultipleArtistsParams {
  ids: string;
}

export interface GetAnArtistsAlbumsParams {
  includeGroups?: string;
  market?: string;
  limit?: number;
  offset?: number;
}

export interface GetAnArtistsTopTracksParams {
  market?: string;
}
