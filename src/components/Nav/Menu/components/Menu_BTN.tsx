//
//
//

import { ICON_arrow } from "@/components/Icons/Icons";
import Link from "next/link";

export function Menu_BTN({
  title = "Btn title",
  subtitle,
  link = "/",
  active = false,
}: {
  title: string;
  subtitle?: string;
  link: string;
  active: boolean;
}) {
  return (
    <Link href={link || "/"} className="native-link-nav" data-active={active}>
      <div data-text-wrap>
        <span data-title>{title}</span>
        {subtitle && <span data-subtitle>{subtitle}</span>}
      </div>
      <ICON_arrow direction="right" color="light" data-arrow />
    </Link>
  );
}
