//
//
//

import Btn from "../Btn/Btn";

import css from "./ProjectSection_BTN.module.css";

interface ProjectSection_BTN_PROPS {
  text: string;
  onClick: () => void;
  active: boolean;
}

export function ProjectSection_BTN({
  text = "Btn text",
  onClick = () => {},
  active = false,
}: ProjectSection_BTN_PROPS) {
  return (
    <li>
      <Btn
        btnType="btn-square"
        className={css.section_BTN}
        data-active={active}
        onClick={onClick}
        text={text}
        text_STYLES={{ color: "var(--text-white-light)" }}
      />
    </li>
  );
}
