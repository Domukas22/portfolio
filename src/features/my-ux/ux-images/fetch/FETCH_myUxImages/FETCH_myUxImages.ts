//
//
//

import { supabase } from "@/supabase";
import {
  FETCH_myUxImages_ARGTYPES,
  FETCH_myUxImages_ERRPROPS,
  FETCH_myUxImages_ERRROS,
  FETCH_myUxImages_RESPONSETYPE,
  MyUxImage_TYPE,
} from "./types";
import HANDLE_userError from "@/utils/HANDLE_userError";

const function_NAME = "FETCH_myUxImages";
const err = FETCH_myUxImages_ERRROS;

export default async function FETCH_myUxImages(
  args: FETCH_myUxImages_ARGTYPES
): Promise<FETCH_myUxImages_RESPONSETYPE> {
  try {
    VALITATE_args(args);
    const query = supabase.storage.from("my-ux-images").list(args?.id);

    const {
      data: images,
      error,
    }: {
      data: MyUxImage_TYPE[] | null;
      error: any;
    } = await query;

    if (error) throw GENERATE_internalError("failed_supabase_fetch", error);

    return {
      data: {
        images,
      },
    };
  } catch (error: any) {
    return {
      data: {
        images: [],
      },
      error: HANDLE_userError({
        error,
        function_NAME,
        internalErrorUser_MSG: err.user.defaultInternal_MSG,
      }),
    };
  }
}

function VALITATE_args(args: FETCH_myUxImages_ARGTYPES) {
  const { id } = args;

  if (typeof id !== "string")
    throw GENERATE_internalError("folder_id_undefined");
}

function GENERATE_internalError(
  type: "query_undefined" | "folder_id_undefined" | "failed_supabase_fetch",
  details?: any
) {
  return {
    error_TYPE: "internal",
    internal_MSG: err.internal[type],
    user_MSG: err.user.defaultInternal_MSG,
    function_NAME,
    error_DETAILS: details,
  } as FETCH_myUxImages_ERRPROPS;
}
