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
  btnType: "btn" | "btn-square" | "btn-square-light";
  extraAttributes?: { [key: string]: string | number | boolean }[];
  //   left_ICON?: React.ReactNode;
  //   aria_LABEL?: string;
  //   _ref?: React.RefObject<HTMLButtonElement> | null;
  //   type?: "button" | "submit" | "reset";
  //   disabled?: boolean;
  //   tabIndex?: number;
}

export default function Btn({
  text,
  btnType,
  className,
  onClick,
  FIRE_clickEvent,
  right_ICON,
  extraAttributes = [],
}: Btn_PROPS) {
  const mergedAttributes = extraAttributes.reduce((acc, curr) => {
    return { ...acc, ...curr };
  }, {});

  return (
    <Button
      className={clsx(btnType || "btn", className)}
      onPress={(e) => {
        // the 'react-aria-components' button componenet does not fire a click even by defualt
        if (onClick) onClick(e);
        if (FIRE_clickEvent) {
          document.dispatchEvent(new Event("click"));
        }
      }}
      {...mergedAttributes}
    >
      {text}
      {right_ICON}
    </Button>
  );
}
