//
//
//

import { MutableRefObject } from "react";
import Project_SECTION from "./Project_SECTION";
import { ProjectSection_TYPE } from "@/types";

export default function Project_SECTIONS({
  sectionRefs,
  Sections = [],
}: {
  sectionRefs: MutableRefObject<(HTMLElement | null)[]>;
  Sections: ProjectSection_TYPE[];
}) {
  return (
    Sections &&
    Sections?.length &&
    Sections.map((section, index) => {
      return (
        <Project_SECTION
          key={index}
          index={index}
          section_SLUG={section.slug}
          sectionRefs={sectionRefs}
        >
          {section.content}
        </Project_SECTION>
      );
    })
  );
}
