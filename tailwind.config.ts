//
//
//

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        small_deskop: { max: "1200px" },
        tablet: { max: "990px" },
        mobile: { max: "740px" },
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: Function }) {
      const newUtilities = {
        // ".formEndBtn_WRAP": {
        //   "@apply flex gap-3 screenUnder800:flex-col": {},
        // },
        // ".container": {
        //   display: "flex",
        //   flexDirection: "column",
        //   rowGap: "0.6rem",
        //   padding: "1.4rem",
        //   borderBottom: "var(--border-black-01)",
        // },
        ".border-bottom-light": {
          borderBottom: "0.1rem solid var(--border-light)",
        },
      };

      addUtilities(newUtilities, ["responsive"]);
    },
  ],
} satisfies Config;
