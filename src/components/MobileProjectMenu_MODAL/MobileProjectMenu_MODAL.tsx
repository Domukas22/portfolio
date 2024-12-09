//
//
//

import React from "react";
import Mobile_MODAL from "../Mobile_MODAL/Mobile_MODAL";

interface MobileMenu_PROPS {
  IS_open: boolean;
  CLOSE_modal: () => void;
  children: React.ReactNode;
}

export default function MobileProjectMenu_MODAL({
  IS_open = false,
  CLOSE_modal = () => {},
  children,
}: MobileMenu_PROPS) {
  return (
    <Mobile_MODAL
      withHeader
      title="Project menu"
      TOGGLE_open={CLOSE_modal}
      {...{ IS_open }}
    >
      <ul data-menu-content>{children}</ul>
    </Mobile_MODAL>
  );
}
