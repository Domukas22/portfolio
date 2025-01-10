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
  radios: { value: string; displayText: string; count?: number }[];
  value: string;

  SET_value: React.Dispatch<React.SetStateAction<any>>;
}) {
  return (
    <RadioGroup className={css.RadioGroup} value={value} onChange={SET_value}>
      <Label className="pb-[0.6rem]">{label}</Label>
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
