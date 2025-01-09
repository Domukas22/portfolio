//
//
//

import { MyUx_TYPE } from "@/features/my-ux/ux/fetch/FETCH_myUx/types";
import MyUx_CARD from "../MyUx_CARD/MyUx_CARD";
import css from "./MyUxCard_GRID.module.css";

export default function MyUxCard_GRID({
  myUXs,
  OPEN_ux,
  OPEN_uxMobModal,
  current_ID,
}: {
  myUXs: MyUx_TYPE[];
  OPEN_ux: (myUX: MyUx_TYPE) => void;
  OPEN_uxMobModal: (myUX: MyUx_TYPE) => void;
  current_ID?: string | undefined;
}) {
  return (
    <>
      <div className={css.MyUxCard_GRID}>
        {myUXs?.map((ux) => (
          <MyUx_CARD
            key={ux.id}
            content={ux}
            OPEN_ux={OPEN_ux}
            current={current_ID === ux?.id}
          />
        ))}
      </div>
      <div className={css.MyUxCard_GRID} data-mobile>
        {myUXs?.map((ux) => (
          <MyUx_CARD
            key={ux.id}
            content={ux}
            OPEN_ux={OPEN_uxMobModal}
            current={current_ID === ux?.id}
          />
        ))}
      </div>
    </>
  );
}
