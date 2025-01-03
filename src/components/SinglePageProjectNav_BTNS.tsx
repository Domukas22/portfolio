//
//
//

import SCROLL_to from "@/utils/SCROLL_to";
import { ScrollSpySidenav_BTN } from "./ScrollSpySidenav_BTN/ScrollSpySidenav_BTN";
import { ProjectSection_TYPE } from "@/types";

export default function SinglePageProjectNav_BTNS({
  Sections = [],
  activeSectionIndex = 9999,
  CLOSE_mobProjectMenu = () => {},
}: {
  Sections: ProjectSection_TYPE[];
  activeSectionIndex: number;
  CLOSE_mobProjectMenu: () => void;
}) {
  return Sections
    ? Sections?.map((section, index) => (
        <ScrollSpySidenav_BTN
          key={section.slug}
          text={section.name}
          onClick={() => {
            SCROLL_to({ target_ID: section.slug });
            CLOSE_mobProjectMenu();
          }}
          active={activeSectionIndex === index}
        />
      ))
    : null;
}
