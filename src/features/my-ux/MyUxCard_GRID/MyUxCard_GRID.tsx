//
//
//

import { MyUx_TYPE } from "@/supabase/my-ux/FETCH_myUx/types";
import MyUx_CARD from "../MyUx_CARD/MyUx_CARD";
import css from "./MyUxCard_GRID.module.css";

export default function MyUxCard_GRID({
  myUXs,
  OPEN_ux,
  current_ID,
}: {
  myUXs: MyUx_TYPE[];
  OPEN_ux: (myUX: MyUx_TYPE) => void;
  current_ID?: string | undefined;
}) {
  return (
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
  );
}
