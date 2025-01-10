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
  hideLabel = false,
}: {
  label: string;
  radios: { value: string; displayText: string; count?: number }[];
  value: string;
  hideLabel?: boolean;

  SET_value: React.Dispatch<React.SetStateAction<any>>;
}) {
  return (
    <RadioGroup
      className={css.RadioGroup}
      value={value}
      onChange={SET_value}
      aria-label={label}
    >
      {!hideLabel ? <Label className="pb-[0.6rem]">{label}</Label> : null}
      {radios &&
        radios?.length &&
        radios.map((r, i) => (
          <Radio key={r.value + i} value={r.value}>
            {r.displayText}
            {typeof r.count === "number" && (
              <span data-radio-count-text>{r.count}</span>
            )}
          </Radio>
        ))}
    </RadioGroup>
  );
}
