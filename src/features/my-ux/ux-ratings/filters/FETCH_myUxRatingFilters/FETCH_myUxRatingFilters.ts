//
//
//

import { supabase } from "@/supabase";
import {
  FETCH_myUxRatingFilters_ERRPROPS,
  FETCH_myUxRatingFilters_ERRROS,
  FETCH_myUxRatingFilters_RESPONSETYPE,
  internalErrMsg_TYPES,
  RawUxRating_TYPE,
} from "./types";
import HANDLE_userError from "@/utils/HANDLE_userError";
import FLATTEN_ratingCount from "./FLATTEN_ratingCount";

const function_NAME = "FETCH_myUxRatingFilters";
const err = FETCH_myUxRatingFilters_ERRROS;

export default async function FETCH_myUxRatingFilters(): Promise<FETCH_myUxRatingFilters_RESPONSETYPE> {
  try {
    // fetch all ux ratings with profile counts
    const { rawUx_RATINGS, rawUxRatings_ERR } = await _FETCH_ratingsWithCount();

    if (rawUxRatings_ERR)
      throw GENERATE_internalError(
        "failed_supabase_ux_rating_fetch",
        rawUxRatings_ERR
      );

    const flatUx_RATINGS = FLATTEN_ratingCount(rawUx_RATINGS);

    // fetch total my-ux count
    const { totalUx_COUNT, totalUxCount_ERR } = await _FETCH_totalUxCount();
    if (totalUxCount_ERR)
      throw GENERATE_internalError(
        "failed_supabase_all_profile_count_fetch",
        totalUxCount_ERR
      );

    return {
      data: {
        ratings: [
          { id: "All", text: "All", count: totalUx_COUNT, emoji: "All" },
          ...(flatUx_RATINGS ?? []),
        ],
      },
    };
  } catch (error: any) {
    return {
      data: {
        ratings: [],
      },
      error: HANDLE_userError({
        error,
        function_NAME,
        internalErrorUser_MSG: err.user.defaultInternal_MSG,
      }),
    };
  }
}

function GENERATE_internalError(type: internalErrMsg_TYPES, details?: any) {
  return {
    error_TYPE: "internal",
    internal_MSG: err.internal[type],
    user_MSG: err.user.defaultInternal_MSG,
    function_NAME,
    error_DETAILS: details,
  } as FETCH_myUxRatingFilters_ERRPROPS;
}
////////////////////////////////////////////////

type _FETCH_ratingsWithCount_RESPONSETYPE = {
  rawUx_RATINGS: RawUxRating_TYPE[] | null | any;
  rawUxRatings_ERR?: any;
};
async function _FETCH_ratingsWithCount(): Promise<_FETCH_ratingsWithCount_RESPONSETYPE> {
  const { data: rawUx_RATINGS, error: rawUxRatings_ERR } = await supabase
    .from("ux-ratings")
    .select("id, text, count:my-ux(count)")
    .order("order", { ascending: true });

  return { rawUx_RATINGS, rawUxRatings_ERR };
}
////////////////////////////////////////////////
type _FETCH_totalUxCount_RESPONSETYPE = {
  totalUx_COUNT: number | null | any;
  totalUxCount_ERR?: any;
};

async function _FETCH_totalUxCount(): Promise<_FETCH_totalUxCount_RESPONSETYPE> {
  const { count: totalUx_COUNT, error: totalUxCount_ERR } = await supabase
    .from("my-ux")
    .select("*", { count: "exact", head: true });

  return { totalUx_COUNT, totalUxCount_ERR };
}
