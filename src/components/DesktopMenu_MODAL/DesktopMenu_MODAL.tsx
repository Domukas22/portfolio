//
//

import css from "./DesktopMenu_MODAL.module.css";
import { Dialog, Modal } from "react-aria-components";
import React from "react";
import Modal_HEADER from "../Modal_HEADER/Modal_HEADER";

interface props {
  IS_open: boolean;
  TOGGLE_open?: () => void;
  children: React.ReactElement;
  title?: string;
  fullscreen?: boolean;
  withHeader?: boolean;
  ariaLabel?: string;
}

export default function DesktopMenu_MODAL({
  TOGGLE_open = () => {},
  IS_open,
  children,
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
        <ul data-menu-content>{children}</ul>
      </Dialog>
    </Modal>
  );
}
