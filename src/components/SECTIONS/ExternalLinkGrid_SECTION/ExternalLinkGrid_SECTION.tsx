//
//
//

import css from "./ExternalLinkGrid_SECTION.module.css";
import Project_SECTION from "@/components/Project_SECTION";
import Container from "@/components/Container";
import { ExternalLinkGridSection_TYPE } from "@/projects/types/sections";

import { ICON_arrow } from "@/components/Icons/Icons";
import { MutableRefObject } from "react";

export function ExternalLinkGrid_SECTION({
  section_CONTENT,
  sectionRefs,
  index,
}: {
  sectionRefs: MutableRefObject<(HTMLElement | null)[]>;
  index: number;
  section_CONTENT: ExternalLinkGridSection_TYPE;
}) {
  const { section_SLUG, links, title = "SECTION TITLE" } = section_CONTENT;

  return (
    <Project_SECTION {...{ section_SLUG, sectionRefs, index }}>
      <Container extraClass={css.externalLinkGrid_CONTAINER}>
        <h2>{title}</h2>
        <div data-link-grid>
          {links?.map((link, i) => (
            <a
              className="btn justify-between gap-[2rem]"
              key={link.btnText + link.href + i}
              href={link.href}
              target="_blank"
            >
              {link.btnText || "BTN TEXT"}
              <ICON_arrow direction="right" />
            </a>
          ))}
        </div>
      </Container>
    </Project_SECTION>
  );
}
