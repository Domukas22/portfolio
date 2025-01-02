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
export type TitleParagraphImageSection_TYPE = {
  type: "title-paragraph-image";
  section_SLUG: string;
  section_NAME: string;

  title: string;
  parapgraphs: string[];
  img_PATH: string;
  sticky_TEXT?: boolean;
  sticky_IMG?: boolean;

  imgWrap_STYLES?: React.CSSProperties;
  img_STYLES?: React.CSSProperties;
  customImg_EL?: React.ReactNode;
};
export type TitleAndImageGridSection_TYPE = {
  type: "title-and-image-grid";
  section_SLUG: string;
  section_NAME: string;

  title: string;
  images: string[];
};
export type UnevenRowImageGridSection_TYPE = {
  type: "uneven-row-image-grid";
  section_SLUG: string;
  section_NAME: string;

  title?: string;
  subtitle?: string;
  firstWideImg_PATH?: string;
  leftImages_PATHS: string[];
  rightImages_PATHS: string[];
};
export type SwiperHeroSection_TYPE = {
  type: "logo-swiper";
  section_SLUG: string;
  section_NAME: string;

  title: string;
  subtitle?: string;
  swiperImg_PATHS: string[];
  ARE_imagesFull?: boolean; // is true, the image wont ave any padding and will span

  customBackgroundColors?: customBackgroundColors_TYPE[];
  maxDesktopWidth?: number;
};
export type MultiPointSection_TYPE = {
  type: "multi-point-section";
  section_SLUG: string;
  section_NAME: string;

  title: string;
  subtitle?: string;
  points: { title: string; paragraphs: string[] }[];
};
export type TextOnlySection_TYPE = {
  type: "text-only-section";
  section_SLUG: string;
  section_NAME: string;

  texts_ARR: {
    type: "h1" | "h2" | "h3" | "h4" | "h5" | "p";
    text: string;
    style?: CSSProperties;
  }[];
};
export type ExternalLinkGridSection_TYPE = {
  type: "external-link-grid";
  section_SLUG: string;
  section_NAME: string;

  title: string;
  links: {
    btnText: string;
    href: string;
  }[];
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
