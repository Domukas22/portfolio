//
//
//

"use client";

import MyUx_MODAL from "@/features/my-ux/MyUx_MODAL/MyUx_MODAL";
import MyUxCard_GRID from "@/features/my-ux/MyUxCard_GRID/MyUxCard_GRID";
import USE_debounceSearch from "@/hooks/USE_debounceSearch/USE_debounceSearch";
import USE_Toggle from "@/hooks/USE_toggle";
import { MyUx_TYPE, MyUxFilter_TYPE } from "@/supabase/my-ux/FETCH_myUx/types";
import USE_myUxs from "@/supabase/my-ux/USE_myUxs/USE_myUxs";
import { useCallback, useState } from "react";

export default function MyUx_PAGE() {
  const {
    state: IS_uxModalOpen,
    toggle: TOGGLE_uxModal,
    set: SET_uxModal,
  } = USE_Toggle();
  const [target_UX, SET_targetUX] = useState<MyUx_TYPE | undefined>();

  const { search, debouncedSearch, IS_debouncing, SET_search } =
    USE_debounceSearch();

  const [filter, SET_filter] = useState<MyUxFilter_TYPE>("All");

  const {
    myUXs,
    unpaginated_COUNT,
    IS_loading,
    IS_loadingMore,
    LOAD_more,
    error,
  } = USE_myUxs({
    search,
    filter,
  });

  if (error) {
    console.log(error);
  }

  const OPEN_ux = useCallback(
    (myUX: MyUx_TYPE) => {
      SET_uxModal(true);
      SET_targetUX(myUX);
    },
    [SET_uxModal]
  );

  return (
    <section>
      <div className="container">
        <MyUxCard_GRID myUXs={myUXs} OPEN_ux={OPEN_ux} />
      </div>
      <MyUx_MODAL
        IS_open={IS_uxModalOpen}
        TOGGLE_open={TOGGLE_uxModal}
        MyUX={target_UX}
      />
    </section>
  );
}
