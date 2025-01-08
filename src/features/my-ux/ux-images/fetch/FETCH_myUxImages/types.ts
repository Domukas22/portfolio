//
//
//

import { Error_PROPS, FileObject } from "@/types";
import CREATE_internalErrorMsg from "@/utils/CREATE_internalErrorMsg";

export const FETCH_myUxImages_ERRROS = {
  internal: {
    query_undefined: "Received query was undefined",
    folder_id_undefined: "Folder id for the images was not defined",
    failed_supabase_fetch: "Failed to fetch my-ux-images from supabase bucket",
  },
  user: {
    defaultInternal_MSG: CREATE_internalErrorMsg(
      "trying to fetch my ux images"
    ),
    networkFailure: "There seems to an issue with your internet connection.",
  },
};

export interface FETCH_myUxImages_ARGTYPES {
  id: string | undefined;
}

export type MyUxImage_TYPE = FileObject | undefined;
export type FETCH_myUxImages_ERRPROPS = Error_PROPS;

export type FETCH_myUxImages_DATATYPE = {
  images: MyUxImage_TYPE[] | null | undefined;
};

export type FETCH_myUxImages_RESPONSETYPE = {
  data?: FETCH_myUxImages_DATATYPE;
  error?: FETCH_myUxImages_ERRPROPS;
};
