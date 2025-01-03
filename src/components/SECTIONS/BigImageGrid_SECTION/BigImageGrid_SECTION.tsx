//
//
//

import Image from "next/image";
import css from "./BigImageGrid_SECTION.module.css";
import Container from "@/components/Container";

export type BigImageGrid_SECTION_TYPE = {
  title?: string;
  subtitle?: string;
  deskImg_PATHS: string[];
  mobImg_PATHS: string[];
};

export function BigImageGrid_SECTION({
  title,
  subtitle,
  deskImg_PATHS,
  mobImg_PATHS,
}: BigImageGrid_SECTION_TYPE) {
  return (
    <Container extraClass={css.BigImageGrid_SECTION}>
      {title && <h2>{title}</h2>}
      {subtitle && <p>{subtitle}</p>}

      <div data-img-grid data-desk>
        {deskImg_PATHS?.map((img_PATH, index) => (
          <Image
            key={img_PATH + index}
            width={1500}
            height={1000}
            src={img_PATH}
            alt=""
          />
        ))}
      </div>
      <div data-img-grid data-mob>
        {mobImg_PATHS?.map((img_PATH, index) => (
          <Image
            key={img_PATH + index}
            width={500}
            height={400}
            src={img_PATH}
            alt=""
          />
        ))}
      </div>
    </Container>
  );
}
