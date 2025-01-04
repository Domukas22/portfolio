//
//
//

import { MyUx_TYPE } from "@/supabase/my-ux/FETCH_myUx/types";
import MyUx_CARD from "../MyUx_CARD/MyUx_CARD";
import css from "./MyUxCard_GRID.module.css";

export default function MyUxCard_GRID({
  myUXs,
  OPEN_ux,
}: {
  myUXs: MyUx_TYPE[];
  OPEN_ux: (myUX: MyUx_TYPE) => void;
}) {
  return (
    <div className={css.MyUxCard_GRID}>
      {myUXs?.map((my_UX) => (
        <MyUx_CARD key={my_UX.id} content={my_UX} OPEN_ux={OPEN_ux} />
      ))}
    </div>
  );
}
