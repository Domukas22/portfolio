//
//
//

import { Project_TYPE } from "../types/project";

const SwimActive_PROJECT: Project_TYPE = {
  slug: "swim-active",
  name: "Swim Active",
  subtitle: "A website for a swimming school",
  shortSubtitle: "Website design",
  tags: ["website", "images", "coding", "video", "in-progress"],
  emoji: "💧",
  headerImg_COLOR: "#FFF7F0",

  sections: [
    {
      type: "hero",
      headerImg_FILENAME: "header.png",
      headerImg_COLOR: "rgb(183 203 255)",

      section_NAME: "Introduction",
      section_SLUG: "introduction",

      project_NAME: "Swim Active",
      project_SUBTITLE: "A website for a swimming school",

      tags: ["website", "images", "coding", "video", "in-progress"],
    },
    {
      type: "text-only-section",
      section_SLUG: "about-the-project",
      section_NAME: "About the project",
      texts_ARR: [
        {
          type: "h3",
          text: "On weekends, I give swimming lessons both in private and in a swimming club called SwimActive in Eppelheim, Heidelberg.",
          style: { maxWidth: "80rem" },
        },
        {
          type: "h3",
          text: "The club owner was happy to let me re-design the side, as well as take some images and videos. The project will be released very soon.",
          style: { maxWidth: "80rem", marginTop: "2rem" },
        },
        {
          type: "h3",
          text: "Here is a little sneak peak:",
          style: { maxWidth: "80rem", marginTop: "2rem" },
        },
      ],
    },

    {
      type: "uneven-row-image-grid",
      section_SLUG: "project-preview",
      section_NAME: "Project preview",

      firstWideImg_PATH: "/projects/swim-active/sneak-peak/7.png",
      leftImages_PATHS: [
        "/projects/swim-active/sneak-peak/4.jpg",
        "/projects/swim-active/sneak-peak/5.jpg",
        "/projects/swim-active/sneak-peak/1.jpg",
      ],
      rightImages_PATHS: [
        "/projects/swim-active/sneak-peak/6.jpg",
        "/projects/swim-active/sneak-peak/2.jpg",
        "/projects/swim-active/sneak-peak/3.jpg",
      ],
    },
  ],
};

export default SwimActive_PROJECT;
