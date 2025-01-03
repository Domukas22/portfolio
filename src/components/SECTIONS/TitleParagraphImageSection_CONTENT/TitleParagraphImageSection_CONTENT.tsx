//
//
//

import css from "./TitleParagraphImageSection_CONTENT.module.css";
import Container from "@/components/Container";
import Custom_IMG from "@/components/Custom_IMG/Custom_IMG";
import { ICON_arrow } from "@/components/Icons/Icons";
import Link from "next/link";

type TitleParagraphImageSection_TYPE = {
  title: string;
  parapgraphs: string[];
  img_PATH: string;
  sticky_TEXT?: boolean;
  sticky_IMG?: boolean;

  imgWrap_STYLES?: React.CSSProperties;
  img_STYLES?: React.CSSProperties;
  customImg_EL?: React.ReactNode;
  link?: {
    link_TEXT: string;
    href: string;
  };
};

export function TitleParagraphImageSection_CONTENT({
  title,
  parapgraphs,
  img_PATH,
  sticky_TEXT,
  sticky_IMG,
  imgWrap_STYLES,
  img_STYLES,
  customImg_EL,
  link,
}: TitleParagraphImageSection_TYPE) {
  const img = customImg_EL ? (
    customImg_EL
  ) : (
    <Custom_IMG
      img_PATH={img_PATH}
      resolution={{ width: 1000, height: 1000 }}
      imgWrap_STYLES={imgWrap_STYLES}
      img_STYLES={img_STYLES}
    />
  );

  const btn = (
    <Link href={link?.href || "/"} className="btn mt-[3rem]">
      <span> {link?.link_TEXT}</span>
      <ICON_arrow direction="right" className="ml-auto" />
    </Link>
  );

  return (
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
                  key={`p/${img_PATH}/${i}`}
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              ))}
              {link ? btn : null}
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
        <h2 data-text data-title dangerouslySetInnerHTML={{ __html: title }} />
        <div data-img-wrap>{img}</div>
        <div data-text>
          {parapgraphs?.map((p: string, i: number) => (
            <p
              key={`p/${img_PATH}/${i}`}
              dangerouslySetInnerHTML={{ __html: p }}
            />
          ))}
          {link ? btn : null}
        </div>
      </div>
    </Container>
  );
}
