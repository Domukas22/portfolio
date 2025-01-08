//
//
//

import { supabase } from "@/supabase";

import HANDLE_userError from "@/utils/HANDLE_userError";
import {
  DELETE_myUxImages_ARGTYPES,
  DELETE_myUxImages_ERRPROPS,
  DELETE_myUxImages_ERRROS,
  DELETE_myUxImages_RESPONSETYPE,
} from "./types";

const function_NAME = "DELETE_myUxImages";
const err = DELETE_myUxImages_ERRROS;

export default async function DELETE_myUxImages(
  args: DELETE_myUxImages_ARGTYPES
): Promise<DELETE_myUxImages_RESPONSETYPE> {
  try {
    if (typeof args?.id !== "string")
      throw GENERATE_internalError("folder_id_undefined");
    if (args?.image_NAMES === undefined || args?.image_NAMES === null)
      throw GENERATE_internalError("ux_image_names_undefined");

    for (const image_NAME of args.image_NAMES) {
      const { error } = await supabase.storage
        .from("my-ux-images")
        .remove([`${args.id}/${image_NAME}`]);
      if (error)
        throw GENERATE_internalError("failed_supabase_deletion", error);
      console.log(`File ${image_NAME} deleted successfully.`);
    }

    return {
      data: {
        success: true,
      },
    };
  } catch (error: any) {
    return {
      data: {
        success: false,
      },
      error: HANDLE_userError({
        error,
        function_NAME,
        internalErrorUser_MSG: err.user.defaultInternal_MSG,
      }),
    };
  }
}

function GENERATE_internalError(
  type:
    | "query_undefined"
    | "folder_id_undefined"
    | "failed_supabase_deletion"
    | "ux_image_names_undefined",
  details?: any
) {
  return {
    error_TYPE: "internal",
    internal_MSG: err.internal[type],
    user_MSG: err.user.defaultInternal_MSG,
    function_NAME,
    error_DETAILS: details,
  } as DELETE_myUxImages_ERRPROPS;
}
