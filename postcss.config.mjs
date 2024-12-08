// /** @type {import('postcss-load-config').Config} */
// const config = {
//   plugins: {
//     tailwindcss: {},
//   },
// };

// export default config;

// --------------------------------------------------------------

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "postcss-import": {}, // This allows importing other CSS files
    "postcss-mixins": {}, // First, resolve mixins
    "postcss-custom-media": {}, // Resolve custom media queries next
    "postcss-nested": {}, // Then process nested rules
    "postcss-nesting": {}, // Follow CSS nesting spec (optional, but usually before Tailwind)
    tailwindcss: {}, // TailwindCSS needs to process after nesting
    "postcss-preset-env": {
      // Polyfills modern CSS features
      stage: 1, // Specify the stage for experimental features
    },
    "postcss-normalize": {}, // Normalize CSS across browsers
    autoprefixer: {}, // Add vendor prefixes after Tailwind styles
    cssnano: process.env.NODE_ENV === "production" ? {} : false, // Minify in production
  },
};

export default config;
