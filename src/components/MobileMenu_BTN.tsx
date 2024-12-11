//
//
//

import Btn from "./Btn/Btn";
import { ICON_dropDownArrow } from "./Icons/Icons";

export default function MobileMenu_BTN({
  OPEN_mobileMenu = () => {},
}: {
  OPEN_mobileMenu: () => void;
}) {
  return (
    <li>
      <Btn
        text="Menu"
        onClick={OPEN_mobileMenu}
        btnType="btn-square-light"
        data-light-left-border-color="true"
        right_ICON={<ICON_dropDownArrow />}
        className="font-bold"
      />
    </li>
  );
}
