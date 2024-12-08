//
//
//

import Custom_MODAL from "../Modal/Custom_MODAL";
import Menu_ITEMS from "../Nav/Menu/Menu_ITEMS";

interface MobileMenu_PROPS {
  IS_open: boolean;
  CLOSE_modal: () => void;
}

export default function MobileMenu_MODAL({
  IS_open = false,
  CLOSE_modal = () => {},
}: MobileMenu_PROPS) {
  return (
    <Custom_MODAL
      withHeader
      title="Menu"
      TOGGLE_open={CLOSE_modal}
      {...{ IS_open }}
    >
      <ul data-menu-content>
        <Menu_ITEMS />
      </ul>
    </Custom_MODAL>
  );
}
