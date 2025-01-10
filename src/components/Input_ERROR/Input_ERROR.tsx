//
//
//

import React from "react";
import { FieldError } from "react-aria-components";
import css from "./Input_ERROR.module.css";

export default function Input_ERROR() {
  return <FieldError className={css.error} />;
}
