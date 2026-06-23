import { SearchType, searchType } from './models/search-type';
import { IncludeExternal, includeExternal } from './models/include-external';

export interface SearchParams {
  q: string;
  type: SearchType[];
  market?: string;
  limit?: number;
  offset?: number;
  includeExternal?: IncludeExternal;
}
