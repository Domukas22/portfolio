//
//
//

import css from "./PDFLinkGrid_CONTENT.module.css";
import Container from "@/components/Container";
import { ICON_arrow } from "@/components/Icons/Icons";
import Image from "next/image";

export type PDFLinkGrid_CONTENT_TYPE = {
  title: string;
  links: {
    btnText: string;
    href: string;
    img_PATH: string;
  }[];
};

export function PDFLinkGrid_CONTENT({
  links,
  title = "SECTION TITLE",
}: PDFLinkGrid_CONTENT_TYPE) {
  return (
    <Container extraClass={css.externalLinkGrid_CONTAINER}>
      <h2>{title}</h2>
      <div data-link-grid>
        {links?.map((link, i) => (
          <a
            className="btn flex-col p-0 overflow-hidden"
            key={link.btnText + link.href + i}
            href={link.href}
            target="_blank"
          >
            <Image
              width={600}
              height={600}
              src={link.img_PATH}
              alt=""
              style={{ borderBottom: "var(--border-light)" }}
              data-image
            />
            <div data-text-wrap>
              <span>{link.btnText || "BTN TEXT"}</span>
              <ICON_arrow direction="right" data-arrow />
            </div>
          </a>
        ))}
      </div>
    </Container>
  );
}
