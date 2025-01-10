//
//
//

import { useEffect } from "react";
import USE_fetchMyUx from "../USE_fetchMyUx/USE_fetchMyUx";
import USE_pagination from "@/hooks/USE_pagination/USE_pagination";

export default function USE_myUxs({
  search,
  rating_ID,
}: {
  search: string;
  rating_ID: string;
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
    rating_ID,
  });

  const { FETCH_new, FETCH_more, IS_loading, IS_loadingMore } = USE_pagination({
    // paginateBy: LIST_PAGINATION || 20,
    paginateBy: 18,
    fetch,
    unpaginated_COUNT,
  });

  useEffect(() => {
    EMPTY_myUxs();
    FETCH_new();
  }, [search, rating_ID, EMPTY_myUxs, FETCH_new]);

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
