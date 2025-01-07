//
//
//

import { ICON_error } from "../Icons/Icons";
import css from "./Error_BOX.module.css";

export default function Error_BOX({
  children,
  text,
}: {
  children?: React.ReactNode;
  text?: string;
}) {
  return (
    <div className={css.Error_BOX}>
      <ICON_error />
      {text ? text : null}
      {children}
    </div>
  );
}
