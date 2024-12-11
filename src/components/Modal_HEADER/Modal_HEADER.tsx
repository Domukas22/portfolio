//
//
//

import Btn from "../Btn/Btn";
import { ICON_x } from "../Icons/Icons";

export default function Modal_HEADER({
  title = "Modal title",
  TOGGLE_open = () => {},
}: {
  title: string;
  TOGGLE_open: () => void;
}) {
  return (
    <li className={`w-full flex`} data-modal-header>
      <Btn
        btnType="btn-square-light"
        onClick={TOGGLE_open}
        className="flex-1 justify-between pl-[1.2rem] text-left"
        data-light-bottom-border-color="true"
        text={title}
        text_STYLES={{ fontWeight: 700, fontSize: "var(--h3-mob)" }}
        right_ICON={<ICON_x size="big" />}
      />
    </li>
  );
}
