//
//
//

import { supabase } from "@/supabase";

import HANDLE_userError from "@/utils/HANDLE_userError";
import {
  UPLOAD_myUxImages_ARGTYPES,
  UPLOAD_myUxImages_ERRPROPS,
  UPLOAD_myUxImages_ERRROS,
  UPLOAD_myUxImages_RESPONSETYPE,
} from "./types";

const function_NAME = "UPLOAD_myUxImages";
const err = UPLOAD_myUxImages_ERRROS;

export default async function UPLOAD_myUxImages(
  args: UPLOAD_myUxImages_ARGTYPES
): Promise<UPLOAD_myUxImages_RESPONSETYPE> {
  try {
    if (typeof args?.id !== "string")
      throw GENERATE_internalError("folder_id_undefined");
    if (args?.image_FILES === undefined || args?.image_FILES === null)
      throw GENERATE_internalError("ux_image_files_undefined");

    for (const image_NAME of args.image_FILES) {
      const { error } = await supabase.storage
        .from("my-ux-images")
        .remove([`${args.id}/${image_NAME}`]);
      if (error)
        throw GENERATE_internalError("failed_supabase_image_upload", error);
      console.log(`File ${image_NAME} deleted successfully.`);
    }

    const uploadedImageNames: string[] = [];

    for (const img_FILE of args.image_FILES) {
      const filePath = `${args?.id}/${img_FILE.name}`;
      const { error } = await supabase.storage
        .from("my-ux-images")
        .upload(filePath, img_FILE);
      if (error) {
        throw GENERATE_internalError("failed_supabase_image_upload", error);
      } else {
        uploadedImageNames.push(img_FILE.name);
      }
    }

    return {
      data: {
        uploadedImg_NAMES: uploadedImageNames,
      },
    };
  } catch (error: any) {
    return {
      data: {
        uploadedImg_NAMES: [],
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
    | "failed_supabase_image_upload"
    | "ux_image_files_undefined",
  details?: any
) {
  return {
    error_TYPE: "internal",
    internal_MSG: err.internal[type],
    user_MSG: err.user.defaultInternal_MSG,
    function_NAME,
    error_DETAILS: details,
  } as UPLOAD_myUxImages_ERRPROPS;
}
