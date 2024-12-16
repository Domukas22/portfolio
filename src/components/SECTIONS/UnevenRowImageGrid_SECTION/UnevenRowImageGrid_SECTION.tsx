//
//
//

import Image from "next/image";
import css from "./UnevenRowImageGrid_SECTION.module.css";
import Project_SECTION from "@/components/Project_SECTION";
import Container from "@/components/Container";
import { UnevenRowImageGridSection_TYPE } from "@/projects/types/sections";

export function UnevenRowImageGrid_SECTION({
  section_CONTENT,
  hideContent,
}: {
  section_CONTENT: UnevenRowImageGridSection_TYPE;
  index: number;
  hideContent: boolean;
}) {
  const { title, subtitle, section_SLUG, leftImages_PATHS, rightImages_PATHS } =
    section_CONTENT;

  return (
    <Project_SECTION {...{ section_SLUG, hideContent }}>
      <Container extraClass={css.unevenRowImageGrid_CONTAINER}>
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
