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
  hideLabel = false,
  placeholder,
}: {
  label?: string;
  name: string;
  type: string;
  isRequired: boolean;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  IS_textArea?: boolean;
  hideLabel?: boolean;
  placeholder?: string;
}) {
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange(event.target.value);
  };

  return !IS_textArea ? (
    <TextField
      className={css.textfield}
      name={name}
      type={type}
      isRequired={isRequired}
      aria-label={hideLabel && label ? label : ""}
    >
      {label && !hideLabel && <Label>{label}</Label>}
      <Input onChange={handleChange} value={value} placeholder={placeholder} />
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
