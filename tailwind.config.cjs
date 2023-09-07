/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    fontFamily: {
      body: [
        "A1ゴシック M",
        "Roboto",
        "Segoe UI",
        "Helvetica Neue",
        "HelveticaNeue",
        "YuGothic",
        "Yu Gothic Medium",
        "Yu Gothic",
        "Verdana",
        "Meiryo",
        "sans-serif",
      ],
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          padding: "0 5%",
          "@screen 2xl": {
            maxWidth: "1300px",
          },
        },
      });
    },
  ],
};
