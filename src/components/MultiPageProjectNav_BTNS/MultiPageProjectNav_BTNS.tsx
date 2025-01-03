//
//
//

import { nestedPage_TYPE } from "@/projects/intros";
import { SideNav_DD } from "../Sidenav_DD/Sidenav_DD";
import MultipageProjectSidenav_LINK from "../MultipageProjectSidenav_LINK/MultipageProjectSidenav_LINK";
import { useEffect } from "react";

export default function MultiPageProjectNav_BTNS({
  nested_PAGES = [],
  opened_DDs = [],
  currentPage_SLUG = "xxx",
  project_SLUG = "xxx",
  CLOSE_mobProjectMenu = () => {},
  TOGGLE_dd = () => {},
}: {
  nested_PAGES: nestedPage_TYPE[];
  currentPage_SLUG: string;
  opened_DDs: string[];
  project_SLUG: string;
  TOGGLE_dd: (slug: string | undefined, val?: boolean) => void;
  CLOSE_mobProjectMenu: () => void;
}) {
  // open dd if child page is selected
  useEffect(() => {
    nested_PAGES?.map((page) => {
      if (page.type !== "with-children") return;
      page.children?.map((child_PAGE) => {
        if (
          child_PAGE.slug === currentPage_SLUG &&
          !opened_DDs.includes(child_PAGE.slug)
        ) {
          TOGGLE_dd(page.slug, true);
        }
      });
    });
  }, []);

  return nested_PAGES && nested_PAGES?.length
    ? nested_PAGES.map((page, index) => {
        if (page.type === "with-children") {
          return (
            <SideNav_DD
              text={page.name}
              key={index + page.slug}
              active={page.children?.some(
                (child) => child.slug === currentPage_SLUG
              )}
              // active={page.slug === currentPage_SLUG}
              open={opened_DDs?.some((slug) => slug === page.slug)}
              toggle={() => TOGGLE_dd(page.slug)}
              {...{ TOGGLE_dd }}
              children_PAGES={page.children || []}
              currentPage_SLUG={currentPage_SLUG}
              project_SLUG={project_SLUG}
              page_SLUG={page.slug}
            />
          );
        }

        return (
          <MultipageProjectSidenav_LINK
            key={index + page.slug}
            active={page.slug === currentPage_SLUG}
            href={`/projects/${project_SLUG}/${page.slug}`}
            text={page.name}
          />
        );
      })
    : null;
}
