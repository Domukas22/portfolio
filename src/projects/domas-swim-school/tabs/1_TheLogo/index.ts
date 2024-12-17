//
//
//

import { ProjectTabs_TYPE } from "@/projects/types/tabs";

const TheLogo: ProjectTabs_TYPE = {
  type: "single-tab",
  tab_NAME: "The logo",
  tab_SLUG: "the-logo",
  sections: [
    {
      type: "swiper-hero",
      section_SLUG: "overview",
      section_NAME: "Overview",
      title: "Domas Swim School Logo",
      subtitle: "The entire process, step by step",
      swiperImg_PATHS: [
        "/projects/domas-swim-school/logo/progressions/1.png",
        "/projects/domas-swim-school/logo/progressions/2.png",
        "/projects/domas-swim-school/logo/progressions/3.png",
        "/projects/domas-swim-school/logo/progressions/4.png",
        "/projects/domas-swim-school/logo/progressions/5.png",
        "/projects/domas-swim-school/logo/progressions/6.png",
        "/projects/domas-swim-school/logo/progressions/7.png",
        "/projects/domas-swim-school/logo/progressions/8.png",
        "/projects/domas-swim-school/logo/progressions/9.png",
        "/projects/domas-swim-school/logo/progressions/10.png",
      ],
      customBackgroundColors: [{ color: "#f6f7ff", index: 9 }],
      maxDesktopWidth: 50,
    },
    {
      type: "title-paragraph-image",
      section_SLUG: "srh",
      section_NAME: "Srh",
      title: "A simple project",
      parapgraphs: [
        "While I was studying at the SRH, we were given a simple, 2-day assignment of creating any kind of logo, using pohtoshop or illustrator, while also taking the theory we learned into consideration.",
        "In order to finance my studies, each weekend I would give private swimming lessons to children and adults. I though I'd use this time to create a logo for my own swim school in case I ever have one in the future.",
      ],
      img_PATH: "/projects/domas-swim-school/srh.png",
    },
    {
      type: "multi-point-section",
      section_SLUG: "Considerations",
      section_NAME: "Considerations",
      title: "Starting considerations",

      points: [
        {
          title: "An simple, clear, minimalistic icon",
          paragraph:
            "Most swimming clubs have logos with so many detailsm, that if you view them slightly further away, they tend to blend together and blur out. I tried visualizing lining up a few swimming logos side by side, and decided thay my logo would stand out my having less elements alltogether.",
        },
        {
          title: "Water, dynamic, natural forms",
          paragraph:
            "Let's also include a wave, because what else screems 'swimming' louder?",
        },
        {
          title: "Adaptability",
          paragraph:
            "Keep in mind at this time I was still only doing private lessons. I would only practise with one person at a time to 10x the learning rate. Each client has different skills, flexibility, weaknesses. My job is to identify them and adjust the training accordingly.",
        },
        {
          title: "Trust and safety",
          paragraph: `Most of my students were kids. I wanted the logo to communicate the idea of me carefully holding a child in the water.`,
        },
      ],
    },
  ],
};

export default TheLogo;
