import { GetFollowedType, getFollowedType } from './models/get-followed-type';
import { FollowArtistsUsersType, followArtistsUsersType } from './models/follow-artists-users-type';
import {
  UnfollowArtistsUsersType,
  unfollowArtistsUsersType,
} from './models/unfollow-artists-users-type';
import {
  CheckCurrentUserFollowsType,
  checkCurrentUserFollowsType,
} from './models/check-current-user-follows-type';

export interface GetUsersTopArtistsAndTracksParams {
  timeRange?: string;
  limit?: number;
  offset?: number;
}

export interface GetFollowedParams {
  type: GetFollowedType;
  after?: string;
  limit?: number;
}

export interface FollowArtistsUsersParams {
  type: FollowArtistsUsersType;
  ids: string;
}

export interface UnfollowArtistsUsersParams {
  type: UnfollowArtistsUsersType;
  ids: string;
}

export interface CheckCurrentUserFollowsParams {
  type: CheckCurrentUserFollowsType;
  ids: string;
}

export interface CheckIfUserFollowsPlaylistParams {
  ids?: string;
}
