//
//

import css from "./DesktopMenu_MODAL.module.css";
import { Dialog, Modal } from "react-aria-components";
import React from "react";
import Modal_HEADER from "../../../../Modal_HEADER/Modal_HEADER";
import Menu_ITEMS from "../../../../Nav/Menu/Menu_ITEMS";

interface props {
  IS_open: boolean;
  TOGGLE_open?: () => void;
  title?: string;
  fullscreen?: boolean;
  withHeader?: boolean;
  SHOW_homeBtn?: boolean;
  ariaLabel?: string;
}

export default function DesktopMenu_MODAL({
  TOGGLE_open = () => {},
  IS_open,
  SHOW_homeBtn = false,
}: props) {
  return (
    <Modal
      isDismissable
      className={css.modal}
      isOpen={IS_open}
      onOpenChange={TOGGLE_open}
    >
      <Dialog className={css.dialog} aria-label="Modal" data-fullscreen={true}>
        <Modal_HEADER title="Menu" {...{ TOGGLE_open }} />
        <ul data-menu-content>
          <Menu_ITEMS SHOW_homeBtn={SHOW_homeBtn} />
        </ul>
      </Dialog>
    </Modal>
  );
}
