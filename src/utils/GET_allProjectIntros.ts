//
//
//

import { DomasSwimSchool_INTRO } from "@/projects/project-domas-swim-school";
import { Localmore_INTRO } from "@/projects/project-localmore";
import { SanfteMetzger_INTRO } from "@/projects/project-sanfte-metzger";
import { SwimActive_INTRO } from "@/projects/project-swim-active";
import { Vocabs_INTRO } from "@/projects/project-vocabs";

export default function GET_allProjectIntros() {
  return [
    Localmore_INTRO(),
    SwimActive_INTRO(),
    Vocabs_INTRO(),
    SanfteMetzger_INTRO(),
    DomasSwimSchool_INTRO(),
  ];
}
