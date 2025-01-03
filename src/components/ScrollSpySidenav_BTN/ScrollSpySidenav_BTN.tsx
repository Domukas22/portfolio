//
//
//

import Link from "next/link";
import Btn from "../Btn/Btn";

import css from "./ScrollSpySidenav_BTN.module.css";

interface ScrollSpySidenav_BTN_PROPS {
  text: string;
  onClick: () => void;
  active: boolean;
}

export function ScrollSpySidenav_BTN({
  text = "Btn text",
  onClick = () => {},
  active = false,
}: ScrollSpySidenav_BTN_PROPS) {
  return (
    <li>
      <Btn
        btnType="btn-square"
        className={css.nested_BTN}
        data-active={active}
        onClick={onClick}
        text={text}
        text_STYLES={{ color: "var(--text-white-light)" }}
      />
    </li>
  );
}
