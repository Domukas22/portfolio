//
//
//

import css from "./TitleParagraphImage_SECTION.module.css";
import Project_SECTION from "@/components/Project_SECTION";
import Container from "@/components/Container";
import { TitleParagraphImageSection_TYPE } from "@/projects/types/sections";
import Custom_IMG from "@/components/Custom_IMG/Custom_IMG";
import { MutableRefObject } from "react";

export function TitleParagraphImage_SECTION({
  section_CONTENT,
  sectionRefs,
  index,
}: {
  sectionRefs: MutableRefObject<(HTMLElement | null)[]>;
  index: number;
  section_CONTENT: TitleParagraphImageSection_TYPE;
}) {
  const {
    section_SLUG,
    title,
    parapgraphs,
    img_PATH,
    sticky_TEXT,
    sticky_IMG,
    imgWrap_STYLES,
    img_STYLES,
    customImg_EL,
  } = section_CONTENT;

  // const img = <Image width={500} height={400} src={img_PATH} alt="" />;
  const img = customImg_EL ? (
    customImg_EL
  ) : (
    <Custom_IMG
      img_PATH={img_PATH}
      resolution={{ width: 700, height: 600 }}
      imgWrap_STYLES={imgWrap_STYLES}
      img_STYLES={img_STYLES}
    />
  );

  return (
    <Project_SECTION {...{ section_SLUG, sectionRefs, index }}>
      <Container>
        <div className={css.logoProgression_GRID} data-desktop>
          <div data-left>
            <div data-text-wrap data-sticky={sticky_TEXT}>
              <h2
                data-text
                data-title
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <div data-text>
                {parapgraphs?.map((p: string, i: number) => (
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
            {parapgraphs?.map((p: string, i: number) => (
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
