//
//
//

import Btn from "../Btn/Btn";
import { ICON_dropDownArrow } from "../Icons/Icons";
import css from "./ProjectMenu_BTN.module.css";

interface LogoBtn_PROPS {
  project_NAME: string;
  project_TABTITLE: string;
  OPEN_mobileProjectMenu?: () => void;
}

export default function ProjectMenu_BTN({
  project_NAME = "Project name",
  project_TABTITLE = "Current tab title",
  OPEN_mobileProjectMenu,
}: LogoBtn_PROPS) {
  return (
    <li
      style={{
        flex: 1,
        display: "flex",
        position: "sticky",
        top: 0,
      }}
    >
      <Btn
        btnType={"btn-square-light"}
        className={css.projectCorner_BTN}
        onClick={OPEN_mobileProjectMenu}
      >
        <div data-text-wrap>
          <p data-project-name>Project: {project_NAME}</p>
          <h5 data-current-tab-title>{project_TABTITLE}</h5>
        </div>

        <ICON_dropDownArrow data-arrow />
      </Btn>
    </li>
  );
}
