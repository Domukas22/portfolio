//
//
//

import { Error_PROPS } from "@/types";
import CREATE_internalErrorMsg from "@/utils/CREATE_internalErrorMsg";

export type UxFilter_TYPE = {
  id: string;
  text: string;
  emoji: string;
  count: number;
};

export type RawUxRating_TYPE = {
  id: string;
  text: string;
  emoji: string;
  count: { count: number }[];
};

export type FETCH_myUxRatingFilters_DATATYPE = {
  ratings: UxFilter_TYPE[] | null | undefined;
};
export type FETCH_myUxRatingFilters_ERRPROPS = Error_PROPS;

export type FETCH_myUxRatingFilters_RESPONSETYPE = {
  data?: FETCH_myUxRatingFilters_DATATYPE;
  error?: FETCH_myUxRatingFilters_ERRPROPS;
};

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

export type internalErrMsg_TYPES =
  | "failed_supabase_ux_rating_fetch"
  | "failed_supabase_all_profile_count_fetch";
export type userErrMsg_TYPES = "defaultInternal_MSG" | "networkFailure";

type internalErrObj_PROPS = Record<internalErrMsg_TYPES, string>;
type userErrObj_PROPS = Record<userErrMsg_TYPES, string>;

export const FETCH_myUxRatingFilters_ERRROS: {
  internal: internalErrObj_PROPS;
  user: userErrObj_PROPS;
} = {
  internal: {
    failed_supabase_ux_rating_fetch: "Failed to fetch supabase ux ratings",
    failed_supabase_all_profile_count_fetch: "Failed to fetch supabase lists",
  },
  user: {
    defaultInternal_MSG: CREATE_internalErrorMsg("trying to fetch filters"),
    networkFailure: "There seems to an issue with your internet connection.",
  },
};
