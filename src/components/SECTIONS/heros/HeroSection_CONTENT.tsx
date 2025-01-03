//
//
//

import Image from "next/image";

import HeroBottom_WRAP from "@/components/HeroBottom_WRAP/HeroBottom_WRAP";
import HeroImg_WRAP from "@/components/HeroImg_WRAP/HeroImg_WRAP";
import Container from "@/components/Container";
import ProjectTag_LIST from "@/components/ProjectTag_LIST/ProjectTag_LIST";
import { ProjectTag_TYPE } from "@/projects/types/other";

export type HeroSection_CONTENT_TYPE = {
  title: string;
  subtitle?: string;
  publicImg_PATH?: string;
  headerImg_COLOR?: string;
  tags?: ProjectTag_TYPE[];
};

export function HeroSection_CONTENT({
  title,
  subtitle,
  publicImg_PATH,
  headerImg_COLOR,
  tags,
}: HeroSection_CONTENT_TYPE) {
  return (
    <Container hero>
      {publicImg_PATH ? (
        <HeroImg_WRAP shadow_COLOR={headerImg_COLOR || "white"}>
          <Image
            width={1240}
            height={400}
            src={publicImg_PATH}
            alt=""
            className="h-full object-cover w-full"
          />
        </HeroImg_WRAP>
      ) : null}
      <HeroBottom_WRAP title={title} subtitle={subtitle}>
        {tags && tags?.length ? (
          <ProjectTag_LIST tags={tags} styles={{ marginTop: "1rem" }} />
        ) : null}
      </HeroBottom_WRAP>
    </Container>
  );
}
