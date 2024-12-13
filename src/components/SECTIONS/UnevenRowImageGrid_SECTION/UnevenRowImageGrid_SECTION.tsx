//
//
//

import { UnevenRowImageGridSection_TYPE } from "@/projects/projectSection_TYPES";
import Image from "next/image";
import { MutableRefObject } from "react";
import css from "./UnevenRowImageGrid_SECTION.module.css";
import Project_SECTION from "@/components/Project_SECTION";
import Container from "@/components/Container";

export function UnevenRowImageGrid_SECTION({
  section_CONTENT,
  index,
  sectionRefs,
  hideContent,
}: {
  section_CONTENT: UnevenRowImageGridSection_TYPE;
  index: number;
  sectionRefs: MutableRefObject<(HTMLElement | null)[]>;
  hideContent: boolean;
}) {
  const { title, subtitle, section_SLUG, leftImages_PATHS, rightImages_PATHS } =
    section_CONTENT;

  return (
    <Project_SECTION {...{ section_SLUG, index, sectionRefs }}>
      <Container
        {...{ hideContent }}
        extraClass={css.unevenRowImageGrid_CONTAINER}
      >
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
        <div data-uneven-row-image-grid>
          <div data-img-col data-left>
            {leftImages_PATHS?.map((img_PATH, index) => (
              <Image
                key={section_SLUG + img_PATH + index}
                width={500}
                height={400}
                src={img_PATH}
                alt=""
              />
            ))}
          </div>
          <div data-img-col data-right>
            {rightImages_PATHS?.map((img_PATH, index) => (
              <Image
                key={section_SLUG + img_PATH + index}
                width={500}
                height={400}
                src={img_PATH}
                alt=""
              />
            ))}
          </div>
        </div>
      </Container>
    </Project_SECTION>
  );
}
