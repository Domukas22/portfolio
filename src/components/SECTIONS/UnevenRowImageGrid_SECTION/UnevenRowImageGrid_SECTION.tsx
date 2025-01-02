//
//
//

import Image from "next/image";
import css from "./UnevenRowImageGrid_SECTION.module.css";
import Project_SECTION from "@/components/Project_SECTION";
import Container from "@/components/Container";
import { UnevenRowImageGridSection_TYPE } from "@/projects/types/sections";
import { MutableRefObject } from "react";

export function UnevenRowImageGrid_SECTION({
  section_CONTENT,
  sectionRefs,
  index,
}: {
  sectionRefs: MutableRefObject<(HTMLElement | null)[]>;
  index: number;
  section_CONTENT: UnevenRowImageGridSection_TYPE;
}) {
  const {
    title,
    subtitle,
    section_SLUG,
    leftImages_PATHS,
    rightImages_PATHS,
    firstWideImg_PATH,
  } = section_CONTENT;

  return (
    <Project_SECTION {...{ section_SLUG, sectionRefs, index }}>
      <Container extraClass={css.unevenRowImageGrid_CONTAINER}>
        {title && <h2>{title}</h2>}
        {subtitle && <p>{subtitle}</p>}
        {firstWideImg_PATH && (
          <Image
            key={section_SLUG + firstWideImg_PATH}
            width={2000}
            height={700}
            src={firstWideImg_PATH}
            alt=""
            className="w-full rounded-[1.6rem]"
          />
        )}
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
