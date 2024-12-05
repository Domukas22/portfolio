//
//
//

"use client";

import { Button, PressEvent } from "react-aria-components";

interface Btn_PROPS {
  text?: string;
  onClick?: (e: PressEvent) => void;
  //   styling?: Btn_CLASSNAMES[];
  //   onClick?: (e: PressEvent) => void;
  FIRE_clickEvent?: boolean;
  //   left_ICON?: React.ReactNode;
  //   right_ICON?: React.ReactNode;
  //   aria_LABEL?: string;
  //   _ref?: React.RefObject<HTMLButtonElement> | null;
  //   type?: "button" | "submit" | "reset";
  //   disabled?: boolean;
  //   tabIndex?: number;
}

export default function Btn({ text, onClick, FIRE_clickEvent }: Btn_PROPS) {
  return (
    <Button
      className="btn"
      onPress={(e) => {
        // the 'react-aria-components' button componenet does not fire a click even by defualt
        if (onClick) onClick(e);
        if (FIRE_clickEvent) {
          document.dispatchEvent(new Event("click"));
        }
      }}
    >
      {text}
    </Button>
  );
}
