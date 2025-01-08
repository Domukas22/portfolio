//
//
//

import { useCallback, useState } from "react";
import HANDLE_userError from "@/utils/HANDLE_userError";
import { FETCH_myUxImages_ERRPROPS } from "../../fetch/FETCH_myUxImages/types";
import DELETE_myUxImages from "../DELETE_myUxImages/DELETE_myUxImages";
import { DELETE_myUxImages_ERRROS } from "../DELETE_myUxImages/types";

const function_NAME = "USE_deleteMyUxImages";
const err = DELETE_myUxImages_ERRROS;

export default function USE_deleteMyUxImages() {
  const [loading, SET_loading] = useState(false);
  const [_success, SET_success] = useState(false);
  const [error, SET_error] = useState<FETCH_myUxImages_ERRPROPS | undefined>();

  const DELEETE_images = useCallback(
    async ({
      myUX_ID,
      image_NAMES,
    }: {
      myUX_ID: string | undefined;
      image_NAMES: string[] | undefined;
    }) => {
      try {
        SET_loading(true);
        SET_error(undefined); // Reset error before fetching
        const { data: { success } = {}, error } = await DELETE_myUxImages({
          id: myUX_ID,
          image_NAMES,
        });

        if (error) {
          return SET_error(error); // Set the error only if there is one
        }

        SET_success(success || false);
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
    success: _success,
    error,
    DELEETE_images,
    loading,
  };
}
