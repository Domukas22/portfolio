//
//
//

import { MultiPointSection_TYPE } from "@/projects/projectSection_TYPES";
import { MutableRefObject } from "react";
import css from "./MultiPoint_SECTION.module.css";
import Project_SECTION from "@/components/Project_SECTION";
import Container from "@/components/Container";

export function MultiPoint_SECTION({
  section_CONTENT,
  index,
  sectionRefs,
  hideContent,
}: {
  section_CONTENT: MultiPointSection_TYPE;
  index: number;
  sectionRefs: MutableRefObject<(HTMLElement | null)[]>;
  hideContent: boolean;
  project_SLUG: string;
}) {
  const { section_SLUG, title, subtitle, points } = section_CONTENT;

  return (
    <Project_SECTION {...{ section_SLUG, index, sectionRefs }}>
      <Container
        extraClass={css.multiPointSection_CONTAINER}
        {...{ hideContent }}
      >
        <div data-content-wrap>
          <div data-top>
            <h2>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
          </div>
          {points?.map(({ title, paragraph }, i) => (
            <div data-point key={"point/" + section_SLUG + i}>
              <h4 data-title>{title}</h4>
              <p dangerouslySetInnerHTML={{ __html: paragraph }} />
            </div>
          ))}
        </div>
      </Container>
    </Project_SECTION>
  );
}
