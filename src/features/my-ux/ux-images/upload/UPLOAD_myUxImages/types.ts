//
//
//

import { Error_PROPS } from "@/types";
import CREATE_internalErrorMsg from "@/utils/CREATE_internalErrorMsg";

export const UPLOAD_myUxImages_ERRROS = {
  internal: {
    query_undefined:
      "Received query was undefined when trying to upload my-ux-images",
    folder_id_undefined:
      "Folder id undefined when trying to upload my-ux-images",
    ux_image_files_undefined:
      "Image files undefined when trying to upload my-ux-images",
    failed_supabase_image_upload:
      "Failed to upload my-ux-images to supabase bucket",
  },
  user: {
    defaultInternal_MSG: CREATE_internalErrorMsg(
      "trying to upload my-ux-images"
    ),
    networkFailure: "There seems to an issue with your internet connection.",
  },
};

export interface UPLOAD_myUxImages_ARGTYPES {
  id: string | undefined;
  image_FILES: File[] | undefined;
}
export type UPLOAD_myUxImages_DATATYPE = {
  uploadedImg_NAMES: string[];
};

export type UPLOAD_myUxImages_ERRPROPS = Error_PROPS;

export type UPLOAD_myUxImages_RESPONSETYPE = {
  data: UPLOAD_myUxImages_DATATYPE;
  error?: UPLOAD_myUxImages_ERRPROPS;
};
