/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryTitle: "#FF6500",
        primaryContent: "#7ea3cc",
        primaryBg:  "#0B192C",
        primarySubContent: "#FFFFFF",
        primaryHover: "#0a1c36",
      },
    },
  },
  plugins: [],
}

