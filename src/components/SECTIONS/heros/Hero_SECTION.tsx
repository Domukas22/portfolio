//
//
//

import Image from "next/image";

import HeroBottom_WRAP from "@/components/HeroBottom_WRAP/HeroBottom_WRAP";
import HeroImg_WRAP from "@/components/HeroImg_WRAP/HeroImg_WRAP";
import Container from "@/components/Container";
import Project_SECTION from "@/components/Project_SECTION";
import { HeroSection_TYPE } from "@/projects/types/sections";

export function Hero_SECTION({
  section_CONTENT,
  index,

  hideContent,
  project_SLUG,
}: {
  section_CONTENT: HeroSection_TYPE;
  index: number;

  hideContent: boolean;
  project_SLUG: string;
}) {
  const { headerImg_COLOR, project_NAME, project_SUBTITLE, section_SLUG } =
    section_CONTENT;

  return (
    <Project_SECTION {...{ section_SLUG, index, hideContent }}>
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
          {/* <div className="mt-[1.4rem]">
            <ProjectTag_LIST {...{ tags }} />
          </div> */}
        </HeroBottom_WRAP>
      </Container>
    </Project_SECTION>
  );
}
