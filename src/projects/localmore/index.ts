//
//
//

import { ProjectTabs_TYPE } from "../projectTypes";
import { Introduction } from "./tabs/Introduction";
import { Logo } from "./tabs/Logo";

export default function Localmore_TABS(): ProjectTabs_TYPE[] {
  return [Introduction(), Logo()];
}
