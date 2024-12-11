//
//
//

import MobileProjectMenuCollapseTabs_BTN from "./MobileProjectMenuCollapseTabs_BTN";
import MobileProjectMenuMain_BTN from "./MobileProjectMenuMain_BTN";

export default function MobileProjectTopBtn_WRAP({
  project_NAME = "Project name",
  SHOW_collapseBtn = false,
  RESET_tabs = () => {},
  COLLAPSE_tabs = () => {},
}: {
  project_NAME: string;
  SHOW_collapseBtn: boolean;
  RESET_tabs: () => void;
  COLLAPSE_tabs: () => void;
}) {
  return (
    <div
      className="flex w-full h-[5rem]"
      style={{
        borderBottom: "var(--border-light)",
      }}
    >
      <MobileProjectMenuMain_BTN
        project_NAME={project_NAME}
        onClick={RESET_tabs}
      />

      <MobileProjectMenuCollapseTabs_BTN
        show={SHOW_collapseBtn}
        onClick={COLLAPSE_tabs}
      />
    </div>
  );
}
