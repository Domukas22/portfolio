//
//
//

"use client";

import Project_INTROS from "@/projects/intros";
import SiglePage_CONTENT from "../_components/SinglePage_CONTENT";
import { HeroSection_CONTENT } from "@/components/SECTIONS/heros/HeroSection_CONTENT";
import { TextOnlySection_CONTENT } from "@/components/SECTIONS/TextOnlySection_CONTENT/TextOnlySection_CONTENT";
import { ProjectSection_TYPE } from "@/types";
import { TitleParagraphImageSection_CONTENT } from "@/components/SECTIONS/TitleParagraphImageSection_CONTENT/TitleParagraphImageSection_CONTENT";
import { BigImageGrid_SECTION } from "@/components/SECTIONS/BigImageGrid_SECTION/BigImageGrid_SECTION";
import { LogoSwiperSection_CONTENT } from "@/components/SECTIONS/heros/LogoSwiperSection_CONTENT";
import { NextPageSection_CONTENT } from "@/components/SECTIONS/NextPageSection_CONTENT/NextPageSection_CONTENT";

const Intro = Project_INTROS["localmore"];
const Sections: ProjectSection_TYPE[] = [
  {
    slug: "introduction",
    name: "Introduction",
    content: (
      <HeroSection_CONTENT
        key={Intro.name}
        title={Intro.name}
        subtitle={Intro.subtitle}
        publicImg_PATH={Intro.headerImg_PATH}
        headerImg_COLOR={Intro.headerImg_COLOR}
        tags={Intro.tags}
      />
    ),
  },
  {
    slug: "quick-about",
    name: "Quick about",
    content: (
      <TextOnlySection_CONTENT
        texts_ARR={[
          {
            type: "h3",
            text: "Localmore is a vision of an online city center, built with the right incentives. ",
            style: { maxWidth: "80rem", marginBottom: "2rem" },
          },
          {
            type: "h3",
            text: "Its goal is to help people explore their local area in the most fun and efficient way possible, while meeting new people along the way.",
            style: { maxWidth: "80rem", marginBottom: "2rem" },
          },
          {
            type: "h3",
            text: "You can check out the demo <a href='https://localmore.vercel.app' target='_blank'><u><b>here</b></u></a>.",
            style: { maxWidth: "80rem" },
          },
        ]}
      />
    ),
  },
  {
    slug: "the-problem",
    name: "The problem",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="What's the problem?"
        parapgraphs={[
          "<u>Local information is spaghetti</u>. Finding something in your local area requires visiting various different platforms or having to click through multiple Google search results. The information is tangled up and difficult to navigate quickly.",
        ]}
        img_PATH="/projects/localmore/how-it-works/the-problem/spaghetti.png"
        sticky_TEXT
      />
    ),
  },
  {
    slug: "the-cause",
    name: "The cause",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="The cause"
        parapgraphs={[
          "<u>Most companies target the globe</u>. But there is a drawback. The details get lost. There is only so much information you can gather by trying to describe thousands of different places simultaneoussly. ",
          "Niche platforms have their advantages, but they usually come at a cost of distraction and uncertainty for someone trying to navigate their daily, urban life.",
        ]}
        img_PATH="/projects/localmore/how-it-works/the-problem/globe.png"
      />
    ),
  },
  {
    slug: "the-solution",
    name: "The solution",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="The solution"
        parapgraphs={[
          "<u>A single point of contact</u>. By reducing the steps required to navigate urban living, the resulting clarity gives rise to endless possibilities. Implementing such possibilities is difficult for companies providing services worldwide.",
          "There are unique advantages to being hyper-focused.",
        ]}
        img_PATH="/projects/localmore/how-it-works/the-problem/contact.png"
        sticky_TEXT
      />
    ),
  },
  {
    slug: "the-strategy",
    name: "The strategy",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="The strategy"
        parapgraphs={[
          "In order to attract users, we need content. So how about we start with content that is unlikely to be changed, and that will not be uploaded by the users anyways?",
          "We start with very simple, static things, such as playgrounds, sports fields and chill spots. While this may not sound that exciting, the initial 300 items would serve as a starting point.",
          "From there, we could strategically expand to other areas, building on top of the already existing content.",
          "As soon as we collect enough content for the average user to explore, the averaeg user count will start growing.",
          "As the user count grows, so do our opportunities to create new features for the connection aspect.",
        ]}
        img_PATH="/projects/localmore/how-it-works/implementation/transition.png"
        sticky_TEXT
      />
    ),
  },
  {
    slug: "core-feature",
    name: "Core feature",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="The core feature of Localmore"
        parapgraphs={[
          "The main feature of the app will be the tag-functionality.",
          "Each tag on Localmore will be pre-defined. The drawback is that users won't be able to create their own tags, and that creating tags manually will take a long time. The upside, however, is an awesome filtering system.",
        ]}
        img_PATH="/projects/localmore/how-it-works/core-feature.png"
      />
    ),
  },
  {
    slug: "database-structure",
    name: "Database structure",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="Database structure"
        parapgraphs={[
          "Each item/profile points to at least one category. Each category points to at least one tag-group.",
          "An item can only contain tags under the tag-groups provided by its categories.",
          "Using aggregation, we can filter through the content using categories, tags, tag-groups.",
          "An example would be looking for a restaurant that is: 1. In the sushi category, 2. With tag 'Credit card payment' under tag-group 'Payment type', 3. With tag 'Playground' under tag-group 'Nearby'.",
        ]}
        img_PATH="/projects/localmore/how-it-works/database.png"
      />
    ),
  },
  {
    slug: "advantages",
    name: "Advantages",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="Advantages"
        parapgraphs={[
          "1. The thousands of tags will make it fun to combine random tags and find the best mathcing results.",
          "2. By simply switching the category and tags with a single click, users will save dozens of clicks when searching for something locally.",
          "3. Each pre-defined tag can be applied to any type of profile. Meaning, if you go tot he homepage and select the tag 'Volleyball', you'll get results for people with 'Volleyball' selected as their hobby, volleybal sports clubs, volleyball competitions/events, places with a volleyball court nearby etc.",
        ]}
        img_PATH="/projects/localmore/how-it-works/advantages.png"
        sticky_TEXT
      />
    ),
  },
  {
    slug: "design",
    name: "Design",
    content: (
      <BigImageGrid_SECTION
        title="The design"
        deskImg_PATHS={[
          "/projects/localmore/design/desk/homepage.png",
          "/projects/localmore/design/desk/filters-applied.png",
          "/projects/localmore/design/desk/survey.png",
        ]}
        mobImg_PATHS={[
          "/projects/localmore/design/mob/home.png",
          "/projects/localmore/design/mob/filter-modal.png",
          "/projects/localmore/design/mob/filter-applied.png",

          "/projects/localmore/design/mob/survey.png",
        ]}
      />
    ),
  },
  {
    slug: "logo",
    name: "The logo",
    content: (
      <LogoSwiperSection_CONTENT
        swiperImg_PATHS={[
          "/projects/localmore/logo/swiper-images/2.png",
          "/projects/localmore/logo/swiper-images/3.png",
          "/projects/localmore/logo/swiper-images/4.png",
          "/projects/localmore/logo/swiper-images/5.png",
          "/projects/localmore/logo/swiper-images/6.png",
          "/projects/localmore/logo/swiper-images/7.png",
          "/projects/localmore/logo/swiper-images/8.png",
          "/projects/localmore/logo/swiper-images/9.png",
          "/projects/localmore/logo/swiper-images/1.png",
        ]}
        title="The logo"
      />
    ),
  },
  {
    slug: "coding",
    name: "Coding",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="Coding"
        parapgraphs={[
          "This project is the sole reason I learned to write software. I went for a no-sql database because of the frequent database adjustemnts, and next-js vercel beacause it's very simple to deploy.",
          "What also surprised me was the difficulty of building a proper admin managing tool for a more complex website, which I have done using retool.",
        ]}
        img_PATH="/projects/localmore/introduction/coding.png"
      />
    ),
  },
  {
    slug: "taking-images",
    name: "Taking images",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="Taking images"
        parapgraphs={[
          "I have taken around 10.000 images over 3 years for the app. This project was my opportunity to learn more about photography, and the difficulty of managing/implementing content consistently across the entire website.",
        ]}
        img_PATH="/projects/localmore/introduction/images.png"
      />
    ),
  },
  {
    slug: "future-plans",
    name: "Future plans",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="What's next for Localmore?"
        parapgraphs={[
          "Localmore is far from finished. The initial version isn’t even released yet. Although I could technically learn and build everything myself, I am starting to realize that partnering up with a developer would be the smartest way forward.",
          "If you're a developer and would like to work on a big, long-term project, reach out to me at domassirbike@gmail.com.",
        ]}
        img_PATH="/projects/localmore/introduction/whats-next.png"
      />
    ),
  },
  {
    slug: "next-projet",
    name: "Next project",
    content: (
      <NextPageSection_CONTENT
        text="Vocabs: A vocabulary app"
        href="/projects/vocabs"
      />
    ),
  },
];

export default function SwimActive_PROJECTS() {
  return <SiglePage_CONTENT {...{ Sections, Intro }} />;
}
