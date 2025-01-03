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
import { NextPageSection_CONTENT } from "@/components/SECTIONS/NextPageSection_CONTENT/NextPageSection_CONTENT";

const Intro = Project_INTROS["vocabs"];
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
            text: "Vocabs is a language-learning app that helps you master multiple languages by combining contextual learning, customizable flashcards, and collaborative features. ",
            style: { maxWidth: "80rem", marginBottom: "2rem" },
          },
          {
            type: "h3",
            text: "It addresses common frustrations with traditional tools to make language acquisition efficient and enjoyable.",
            style: { maxWidth: "80rem" },
          },
        ]}
      />
    ),
  },
  {
    slug: "problem-1",
    name: "Problem 1",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="Problem 1"
        parapgraphs={[
          "<u>Language Isolation:</u> Flashcard apps only allow two-sided translations, limiting the ability to connect phrases across multiple languages.",
          "Here is an example from Anki, a popular flashcard app. It only has 2 sides. So if I wanted to add a translation in a third language, I couldn't do it.",
        ]}
        img_PATH="/projects/vocabs/anki-answer.png"
      />
    ),
  },
  {
    slug: "problem-2",
    name: "Problem 2",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="Problem 2"
        parapgraphs={[
          "<u>Contextual Learning:</u> Instead of learning phrases in isolation, imagine using a familiar sentence and adding translations in new languages, making it easier to retain and understand.",
        ]}
        img_PATH="/projects/vocabs/contextual-learning.png"
      />
    ),
  },
  {
    slug: "problem-3",
    name: "Problem 3",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="Problem 3"
        parapgraphs={[
          "<u>Highlighting Challenges:</u> Highlighting words is often tedious or unavailable in other apps.",
          "On Anki, in order to highlight a word, you first need to precisely select it with your finger, then hold for a second, then click on the highlight button, and then select a color.",
          "If you want to highlight another word, you need to repeat the process all over again... yuck.",
        ]}
        img_PATH="/projects/vocabs/highlighting-issues.png"
      />
    ),
  },
  {
    slug: "problem-4",
    name: "Problem 4",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="Problem 4"
        parapgraphs={[
          "<u>Creating and saving translations:</u> Most apps either let you create a translation on your own (like Anki) or they give you pre-defined translations and don't let you create your own.",
          "What if users had the ability to both create their own, as well as save/download public translations?",
        ]}
        img_PATH="/projects/vocabs/create-translation.png"
      />
    ),
  },
  {
    slug: "core-feature-1",
    name: "Core feature 1",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="Core feature 1"
        parapgraphs={[
          "<u>Browsing Made Easy:</u> View your vocabularies as a list, with an option to highlight specific parts for better focus.",
        ]}
        img_PATH="/projects/vocabs/features/list.png"
        sticky_TEXT
      />
    ),
  },
  {
    slug: "core-feature-2",
    name: "Core feature 2",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="Core feature 2"
        parapgraphs={[
          "<u>Card Details:</u> Each card displays all translations, actions (edit, save, adjust difficulty), and settings.",
        ]}
        img_PATH="/projects/vocabs/features/open-tr.png"
        sticky_TEXT
      />
    ),
  },
  {
    slug: "core-feature-3",
    name: "Core feature 3",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="Core feature 3"
        parapgraphs={[
          "<u>Custom Display Options:</u> Show/hide difficulty levels, translation flags, and descriptions. ",
          "Choose which language appears on the front for effective reverse learning.",
          "Add new languages to existing translations, e.g., extending a German-English list with Russian translations for seamless learning.",
        ]}
        img_PATH="/projects/vocabs/features/display-settings.png"
        sticky_TEXT
      />
    ),
  },
  {
    slug: "core-feature-4",
    name: "Core feature 4",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="Core feature 4"
        parapgraphs={[
          "<u>Highlighting Simplified:</u> Use a modal interface to highlight text or specific letters in seconds.",
        ]}
        img_PATH="/projects/vocabs/features/highlighting.png"
        sticky_TEXT
      />
    ),
  },
  {
    slug: "core-feature-5",
    name: "Core feature 5",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="Core feature 5"
        parapgraphs={[
          "<u>Save public/shared lists and vocabs:</u> Don't want to spend time creating a vocabulary for a certain word? We got you! Browse through the public vocab library to find what you're looking for.",
        ]}
        img_PATH="/projects/vocabs/features/public-search.png"
        sticky_TEXT
      />
    ),
  },
  {
    slug: "monetization",
    name: "Monetization",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="Monetization model"
        parapgraphs={[
          "<u>Free Tier:</u> Start with 200 vocabs for free, applicable across all private lists.",
          "<u>Purchasable Upgrades:</u> Buy additional vocabs through three pricing tiers.",
          "<u>Earn Free Vocabs:</u> Submit lists for publishing and earn rewards if accepted / Invite friends to the app and gain additional vocab capacity. Referrals reward both inviter and invitee with bonus vocabs.",
        ]}
        img_PATH="/projects/vocabs/features/monetization.png"
        sticky_TEXT
      />
    ),
  },
  {
    slug: "status",
    name: "Status",
    content: (
      <TitleParagraphImageSection_CONTENT
        title="Current project status"
        parapgraphs={[
          "The app is still in development, but is not far away from being finished. ",
          "I plan on releasing it to the App Store and the Google Play Store in a few motnhs time.",
        ]}
        img_PATH="/projects/vocabs/features/index-page.png"
        sticky_TEXT
      />
    ),
  },
  {
    slug: "next-project",
    name: "Next project",
    content: (
      <NextPageSection_CONTENT
        text="Swim Active: Website for a swimming club"
        href="/projects/swim-active"
      />
    ),
  },
];

export default function Vocabs_PROJECT() {
  return <SiglePage_CONTENT {...{ Sections, Intro }} />;
}
