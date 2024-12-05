//
//
//

import GET_allProjectIntros from "@/utils/GET_allProjectIntros";
import Project_CARD from "../Project_CARD/Project_CARD";

const intros = GET_allProjectIntros();

export default function Project_LIST() {
  return (
    <section className="border-bottom-light">
      <div className="container flex flex-col gap-[5rem] tablet:gap-[4rem] mobile:gap-[8vmin] ">
        {intros.map((intro) => {
          const { title, header_IMG, subtitle, tags } = intro;

          return (
            <Project_CARD
              key={intro.title}
              {...{ title, header_IMG, subtitle, tags }}
            />
          );
        })}
      </div>
    </section>
  );
}
