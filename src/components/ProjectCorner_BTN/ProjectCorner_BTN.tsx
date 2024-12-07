//
//
//

import Btn from "../Btn/Btn";
import { ICON_dropDownArrow } from "../Icons/Icons";
import css from "./ProjectCorner_BTN.module.css";

interface LogoBtn_PROPS {
  project: string;
  tab: string;
  TOGGLE_menu?: () => void;
}

export default function ProjectCorner_BTN({
  project = "Project name",
  tab = "Current tab name",
  TOGGLE_menu,
}: LogoBtn_PROPS) {
  return (
    <Btn
      btnType={TOGGLE_menu ? "btn-square-light" : "btn-square"}
      className={css.projectCorner_BTN}
      extraAttributes={[`data-is-menu-toggle="${TOGGLE_menu ? true : ""}"`]}
      onClick={() =>
        TOGGLE_menu
          ? TOGGLE_menu()
          : window.scrollTo({ top: 0, behavior: "smooth" })
      }
    >
      <div data-text-wrap>
        <p data-text>{project}</p>
        <h5 data-text>{tab}</h5>
      </div>

      <ICON_dropDownArrow extraAttributes={["data-arrow"]} />
    </Btn>
  );
}
