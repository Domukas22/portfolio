//
//
//

import Btn from "../Btn/Btn";

export default function ProjectTab_BTNS({
  all_TABS,
  current_TAB,
  CHANGE_tab,
  activeIndex,
}) {
  return (
    <>
      {all_TABS?.map((tab) => {
        return (
          <div key={tab?.slug}>
            <li>
              <Btn
                key={tab.title}
                text={tab.title}
                btnType="btn-square"
                className="px-[1.2rem] justify-start text-start font-bold"
                extraAttributes={['data-light-bottom-border-color="true"']}
                onClick={() => CHANGE_tab(tab)}
              />
            </li>

            {tab.title === current_TAB.title &&
              tab.sections?.map((section, index) => {
                return (
                  <li key={section.shortTab_TITLE}>
                    <Btn
                      btnType="btn-square"
                      className="px-[1.2rem] justify-start text-start"
                      extraAttributes={[
                        'data-light-bottom-border-color="true"',
                        `data-active="${activeIndex === index}"`,
                      ]}
                      onClick={() => {
                        document.getElementById(section?.slug)?.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        });
                      }}
                    >
                      <div className="w-[0.3rem] min-w-[0.3rem] h-auto self-stretch bg-[var(--white-10)] mr-[0.4rem] rounded-full" />
                      <span className="font-light text-[var(--text-white-dimm)]">
                        {section.shortTab_TITLE}
                      </span>
                    </Btn>
                  </li>
                );
              })}
          </div>
        );
      })}
    </>
  );
}
