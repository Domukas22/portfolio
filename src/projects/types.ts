//
//
//

export type ProjectTag_TYPE =
  | "website"
  | "app"
  | "logo"
  | "images"
  | "video"
  | "coding"
  | "in-progress";

export interface ProjectIntro_TYPE {
  header_IMG: string;
  title: string;
  subtitle: string;
  tags: ProjectTag_TYPE[];
}
