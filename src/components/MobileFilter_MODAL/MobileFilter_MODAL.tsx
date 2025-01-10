//
//

import css from "./MobileFilter_MODAL.module.css";
import { Dialog, Modal } from "react-aria-components";
import React from "react";
import Modal_HEADER from "../Modal_HEADER/Modal_HEADER";

interface props {
  title: string;
  ariaLabel?: string;
  IS_open: boolean;
  animate_LI?: boolean;
  CLOSE_modal?: () => void;
  children: React.ReactNode;
}

export default function MobileFilter_MODAL({
  title = "Project menu",
  ariaLabel = "Project menu",
  IS_open,
  animate_LI = false,
  CLOSE_modal = () => {},
  children,
}: props) {
  return (
    <Modal
      isDismissable
      className={css.modal}
      isOpen={IS_open}
      onOpenChange={CLOSE_modal}
    >
      <Dialog className={css.dialog} aria-label={ariaLabel}>
        <ul
          data-animate-li={animate_LI}
          className="flex-1 h-full flex flex-col"
        >
          <Modal_HEADER {...{ title }} TOGGLE_open={CLOSE_modal} />
          {children && children}
        </ul>
      </Dialog>
    </Modal>
  );
}
