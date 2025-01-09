//
//
//

import { useEffect } from "react";
import { MyUxFilter_TYPE } from "../FETCH_myUx/types";
import USE_fetchMyUx from "../USE_fetchMyUx/USE_fetchMyUx";
import USE_pagination from "@/hooks/USE_pagination/USE_pagination";

export default function USE_myUxs({
  search,
  filter,
}: {
  search: string;
  filter: MyUxFilter_TYPE;
}) {
  const {
    myUXs,
    unpaginated_COUNT,
    EMPTY_myUxs,
    fetch,
    error,
    UPDATE_displayedUx,
    ADD_toDisplayed,
  } = USE_fetchMyUx({
    search,
    filter,
  });

  const { FETCH_new, FETCH_more, IS_loading, IS_loadingMore } = USE_pagination({
    // paginateBy: LIST_PAGINATION || 20,
    paginateBy: 10,
    fetch,
  });

  useEffect(() => {
    EMPTY_myUxs();
    FETCH_new();
  }, [search, filter, EMPTY_myUxs, FETCH_new]);

  // useEffect(() => {
  //   // build this if you want create a new error row on suapabse
  //   if (!error) return;
  //   HANDLE_internalError?.({ error });
  // }, [error]);

  return {
    myUXs,
    error,
    IS_loading,
    IS_loadingMore,
    unpaginated_COUNT,
    LOAD_more: FETCH_more,
    UPDATE_displayedUx,
    ADD_toDisplayed,
  };
}
