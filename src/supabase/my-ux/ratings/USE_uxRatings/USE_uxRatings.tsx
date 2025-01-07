//
//
//

import { useEffect } from "react";
import USE_pagination from "@/hooks/USE_pagination/USE_pagination";
import USE_fetchMyUxRatings from "../USE_fetchMyUxRatings/USE_fetchMyUxRatings";

export default function USE_uxRatings() {
  const { ratings, error, fetch } = USE_fetchMyUxRatings();

  const { FETCH_new, IS_loading } = USE_pagination({
    paginateBy: 9999,
    fetch,
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
    ratings,
    error,
    IS_loading,
  };
}
