//
//
//

import React, { ChangeEvent } from "react";
import {
  Input,
  Label,
  TextField,
  FieldError,
  TextArea,
} from "react-aria-components";
import css from "./Text_INPUT.module.css";

export default function Text_INPUT({
  label,
  name,
  type,
  value,
  isRequired,
  onChange,
  IS_textArea = false,
}: {
  label: string;
  name: string;
  type: string;
  isRequired: boolean;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  IS_textArea?: boolean;
}) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return !IS_textArea ? (
    <TextField
      className={css.textfield}
      name={name}
      type={type}
      isRequired={isRequired}
    >
      {label && <Label>{label}</Label>}
      <Input onChange={handleChange} value={value} />
      <FieldError data-error-text />
    </TextField>
  ) : (
    <TextField
      className={css.textfield}
      name={name}
      type={type}
      isRequired={isRequired}
    >
      {label && <Label>{label}</Label>}
      <TextArea onChange={handleChange} value={value} />
      <FieldError data-error-text />
    </TextField>
  );
}
