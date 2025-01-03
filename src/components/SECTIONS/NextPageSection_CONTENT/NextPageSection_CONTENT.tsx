//
//
//

import Container from "@/components/Container";
import { ICON_arrow } from "@/components/Icons/Icons";
import Link from "next/link";
import css from "./NextPageSection_CONTENT.module.css";

export type NextPageSection_CONTENT_TYPE = {
  text: string;
  href: string;
};

export function NextPageSection_CONTENT({
  text,
  href,
}: NextPageSection_CONTENT_TYPE) {
  return (
    <Container>
      <Link href={href || "/"} className={`btn ${css.link}`}>
        <span> {text}</span>
        <ICON_arrow direction="right" size="big" className="ml-auto" />
      </Link>
    </Container>
  );
}
