//
//
//

import React from "react";
import { SearchField } from "react-aria-components";
import Text_INPUT from "../Text_INPUT/Text_INPUT";
import Input_LABEL from "../Input_LABEL/Input_LABEL";
import css from "./SearchBar.module.css";
import Btn from "../Btn/Btn";
import { ICON_search, ICON_x } from "../Icons/Icons";

export default function SearchBar({
  label = "label",
  value,
  placeholder,
  onChange,
  hideLabel = false,
  ...props
}: {
  label: string;
  value: string;
  placeholder?: string;
  hideLabel?: boolean;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <SearchField
      {...props}
      className={css.searchBar}
      onChange={onChange}
      value={value}
      aria-label={label}
    >
      {!hideLabel ? <Input_LABEL label={label} /> : hideLabel}
      <div data-input-wrap>
        <ICON_search data-search-icon />
        <Text_INPUT placeholder={placeholder} data-input />
        <Btn btnType="btn" left_ICON={<ICON_x />} data-btn-x />
      </div>
    </SearchField>
  );
}
