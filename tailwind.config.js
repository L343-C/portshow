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
        primaryContent: "#1E3E62",
        primaryBg:  "#0B192C ",
        primarySubContent: "#FFFFFF",
      },
    },
  },
  plugins: [],
}

