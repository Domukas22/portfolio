//
//
//

import Mobile_MODAL from "../../../Mobile_MODAL/Mobile_MODAL";
import Menu_ITEMS from "../../../Nav/Menu/Menu_ITEMS";

export default function MobileMenu_MODAL({
  IS_open = false,
  CLOSE_modal = () => {},
}: {
  IS_open: boolean;
  CLOSE_modal: () => void;
}) {
  return (
    <Mobile_MODAL
      title="Menu"
      IS_open={IS_open}
      CLOSE_modal={CLOSE_modal}
      animate_LI
    >
      <Menu_ITEMS SHOW_homeBtn />
    </Mobile_MODAL>
  );
}
