//
//
//

import Image from "next/image";

import HeroBottom_WRAP from "@/components/HeroBottom_WRAP/HeroBottom_WRAP";
import HeroImg_WRAP from "@/components/HeroImg_WRAP/HeroImg_WRAP";
import Container from "@/components/Container";
import Project_SECTION from "@/components/Project_SECTION";
import { HeroSection_TYPE } from "@/projects/types/sections";
import { MutableRefObject } from "react";
import ProjectTag_LIST from "@/components/ProjectTag_LIST/ProjectTag_LIST";

export function Hero_SECTION({
  section_CONTENT,
  project_SLUG,
  sectionRefs,
  index,
}: {
  sectionRefs: MutableRefObject<(HTMLElement | null)[]>;
  index: number;
  section_CONTENT: HeroSection_TYPE;
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
    <Project_SECTION {...{ section_SLUG, sectionRefs, index }}>
      <Container hero>
        <HeroImg_WRAP shadow_COLOR={headerImg_COLOR}>
          <Image
            width={1240}
            height={400}
            src={`/projects/${project_SLUG}/header.png`}
            alt=""
            className="h-full object-cover"
          />
        </HeroImg_WRAP>
        <HeroBottom_WRAP title={project_NAME} subtitle={project_SUBTITLE}>
          {tags && tags?.length ? (
            <ProjectTag_LIST tags={tags} styles={{ marginTop: "1rem" }} />
          ) : null}
        </HeroBottom_WRAP>
      </Container>
    </Project_SECTION>
  );
}
