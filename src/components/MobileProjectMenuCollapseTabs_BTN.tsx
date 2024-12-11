//
//
//

import { AnimatePresence, motion } from "framer-motion";
import Btn from "./Btn/Btn";
import { ICON_arrow } from "./Icons/Icons";
import { useEffect, useState } from "react";

export default function MobileProjectMenuCollapseTabs_BTN({
  show = false,
  onClick = () => {},
}: {
  show: boolean;
  onClick: () => void;
}) {
  const [initialRender, SET_initialRender] = useState(true);

  // don't animate the arrow initially when opening project menu on mobile
  useEffect(() => {
    SET_initialRender(false);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.li
          style={{ overflow: "hidden" }}
          initial={
            initialRender
              ? { opacity: 1, translateX: "0rem" }
              : { opacity: 0, translateX: "5rem" }
          }
          animate={{ opacity: 1, translateX: "0rem" }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          exit={{ opacity: 0, translateX: "5rem" }}
          key={"collapse-all-button"}
          className="h-full w-[8rem]"
        >
          <Btn
            btnType="btn-square"
            className="z-20 w-full h-full justify-center"
            data-light-left-border-color="true"
            right_ICON={<ICON_arrow direction="up" color="white" size="big" />}
            onClick={onClick}
          />
        </motion.li>
      )}
    </AnimatePresence>
  );
}
