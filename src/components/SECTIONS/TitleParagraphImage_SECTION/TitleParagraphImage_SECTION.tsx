//
//
//

import { TitleParagraphImageSection_TYPE } from "@/projects/projectSection_TYPES";
import Image from "next/image";
import { MutableRefObject } from "react";
import css from "./TitleParagraphImage_SECTION.module.css";
import Project_SECTION from "@/components/Project_SECTION";
import Container from "@/components/Container";

export function TitleParagraphImage_SECTION({
  section_CONTENT,
  index,
  sectionRefs,
  hideContent,
}: {
  section_CONTENT: TitleParagraphImageSection_TYPE;
  index: number;
  sectionRefs: MutableRefObject<(HTMLElement | null)[]>;
  hideContent: boolean;
}) {
  const {
    section_SLUG,
    title,
    parapgraphs,
    img_PATH,
    sticky_TEXT,
    sticky_IMG,
  } = section_CONTENT;

  const img = <Image width={500} height={400} src={img_PATH} alt="" />;

  return (
    <Project_SECTION {...{ section_SLUG, index, sectionRefs }}>
      <Container {...{ hideContent }}>
        <div className={css.logoProgression_GRID} data-desktop>
          <div data-left>
            <div data-text-wrap data-sticky={sticky_TEXT}>
              <h2
                data-text
                data-title
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <div data-text>
                {parapgraphs?.map((p, i) => (
                  <p
                    key={`p/${section_SLUG}/${img_PATH}/${i}`}
                    dangerouslySetInnerHTML={{ __html: p }}
                  />
                ))}
              </div>
            </div>
          </div>
          <div data-right>
            <div data-img-wrap data-sticky={sticky_IMG}>
              {img}
            </div>
          </div>
        </div>

        <div className={css.logoProgression_GRID} data-mobile>
          <h2
            data-text
            data-title
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div data-img-wrap>{img}</div>
          <div data-text>
            {parapgraphs?.map((p, i) => (
              <p
                key={`p/${section_SLUG}/${img_PATH}/${i}`}
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
          </div>
        </div>
      </Container>
    </Project_SECTION>
  );
}
