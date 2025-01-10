//
//
//

import { Label } from "react-aria-components";
import css from "./Input_LABEL.module.css";

export default function Input_LABEL({ label }: { label: string }) {
  return <Label className={css.label}>{label}</Label>;
}
