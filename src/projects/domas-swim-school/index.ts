//
//
//

import { Project_TYPE } from "../types/project";
const imgWrap_STYLES: React.CSSProperties = {
  padding: "6rem 1.6rem",
};
const img_STYLES: React.CSSProperties = {
  maxHeight: "40rem",
  height: "100%",
};

const DomasSwimSchool_PROJECT: Project_TYPE = {
  slug: "domas-swim-school",
  name: "Domas Swim School",
  subtitle:
    "A logo design for my private swimming lessons I created at the SRH",
  shortSubtitle: "Simple school project",
  tags: ["logo"],
  emoji: "🤿",
  headerImg_COLOR: "#FFF7F0",

  sections: [
    {
      type: "hero",
      headerImg_FILENAME: "header.png",
      headerImg_COLOR: "rgb(183 203 255)",

      section_NAME: "Swim School Logo",
      section_SLUG: "swim-school-logo",

      project_NAME: "Domas Swim School Logo",
      project_SUBTITLE: "A simple school project",

      // children: (
      //   <ProjectTag_LIST tags={["logo"]} styles={{ marginTop: "1rem" }} />
      // ),
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
          paragraphs: [
            "Most swimming clubs have logos with so many detailsm, that if you view them slightly further away, they tend to blend together and blur out. I tried visualizing lining up a few swimming logos side by side, and decided thay my logo would stand out my having less elements alltogether.",
          ],
        },
        {
          title: "Water, dynamic, natural forms",
          paragraphs: [
            "Let's also include a wave, because what else screems 'swimming' louder?",
          ],
        },
        {
          title: "Adaptability",
          paragraphs: [
            "Keep in mind at this time I was still only doing private lessons. I would only practise with one person at a time to 10x the learning rate. Each client has different skills, flexibility, weaknesses. My job is to identify them and adjust the training accordingly.",
          ],
        },
        {
          title: "Trust and safety",
          paragraphs: [
            `Most of my students were kids. I wanted the logo to communicate the idea of me carefully holding a child in the water.`,
          ],
        },
      ],
    },
    {
      type: "title-paragraph-image",
      section_SLUG: "first-draft",
      section_NAME: "First draft",
      title: "The first draft",
      parapgraphs: [
        `A fairly simple idea. The letter "D" represents me in the water, seamlessly adapting to the wave.`,
        `I later realized this is likely to be interpreted as a boat crashing down a waterfall. Talk about balance 😀.`,
      ],
      img_PATH: "/projects/domas-swim-school/logo/progressions/1.png",
      imgWrap_STYLES,
      img_STYLES,
    },
    {
      type: "title-paragraph-image",
      section_NAME: "Finding balance",
      section_SLUG: "finding-balance",
      title: "Finding balance",
      parapgraphs: [
        `This looks a lot more serene and safe. Perhaps a little too safe, because all I can see now is an anti-virus shield.`,
        `My deliberation here was whether to keep adjusting the few existing elements to create a different perception or add a new element.`,
      ],
      img_PATH: "/projects/domas-swim-school/logo/progressions/2.png",
      imgWrap_STYLES,
      img_STYLES,
    },
    {
      type: "title-paragraph-image",
      section_NAME: "The missing piece",
      section_SLUG: "the-missing-piece",
      title: "The missing piece",
      parapgraphs: [
        `I managed to some degree solve the previous problem by looking a step ahead. Adding a human-like figure was an attemt to 1. convey the message that I do private lessons with a single person at a time and 2. create a sense of security, as if the outer edges of the boat protect the human figure from the water, which would in this case be me.`,
        `I was faily happy with this idea, but I wanted to somehow make it proportional.`,
      ],
      img_PATH: "/projects/domas-swim-school/logo/progressions/3.png",
      imgWrap_STYLES,
      img_STYLES,
    },
    {
      type: "title-paragraph-image",
      section_NAME: "An experiment",
      section_SLUG: "an-experiment",
      title: "An experiment",
      parapgraphs: [
        `Earlier that week, before being assigned this exercise, I was introduced to the golden ratio for the first time, and I found it truly mind-blowing.`,
        "I decided to design this logo as proportionally perfect as I could, following the golden ratio.",
      ],
      img_PATH: "/projects/domas-swim-school/logo/progressions/4.png",
      imgWrap_STYLES,
      img_STYLES,
    },
    {
      type: "title-paragraph-image",
      section_NAME: "The circles",
      section_SLUG: "the-circles",
      title: "The circles",
      parapgraphs: [
        `Here we see the proportionally sized circles I will be implementing.`,
      ],
      img_PATH: "/projects/domas-swim-school/logo/progressions/5.png",
      imgWrap_STYLES,
      img_STYLES,
    },
    {
      type: "title-paragraph-image",
      section_NAME: "Building a snowman ⛄",
      section_SLUG: "building-a-snowman",
      title: "Building the shapes",
      parapgraphs: [
        `After playing around for a while I managed to position the circles in a way where they serve as outlines for the shapes of the logo.`,
      ],
      img_PATH: "/projects/domas-swim-school/logo/progressions/6.png",
      imgWrap_STYLES,
      img_STYLES,
    },
    {
      type: "title-paragraph-image",
      section_NAME: "Creating the shapes",
      section_SLUG: "creating-shapes",
      title: "Creating the shapes",
      parapgraphs: [
        "I adjusted the thicknes both of the board/letter D, as well as the outlined circle.",
      ],
      img_PATH: "/projects/domas-swim-school/logo/progressions/7.png",
      imgWrap_STYLES,
      img_STYLES,
    },
    {
      type: "title-paragraph-image",
      section_NAME: "Abstracting",
      section_SLUG: "abstracting",
      title: "Abstracting",
      parapgraphs: ["A simplified version of the previous step."],
      img_PATH: "/projects/domas-swim-school/logo/progressions/8.png",
      imgWrap_STYLES,
      img_STYLES,
    },
    {
      type: "title-paragraph-image",
      section_NAME: "Final version",
      section_SLUG: "final-version",
      title: "Final version",
      parapgraphs: [
        "Tadaaa... we now have a simple and very sexy icon.",
        "Let's round out those corners of the boat and add some color.",
      ],
      img_PATH: "/projects/domas-swim-school/logo/progressions/9.png",
      imgWrap_STYLES,
      img_STYLES,
    },
    {
      type: "title-paragraph-image",
      section_NAME: "Adding color",
      section_SLUG: "adding-color",
      title: "Final result",
      parapgraphs: [
        "Of course I went for blue. I did have to play around a bit with the tone of the color, but eventually settled for a darker, less energetic one.",
      ],
      img_PATH: "/projects/domas-swim-school/logo/progressions/10.png",
      imgWrap_STYLES: { ...imgWrap_STYLES, backgroundColor: "#f6f7ff" },
      img_STYLES,
    },
    {
      type: "logo-swiper",
      section_SLUG: "progress-recap",
      section_NAME: "Progress recap",
      title: "Progress recap",

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
  ],
};

export default DomasSwimSchool_PROJECT;
