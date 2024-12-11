//
//
//

import { ProjectSection_TYPE } from "@/projects/projectSection_TYPES";
import { MutableRefObject } from "react";
import Introduction_SECTION from "./SECTIONS/Introduction_SECTION";
import { ProjectTabs_TYPE } from "@/projects/projectTypes";

export function ProjectTab_SECTIONS({
  current_TAB,
  hideContent,
  sectionRefs,
}: {
  current_TAB: ProjectTabs_TYPE;
  hideContent: boolean;
  sectionRefs: MutableRefObject<(HTMLElement | null)[]>;
}) {
  console.log(current_TAB);
  return (
    <>
      {current_TAB?.sections?.map(
        (section_CONTENT: ProjectSection_TYPE, index: number) => {
          switch (section_CONTENT.type) {
            case "introduction":
              return (
                <Introduction_SECTION
                  key={section_CONTENT.section_SLUG}
                  {...{ section_CONTENT, index, sectionRefs, hideContent }}
                />
              );
          }
        }
      )}
    </>
  );
}
