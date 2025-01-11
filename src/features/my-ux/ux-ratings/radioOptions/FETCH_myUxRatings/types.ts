//
//
//

import { Error_PROPS } from "@/types";
import CREATE_internalErrorMsg from "@/utils/CREATE_internalErrorMsg";

export const FETCH_myUxRatings_ERRROS = {
  internal: {
    query_undefined: "Received query was undefined",
    failed_supabase_fetch: "Failed to fetch supabase lists",
  },
  user: {
    defaultInternal_MSG: CREATE_internalErrorMsg("trying to fetch UX ratings"),
    networkFailure: "There seems to an issue with your internet connection.",
  },
};

export type UxRating_TYPE = {
  id: string;
  text: string;
  emoji: string;
};

export type FETCH_myUxRatings_DATATYPE = {
  ratings: UxRating_TYPE[] | null | undefined;
};
export type FETCH_myUxRatings_ERRPROPS = Error_PROPS;

export type FETCH_myUx_RESPONSETYPE = {
  data?: FETCH_myUxRatings_DATATYPE;
  error?: FETCH_myUxRatings_ERRPROPS;
};
