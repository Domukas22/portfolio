//
//
//

import { Error_PROPS } from "@/types";
import CREATE_internalErrorMsg from "@/utils/CREATE_internalErrorMsg";

export const DELETE_myUxImages_ERRROS = {
  internal: {
    query_undefined: "Received query was undefined",
    folder_id_undefined:
      "Folder id undefined when trying to delete my-ux-images",
    ux_image_names_undefined:
      "Files names undefined when trying to delete my-ux-images",
    failed_supabase_deletion:
      "Failed to delete my-ux-images from supabase bucket",
  },
  user: {
    defaultInternal_MSG: CREATE_internalErrorMsg(
      "trying to delete my-ux-images"
    ),
    networkFailure: "There seems to an issue with your internet connection.",
  },
};

export interface DELETE_myUxImages_ARGTYPES {
  id: string | undefined;
  image_NAMES: string[] | undefined;
}
export type DELETE_myUxImages_DATATYPE = {
  success: boolean;
};

export type DELETE_myUxImages_ERRPROPS = Error_PROPS;

export type DELETE_myUxImages_RESPONSETYPE = {
  data: DELETE_myUxImages_DATATYPE;
  error?: DELETE_myUxImages_ERRPROPS;
};
