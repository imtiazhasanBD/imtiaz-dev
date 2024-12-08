/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'spin-slower': 'spin 50s linear infinite',
      },
      colors: {
         background: "#1F1F24",
         customGreen: "#62a92b",
         customLiteGreen: "#A8FF53",
         customBg: "#272730",
         coustomLiteBg: "#333A32",
         customGray: "#32323B",
         costomGaryLite: "#3D443C",
         cuntomPink: "#EA78A4"
      },
    },
  },
  plugins: [],
};
