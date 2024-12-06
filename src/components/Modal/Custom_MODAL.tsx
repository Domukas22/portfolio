//
//

import css from "./Custom_MODAL.module.css";
import Btn from "@/components/Btn/Btn";
import { Dialog, Modal } from "react-aria-components";
import React from "react";
import { ICON_x } from "../Icons/Icons";

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
  TOGGLE_open,
  IS_open,
  children,
  title,
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
        {withHeader && (
          <div className={css.header}>
            <h3 className="fs-18 fw-600">{title || "INSERT TITLE"}</h3>
            <Btn
              //   styling={["btn-40", "round", "grey"]}
              right_ICON={<ICON_x color="dark" />}
              onClick={TOGGLE_open}
              className="tinyNavBtn"
            />
          </div>
        )}
        {children}
      </Dialog>
    </Modal>
  );
}
