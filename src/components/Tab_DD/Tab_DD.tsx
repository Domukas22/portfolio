//
//
//

import { useCallback, useEffect, useState } from "react";
import Btn from "../Btn/Btn";

import { AnimatePresence, motion } from "framer-motion";

import css from "./Tab_DD.module.css";
import TabDD_ICON from "../TabDD_ICON";
import { ProjectTabs_TYPE } from "@/projects/types/tabs";

interface Tab_DD {
  tab: ProjectTabs_TYPE;
  current_TAB: ProjectTabs_TYPE | undefined;
  current_SUBTAB: ProjectTabs_TYPE | undefined;
  hideContent: boolean;
  CHANGE_tab: ({
    tab,
    subtab,
  }: {
    tab: ProjectTabs_TYPE;
    subtab?: ProjectTabs_TYPE;
  }) => void;
  open: boolean;
  TOGGLE_tab: () => void;
  mobile?: boolean;
}

export function Tab_DD({
  tab,
  current_TAB,
  current_SUBTAB,
  // hideContent,
  CHANGE_tab,
  open,
  TOGGLE_tab,
  mobile = false,
}: Tab_DD) {
  const [initialRender, SET_initialRender] = useState(true);
  const [animating, SET_animating] = useState(false);

  // const [currentLocal_TAB, SET_currentLocalTab] = useState()

  // useEffect(() => {
  //   // when content is hidden (because of tab navigation), make sure no section is visibly selected
  //   // if its mobile, make sure we don't animate the currently active tab, becaus ethe modal will close anyways
  //   if (!mobile)
  //     SET_current(tab?.tab_SLUG === current_TAB?.tab_SLUG && !hideContent);
  // }, [current_TAB, tab, hideContent, mobile]);

  // don't animate the open tab initially when opening project menu on mobile
  useEffect(() => {
    SET_initialRender(false);
  }, []);

  const onTabClick = useCallback(() => {
    if (tab.type === "tab-collection") {
      CHANGE_tab({ tab, subtab: tab?.subtabs?.[0] });
    } else {
      CHANGE_tab({ tab });
    }
  }, [CHANGE_tab, tab]);

  return (
    <div key={tab?.tab_SLUG} className={css.tabDD} data-open={open}>
      <div className={css.ddTop_WRAP}>
        <li className="flex-1">
          <Btn
            key={tab.tab_NAME}
            btnType="btn-square"
            className={css.mainTab_BTN}
            onClick={onTabClick}
            data-active-tab={current_TAB?.tab_SLUG === tab?.tab_SLUG}
            text={tab.tab_NAME}
          />
        </li>

        {tab.type === "tab-collection" && (
          <li>
            <Btn
              key={tab.tab_NAME + "dd"}
              btnType="btn-square"
              right_ICON={
                <TabDD_ICON
                  {...{ open, mobile }}
                  IS_current={current_TAB?.tab_SLUG === tab?.tab_SLUG}
                />
              }
              className={css.ddArrow_BTN}
              onClick={() => {
                if (!animating) TOGGLE_tab();
              }}
            />
          </li>
        )}
      </div>
      {tab.type === "tab-collection" && (
        <AnimatePresence>
          {open && (
            <motion.div
              className={css.ddContent_WRAP}
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
              {tab.subtabs?.map((subtab, index) => {
                return (
                  <li key={subtab.tab_SLUG + index}>
                    <Btn
                      btnType="btn-square"
                      className={css.section_BTN}
                      data-active={current_SUBTAB?.tab_SLUG === subtab.tab_SLUG}
                      onClick={() => CHANGE_tab({ tab, subtab })}
                      text={subtab.tab_NAME}
                      text_STYLES={{ color: "var(--text-white-light)" }}
                    />
                  </li>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}
