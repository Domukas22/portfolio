//
//
//

import React from "react";
import { TextField } from "react-aria-components";
import css from "./Text_FIELD.module.css";
import Text_INPUT from "../Text_INPUT/Text_INPUT";
import Input_LABEL from "../Input_LABEL/Input_LABEL";
import Input_ERROR from "../Input_ERROR/Input_ERROR";

export default function Text_FIELD({
  label = "label",
  name,
  type = "text",
  value,
  isRequired = false,
  onChange,
  IS_textArea = false,
  placeholder,
  autoComplete = "off",
}: {
  label: string;
  name: string;
  type?: string;
  isRequired?: boolean;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  IS_textArea?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <TextField
      className={css.textfield}
      name={name}
      type={type}
      isRequired={isRequired}
    >
      <Input_LABEL label={label} />
      <Text_INPUT
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        IS_textArea={IS_textArea}
      />

      <Input_ERROR />
    </TextField>
  );
}
