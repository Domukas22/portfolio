//
//
//

import { useEffect, useState } from "react";
import {
  FETCH_myUxRatingFilters_ERRPROPS,
  FETCH_myUxRatingFilters_ERRROS,
  UxFilter_TYPE,
} from "../FETCH_myUxRatingFilters/types";
import FETCH_myUxRatingFilters from "../FETCH_myUxRatingFilters/FETCH_myUxRatingFilters";
import HANDLE_userError from "@/utils/HANDLE_userError";

const function_NAME = "USE_myUxFilters";
const err = FETCH_myUxRatingFilters_ERRROS;

export default function USE_myUxFilters() {
  const [filters, SET_filters] = useState<UxFilter_TYPE[]>([]);
  const [fetchFitlers_ERR, SET_fetchFitlersERR] = useState<
    FETCH_myUxRatingFilters_ERRPROPS | undefined
  >();
  const [IS_fetchingFilters, SET_isFetchingFilters] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        SET_fetchFitlersERR(undefined);
        SET_isFetchingFilters(true);

        // fetch filters
        const { data, error } = await FETCH_myUxRatingFilters();
        if (error) {
          SET_fetchFitlersERR(error);
          console.error(error);
          return;
        }

        // no error returned, but data.rating still undefined
        if (!data?.ratings) {
          const _err = HANDLE_userError({
            error: { message: "Somethign went wrong when fetching ux filters" },
            function_NAME,
            internalErrorUser_MSG: err.user.defaultInternal_MSG,
          });
          SET_fetchFitlersERR(_err);
          console.error(_err);
          return;
        }

        // return valid data
        SET_filters(data?.ratings);
      } catch (err: any) {
        SET_fetchFitlersERR(err);
        console.error(err);
      } finally {
        SET_isFetchingFilters(false);
      }
    })();
  }, []);

  return { filters, fetchFitlers_ERR, IS_fetchingFilters };
}
