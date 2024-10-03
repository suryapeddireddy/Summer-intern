/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#2997FF", // Default blue
          100: "#99C8FF", // Lighter shade
          200: "#66B1FF", // Lighter shade
          400: "#007BFF", // Slightly darker
          500: "#0072E5", // Darker shade
          600: "#005BB5", // Dark blue (this will work as bg-blue-600)
        },
        gray: {
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
        },
        zinc: "#101010",
      },
    },
  },
  plugins: [],
};
