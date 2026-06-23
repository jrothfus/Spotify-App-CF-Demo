export interface GetPlaylistParams {
  market?: string;
  fields?: string;
  additionalTypes?: string;
}

export interface GetPlaylistsTracksParams {
  market?: string;
  fields?: string;
  limit?: number;
  offset?: number;
  additionalTypes?: string;
}

export interface AddTracksToPlaylistParams {
  position?: number;
  uris?: string;
}

export interface ReorderOrReplacePlaylistsTracksParams {
  uris?: string;
}

export interface GetPlaylistsItemsParams {
  market?: string;
  fields?: string;
  limit?: number;
  offset?: number;
  additionalTypes?: string;
}

export interface AddItemsToPlaylistParams {
  position?: number;
  uris?: string;
}

export interface ReorderOrReplacePlaylistsItemsParams {
  uris?: string;
}

export interface GetAListOfCurrentUsersPlaylistsParams {
  limit?: number;
  offset?: number;
}

export interface GetListUsersPlaylistsParams {
  limit?: number;
  offset?: number;
}

export interface GetFeaturedPlaylistsParams {
  locale?: string;
  limit?: number;
  offset?: number;
}

export interface GetACategoriesPlaylistsParams {
  limit?: number;
  offset?: number;
}
