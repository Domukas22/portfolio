//
//
//

import USE_isBrowserToolbarClosed from "@/hooks/USE_isBrowserToolbarClosed";
import Btn from "../Btn/Btn";
import { ICON_arrow } from "../Icons/Icons";
import css from "./ScrollUp_BTN.module.css";
import USE_scrollPosition from "@/hooks/USE_scrollPosition";
import SCROLL_to from "@/utils/SCROLL_to";

export default function ScrollUp_BTN() {
  const IS_browserToolbarClosed = USE_isBrowserToolbarClosed();
  const scrollPosition = USE_scrollPosition();

  return (
    <Btn
      btnType="btn"
      left_ICON={<ICON_arrow direction="up" size="big" />}
      className={css.ScrollUp_BTN}
      data-lower={!IS_browserToolbarClosed}
      data-show={scrollPosition >= 200}
      onClick={() => SCROLL_to({})}
    />
  );
}
