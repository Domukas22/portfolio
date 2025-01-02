//
//
//

import SCROLL_to from "@/utils/SCROLL_to";
import Btn from "./Btn/Btn";

export default function DesktopProjectSideNav_BTN({
  projet_NAME = "Project name",
}: {
  projet_NAME: string;
}) {
  return (
    <li>
      <Btn
        btnType="btn-square"
        className="px-[1.2rem] py-[0.4rem] justify-start text-start z-20 w-full"
        text_STYLES={{
          fontWeight: 300,
          color: "var(--text-white-light)",
        }}
        text={`Project: ${projet_NAME}`}
        data-light-bottom-border-color="true"
        onClick={() => SCROLL_to({})}
      />
    </li>
  );
}
