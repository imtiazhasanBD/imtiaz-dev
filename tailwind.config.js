/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
         background: "#1f1f24",
         customGreen: "#62a92b",
         customLiteGreen: "#A8FF53",
         customBg: "#272730",
         customGray: "#32323B",
      },
    },
  },
  plugins: [],
};
