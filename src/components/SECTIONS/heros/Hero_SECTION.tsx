//
//
//

import { HeroSection_TYPE } from "@/projects/projectSection_TYPES";
import Image from "next/image";
import { MutableRefObject } from "react";
import ProjectTag_LIST from "../../ProjectTag_LIST/ProjectTag_LIST";
import HeroBottom_WRAP from "@/components/HeroBottom_WRAP/HeroBottom_WRAP";
import HeroImg_WRAP from "@/components/HeroImg_WRAP/HeroImg_WRAP";
import Container from "@/components/Container";
import Project_SECTION from "@/components/Project_SECTION";

export function Hero_SECTION({
  section_CONTENT,
  index,
  sectionRefs,
  hideContent,
  project_SLUG,
}: {
  section_CONTENT: HeroSection_TYPE;
  index: number;
  sectionRefs: MutableRefObject<(HTMLElement | null)[]>;
  hideContent: boolean;
  project_SLUG: string;
}) {
  const {
    headerImg_COLOR,
    project_NAME,
    project_SUBTITLE,
    section_SLUG,
    tags,
  } = section_CONTENT;

  return (
    <Project_SECTION {...{ section_SLUG, index, sectionRefs }}>
      <Container {...{ hideContent }} hero>
        <HeroImg_WRAP shadow_COLOR={headerImg_COLOR}>
          <Image
            width={1240}
            height={400}
            src={`/projects/${project_SLUG}/header.png`}
            alt=""
          />
        </HeroImg_WRAP>
        <HeroBottom_WRAP title={project_NAME} subtitle={project_SUBTITLE}>
          <div className="mt-[1.4rem]">
            <ProjectTag_LIST {...{ tags }} />
          </div>
        </HeroBottom_WRAP>
      </Container>
    </Project_SECTION>
  );
}
