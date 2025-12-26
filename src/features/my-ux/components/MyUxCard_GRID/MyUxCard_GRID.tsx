//
//
//

import {
  FETCH_myUx_ERRPROPS,
  MyUx_TYPE,
} from "@/features/my-ux/ux/fetch/FETCH_myUx/types";
import MyUx_CARD from "../MyUx_CARD/MyUx_CARD";
import css from "./MyUxCard_GRID.module.css";
import Loading_SKELETON from "@/components/Loading_SKELETON/Loading_SKELETON";
import Btn from "@/components/Btn/Btn";
import Error_BOX from "@/components/Error_BOX/Error_BOX";

export default function MyUxCard_GRID({
  myUXs,
  SELECT_ux = () => {},
  SELECT_mobileUx = () => {},
  current_ID,
  hidden_IDs = [],
  loading = false,
  error,
  CLEAR_search = () => {},
  FILTER_byAll = () => {},
  search,
}: {
  myUXs: MyUx_TYPE[];
  SELECT_ux: (myUX: MyUx_TYPE) => void;
  SELECT_mobileUx: (myUX: MyUx_TYPE) => void;
  current_ID?: string | undefined;
  hidden_IDs?: string[];
  error: FETCH_myUx_ERRPROPS | undefined;
  loading: boolean;
  search: string;
  CLEAR_search: () => void;
  FILTER_byAll: () => void;
}) {
  if (error) {
    return (
      <div className="flex flex-col gap-[2rem]">
        <Error_BOX light text={error.user_MSG} />
        <Btn
          btnType="btn"
          text={`Reload the page`}
          onClick={() => window.location.reload()}
          styles={{ display: "inline", width: "fit-content" }}
        />
      </div>
    );
  }

  if (!loading && !error && myUXs?.length === 0) {
    return (
      <div className="flex gap-[0.8rem]">
        {search ? (
          <Btn
            btnType="btn"
            text={`Remove the search '${search}'`}
            onClick={CLEAR_search}
          />
        ) : null}
        {current_ID !== "All" ? (
          <Btn
            btnType="btn"
            text={`Filter by 'All'`}
            onClick={() => FILTER_byAll()}
          />
        ) : null}
      </div>
    );
  }

  if (loading)
    return (
      <>
        <div className={css.MyUxCard_GRID}>
          <Loading_SKELETON style={{ aspectRatio: 1 / 1.1 }} />
          <Loading_SKELETON style={{ aspectRatio: 1 / 1.1 }} />
          <Loading_SKELETON style={{ aspectRatio: 1 / 1.1 }} />
          <Loading_SKELETON style={{ aspectRatio: 1 / 1.1 }} />
          <Loading_SKELETON style={{ aspectRatio: 1 / 1.1 }} />
          <Loading_SKELETON style={{ aspectRatio: 1 / 1.1 }} />
          <Loading_SKELETON style={{ aspectRatio: 1 / 1.1 }} />
          <Loading_SKELETON style={{ aspectRatio: 1 / 1.1 }} />
        </div>
        <div className={css.MyUxCard_GRID} data-mobile>
          <Loading_SKELETON style={{ aspectRatio: 1 / 1.1 }} />
          <Loading_SKELETON style={{ aspectRatio: 1 / 1.1 }} />
          <Loading_SKELETON style={{ aspectRatio: 1 / 1.1 }} />
        </div>
      </>
    );

  return (
    <>
      <div className={css.MyUxCard_GRID}>
        {myUXs?.map((ux) => (
          <MyUx_CARD
            key={ux.id}
            content={ux}
            OPEN_ux={SELECT_ux}
            current={current_ID === ux?.id}
            hidden={hidden_IDs?.includes(ux?.id)}
          />
        ))}
      </div>
      {/* <div className={css.MyUxCard_GRID} data-mobile>
        {myUXs?.map((ux) => (
          <MyUx_CARD
            key={ux.id}
            content={ux}
            OPEN_ux={SELECT_mobileUx}
            current={current_ID === ux?.id}
            hidden={hidden_IDs?.includes(ux?.id)}
          />
        ))}
      </div> */}
    </>
  );
}
