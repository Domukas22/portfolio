//
//
//

import { Label, Radio, RadioGroup } from "react-aria-components";
import css from "./Radio_INPUTS.module.css";
import React from "react";

export default function Radio_INPUTS({
  label = "Radio label",
  radios = [],
  value,
  SET_value,
}: {
  label: string;
  radios: { value: string; displayText: string }[];
  value: string;
  SET_value: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <RadioGroup
      className={css.RadioGroup}
      value={value}
      onChange={(selectedValue) => SET_value(selectedValue)}
    >
      <Label>{label}</Label>
      {radios &&
        radios?.length &&
        radios.map((r) => (
          <Radio key={r.value} value={r.value}>
            {r.displayText}
          </Radio>
        ))}
    </RadioGroup>
  );
}
