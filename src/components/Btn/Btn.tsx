//
//
//

"use client";

import { Button, PressEvent } from "react-aria-components";
import clsx, { ClassValue } from "clsx";

interface Btn_PROPS {
  text?: string;
  onClick?: (e: PressEvent) => void;
  className?: ClassValue;
  FIRE_clickEvent?: boolean;
  right_ICON?: React.ReactNode;
  //   left_ICON?: React.ReactNode;
  //   aria_LABEL?: string;
  //   _ref?: React.RefObject<HTMLButtonElement> | null;
  //   type?: "button" | "submit" | "reset";
  //   disabled?: boolean;
  //   tabIndex?: number;
}

export default function Btn({
  text,
  className,
  onClick,
  FIRE_clickEvent,
  right_ICON,
}: Btn_PROPS) {
  return (
    <Button
      className={clsx("btn", className)}
      onPress={(e) => {
        // the 'react-aria-components' button componenet does not fire a click even by defualt
        if (onClick) onClick(e);
        if (FIRE_clickEvent) {
          document.dispatchEvent(new Event("click"));
        }
      }}
    >
      {text}
      {right_ICON}
    </Button>
  );
}
