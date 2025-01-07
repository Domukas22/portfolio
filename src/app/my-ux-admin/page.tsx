//
//
//

"use client";

import Text_INPUT from "@/components/Text_INPUT/Text_INPUT";
import MyUx_FORM from "@/features/my-ux/MyUx_FORM/MyUx_FORM";
import MyUxCard_GRID from "@/features/my-ux/MyUxCard_GRID/MyUxCard_GRID";
import USE_debounceSearch from "@/hooks/USE_debounceSearch/USE_debounceSearch";
import { supabase } from "@/supabase";
import { MyUx_TYPE } from "@/supabase/my-ux/FETCH_myUx/types";
import USE_myUxs from "@/supabase/my-ux/USE_myUxs/USE_myUxs";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function MyUx_PAGE() {
  const router = useRouter();
  const [target_UX, SET_targetUX] = useState<MyUx_TYPE | undefined>();
  const [loading, SET_loading] = useState(true);

  const { search, debouncedSearch, SET_search } = USE_debounceSearch();

  const { myUXs, error } = USE_myUxs({
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
            />

            <MyUxCard_GRID
              myUXs={myUXs}
              OPEN_ux={SELECT_ux}
              current_ID={target_UX?.id}
            />
          </div>
        </div>
      </section>
      <div
        className="fixed right-0 top-0 w-[40rem] mobile:w-full h-[100dvh] flex flex-col "
        style={{ borderLeft: "var(--border-light)" }}
      >
        <div
          className="h-[4rem] flex items-center px-[1rem] bg-[var(--dark-light)]"
          style={{ borderBottom: "var(--border-light)" }}
        >
          <h4 className="w-full whitespace-nowrap overflow-hidden text-ellipsis">
            {target_UX?.title || "No ux selected"}
          </h4>
        </div>
        <MyUx_FORM ux={target_UX} />
      </div>
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
