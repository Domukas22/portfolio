//
//
//

import { supabase } from "@/supabase";
import {
  FETCH_myUx_ARGTYPES,
  FETCH_myUx_ERRPROPS,
  FETCH_myUx_ERRROS,
  FETCH_myUx_RESPONSETYPE,
  MyUx_TYPE,
} from "./types";
import IS_abortError from "@/utils/IS_abortError";
import HANDLE_userError from "@/utils/HANDLE_userError";

const function_NAME = "FETCH_myUx";

export default async function FETCH_myUx(
  args: FETCH_myUx_ARGTYPES
): Promise<FETCH_myUx_RESPONSETYPE> {
  const { signal } = args;

  try {
    VALITATE_args(args);
    const query = supabase
      .from("my-ux")
      .select(`*, rating:ux-ratings(id, text, emoji)`, {
        count: "exact",
      });
    VALIDATE_query(query);

    const extended_QUERY = APPLY_filters({ ...args, query });
    const {
      data: my_UXs,
      error,
      count,
    }: {
      data: MyUx_TYPE[];
      error: any;
      count: number;
    } = await extended_QUERY.abortSignal(signal);

    // throw GENERATE_internalError("failed_supabase_fetch", {
    //   message: "Test error",
    // });
    if (error) {
      console.error(error);
      throw GENERATE_internalError("failed_supabase_fetch", error);
    }

    return {
      data: {
        my_UXs,
        count: count || 0,
      },
    };
  } catch (error: any) {
    console.error(error);
    return {
      data: {
        my_UXs: [],
        count: 0,
      },
      error: HANDLE_userError({
        error,
        function_NAME,
        internalErrorUser_MSG: FETCH_myUx_ERRROS.user.defaultInternal_MSG,
      }),
    };
  }
}

function APPLY_filters(args: FETCH_myUx_ARGTYPES & { query: any }) {
  const { search, rating_ID, start, end, query } = args;

  let new_QUERY = query;

  // filter by list ids if shared
  // ignore the "All" filter
  if (rating_ID && rating_ID !== "All") {
    new_QUERY = new_QUERY.in("rating", [rating_ID]);
  }

  // filter by search
  if (search) {
    new_QUERY = new_QUERY.or(`title.ilike.%${search}%%`);
  }

  // apply sorting
  new_QUERY = new_QUERY.order("created_at", { ascending: false });

  // apply pagination
  // if end is same as start, this is the end
  new_QUERY =
    end - 1 === start ? new_QUERY.range(0, 0) : new_QUERY.range(start, end - 1);

  return new_QUERY;
}

function VALITATE_args(args: FETCH_myUx_ARGTYPES) {
  const { search, rating_ID, start, end } = args;

  if (search && typeof search !== "string")
    throw GENERATE_internalError("search_value_isnt_string");

  if (rating_ID) {
    if (typeof rating_ID !== "string") {
      throw GENERATE_internalError("filter_isnt_string");
    }
    // if (
    //   rating_ID !== "All" &&
    //   rating_ID !== "Excellent" &&
    //   rating_ID !== "Good" &&
    //   rating_ID !== "Bad" &&
    //   rating_ID !== "Terrible"
    // ) {
    //   throw GENERATE_internalError("invalid_filter_type");
    // }
  }

  if (typeof start !== "number")
    throw GENERATE_internalError("undefined_query_start");
  if (typeof end !== "number")
    throw GENERATE_internalError("undefined_query_end");
  if (end - 1 < start)
    throw GENERATE_internalError("query_end_is_smaller_than_start");
}

function VALIDATE_query(query: any) {
  if (!query) throw GENERATE_internalError("query_undefined");
  if (query && !query.eq)
    throw GENERATE_internalError("query_doesnt_have_method_eq");
  if (query && !query.in)
    throw GENERATE_internalError("query_doesnt_have_method_in");
  if (query && !query.or)
    throw GENERATE_internalError("query_doesnt_have_method_or");

  if (query && !query.order)
    throw GENERATE_internalError("query_doesnt_have_method_order");
  if (query && !query.range)
    throw GENERATE_internalError("query_doesnt_have_method_range");
  if (query && !query.abortSignal)
    throw GENERATE_internalError("query_doesnt_have_method_abortSignal");
}

function GENERATE_internalError(
  type:
    | "query_undefined"
    | "query_doesnt_have_method_eq"
    | "query_doesnt_have_method_in"
    | "query_doesnt_have_method_or"
    | "query_doesnt_have_method_order"
    | "query_doesnt_have_method_range"
    | "query_doesnt_have_method_abortSignal"
    | "search_value_isnt_string"
    | "undefined_query_start"
    | "undefined_query_end"
    | "query_end_is_smaller_than_start"
    | "failed_supabase_fetch"
    | "filter_isnt_string"
    | "invalid_filter_type",
  details?: any
) {
  const IS_abort = IS_abortError(details?.message);

  return {
    error_TYPE: IS_abort ? "abort" : "internal",
    internal_MSG: FETCH_myUx_ERRROS.internal[type],
    user_MSG: FETCH_myUx_ERRROS.user.defaultInternal_MSG,
    function_NAME,
    error_DETAILS: details,
  } as FETCH_myUx_ERRPROPS;
}
