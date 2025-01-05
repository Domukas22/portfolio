//
//
//

import Btn from "@/components/Btn/Btn";
import { myUx_EMOJIS } from "@/globals";
import { supabase } from "@/supabase";
import { MyUx_TYPE } from "@/supabase/my-ux/FETCH_myUx/types";
import Image from "next/image";
import css from "./MyUx_CARD.module.css";

export default function MyUx_CARD({
  content,
  OPEN_ux,
  current = false,
}: {
  content: MyUx_TYPE;
  OPEN_ux: (myUX: MyUx_TYPE) => void;
  current: boolean;
}) {
  const emoji = myUx_EMOJIS[content.rating] || "--";

  const frontImage_PATH =
    supabase.storage.from("my-ux-images").getPublicUrl(content.id).data
      .publicUrl +
    "/" +
    content.images?.[0];

  const rating =
    typeof content?.rating === "string" ? content.rating : "INVALID RATING";

  return (
    <Btn
      btnType="btn"
      className={css.MyUx_CARD}
      onClick={() => OPEN_ux(content)}
      data-current={current}
    >
      <Image width={1000} height={1000} src={frontImage_PATH} alt="" />
      <div data-text-wrap>
        <p>
          <span data-emoji>{emoji} </span>
          {rating}
        </p>
        <h4>{content?.title}</h4>
      </div>
    </Btn>
  );
}
