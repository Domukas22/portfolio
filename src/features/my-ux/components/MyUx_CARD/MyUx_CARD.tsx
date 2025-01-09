//
//
//

import Btn from "@/components/Btn/Btn";

import { supabase } from "@/supabase";
import { MyUx_TYPE } from "@/features/my-ux/ux/fetch/FETCH_myUx/types";
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
  const frontImage_PATH =
    supabase.storage.from("my-ux-images").getPublicUrl(content.id).data
      .publicUrl +
    "/" +
    content.images?.[0];

  const rating =
    typeof content?.rating?.text === "string"
      ? content.rating.text
      : "-- INVALID RATING";

  const formattedRating = wrapEmojis(rating);

  return (
    <Btn
      btnType="btn"
      className={css.MyUx_CARD}
      onClick={() => OPEN_ux(content)}
      data-current={current}
    >
      <Image width={1000} height={1000} src={frontImage_PATH} alt="" />
      <div data-text-wrap>
        <p dangerouslySetInnerHTML={{ __html: formattedRating }} />
        <h4>{content?.title}</h4>
      </div>
    </Btn>
  );
}

const wrapEmojis = (text: string) => {
  // Regular expression to match emojis
  const emojiRegex =
    /([\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2300}-\u{23FF}\u{2B50}\u{2934}\u{2B06}\u{1F004}\u{1F0CF}])/gu;

  return text.replace(
    emojiRegex,
    (emoji) => `<span data-emoji>${emoji}</span>`
  );
};
