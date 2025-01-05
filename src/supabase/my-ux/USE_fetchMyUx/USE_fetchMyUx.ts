import USE_abortController from "@/hooks/USE_abortController";
import CREATE_newAbortRequest from "@/utils/CREATE_newAbortRequest";
import { useCallback, useState } from "react";
import {
  FETCH_myUx_ERRPROPS,
  FETCH_myUx_ERRROS,
  MyUx_TYPE,
  MyUxFilter_TYPE,
} from "../FETCH_myUx/types";
import FETCH_myUx from "../FETCH_myUx/FETCH_myUx";
import HANDLE_userError from "@/utils/HANDLE_userError";

const function_NAME = "USE_fetchMyUx";

export default function USE_fetchMyUx({
  search,
  filter = "All",
}: {
  search: string;
  filter: MyUxFilter_TYPE;
}) {
  const { abortControllerRef, startNewRequest } = USE_abortController();

  const [result, SET_result] = useState({
    myUXs: [] as MyUx_TYPE[],
    unpaginated_COUNT: 0,
  });

  const [error, SET_error] = useState<FETCH_myUx_ERRPROPS | undefined>();

  const EMPTY_myUxs = useCallback(
    () =>
      SET_result({
        myUXs: [],
        unpaginated_COUNT: 0,
      }),
    []
  );

  const fetch = useCallback(
    async (start: number, end: number) => {
      try {
        SET_error(undefined);

        CREATE_newAbortRequest(abortControllerRef);
        startNewRequest();

        const { data: { my_UXs, count } = {}, error } = await FETCH_myUx({
          search,
          filter,
          start,
          end,
          signal: abortControllerRef.current?.signal,
        });

        // Skip updates if the request was aborted.
        if (abortControllerRef.current?.signal.aborted) {
          return;
        }

        if (error) {
          if (error.error_TYPE === "abort") {
            return;
          } else {
            SET_error(error);
            return;
          }
        }

        SET_result((prev) => ({
          myUXs: [...prev?.myUXs, ...(my_UXs || [])],
          unpaginated_COUNT: count || 0,
        }));
      } catch (error: any) {
        SET_error(
          HANDLE_userError({
            error,
            function_NAME,
            internalErrorUser_MSG: FETCH_myUx_ERRROS.user.defaultInternal_MSG,
          })
        );
      }
    },
    [search, filter, abortControllerRef]
  );

  return {
    myUXs: result.myUXs,
    unpaginated_COUNT: result.unpaginated_COUNT,
    error,
    fetch,
    EMPTY_myUxs,
  };
}
