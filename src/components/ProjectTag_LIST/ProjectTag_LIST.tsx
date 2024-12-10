//
//
//

import { ProjectTag_TYPE } from "@/projects";
import Project_TAG from "../Project_TAG/Project_TAG";

export default function ProjectTag_LIST({ tags }: { tags: ProjectTag_TYPE[] }) {
  return (
    <div className="flex flex-wrap gap-x-[0.6rem] gap-[0.8rem]">
      {tags?.map((tag) => (
        <Project_TAG key={tag} {...{ tag }} />
      ))}
    </div>
  );
}
