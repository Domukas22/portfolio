//
//
//

import { useEffect, useState } from "react";
import Btn from "../Btn/Btn";

import { AnimatePresence, motion } from "framer-motion";
import { ProjectTabs_TYPE } from "@/projects";
import css from "./Tab_DD.module.css";
import TabDD_ICON from "../TabDD_ICON";

interface Tab_DD {
  tab: ProjectTabs_TYPE;
  current_TAB: ProjectTabs_TYPE | undefined;
  activeIndex: number;
  hideContent: boolean;
  SELECT_section: (
    tab_SLUG: string,
    section_SLUG: string,
    dontToggleTab?: boolean
  ) => void;
  open: boolean;
  toggle: () => void;
  mobile?: boolean;
}

export function Tab_DD({
  tab,
  current_TAB,
  activeIndex,
  hideContent,
  SELECT_section,
  open,
  toggle,
  mobile = false,
}: Tab_DD) {
  const [initialRender, SET_initialRender] = useState(true);
  const [animating, SET_animating] = useState(false);
  const [current, SET_current] = useState(tab?.slug === current_TAB?.slug);

  useEffect(() => {
    // when content is hidden (because of tab navigation), make sure no section is visibly selected
    // if its mobile, make sure we don't animate the currently active tab, becaus ethe modal will close anyways
    if (!mobile) SET_current(tab?.slug === current_TAB?.slug && !hideContent);
  }, [current_TAB, tab, hideContent, mobile]);

  // don't animate the open tab initially when opening project menu on mobile
  useEffect(() => {
    SET_initialRender(false);
  }, []);

  return (
    <div key={tab?.slug} className={css.tabDD} data-open={open}>
      <div className={css.ddTop_WRAP}>
        <li className="flex-1">
          <Btn
            key={tab.title}
            btnType="btn-square"
            className={css.mainTab_BTN}
            onClick={() =>
              // don't animate tab opening/closing when selecting a tab on mobile
              SELECT_section(
                tab.slug,
                tab.sections?.[0]?.slug,
                mobile ? true : false
              )
            }
            data-active-tab={current}
            text={tab.title}
          />
        </li>

        <li>
          <Btn
            key={tab.title + "dd"}
            btnType="btn-square"
            right_ICON={
              <TabDD_ICON {...{ open, mobile }} IS_current={current} />
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
            className={css.ddContent_WRAP}
            // initial={{ height: 0, opacity: 0 }}
            initial={
              initialRender
                ? { height: "auto", opacity: 1 }
                : { height: 0, opacity: 0 }
            }
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            exit={{ height: 0, opacity: 0 }}
            key={"container"}
            onAnimationStart={() => SET_animating(true)}
            onAnimationComplete={() => SET_animating(false)}
          >
            {tab.sections?.map((section, index) => {
              return (
                <li key={section.shortTab_TITLE}>
                  <Btn
                    btnType="btn-square"
                    className={css.section_BTN}
                    data-active={activeIndex === index && current}
                    onClick={() => SELECT_section(tab.slug, section.slug)}
                    text={section.shortTab_TITLE}
                    text_STYLES={{ color: "var(--text-white-light)" }}
                  />
                </li>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
