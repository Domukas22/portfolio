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
        small_deskop: { min: "991px", max: "1200px" },

        mobile: { max: "767px" },
        tablet: { max: "990px" },
        desktop: { min: "991px" },
        desktop_small: { max: "1300px" },
        desktop_big: { min: "1301px" },
      },
    },
  },
} satisfies Config;
