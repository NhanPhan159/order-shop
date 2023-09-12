/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "menu-outside": "#B9A990",
        "menu-inside": "#F8F8EC",
        "menu-title": "#A15929",
        "menu-text-bill": "#8D5D55",
        "header-nav": "#F1F3FF",
      },
      borderWidth: {
        20: "20px",
      },
      inset: {
        "3/25": "12%",
      },
    },
  },
  plugins: [],
};
