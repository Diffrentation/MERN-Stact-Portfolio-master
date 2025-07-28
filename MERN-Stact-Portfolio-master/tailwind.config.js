/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0CC0DF",

          secondary: "#facc15",

          accent: "#0097B2",

          neutral: "#44403c",

          "base-100": "#ffffff",

          info: "#fda4af",

          success: "#18b47b",

          warning: "#f0d447",

          error: "#f41042",
        },
      },
    ],
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // screens: {
    //   'md': '800px'
    // },
    extend: {
      animationDuration: {
        "1s": "1s",
      },
    },
  },
  plugins: [require("daisyui")],
};
