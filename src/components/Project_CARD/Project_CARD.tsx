//
//
//

"use client";

import { Project_TYPE } from "@/projects/types/project";
import ProjectTag_LIST from "../ProjectTag_LIST/ProjectTag_LIST";

import Image from "next/image";
import Link from "next/link";

// import exampleHeaderImg from "@/assets/images/project-headers/header_localmore.png"

export default function Project_CARD(project: Project_TYPE) {
  const { name, subtitle, tags, slug } = project;

  //
  return (
    <Link
      href={`/projects/${slug}/`}
      className="p-0 block btn overflow-hidden rounded-[1.6rem]"
    >
      <div />
      <Image
        width={1200}
        height={500}
        src={`/projects/${slug}/header.png`}
        className="object-cover h-[36rem] mobile:h-[26rem] w-full border-bottom-light"
        alt=""
      />
      <div className="px-[2rem] pt-[1.2rem] pb-[1.6rem]">
        <h3 className="size-h2 weight-600">{name}</h3>
        <p className="weight-400 mb-[1.4rem]">{subtitle}</p>
        <ProjectTag_LIST {...{ tags }} />
      </div>
    </Link>
  );
}
