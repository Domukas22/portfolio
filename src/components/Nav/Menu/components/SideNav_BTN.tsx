//
//
//

import { ICON_arrow } from "@/components/Icons/Icons";
import Link from "next/link";

export function SideNav_BTN({
  title = "Btn title",
  subtitle,
  link = "/",
}: {
  title: string;
  subtitle?: string;
  link: string;
}) {
  return (
    <Link href={link || "/"} className="native-link-nav">
      <div data-text-wrap>
        <span data-title>{title}</span>
        {subtitle && <span data-subtitle>{subtitle}</span>}
      </div>
      <ICON_arrow
        direction="right"
        color="white-dimm"
        extraAttributes={["data-arrow"]}
      />
    </Link>
  );
}
