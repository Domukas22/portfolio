//
//
//

import React, { useCallback, useEffect, useMemo, useState } from "react";
import Btn from "../Btn/Btn";

import { AnimatePresence, motion } from "framer-motion";
import { ICON_dropDownArrow, ICON_x } from "../Icons/Icons";
import { ProjectSection_TYPE, ProjectTabs_TYPE } from "@/projects";

interface Tab_DD {
  tab: ProjectTabs_TYPE;
  current_TAB: ProjectTabs_TYPE | undefined;
  activeIndex: number;
  hideContent: boolean;
  hideTabs: boolean;
  navigate: ({
    incoming_TAB,
    section,
  }: {
    incoming_TAB: ProjectTabs_TYPE;
    section: ProjectSection_TYPE;
  }) => void;
}

export function Tab_DD({
  tab,
  current_TAB,
  activeIndex,
  hideContent,
  hideTabs,
  navigate,
}: Tab_DD) {
  const IS_current = useMemo(
    () => tab?.slug === current_TAB?.slug && !hideContent,
    [current_TAB, tab, hideContent]
  );
  const [open, SET_open] = useState(IS_current);
  const [animating, SET_animating] = useState(false);

  const toggle = useCallback(() => {
    if (!animating) {
      // Prevent toggling if animating
      SET_open((prevOpen) => !prevOpen);
    }
  }, [animating]);

  return !hideTabs ? (
    <div
      key={tab?.slug}
      style={{
        borderBottom: "var(--border-light)",
      }}
    >
      <li>
        <Btn
          key={tab.title}
          text={tab.title}
          btnType="btn-square"
          left_ICON={
            <div
              className={`absolute left-[1.2rem] h-[1rem] min-h-[1rem]
                } w-[1rem] min-w-[1rem] bg-[var(--fill-main)] rounded-full `}
              style={{
                transform: IS_current ? "scale(1)" : "scale(0)",
                transition: "100ms",
              }}
            />
          }
          right_ICON={
            open ? (
              <ICON_x color={IS_current ? "main" : "white"} />
            ) : (
              <ICON_dropDownArrow color={IS_current ? "main" : "white"} />
            )
          }
          className={`px-[1.2rem] text-start font-bold justify-between relative `}
          extraAttributes={[
            `data-light-bottom-border-color="${open}" `,
            "data-text-flex",
          ]}
          text_STYLES={{
            fontWeight: 700,
            color: IS_current ? "var(--fill-main)" : "var(--text-white)",
            transition: "100ms",
            paddingLeft: IS_current ? "1.8rem" : "0rem",
          }}
          onClick={toggle}
        />
      </li>
      <AnimatePresence>
        {open && (
          <motion.div
            style={{ overflow: "hidden" }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            exit={{ height: 0, opacity: 0 }}
            key={"container"}
            onAnimationStart={() => SET_animating(true)}
            onAnimationComplete={() => SET_animating(false)}
          >
            {
              // tab.title === current_TAB.title &&
              tab.sections?.map((section, index) => {
                return (
                  <li key={section.shortTab_TITLE}>
                    <Btn
                      btnType="btn-square"
                      className="px-[1.2rem] justify-start text-start"
                      extraAttributes={[
                        // 'data-light-bottom-border-color="true"',
                        `data-active="${activeIndex === index && IS_current}"`,
                      ]}
                      onClick={() => navigate({ incoming_TAB: tab, section })}
                    >
                      <Btn_LINE active={activeIndex === index && IS_current} />
                      {/* <div className="w-[0.3rem] min-w-[0.3rem] h-auto self-stretch bg-[var(--white-10)] mr-[0.4rem] rounded-full" /> */}
                      <span className=" text-[var(--text-white-dimm)]">
                        {section.shortTab_TITLE}
                      </span>
                    </Btn>
                  </li>
                );
              })
            }
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  ) : (
    <p>loading...</p>
  );
}

function Btn_LINE({ active = false }) {
  return active ? (
    <div className="w-[0.3rem] min-w-[0.3rem] h-auto self-stretch bg-[#fe8c5f] mr-[0.4rem] rounded-full" />
  ) : (
    <div className="w-[0.3rem] min-w-[0.3rem] h-auto self-stretch bg-[var(--white-10)] mr-[0.4rem] rounded-full" />
  );
}
