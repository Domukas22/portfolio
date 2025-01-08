//
//
//

"use client";

import Btn from "@/components/Btn/Btn";
import MyUx_MODAL from "@/features/my-ux/components/MyUx_MODAL/MyUx_MODAL";
import MyUxCard_GRID from "@/features/my-ux/components/MyUxCard_GRID/MyUxCard_GRID";
import USE_debounceSearch from "@/hooks/USE_debounceSearch/USE_debounceSearch";
import USE_Toggle from "@/hooks/USE_toggle";
import {
  MyUx_TYPE,
  MyUxFilter_TYPE,
} from "@/features/my-ux/ux/fetch/FETCH_myUx/types";
import USE_myUxs from "@/features/my-ux/ux/fetch/USE_myUxs/USE_myUxs";
import { useState } from "react";

export default function MyUx_PAGE() {
  const {
    state: IS_uxModalOpen,
    toggle: TOGGLE_uxModal,
    set: SET_uxModal,
  } = USE_Toggle();
  const [target_UX, SET_targetUX] = useState<MyUx_TYPE | undefined>();

  const { debouncedSearch } = USE_debounceSearch();

  const [filter, SET_filter] = useState<MyUxFilter_TYPE>("All");

  const { myUXs, error } = USE_myUxs({
    search: debouncedSearch,
    filter,
  });

  if (error) {
    console.log(error);
  }

  return (
    <section>
      <div className="container">
        <Btn
          text="Filter all"
          btnType="btn"
          onClick={() => SET_filter("All")}
          className="hidden"
        />

        <MyUxCard_GRID
          myUXs={myUXs}
          OPEN_ux={(myUX: MyUx_TYPE) => {
            SET_uxModal(true);
            SET_targetUX(myUX);
          }}
        />
      </div>
      <MyUx_MODAL
        IS_open={IS_uxModalOpen}
        TOGGLE_open={TOGGLE_uxModal}
        MyUX={target_UX}
      />
    </section>
  );
}
