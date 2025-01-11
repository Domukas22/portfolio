//
//

import css from "./Mobile_MODAL.module.css";
import { Dialog, Modal } from "react-aria-components";
import React from "react";
import Modal_HEADER from "../Modal_HEADER/Modal_HEADER";

interface props {
  title: string;
  ariaLabel?: string;
  IS_open: boolean;
  children: React.ReactElement;
  extraElsAboveScrollable?: React.ReactNode;
  CLOSE_modal?: () => void;
  animate_LI?: boolean;
  noScroll?: boolean;
}

export default function Mobile_MODAL({
  title = "Project menu",
  ariaLabel = "Project menu",
  IS_open,
  children,
  extraElsAboveScrollable,
  CLOSE_modal = () => {},
  animate_LI = false,
  noScroll = false,
}: props) {
  return (
    <Modal
      isDismissable
      className={css.modal}
      isOpen={IS_open}
      onOpenChange={CLOSE_modal}
      data-simple-modal-fade
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
            className={`overflow-y-auto flex-1 pb-[12rem] relative `}
            style={noScroll ? { overflowY: "hidden", paddingBottom: "0" } : {}}
          >
            {children}
          </div>
        </ul>
      </Dialog>
    </Modal>
  );
}
