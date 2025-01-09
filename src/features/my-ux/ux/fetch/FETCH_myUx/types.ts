//
//
//

import { UxRating_TYPE } from "@/features/my-ux/ux-ratings/FETCH_myUxRatings/types";
import { Error_PROPS } from "@/types";
import CREATE_internalErrorMsg from "@/utils/CREATE_internalErrorMsg";

export const FETCH_myUx_ERRROS = {
  internal: {
    query_undefined: "Received query was undefined",
    query_doesnt_have_method_eq: "Received query didn't have 'eq' method",
    query_doesnt_have_method_in: "Received query didn't have 'in' method",
    query_doesnt_have_method_or: "Received query didn't have 'or' method",
    query_doesnt_have_method_order: "Received query didn't have 'order' method",
    query_doesnt_have_method_abortSignal:
      "Received query didn't have 'abortSignal' method",
    query_doesnt_have_method_range: "Received query didn't have 'range' method",
    search_value_isnt_string: "Received search value wasn't a string",
    undefined_query_start: "Query pagiantion 'start' was undefined",
    undefined_query_end: "Query pagiantion 'end' was undefined",
    query_end_is_smaller_than_start:
      "Query pagiantion 'end' was smaller than 'start'",
    filter_isnt_string: "Received filter wasn't a string",
    invalid_filter_type: "Received filter string didn't match available types",
    failed_supabase_fetch: "Failed to fetch supabase lists",
  },
  user: {
    defaultInternal_MSG: CREATE_internalErrorMsg(
      "trying to fetch UX experiences"
    ),
    networkFailure: "There seems to an issue with your internet connection.",
  },
};

export type MyUxFilter_TYPE = "All" | "Excellent" | "Good" | "Bad" | "Terrible";

export interface FETCH_myUx_ARGTYPES {
  search?: string;
  filter: MyUxFilter_TYPE;
  start: number;
  end: number;
  signal: AbortSignal | undefined;
}

export type MyUx_TYPE = {
  id: string;
  title: string;
  paragraphs: string[];
  rating: UxRating_TYPE;
  images: string[];
  created_at: string;
  order: number;
};

export type FETCH_myUx_ERRPROPS = Error_PROPS;
export type FETCH_myUx_DATATYPE = {
  my_UXs: MyUx_TYPE[] | null | undefined;
  count: number;
};

export type FETCH_myUx_RESPONSETYPE = {
  data?: FETCH_myUx_DATATYPE;
  error?: FETCH_myUx_ERRPROPS;
};
