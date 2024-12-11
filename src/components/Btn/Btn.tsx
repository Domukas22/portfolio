//
//
//

"use client";

import { Button, PressEvent } from "react-aria-components";
import clsx, { ClassValue } from "clsx";
import React, { CSSProperties } from "react";

interface Btn_PROPS {
  text?: string;
  onClick?: (e: PressEvent) => void;
  className?: ClassValue;
  left_ICON?: React.ReactNode;
  right_ICON?: React.ReactNode;
  btnType: "btn" | "btn-square" | "btn-square-light" | "btn-tiny-desk-round";
  children?: React.ReactNode;
  style?: CSSProperties;
  text_STYLES?: CSSProperties;
}

export default function Btn({
  text,
  btnType,
  className,
  onClick,
  // FIRE_clickEvent,
  left_ICON,
  right_ICON,

  children,
  style,
  text_STYLES,
  ...props
}: Btn_PROPS) {
  return (
    <Button
      className={clsx(btnType || "btn", className)}
      onPress={(e) => {
        if (onClick) onClick(e);
      }}
      {...props}
      {...style}
    >
      {left_ICON}
      {text && <span style={text_STYLES}>{text}</span>}
      {right_ICON}
      {children}
    </Button>
  );
}
