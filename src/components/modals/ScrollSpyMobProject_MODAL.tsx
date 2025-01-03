//
//
//

import { ProjectSection_TYPE } from "@/types";
import Mobile_MODAL from "../Mobile_MODAL/Mobile_MODAL";
import MobProjectMenuProject_BTN from "../MobProjectMenuProject_BTN";
import SinglePageProjectNav_BTNS from "../SinglePageProjectNav_BTNS";
import SCROLL_to from "@/utils/SCROLL_to";

export default function ScrollSpyMobProject_MODAL({
  Sections = [],
  project_NAME = "Project name",
  IS_mobProjectOpen = false,
  activeSectionIndex = 9999,
  CLOSE_modal = () => {},
}: {
  Sections: ProjectSection_TYPE[];
  project_NAME: string;
  IS_mobProjectOpen: boolean;
  activeSectionIndex: number;
  CLOSE_modal: () => void;
}) {
  return (
    <Mobile_MODAL
      title="Project Menu"
      IS_open={IS_mobProjectOpen}
      CLOSE_modal={CLOSE_modal}
      extraElsAboveScrollable={
        <MobProjectMenuProject_BTN
          project_NAME={project_NAME}
          onClick={() => {
            CLOSE_modal();
            SCROLL_to({});
          }}
        />
      }
    >
      <SinglePageProjectNav_BTNS
        {...{ Sections }}
        activeSectionIndex={activeSectionIndex}
        CLOSE_mobProjectMenu={CLOSE_modal}
      />
    </Mobile_MODAL>
  );
}
