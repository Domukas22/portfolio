//
//
//

import { customBackgroundColors_TYPE, ProjectTag_TYPE } from "./projectTypes";

export type ProjectSectionType_TYPE = "hero";

export type HeroSection_TYPE = {
  type: "hero";
  section_SLUG: string;
  section_NAME: string;

  project_NAME: string;
  project_SUBTITLE: string;

  headerImg_FILENAME: string;
  headerImg_COLOR: string;

  tags: ProjectTag_TYPE[];
};

export type TitleParagraphImageSection_TYPE = {
  type: "title-parapgraph-image";
  section_SLUG: string;
  section_NAME: string;

  title: string;
  parapgraphs: string[];
  img_PATH: string;
  sticky_TEXT?: boolean;
  sticky_IMG?: boolean;
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

  title: string;
  subtitle?: string;
  leftImages_PATHS: string[];
  rightImages_PATHS: string[];
};
export type SwiperHeroSection_TYPE = {
  type: "swiper-hero";
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
  points: { title: string; paragraph: string }[];
};

export type ProjectSection_TYPE =
  | HeroSection_TYPE
  | TitleParagraphImageSection_TYPE
  | UnevenRowImageGridSection_TYPE
  | SwiperHeroSection_TYPE
  | MultiPointSection_TYPE;
