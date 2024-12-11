//
//
//

import { ICON_x, ICON_dropDownArrow } from "./Icons/Icons";

export default function TabDD_ICON({
  open,
  IS_current,
  mobile,
}: {
  open: boolean;
  IS_current: boolean;
  mobile: boolean;
}) {
  return open ? (
    <ICON_x
      color={IS_current ? "main" : "white"}
      size={mobile ? "big" : "small"}
    />
  ) : (
    <ICON_dropDownArrow
      color={IS_current ? "main" : "white"}
      size={mobile ? "medium" : "small"}
    />
  );
}
