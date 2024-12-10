//
//
//

"use client";

import { ProjectIntro_TYPE } from "@/projects";
import ProjectTag_LIST from "../ProjectTag_LIST/ProjectTag_LIST";

import Image from "next/image";
import Link from "next/link";

// import exampleHeaderImg from "@/assets/images/project-headers/header_localmore.png"

export default function Project_CARD(intro: ProjectIntro_TYPE) {
  const { name, header_IMG, subtitle, tags, slug } = intro;

  //
  return (
    <Link
      href={`/projects/${slug}`}
      className="p-0 block btn overflow-hidden rounded-[1.6rem]"
    >
      <div />
      <Image
        width={1200}
        height={500}
        src={`/projects/headers/${header_IMG}`}
        className="object-cover h-[36rem] mobile:h-[26rem] w-full border-bottom-light"
        alt=""
      />
      <div className="px-[2rem] pt-[1.2rem] pb-[1.6rem]">
        <h3>{name}</h3>
        <p className="weight-400 mb-[1.4rem]">{subtitle}</p>
        <ProjectTag_LIST {...{ tags }} />
      </div>
    </Link>
  );
}
