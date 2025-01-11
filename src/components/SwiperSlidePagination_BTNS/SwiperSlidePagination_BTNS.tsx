//
//
//

import SwiperSlide_BTN from "../SwiperSlide_BTN";
import css from "./SwiperSlidePagination_BTNS.module.css";

interface SwiperSlidePagination_BTNS {
  IS_leftArrowDisabled: boolean;
  IS_rightArrowDisabled: boolean;
  slide: (direction: "prev" | "next") => void;
  hide?: boolean;
}

export default function SwiperSlidePagination_BTNS({
  IS_leftArrowDisabled = false,
  IS_rightArrowDisabled = false,
  slide = () => {},
  hide = false,
}: SwiperSlidePagination_BTNS) {
  return (
    <div className={css.SwiperSlideBtn_WRAP} data-hide={hide}>
      <SwiperSlide_BTN
        direction="left"
        disabled={IS_leftArrowDisabled}
        onClick={() => slide("prev")}
      />
      <SwiperSlide_BTN
        direction="right"
        disabled={IS_rightArrowDisabled}
        onClick={() => slide("next")}
      />
    </div>
  );
}
