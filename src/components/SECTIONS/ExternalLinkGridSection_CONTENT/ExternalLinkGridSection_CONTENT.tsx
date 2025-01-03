//
//
//

import css from "./ExternalLinkGridSection_CONTENT.module.css";
import Container from "@/components/Container";
import { ICON_arrow } from "@/components/Icons/Icons";

export type ExternalLinkGridSection_TYPE = {
  title: string;
  links: {
    btnText: string;
    href: string;
  }[];
};

export function ExternalLinkGridSection_CONTENT({
  links,
  title = "SECTION TITLE",
}: ExternalLinkGridSection_TYPE) {
  return (
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
  );
}
