//
//
//

import Btn from "../Btn/Btn";
import { ICON_x } from "../Icons/Icons";
import StickyTopNav from "../Nav/StickyTopNav/StickyTopNav";
import css from "./Modal_HEADER.module.css";

export default function Modal_HEADER({
  title = "Modal title",
  TOGGLE_open = () => {},
}: {
  title: string;
  TOGGLE_open: () => void;
}) {
  return (
    <StickyTopNav>
      <li className={`${css.headerWrap} w-full flex`} data-modal-header>
        <Btn
          btnType="btn-square-light"
          onClick={TOGGLE_open}
          className="flex-1 justify-between pl-[1.2rem]"
        >
          <h4>{title}</h4>
          <ICON_x big />
        </Btn>
      </li>
    </StickyTopNav>
  );
}
