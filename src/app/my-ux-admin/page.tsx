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
import Mobile_MODAL from "@/components/Mobile_MODAL/Mobile_MODAL";
import USE_handleUx from "@/components/MyUxAdmin_SIDE/hooks/USE_handleUx";

export default function MyUx_PAGE() {
  const router = useRouter();
  const [target_UX, SET_targetUX] = useState<MyUx_TYPE | undefined>();
  const [loading, SET_loading] = useState(true);
  const [IS_mobileModalOpen, SET_mobileModalOpen] = useState(false);

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

  const handleUx_ACTIONS = USE_handleUx({ ux: target_UX, EDIT_displayedUx });

  return !loading ? (
    <>
      <section className="pr-[40rem] mobile:pr-0">
        <div className="container !max-w-[200rem] flex gap-[2rem]">
          <div className="flex-1">
            <h2 className="mb-[1.2rem] ">My Ux Admin</h2>
            <div className="mb-[2rem]">
              <Text_INPUT
                name="search"
                type="text"
                isRequired={false}
                onChange={SET_search}
                value={search}
                label="Search uxs"
                hideLabel
                placeholder="Search UX experiences..."
              />
            </div>

            <MyUxCard_GRID
              myUXs={myUXs}
              OPEN_ux={SELECT_ux}
              OPEN_uxMobModal={(ux: MyUx_TYPE) => {
                SET_mobileModalOpen(true);
                SELECT_ux(ux);
              }}
              current_ID={target_UX?.id}
            />
          </div>
        </div>
      </section>
      <div className="fixed top-0 right-0 w-[40rem] h-[100dvh] mobile:hidden">
        <MyUxAdmin_SIDE
          target_UX={target_UX}
          UNSELECT_ux={() => SET_targetUX(undefined)}
          handleUx_ACTIONS={handleUx_ACTIONS}
          EDIT_displayedUx={EDIT_displayedUx}
          id={"1"}
        />
      </div>

      <Mobile_MODAL
        IS_open={IS_mobileModalOpen}
        CLOSE_modal={() => SET_mobileModalOpen(false)}
        title="UX experience"
        noScroll
      >
        <MyUxAdmin_SIDE
          target_UX={target_UX}
          UNSELECT_ux={() => SET_targetUX(undefined)}
          mobile
          handleUx_ACTIONS={handleUx_ACTIONS}
          EDIT_displayedUx={EDIT_displayedUx}
          id={"2"}
        />
      </Mobile_MODAL>
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
