//
//

import css from "./Custom_MODAL.module.css";
import Btn from "@/components/Btn/Btn";
import { Dialog, Modal } from "react-aria-components";
import React from "react";
import { ICON_x } from "../Icons/Icons";
import StickyTopNav from "../Nav/StickyTopNav/StickyTopNav";
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

export default function Custom_MODAL({
  TOGGLE_open = () => {},
  IS_open,
  children,
  title = "Custom modal title",
  withHeader,
  fullscreen,
  ariaLabel = "Modal",
}: props) {
  return (
    <Modal
      isDismissable
      className={css.modal}
      isOpen={IS_open}
      onOpenChange={TOGGLE_open}
    >
      <Dialog
        className={css.dialog}
        aria-label={ariaLabel}
        data-fullscreen={fullscreen}
      >
        {withHeader && <Modal_HEADER {...{ title, TOGGLE_open }} />}
        {children}
      </Dialog>
    </Modal>
  );
}
