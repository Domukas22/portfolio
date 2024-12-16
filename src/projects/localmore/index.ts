//
//
//

import { Project_TYPE } from "../types/project";
import Introduction from "./tabs/1_Introduction";
import HowItworks from "./tabs/2_HowItWorks";
import Branding from "./tabs/3_Branding";
import Design from "./tabs/4_Design";
import Coding from "./tabs/5_Coding";
import TakingImages from "./tabs/6_TakingImages";
import WhatsNext from "./tabs/7_WhatsNext";

const Localmore_PROJECT: Project_TYPE = {
  slug: "localmore",
  name: "Localmore",
  subtitle: "The project that kickstarted my interest in design",
  shortSubtitle: "My dream project",
  headerImg_COLOR: "rgba(255, 247, 240, 0.5)",
  tags: ["website", "logo", "images", "coding", "in-progress"],
  emoji: "🤩",

  tabs: [
    Introduction,
    HowItworks,
    Branding,
    Design,
    Coding,
    TakingImages,
    WhatsNext,
  ],
};

export default Localmore_PROJECT;
