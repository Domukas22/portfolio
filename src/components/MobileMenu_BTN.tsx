//
//
//

import Btn from "./Btn/Btn";
import { ICON_dropDownArrow } from "./Icons/Icons";

export default function MobileMenu_BTN({
  OPEN_mobMenu = () => {},
}: {
  OPEN_mobMenu: () => void;
}) {
  return (
    <li>
      <Btn
        text="Menu"
        onClick={OPEN_mobMenu}
        btnType="btn-square-light"
        text_STYLES={{ fontWeight: 600 }}
        data-light-left-border-color="true"
        right_ICON={<ICON_dropDownArrow />}
        className="font-bold"
      />
    </li>
  );
}
