//
//

import css from "./Mobile_MODAL.module.css";
import { Dialog, Modal } from "react-aria-components";
import React from "react";
import Modal_HEADER from "../Modal_HEADER/Modal_HEADER";

interface props {
  title?: string;
  ariaLabel?: string;
  IS_open: boolean;
  children: React.ReactElement;
  extraElsAboveScrollable?: React.ReactNode;
  CLOSE_modal?: () => void;
  animate_LI?: boolean;
}

export default function Mobile_MODAL({
  title = "Project menu",
  ariaLabel = "Project menu",
  IS_open,
  children,
  extraElsAboveScrollable,
  CLOSE_modal = () => {},
  animate_LI = false,
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
          {extraElsAboveScrollable}

          <div
            // data-tiny-scrollbar-styles
            className="overflow-y-auto flex-1 pb-[8rem] relative "
          >
            <div className="sticky top-0 left-0 w-[20rem] h-[20rem] bg-red-300 z-9990" />
            {children}
          </div>
        </ul>
      </Dialog>
    </Modal>
  );
}
