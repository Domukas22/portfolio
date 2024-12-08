//
//
//

"use client";

import { Button, PressEvent } from "react-aria-components";
import clsx, { ClassValue } from "clsx";
import MERGE_htmlElementAttributes from "@/utils/MERGE_htmlElementAttributes";
import React, { CSSProperties } from "react";

interface Btn_PROPS {
  text?: string;
  onClick?: (e: PressEvent) => void;
  className?: ClassValue;
  // FIRE_clickEvent?: boolean;
  right_ICON?: React.ReactNode;
  btnType: "btn" | "btn-square" | "btn-square-light";
  extraAttributes?: string[];
  //   left_ICON?: React.ReactNode;
  //   aria_LABEL?: string;
  //   _ref?: React.RefObject<HTMLButtonElement> | null;
  //   type?: "button" | "submit" | "reset";
  //   disabled?: boolean;
  //   tabIndex?: number;
  children?: React.ReactNode;
  style?: CSSProperties;
}

export default function Btn({
  text,
  btnType,
  className,
  onClick,
  // FIRE_clickEvent,
  right_ICON,
  extraAttributes,
  children,
  style,
}: Btn_PROPS) {
  return (
    <Button
      className={clsx(btnType || "btn", className)}
      onPress={(e) => {
        // the 'react-aria-components' button componenet does not fire a click even by defualt
        if (onClick) onClick(e);
        // if (FIRE_clickEvent) {
        //   document.dispatchEvent(new Event("click"));
        // }
      }}
      {...MERGE_htmlElementAttributes(extraAttributes)}
      {...style}
    >
      {text}
      {right_ICON}
      {children}
    </Button>
  );
}
