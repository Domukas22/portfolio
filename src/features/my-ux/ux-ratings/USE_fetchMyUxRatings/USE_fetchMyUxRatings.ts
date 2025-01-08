//
//
//

import { useCallback, useState } from "react";
import HANDLE_userError from "@/utils/HANDLE_userError";
import {
  FETCH_myUxRatings_ERRPROPS,
  FETCH_myUxRatings_ERRROS,
  UxRating_TYPE,
} from "../FETCH_myUxRatings/types";
import FETCH_myUxRatings from "../FETCH_myUxRatings/FETCH_myUxRatings";

const function_NAME = "USE_fetchMyUxRatings";
const err = FETCH_myUxRatings_ERRROS;

export default function USE_fetchMyUxRatings() {
  const [result, SET_result] = useState({
    ratings: [] as UxRating_TYPE[],
  });

  const [error, SET_error] = useState<FETCH_myUxRatings_ERRPROPS | undefined>();

  const fetch = useCallback(async () => {
    try {
      SET_error(undefined);

      const { data: { ratings } = {}, error } = await FETCH_myUxRatings();

      if (error) {
        return SET_error(error);
      }

      SET_result({ ratings: ratings || [] });
    } catch (error: any) {
      SET_error(
        HANDLE_userError({
          error,
          function_NAME,
          internalErrorUser_MSG: err.user.defaultInternal_MSG,
        })
      );
    }
  }, []);

  return {
    ratings: result.ratings,
    error,
    fetch,
  };
}
