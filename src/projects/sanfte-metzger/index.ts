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

const SanfteMetzger_PROJECT: Project_TYPE = {
  slug: "sanfte-metzger",
  name: "Sanfte Metzger",
  subtitle: "A hypothetical corporate design for a unique butchers shop",
  shortSubtitle: "Logo design",
  tags: ["logo"],
  emoji: "🐮",
  headerImg_COLOR: "#FFFAF3",

  sections: [
    {
      type: "hero",
      headerImg_FILENAME: "header.png",
      headerImg_COLOR: "#FFFAF3",

      section_NAME: "Sanfte Metzger",
      section_SLUG: "sanfte-metzger",

      project_NAME: "Sanfte Metzger",
      project_SUBTITLE:
        "A hypothetical corporate design for a unique butchers shop",

      tags: ["logo"],
    },
    {
      type: "external-link-grid",
      section_SLUG: "link",
      section_NAME: "Links",

      title: "Links:",
      links: [
        {
          btnText: "The finished project PDF",
          href: "/projects/sanfte-metzger/finished-project.pdf",
        },
        {
          btnText: "View the assigment PDF",
          href: "/projects/sanfte-metzger/task.pdf",
        },
      ],
    },
    {
      type: "title-paragraph-image",
      section_SLUG: "srh",
      section_NAME: "Srh",
      title: "An SRH project",
      parapgraphs: [],
      img_PATH: "/projects/domas-swim-school/srh.png",
    },
    {
      type: "multi-point-section",
      section_NAME: "Task sumamry",
      section_SLUG: "task-summary",
      title: "Task summary",
      points: [
        {
          title: "Company background (hypothetical)",
          paragraphs: [
            "The number of people choosing healthy and fairly traded foods over cheap, mass-produced products from multinational corporations is growing noticeably every year. Consumers want meat from humane and ethical farming practices, as well as fair-trade coffee and chocolate. Ethical and moral values have become important considerations in our diet, taking up a significant part of public discussions.",
            `Additionally, there is a trend toward preferring regional products due to shorter transport routes. These changing consumer values now reflect a lifestyle that combines enjoyment with social responsibility.."`,
            `This shift inspired a startup to create a chain of butcher shops focused on treating meat as a high-quality product and ensuring respect for the animals. This philosophy forms the core of their brand. The brand name, Sanfte Metzger (“Gentle Butchers”), has already been chosen, and the slogan is: "Experts in responsible meat enjoyment."`,
          ],
        },
        {
          title:
            "The task was to create the visual foundation for the brand and establish its identity. This included:",
          paragraphs: [],
        },
        {
          title:
            "1. Designing the core elements of the corporate design and compiling them in a Corporate Design Manual (CD Manual)",
          paragraphs: [],
        },
        {
          title: "2. The following structure:",
          paragraphs: [
            "- Presentation of the logo (a combined word and image mark), including its structure, components, proportions, color and size variations, typography for the brand name and slogan, placement guidelines, and do's/don'ts.",
            "- Typography guidelines for the corporate design.",
            "- The color scheme for the corporate design.",
          ],
        },
        {
          title: "3. Designing branded materials",
          paragraphs: [
            "- Stationery such as letterheads (DIN 5008 format)",
            "- Business cards",
            "- Envelopes (DIN long with a window, and C4 without a window)",
          ],
        },
      ],
    },

    {
      type: "multi-point-section",
      section_SLUG: "considerations",
      section_NAME: "Considerations",
      title: "Starting considerations",

      points: [
        {
          title: "Gentleness",
          paragraphs: [
            "The company prides itself on treating animals the way they should be treated – with love and respect.",
          ],
        },
        {
          title: "Ecological awareness",
          paragraphs: [
            "Gentle Butchers strives to be an environmentally friendly company that takes proper care of all living things.",
          ],
        },
        {
          title: "Above average market quality",
          paragraphs: [
            "The price of their product will be slightly above average compared to the competition, for which they have a reason – quality.",
          ],
        },
      ],
    },
    {
      type: "uneven-row-image-grid",
      section_SLUG: "inspiration",
      section_NAME: "Inspiration",
      title: "Inspiration",

      leftImages_PATHS: [
        "/projects/sanfte-metzger/logo/inspiration/1.png",
        "/projects/sanfte-metzger/logo/inspiration/2.png",
      ],
      rightImages_PATHS: [
        "/projects/sanfte-metzger/logo/inspiration/3.png",
        "/projects/sanfte-metzger/logo/inspiration/4.png",
      ],
    },
    {
      type: "title-paragraph-image",
      section_SLUG: "first-draft",
      section_NAME: "First draft",
      title: "The first draft",
      parapgraphs: [],
      img_PATH: "/projects/sanfte-metzger/logo/progressions/1.svg",
      imgWrap_STYLES,
      img_STYLES,
    },
    {
      type: "title-paragraph-image",
      section_NAME: "Finding balance",
      section_SLUG: "finding-balance",
      title: "Finding balance",
      parapgraphs: [],
      img_PATH: "/projects/sanfte-metzger/logo/progressions/2.svg",
      imgWrap_STYLES,
      img_STYLES,
    },
    {
      type: "title-paragraph-image",
      section_NAME: "The missing piece",
      section_SLUG: "the-missing-piece",
      title: "The missing piece",
      parapgraphs: [],
      img_PATH: "/projects/sanfte-metzger/logo/progressions/3.svg",
      imgWrap_STYLES,
      img_STYLES,
    },
    {
      type: "title-paragraph-image",
      section_NAME: "An experiment",
      section_SLUG: "an-experiment",
      title: "An experiment",
      parapgraphs: [],
      img_PATH: "/projects/sanfte-metzger/logo/progressions/4.svg",
      imgWrap_STYLES,
      img_STYLES,
    },
    {
      type: "title-paragraph-image",
      section_NAME: "The circles",
      section_SLUG: "the-circles",
      title: "The circles",
      parapgraphs: [],
      img_PATH: "/projects/sanfte-metzger/logo/progressions/5.svg",
      imgWrap_STYLES,
      img_STYLES,
    },
    {
      type: "title-paragraph-image",
      section_NAME: "Building a snowman ⛄",
      section_SLUG: "building-a-snowman",
      title: "Building the shapes",
      parapgraphs: [],
      img_PATH: "/projects/sanfte-metzger/logo/progressions/6.svg",
      imgWrap_STYLES,
      img_STYLES,
    },
    {
      type: "title-paragraph-image",
      section_NAME: "Creating the shapes",
      section_SLUG: "creating-shapes",
      title: "Creating the shapes",
      parapgraphs: [],
      img_PATH: "/projects/sanfte-metzger/logo/progressions/7.svg",
      imgWrap_STYLES,
      img_STYLES,
    },
    {
      type: "title-paragraph-image",
      section_NAME: "Abstracting",
      section_SLUG: "abstracting",
      title: "Abstracting",
      parapgraphs: [],
      img_PATH: "/projects/sanfte-metzger/logo/progressions/8.svg",
      imgWrap_STYLES: { ...imgWrap_STYLES, backgroundColor: "#FFFAF3" },
      img_STYLES,
    },
    {
      type: "title-paragraph-image",
      section_NAME: "Final version",
      section_SLUG: "final-version",
      title: "Final version",
      parapgraphs: [],
      img_PATH: "/projects/sanfte-metzger/logo/progressions/9.svg",
      imgWrap_STYLES: { ...imgWrap_STYLES, backgroundColor: "#FFFAF3" },
      img_STYLES,
    },
    {
      type: "uneven-row-image-grid",
      section_SLUG: "branded-materials",
      section_NAME: "Branded materials",
      title: "Branded materials",

      leftImages_PATHS: [
        "/projects/sanfte-metzger/logo/branded-materials/1.png",
        "/projects/sanfte-metzger/logo/branded-materials/3.png",
      ],
      rightImages_PATHS: [
        "/projects/sanfte-metzger/logo/branded-materials/2.png",
        "/projects/sanfte-metzger/logo/branded-materials/4.png",
      ],
    },
    {
      type: "logo-swiper",
      section_SLUG: "progress-recap",
      section_NAME: "Progress recap",
      title: "Progress recap",

      swiperImg_PATHS: [
        "/projects/sanfte-metzger/logo/progressions/1.svg",
        "/projects/sanfte-metzger/logo/progressions/2.svg",
        "/projects/sanfte-metzger/logo/progressions/3.svg",
        "/projects/sanfte-metzger/logo/progressions/4.svg",
        "/projects/sanfte-metzger/logo/progressions/5.svg",
        "/projects/sanfte-metzger/logo/progressions/6.svg",
        "/projects/sanfte-metzger/logo/progressions/7.svg",
        "/projects/sanfte-metzger/logo/progressions/8.svg",
        "/projects/sanfte-metzger/logo/progressions/9.svg",
      ],
      customBackgroundColors: [
        { color: "#FFFAF3", index: 7 },
        { color: "#FFFAF3", index: 8 },
      ],
      maxDesktopWidth: 50,
    },
  ],
};

export default SanfteMetzger_PROJECT;
