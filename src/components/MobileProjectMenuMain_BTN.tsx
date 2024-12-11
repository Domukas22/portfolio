//
//
//

import Btn from "./Btn/Btn";

export default function MobileProjectMenuMain_BTN({
  project_NAME = "Project name",
  onClick = () => {},
}: {
  project_NAME: string;
  onClick: () => void;
}) {
  return (
    <li className="flex-1 h-full">
      <Btn
        btnType="btn-square"
        className="px-[1.2rem] w-full h-full"
        text_STYLES={{ color: "var(--text-white-light)" }}
        text={`Project: ${project_NAME}`}
        onClick={onClick}
      />
    </li>
  );
}
