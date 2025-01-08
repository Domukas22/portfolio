//
//
//

"use client";

import MyUxAdmin_SIDE from "@/components/MyUxAdmin_SIDE/MyUxAdmin_SIDE";
import Text_INPUT from "@/components/Text_INPUT/Text_INPUT";
import MyUxCard_GRID from "@/features/my-ux/components/MyUxCard_GRID/MyUxCard_GRID";
import USE_debounceSearch from "@/hooks/USE_debounceSearch/USE_debounceSearch";
import { supabase } from "@/supabase";
import { MyUx_TYPE } from "@/features/my-ux/ux/fetch/FETCH_myUx/types";
import USE_myUxs from "@/features/my-ux/ux/fetch/USE_myUxs/USE_myUxs";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function MyUx_PAGE() {
  const router = useRouter();
  const [target_UX, SET_targetUX] = useState<MyUx_TYPE | undefined>();
  const [loading, SET_loading] = useState(true);

  const { search, debouncedSearch, SET_search } = USE_debounceSearch();

  const { myUXs, error, UPDATE_displayedUx } = USE_myUxs({
    search: debouncedSearch,
    filter: "All",
  });

  if (error) {
    console.log(error);
  }

  const SELECT_ux = useCallback((myUX: MyUx_TYPE) => {
    SET_targetUX(myUX);
  }, []);

  useEffect(() => {
    (async () => {
      await CHECK_auth(router, () => SET_loading(false));
    })();
  });

  const EDIT_displayedUx = useCallback(
    (ux: MyUx_TYPE) => {
      if (target_UX?.id === ux?.id) {
        SET_targetUX(ux);
      }
      console.log(ux);
      UPDATE_displayedUx(ux);
    },
    [UPDATE_displayedUx, target_UX]
  );

  return !loading ? (
    <>
      <section className="pr-[40rem]">
        <div className="container !max-w-[200rem] flex gap-[2rem]">
          <div className="flex-1">
            <h2 className="mb-2 ">My Ux Admin</h2>
            <Text_INPUT
              name="search"
              type="text"
              isRequired={false}
              onChange={SET_search}
              value={search}
              label="Search uxs"
              hideLabel
            />

            <MyUxCard_GRID
              myUXs={myUXs}
              OPEN_ux={SELECT_ux}
              current_ID={target_UX?.id}
            />
          </div>
        </div>
      </section>
      <MyUxAdmin_SIDE
        ux={target_UX}
        UNSELECT_ux={() => SET_targetUX(undefined)}
        EDIT_displayedUx={EDIT_displayedUx}
      />
    </>
  ) : null;
}

const CHECK_auth = async (router, SHOW_content) => {
  // Check if the user is logged in
  const { data, error } = await supabase.auth.getSession();

  if (error || !data.session) {
    // If not logged in, redirect to login page
    router.push("/my-ux-login");
  } else {
    // If logged in, proceed with setting loading state to false
    SHOW_content();
  }
};
