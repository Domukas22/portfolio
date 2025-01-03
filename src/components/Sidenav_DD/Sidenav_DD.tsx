//
//
//

import { AnimatePresence, motion } from "framer-motion";
import Btn from "../Btn/Btn";
import TabDD_ICON from "../TabDD_ICON";

import css from "./Sidenav_DD.module.css";
import { useMemo, useState } from "react";
import { pageChild_TYPE } from "@/projects/intros";
import { ScrollSpySidenav_BTN } from "../ScrollSpySidenav_BTN/ScrollSpySidenav_BTN";
import MultipageProjectSidenav_LINK from "../MultipageProjectSidenav_LINK/MultipageProjectSidenav_LINK";
import MultipageNestedProjectSidenav_BTN from "../MultipageNestedProjectSidenav_BTN/MultipageNestedProjectSidenav_BTN";

interface NestedSidenav_BTN_PROPS {
  open: boolean;
  toggle: () => void;
  mobile?: boolean;
  active: boolean;
  children_PAGES: pageChild_TYPE[];
  text: string;
  project_SLUG: string;
  page_SLUG: string;
  currentPage_SLUG: string;
}

export function SideNav_DD({
  text = "xxx",
  open = false,
  toggle = () => {},
  mobile = false,
  active = false,
  children_PAGES = [],
  project_SLUG = "xxx",
  page_SLUG = "xxx",
  currentPage_SLUG = "xxx",
}: NestedSidenav_BTN_PROPS) {
  const [initialRender, SET_initialRender] = useState(true);
  const [animating, SET_animating] = useState(false);

  const firstChild_PAGE = useMemo(() => children_PAGES?.[0], [children_PAGES]);

  return (
    <div className={css.sidenav_DD} data-open={open}>
      <div className={css.dd_TOP}>
        {/* <MainSidenav_BTN active={active} onClick={() => {}} text={text} /> */}

        <MultipageProjectSidenav_LINK
          active={children_PAGES?.some(
            (child) => child?.slug === currentPage_SLUG
          )}
          href={`/projects/${project_SLUG}/${page_SLUG}/${firstChild_PAGE?.slug}`}
          text={text}
          noBottomBorder
        />

        <li>
          <Btn
            btnType="btn-square"
            right_ICON={
              <TabDD_ICON {...{ open, mobile: false }} IS_current={false} />
            }
            className={css.ddArrow_BTN}
            onClick={() => {
              if (!animating) toggle();
            }}
          />
        </li>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className={css.dd_BOTTOM}
            // initial={{ height: 0, opacity: 0 }}
            initial={
              initialRender
                ? { height: "auto", opacity: 1 }
                : { height: 0, opacity: 0 }

              // { height: 0, opacity: 0 }
            }
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            exit={{ height: 0, opacity: 0 }}
            onAnimationStart={() => SET_animating(true)}
            onAnimationComplete={() => SET_animating(false)}
          >
            {children_PAGES?.map((page, index) => {
              return (
                <MultipageNestedProjectSidenav_BTN
                  key={page.slug + index}
                  active={page.slug === currentPage_SLUG}
                  href={`/projects/${project_SLUG}/${page_SLUG}/${page.slug}`}
                  text={page.name}
                />
                // <li key={page.slug + index}>
                //   <Btn
                //     btnType="btn-square"
                //     className={css.btn}
                //     data-active={true}
                //     onClick={() => {}}
                //     text={page.name}
                //     text_STYLES={{ color: "var(--text-white-light)" }}
                //   />
                // </li>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
