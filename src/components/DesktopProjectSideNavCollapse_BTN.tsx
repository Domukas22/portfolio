//
//
//

import { AnimatePresence, motion } from "framer-motion";
import Btn from "./Btn/Btn";
import { ICON_arrow } from "./Icons/Icons";

export default function DesktopProjectSideNavCollapse_BTN({
  show = false,
  COLLAPSE_tabs = () => {},
}: {
  show: boolean;
  COLLAPSE_tabs: () => void;
}) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          style={{ overflow: "hidden" }}
          initial={{ opacity: 0, translateY: "5rem" }}
          animate={{ opacity: 1, translateY: "0rem" }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          exit={{ opacity: 0, translateY: "5rem" }}
          key={"collapse-all-button"}
        >
          <li>
            <Btn
              btnType="btn-square"
              className="px-[1.2rem] py-[0.4rem] justify-start text-start z-20 w-full"
              text_STYLES={{
                fontWeight: 300,
                color: "var(--text-white-light)",
                flex: 1,
              }}
              data-light-top-border-color="true"
              text="Collapse all"
              right_ICON={
                <ICON_arrow direction="up" color="light" data-small />
              }
              onClick={COLLAPSE_tabs}
            />
          </li>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
