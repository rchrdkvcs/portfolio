/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-1": "#FAF6F3",
        "bg-2": "#EBE0D8",
        "bg-3": "#291618",
        "bg-4": "#FFFFFF",
        "fg-1": "#5D4043",
        "fg-2": "#30171B",
      },
    },
  },
  plugins: [],
};
