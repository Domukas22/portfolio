//
//
//

import React, { ChangeEvent } from "react";
import { Input, TextArea } from "react-aria-components";
import css from "./Text_INPUT.module.css";

export default function Text_INPUT({
  value,
  onChange = () => {},
  IS_textArea = false,
  placeholder,
  autoComplete = "off",
  ...props
}: {
  value?: string;
  onChange?: React.Dispatch<React.SetStateAction<string>>;
  IS_textArea?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange(event.target.value);
  };

  return !IS_textArea ? (
    <Input
      onChange={handleChange}
      value={value}
      placeholder={placeholder}
      autoComplete={autoComplete}
      className={css.input}
      {...props}
    />
  ) : (
    <TextArea onChange={handleChange} value={value} data-text-area />
  );
}
