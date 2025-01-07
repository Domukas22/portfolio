//
//
//

import { supabase } from "@/supabase";
import {
  FETCH_myUx_RESPONSETYPE,
  FETCH_myUxRatings_ERRPROPS,
  FETCH_myUxRatings_ERRROS,
  UxRating_TYPE,
} from "./types";
import HANDLE_userError from "@/utils/HANDLE_userError";

const function_NAME = "FETCH_myUxRatings";

export default async function FETCH_myUxRatings(): Promise<FETCH_myUx_RESPONSETYPE> {
  try {
    const query = supabase
      .from("ux-ratings")
      .select("*")
      .order("order", { ascending: true });

    const {
      data: ratings,
      error,
    }: {
      data: UxRating_TYPE[] | null;
      error: any;
    } = await query;

    if (error) throw GENERATE_internalError("failed_supabase_fetch", error);

    return {
      data: {
        ratings,
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
        internalErrorUser_MSG:
          FETCH_myUxRatings_ERRROS.user.defaultInternal_MSG,
      }),
    };
  }
}

function GENERATE_internalError(
  type: "query_undefined" | "failed_supabase_fetch",
  details?: any
) {
  return {
    error_TYPE: "internal",
    internal_MSG: FETCH_myUxRatings_ERRROS.internal[type],
    user_MSG: FETCH_myUxRatings_ERRROS.user.defaultInternal_MSG,
    function_NAME,
    error_DETAILS: details,
  } as FETCH_myUxRatings_ERRPROPS;
}
