//
//
//

import LocalmoreExpandable_LOGO from "@/components/LocalmoreExpandalbe_LOGO";
import { SingleTab_TYPE } from "@/projects/types/tabs";
import React from "react";

const hypperlinks = {
  "localmore-branding": "/",
  "law-of-proximity": "https://www.nngroup.com/articles/gestalt-proximity/",
};

const imgWrap_STYLES: React.CSSProperties = {
  padding: "6rem 1.6rem",
};
const img_STYLES: React.CSSProperties = {
  maxWidth: "50rem",
};

const LocalmoreLogo_TAB: SingleTab_TYPE = {
  type: "single-tab",
  tab_NAME: "The logo",
  tab_SLUG: "the-logo",
  sections: [
    {
      type: "swiper-hero",
      section_SLUG: "overview",
      section_NAME: "Overview",
      title: "Localmore logo",
      subtitle: "The entire process, step by step",
      swiperImg_PATHS: [
        "/projects/localmore/logo/swiper-images/2.png",
        "/projects/localmore/logo/swiper-images/3.png",
        "/projects/localmore/logo/swiper-images/4.png",
        "/projects/localmore/logo/swiper-images/5.png",
        "/projects/localmore/logo/swiper-images/6.png",
        "/projects/localmore/logo/swiper-images/7.png",
        "/projects/localmore/logo/swiper-images/8.png",
        "/projects/localmore/logo/swiper-images/9.png",
        "/projects/localmore/logo/swiper-images/1.png",
      ],
      customBackgroundColors: [{ color: "#FFF7F0", index: 8 }],
      maxDesktopWidth: 50,
    },
    {
      type: "multi-point-section",
      section_SLUG: "considerations",
      section_NAME: "Considerations",
      title: "Starting considerations",

      points: [
        {
          title: "Exploration, connection and simplicity",
          paragraph: "The core aspects of Localmore should be portrayed.",
        },
        {
          title: "A typographic logo",
          paragraph:
            "The main use case will be at the top-left corner of the screen. A short/small symbol for the mobile navigation may suffice, but bigger screens offer room to display the logo in its entirety.",
        },
        {
          title: "Warm, friendly, encouraging",
          paragraph: `Although the word 'Localmore' itself does the heavy lifitng here, the correct shapes and colors can reinforce our intended communication if done correctly. If you want to learn about all of the communication goals that this logo need to adress, feel free to check out the <span data-hyperlink><a href='${
            hypperlinks[`localmore-branding`]
          }' target='_blank'>branding section</a></span>.`,
        },
      ],
    },
    {
      type: "title-paragraph-image",
      section_SLUG: "typography",
      section_NAME: "Typography",
      title: "Choosing the typography",
      parapgraphs: [
        "As soon as I stumbled upon Quicksand, it was love at first sight. It communicated exactly the things Localmore should be associated with.",
        "It's symmetric and consistent. The clear, rounded edges portray friendliness and simplicity. It also leans a little towards minimalism, which fit well with the overall design of the website.",
        "I chose the medium font to reflect the neutrality of Localmore. We're not pushy, loud or annoying, but also not too soft or brittle - we know what we stand for.",
      ],
      img_PATH: "/projects/localmore/logo/lm-typography-choice.png",
    },
    {
      type: "title-paragraph-image",
      section_SLUG: "the-first-step",
      section_NAME: "The first step",
      title: "The first step",
      parapgraphs: [
        "This is the starting out after writing out the word with the Quicksand type.",
      ],
      img_PATH: "/projects/localmore/logo/swiper-images/2.png",
      imgWrap_STYLES,
      img_STYLES,
    },

    {
      type: "title-paragraph-image",
      section_SLUG: "lets-cuddle",
      section_NAME: "Let's cuddle",
      title: "Let's cuddle 🤗",
      parapgraphs: [
        `Localmore aims to bring people together in local communities. We don't want to the letters to look like they are social distancing. Let's squeeze them a little. This adheres to the <span data-hyperlink><a href='${hypperlinks["law-of-proximity"]}' target='_blank'>Gestalt principle of proximity</a></span>, which states that objects positioned closer together are perceived as a unified group.`,
        "Speaking of connection, the two L's stick out a bit too much, creating a sense of hierarchy and superiority—quite the opposite of the balance and harmony we strive to embody.",
      ],
      img_PATH: "/projects/localmore/logo/swiper-images/3.png",
      imgWrap_STYLES,
      img_STYLES,
    },
    {
      type: "title-paragraph-image",
      section_SLUG: "nail-em-down",
      section_NAME: "Nail 'em down",
      title: "Nail 'em down",
      parapgraphs: [
        `Simply scaling down the first "L" worked brilliantly. Now, the capital letter is seamlessly integrated with the lowercase ones, all aligned at the same height.`,
        `Now, there's still this literal middle finger sticking out. Obviously, the top needs to be cut off, but how do you do so without making the letter look like an "i"?`,
      ],
      img_PATH: "/projects/localmore/logo/swiper-images/4.png",
      imgWrap_STYLES,
      img_STYLES,
    },
    {
      type: "title-paragraph-image",
      section_SLUG: "call-me-einstein",
      section_NAME: "Call me Einstein",
      title: "Call me Einstein 🧠",
      parapgraphs: [
        `I replaced the small "l" with a sized-down, capital "L" and made it cut into the small "m". The logo finally has a simple, yet unique touch to it. It also helps with the feeling of connetion, as if one is part of the other.`,
        `Localmore's slogan is "Explore and Connect". We now have the "connection" part down. Let's work on the "exploration".`,
      ],
      img_PATH: "/projects/localmore/logo/swiper-images/5.png",
      imgWrap_STYLES,
      img_STYLES,
    },
    {
      type: "title-paragraph-image",
      section_SLUG: "show-me-da-way",
      section_NAME: "Show me da way",
      title: "Show me da way",
      parapgraphs: [
        `An object most associated with exploration might just be the compass, which I though could be represented with a little arrow inside the first "O".`,
        `However, placing it inside like that might just achieve the opposite effect. It feels like it's trapped in there, waiting to break free.`,
      ],
      img_PATH: "/projects/localmore/logo/swiper-images/6.png",
      imgWrap_STYLES,
      img_STYLES,
    },
    {
      type: "title-paragraph-image",
      section_SLUG: "breaking-free",
      section_NAME: "Breaking free",
      title: "Breaking free",
      // title: "Breaking <s>Bad</s> free",
      parapgraphs: [
        `Placing the arrow outside of the "O" feels liberating. Clean and simple, but still probematic.`,
        `When reading out the word, you may subconsciously pause at the position of the arrow. Kind of inconvenient.`,
        `Also, the the combination of the letters "L" and "O", together with the arrow on top, may be interpreted as camera.`,
      ],
      img_PATH: "/projects/localmore/logo/swiper-images/7.png",
      imgWrap_STYLES,
      img_STYLES: { ...img_STYLES, marginBottom: "1rem" },
    },
    {
      type: "title-paragraph-image",
      section_SLUG: "swaping-seats",
      section_NAME: "Swaping seats",
      title: "Swaping seats",
      parapgraphs: [
        `The arrow now makes it feel like the energy is flying out right at the end. I also squeezed it a little, making it look less like a corner of a box, and more like an actual arrow.`,
        `At this point I knew I had the foundation down. I could always come back and tweak something later. Let's move on to colors.`,
      ],
      img_PATH: "/projects/localmore/logo/swiper-images/8.png",
      imgWrap_STYLES,
      img_STYLES: { ...img_STYLES, marginBottom: "1rem" },
    },
    {
      type: "title-paragraph-image",
      section_SLUG: "why-so-cold",
      section_NAME: "Ice Ice Baby",
      title: "Ice Ice Baby 🥶",
      parapgraphs: [
        `My initial conviction was color blue due to the believe it would signal trust.`,
        `After showing this to a couple of people, I realized the logo lacked enthusiasm. Perhaps I could achieve that feeling of trust and stability indirectly, but focusing on warmth, joy and kindness.`,
      ],
      img_PATH: "/projects/localmore/logo/swiper-images/9.png",
      imgWrap_STYLES,
      img_STYLES: { ...img_STYLES, marginBottom: "1rem" },
    },
    {
      type: "title-paragraph-image",
      section_SLUG: "looking-good",
      section_NAME: "Looking good",
      title: "Looking good",
      parapgraphs: [
        `The colors now look warm and welcoming. Not too hot like a bright orange and not too cold like your ex. Just kidding 🫣.`,
      ],
      img_PATH: "/projects/localmore/logo/swiper-images/1.png",
      imgWrap_STYLES: { ...imgWrap_STYLES, backgroundColor: "#FFF7F0" },
      img_STYLES: { ...img_STYLES, marginBottom: "1rem" },
    },
    {
      type: "title-paragraph-image",
      section_SLUG: "end-result",
      section_NAME: "End result",
      title: "The end result",
      parapgraphs: [
        `It just so happens that the first letter of the first word also marks the beginning of the most memorable part: the intersecting letters 'L' and 'M'. Paired with the arrow at the end, this forms the abbreviated version of the logo.`,
        "We did it! Up top 🖐️",
      ],
      img_PATH: "/projects/localmore/logo/progressions/10.png",
      customImg_EL: <LocalmoreExpandable_LOGO />,
    },
    {
      type: "uneven-row-image-grid",
      section_SLUG: "example",
      section_NAME: "Examples",
      title: "Implementation examples",
      subtitle: "This is a pretty test example",
      leftImages_PATHS: [
        "/projects/localmore/logo/uneven-row-images/left/lm-nav-menu-closed.png",
        "/projects/localmore/logo/uneven-row-images/left/lm-nav-menu-open.png",
      ],
      rightImages_PATHS: [
        "/projects/localmore/logo/uneven-row-images/right/lm-app-icon-homescreen.png",
      ],
    },
  ],
};

export default LocalmoreLogo_TAB;
