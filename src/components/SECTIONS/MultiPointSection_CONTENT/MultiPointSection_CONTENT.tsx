//
//
//

import css from "./MultiPointSection_CONTENT.module.css";
import Container from "@/components/Container";

type MultiPointSection_TYPE = {
  title: string;
  subtitle?: string;
  points: { title: string; paragraphs: string[] }[];
};

export function MultiPointSection_CONTENT({
  title,
  subtitle,
  points,
}: MultiPointSection_TYPE) {
  return (
    <Container extraClass={css.multiPointSection_CONTAINER}>
      <div data-content-wrap>
        <div data-top>
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>
        {points?.map(({ title, paragraphs }, i) => (
          <div data-point key={i}>
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
  );
}
