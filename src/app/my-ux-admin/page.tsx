//
//
//

"use client";

import MyUxAdmin_SIDE from "@/components/MyUxAdmin_SIDE/MyUxAdmin_SIDE";
import Text_FIELD from "@/components/Text_FIELD/Text_FIELD";
import MyUxCard_GRID from "@/features/my-ux/components/MyUxCard_GRID/MyUxCard_GRID";
import USE_debounceSearch from "@/hooks/USE_debounceSearch/USE_debounceSearch";
import { supabase } from "@/supabase";
import { MyUx_TYPE } from "@/features/my-ux/ux/fetch/FETCH_myUx/types";
import USE_myUxs from "@/features/my-ux/ux/fetch/USE_myUxs/USE_myUxs";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import Mobile_MODAL from "@/components/Mobile_MODAL/Mobile_MODAL";
import UPDATE_myUx from "@/components/MyUxAdmin_SIDE/utils/UPDATE_myUx";
import { submittableUx_TYPE } from "@/globals";
import Btn from "@/components/Btn/Btn";
import CREATE_myUx from "@/components/MyUxAdmin_SIDE/utils/CREATE_myUx";
import DELETE_myUx from "@/components/MyUxAdmin_SIDE/utils/DELETE_myUx";
import Simple_MODAL from "@/components/Simple_MODAL/Simple_MODAL";

export default function MyUx_PAGE() {
  const router = useRouter();
  const [target_UX, SET_targetUX] = useState<MyUx_TYPE | undefined>();
  const [loading, SET_loading] = useState(true);
  const [IS_mobileModalOpen, SET_mobileModalOpen] = useState(false);
  const [IS_createModalOpen, SET_createModalOpen] = useState(false);
  const [IS_deleteModalOpen, SET_deleteModalOpen] = useState(false);

  const [status, SET_status] = useState("");
  const [creation_STATUS, SET_creationStatus] = useState("");

  const { search, debouncedSearch, SET_search } = USE_debounceSearch();

  const [hidden_IDs, SET_hiddenIds] = useState<string[]>([]);

  const ADD_hiddenId = useCallback(
    (id: string) => {
      if (!hidden_IDs.includes(id)) {
        SET_hiddenIds((prev) => [...prev, id]);
      }
    },
    [hidden_IDs]
  );

  const { myUXs, error, UPDATE_displayedUx, ADD_toDisplayed } = USE_myUxs({
    search: debouncedSearch,
    rating_ID: "All",
  });

  if (error) {
    console.error(error);
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

      UPDATE_displayedUx(ux);
    },
    [UPDATE_displayedUx, target_UX]
  );

  return !loading ? (
    <>
      <section className="pr-[40rem] mobile:pr-0">
        <div className="container !max-w-[200rem] flex gap-[2rem]">
          <div className="flex-1">
            <h2 className="mb-[1.2rem] ">My Ux Admin</h2>
            <div className="mb-[2rem]">
              <Text_FIELD
                name="search"
                type="text"
                isRequired={false}
                onChange={SET_search}
                value={search}
                label="Search uxs"
                placeholder="Search UX experiences..."
              />
              <Btn
                btnType="btn"
                text="Create new"
                onClick={() => SET_createModalOpen(true)}
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
              hidden_IDs={hidden_IDs}
              CLEAR_search={() => {}}
              error={undefined}
              loading={false}
              search=""
              FILTER_byAll={() => {}}
            />
          </div>
        </div>
      </section>
      <div className="fixed top-0 right-0 w-[40rem] h-[100dvh] mobile:hidden">
        <MyUxAdmin_SIDE
          target_UX={target_UX}
          UNSELECT_ux={() => SET_targetUX(undefined)}
          id={"1"}
          action={{
            type: "Update",
            fn: (ux: submittableUx_TYPE) =>
              UPDATE_myUx({ ux, EDIT_displayedUx, SET_status }),
          }}
          OPEN_deleteModal={() => SET_deleteModalOpen(true)}
          {...{ status }}
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
          id={"2"}
          action={{
            type: "Update",
            fn: (ux: submittableUx_TYPE) =>
              UPDATE_myUx({ ux, EDIT_displayedUx, SET_status }),
          }}
          OPEN_deleteModal={() => SET_deleteModalOpen(true)}
          {...{ status }}
        />
      </Mobile_MODAL>
      <Mobile_MODAL
        IS_open={IS_createModalOpen}
        CLOSE_modal={() => SET_createModalOpen(false)}
        title="Create ux"
        noScroll
      >
        <MyUxAdmin_SIDE
          target_UX={starter_UX}
          UNSELECT_ux={() => {}}
          mobile
          id={"3"}
          action={{
            type: "Create",
            fn: (ux: submittableUx_TYPE) =>
              CREATE_myUx({
                ux,
                INSERT_newUx: (item) => ADD_toDisplayed(item),
                SET_status: SET_creationStatus,
              }),
          }}
          OPEN_deleteModal={() => SET_deleteModalOpen(true)}
          status={creation_STATUS}
        />
      </Mobile_MODAL>
      <Simple_MODAL
        IS_open={IS_deleteModalOpen}
        CLOSE_modal={() => SET_deleteModalOpen(false)}
        title="Delete this ux?"
        noScroll
      >
        <Btn
          btnType="btn"
          text="Yes, delete"
          onClick={() => {
            SET_deleteModalOpen(false);
            DELETE_myUx({
              id: target_UX?.id || "",
              REMOVE_displayedUx: () => {},
              SET_status,
              ADD_hiddenId,
            });
          }}
        />
      </Simple_MODAL>
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

const starter_UX: MyUx_TYPE = {
  created_at: "",
  id: "new",
  images: [],
  paragraphs: [],
  rating: undefined,
  title: "",
};
