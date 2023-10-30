/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-bg": "url('/bg.jpg')",
      },
      colors: {
        "dark-1": "#2d3439",
        "dark-2": "#42484d",
      },
    },
  },
  plugins: [],
};
