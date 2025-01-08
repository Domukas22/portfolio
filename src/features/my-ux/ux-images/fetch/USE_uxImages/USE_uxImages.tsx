//
//
//

import { useCallback, useEffect } from "react";
import USE_pagination from "@/hooks/USE_pagination/USE_pagination";
import USE_fetchMyUxImages from "../USE_fetchMyUxImages/USE_fetchMyUxImages";

export default function USE_uxImages({ id }: { id: string | undefined }) {
  const { images, error, fetch } = USE_fetchMyUxImages();

  // Memoize fetch to prevent re-creation on every render because of the "id" string
  const memoizedFetch = useCallback(() => fetch(id), [fetch, id]);

  const { FETCH_new, IS_loading } = USE_pagination({
    paginateBy: 9999,
    fetch: memoizedFetch, // Include `start` and `end` if required by design
  });

  useEffect(() => {
    FETCH_new();
  }, [FETCH_new]);

  // useEffect(() => {
  //   // build this if you want create a new error row on suapabse
  //   if (!error) return;
  //   HANDLE_internalError?.({ error });
  // }, [error]);

  return {
    images,
    error,
    IS_loading,
  };
}
