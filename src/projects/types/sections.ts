//
//
//

import React, { CSSProperties } from "react";
import { customBackgroundColors_TYPE, ProjectTag_TYPE } from "./other";

export type HeroSection_TYPE = {
  type: "hero";
  section_SLUG: string;
  section_NAME: string;

  project_NAME: string;
  project_SUBTITLE: string;

  headerImg_FILENAME: string;
  headerImg_COLOR: string;
  tags?: ProjectTag_TYPE[];
};

export type TitleAndImageGridSection_TYPE = {
  type: "title-and-image-grid";
  section_SLUG: string;
  section_NAME: string;

  title: string;
  images: string[];
};

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

export type ProjectSection_TYPE =
  | HeroSection_TYPE
  | TitleParagraphImageSection_TYPE
  | UnevenRowImageGridSection_TYPE
  | SwiperHeroSection_TYPE
  | MultiPointSection_TYPE
  | TextOnlySection_TYPE
  | ExternalLinkGridSection_TYPE;

export const DummySection: HeroSection_TYPE = {
  type: "hero",
  section_SLUG: "dummy",
  section_NAME: "Dummy section",
  project_NAME: "Dummy project name",
  project_SUBTITLE: "Dummy subtitile",

  headerImg_FILENAME: "",
  headerImg_COLOR: "purple",
};
