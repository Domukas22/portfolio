//
//
//

import { useState, useCallback } from "react";

export default function USE_pagination({
  paginateBy = 10,
  fetch,
  unpaginated_COUNT = 9999,
}: {
  paginateBy: number;
  fetch: (start: number, end: number) => Promise<void>;
  unpaginated_COUNT: number;
}) {
  const [start, SET_start] = useState(0);
  const [end, SET_end] = useState(paginateBy);
  const [IS_loading, SET_isLoading] = useState(false);
  const [IS_loadingMore, SET_isLoadingMore] = useState(false);

  const FETCH_more = useCallback(async () => {
    if (start + paginateBy >= unpaginated_COUNT) {
      console.warn("No more items to load.");
      return; // Prevent fetching if there are no more items
    }

    SET_isLoadingMore(true);
    try {
      const newStart = start + paginateBy;
      const newEnd = end + paginateBy;
      SET_start(newStart);
      SET_end(newEnd);
      await fetch(newStart, newEnd);
    } catch (err) {
      console.error("Error in FETCH_more:", err);
    } finally {
      SET_isLoadingMore(false);
    }
  }, [start, end, paginateBy, fetch, unpaginated_COUNT]);

  const FETCH_new = useCallback(async () => {
    SET_isLoading(true);
    try {
      SET_start(0);
      SET_end(paginateBy);
      await fetch(0, paginateBy);
    } catch (err) {
      console.error("Error in FETCH_new:", err);
    } finally {
      SET_isLoading(false);
    }
  }, [paginateBy, fetch]);

  return { FETCH_new, FETCH_more, IS_loading, IS_loadingMore };
}
