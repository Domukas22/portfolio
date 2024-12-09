//
//
//

import Btn from "../Btn/Btn";
import { ICON_x } from "../Icons/Icons";
import StickyTopNav from "../Nav/StickyTopNav/StickyTopNav";

export default function Modal_HEADER({
  title = "Modal title",
  TOGGLE_open = () => {},
}: {
  title: string;
  TOGGLE_open: () => void;
}) {
  return (
    <StickyTopNav>
      <li className={`w-full flex`} data-modal-header>
        <Btn
          btnType="btn-square-light"
          onClick={TOGGLE_open}
          className="flex-1 justify-between pl-[1.2rem]"
          text={title}
          text_STYLES={{ fontWeight: 700, fontSize: "var(--h3-mob)" }}
          right_ICON={<ICON_x big />}
        />
      </li>
    </StickyTopNav>
  );
}
