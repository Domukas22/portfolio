//
//
//

"use client";

import Text_INPUT from "@/components/Text_INPUT/Text_INPUT";
import MyUx_FORM from "@/features/my-ux/MyUx_FORM/MyUx_FORM";
import MyUx_MODAL from "@/features/my-ux/MyUx_MODAL/MyUx_MODAL";
import MyUxCard_GRID from "@/features/my-ux/MyUxCard_GRID/MyUxCard_GRID";
import USE_debounceSearch from "@/hooks/USE_debounceSearch/USE_debounceSearch";
import USE_Toggle from "@/hooks/USE_toggle";
import { MyUx_TYPE, MyUxFilter_TYPE } from "@/supabase/my-ux/FETCH_myUx/types";
import USE_myUxs from "@/supabase/my-ux/USE_myUxs/USE_myUxs";
import { useCallback, useState } from "react";
import { TextField, Label, Input } from "react-aria-components";

export default function MyUx_PAGE() {
  const [target_UX, SET_targetUX] = useState<MyUx_TYPE | undefined>();

  const { search, debouncedSearch, IS_debouncing, SET_search } =
    USE_debounceSearch();

  const {
    myUXs,
    unpaginated_COUNT,
    IS_loading,
    IS_loadingMore,
    LOAD_more,
    error,
  } = USE_myUxs({
    search,
    filter: "All",
  });

  if (error) {
    console.log(error);
  }

  const SELECT_ux = useCallback((myUX: MyUx_TYPE) => {
    SET_targetUX(myUX);
  }, []);

  return (
    <section>
      <div className="container !max-w-[200rem] flex">
        <div className="flex-1">
          <MyUxCard_GRID myUXs={myUXs} OPEN_ux={SELECT_ux} />
        </div>
        <div data-form-wrap>
          <MyUx_FORM ux={target_UX} />
        </div>
      </div>
    </section>
  );
}
