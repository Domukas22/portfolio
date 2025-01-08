//
//
//

import { useCallback, useState } from "react";
import HANDLE_userError from "@/utils/HANDLE_userError";
import {
  FETCH_myUxImages_ERRPROPS,
  FETCH_myUxImages_ERRROS,
  MyUxImage_TYPE,
} from "../FETCH_myUxImages/types";
import FETCH_myUxImages from "../FETCH_myUxImages/FETCH_myUxImages";

const function_NAME = "USE_fetchMyUxImages";
const err = FETCH_myUxImages_ERRROS;

export default function USE_fetchMyUxImages() {
  const [result, SET_result] = useState({
    images: [] as MyUxImage_TYPE[],
  });
  const [loading, SET_loading] = useState(false);

  const [error, SET_error] = useState<FETCH_myUxImages_ERRPROPS | undefined>();

  const fetch = useCallback(async (myUX_ID: string | undefined) => {
    try {
      SET_loading(true);
      SET_error(undefined); // Reset error before fetching

      const { data: { images } = {}, error } = await FETCH_myUxImages({
        id: myUX_ID,
      });

      if (error) {
        return SET_error(error); // Set the error only if there is one
      }

      SET_result({ images: images || [] });
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
  }, []);

  return {
    images: result.images,
    error,
    fetch,
    loading,
  };
}
