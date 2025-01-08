//
//
//

import { useCallback, useState } from "react";
import HANDLE_userError from "@/utils/HANDLE_userError";
import { FETCH_myUxImages_ERRPROPS } from "../../fetch/FETCH_myUxImages/types";
import UPLOAD_myUxImages from "../UPLOAD_myUxImages/UPLOAD_myUxImages";
import { UPLOAD_myUxImages_ERRROS } from "../UPLOAD_myUxImages/types";

const function_NAME = "USE_uploadMyUxImages";
const err = UPLOAD_myUxImages_ERRROS;

export default function USE_uploadMyUxImages() {
  const [loading, SET_loading] = useState(false);
  const [_uploadedImg_NAMES, SET_uploadedImgNames] = useState<
    string[] | undefined
  >([]);
  const [error, SET_error] = useState<FETCH_myUxImages_ERRPROPS | undefined>();

  const UPLOAD_images = useCallback(
    async ({
      myUX_ID,
      image_FILES,
    }: {
      myUX_ID: string | undefined;
      image_FILES: File[] | undefined;
    }) => {
      try {
        SET_loading(true);
        SET_error(undefined); // Reset error before fetching
        const { data: { uploadedImg_NAMES } = {}, error } =
          await UPLOAD_myUxImages({
            id: myUX_ID,
            image_FILES,
          });

        if (error) {
          return SET_error(error); // Set the error only if there is one
        }

        SET_uploadedImgNames(uploadedImg_NAMES);
      } catch (error: any) {
        // Handle any other errors that may occur during the fetch
        SET_error(
          HANDLE_userError({
            error,
            function_NAME,
            internalErrorUser_MSG: err.user.defaultInternal_MSG,
          })
        );
      } finally {
        SET_loading(false);
      }
    },
    []
  );

  return {
    uploadedImg_NAMES: _uploadedImg_NAMES,
    error,
    UPLOAD_images,
    loading,
  };
}
