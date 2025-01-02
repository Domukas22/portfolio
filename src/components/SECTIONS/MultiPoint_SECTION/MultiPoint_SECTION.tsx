//
//
//

import css from "./MultiPoint_SECTION.module.css";
import Project_SECTION from "@/components/Project_SECTION";
import Container from "@/components/Container";
import { MultiPointSection_TYPE } from "@/projects/types/sections";
import { MutableRefObject } from "react";

export function MultiPoint_SECTION({
  section_CONTENT,
  sectionRefs,
  index,
}: {
  sectionRefs: MutableRefObject<(HTMLElement | null)[]>;
  index: number;
  section_CONTENT: MultiPointSection_TYPE;
}) {
  const { section_SLUG, title, subtitle, points } = section_CONTENT;

  return (
    <Project_SECTION {...{ section_SLUG, sectionRefs, index }}>
      <Container extraClass={css.multiPointSection_CONTAINER}>
        <div data-content-wrap>
          <div data-top>
            <h2>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
          </div>
          {points?.map(({ title, paragraphs }, i) => (
            <div data-point key={"point/" + section_SLUG + i}>
              <h4 data-title>{title}</h4>
              <div data-paragraph-wrap>
                {paragraphs?.map((p, i) => (
                  <p key={p + i} dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Project_SECTION>
  );
}
