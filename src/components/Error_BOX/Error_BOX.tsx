//
//
//

import { ICON_error } from "../Icons/Icons";
import css from "./Error_BOX.module.css";

export default function Error_BOX({
  children,
  text,
  light = false,
  iconPosition = "left",
}: {
  children?: React.ReactNode;
  text?: string;
  light?: boolean;
  iconPosition?: "left" | "top";
}) {
  return (
    <div
      className={css.Error_BOX}
      data-light={light}
      data-icon-position={iconPosition}
    >
      <ICON_error />
      {text ? text : null}
      {children}
    </div>
  );
}
