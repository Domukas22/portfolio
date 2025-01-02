//
//
//

import { ProjectTag_TYPE } from "@/projects/types/other";
import Project_TAG from "../Project_TAG/Project_TAG";

import React, { CSSProperties } from "react";

export default function ProjectTag_LIST({
  tags,
  styles,
}: {
  tags: ProjectTag_TYPE[];
  styles?: CSSProperties;
}) {
  return (
    <div
      className={`flex flex-wrap gap-x-[0.6rem] gap-[0.8rem]`}
      style={{ ...styles }}
    >
      {tags?.map((tag) => (
        <Project_TAG key={tag} {...{ tag }} />
      ))}
    </div>
  );
}
