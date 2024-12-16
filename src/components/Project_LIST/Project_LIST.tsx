//
//
//

import Projects from "@/projects";
import Project_CARD from "../Project_CARD/Project_CARD";

export default function Project_LIST() {
  return (
    <section className="border-bottom-light">
      <div className="container flex flex-col gap-[5rem] tablet:gap-[4rem] mobile:gap-[8vmin] ">
        {Object.entries(Projects).map(([slug, project]) => {
          return <Project_CARD key={slug} {...project} />;
        })}
      </div>
    </section>
  );
}
