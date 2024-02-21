/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        springGreen: "#00FB94",
        violet: "#E9E9ED",
        neutral: {
          // 1: "#1B1B1B",
          // 2: "#525252",
          // 3: "#949292",
          // 4: "#C5C5C5",
          // 5: "#DADADA",
          // 6: "#F4F4F4",
          1: "#FFF",
          2: "#B8B8B8",
          3: "#616161",
          4: "#414141",
          5: "#1A1A1A",
          6: "#000",
        },
        primary: {
          // 1: "#2871FF",
          1: "#FFAD00",
          2: "#FFBD31",
          3: "#FFD67F",
          4: "#FFEDC6",
          white: "#FDFBFB",
          5: "#00A6F9",
        },
        black: {
          1: "#101010",
        },
        gray: {
          100: "#FBFBFB",
          200: "#EAEAEA",
          300: "#DFDFDF",
          400: "#999999",
          500: "#7F7F7F",
          600: "#666666",
          700: "#4C4C4C",
          800: "#333333",
          900: "#191919",
        },
        blue: {
          100: "#E6F0FD",
          200: "#CCE2FC",
          300: "#99C5FA",
          400: "#66A9F7",
          500: "#338CF5",
          600: "#2871FF",
          700: "#0064DA",
          800: "#0059C2",
          900: "#004391",
        },
        teal: {
          100: "#E6FFFA",
          200: "#B2F5EA",
          300: "#81E6D9",
          400: "#4FD1C5",
          500: "#3ABAB4",
          600: "#319795",
          700: "#2C7A7B",
          800: "#285E61",
          900: "#234E52",
        },
      },
      boxShadow: {
        xs: "0 0 0 1px rgba(0, 0, 0, 0.16)",
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.16)",
        default:
          "0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.03)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.02)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.04)",
        outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
        none: "none",
        "custom-1": "0px 4px 25px 0px rgba(0, 0, 0, 0.09)",
        "custom-2": "0px 19px 83px 0px rgba(0, 0, 0, 0.14)",
      },
      spacing: {
        "9/16": "56.25%",
        "3/4": "75%",
        "1/1": "100%",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
      },
      fontSize: {
        // xs: "0.75rem",
        // sm: "0.875rem",
        // base: "1rem",
        // lg: "1.125rem",
        // xl: "1.25rem",
        // "2xl": "1.5rem",
        // "3xl": "2rem",
        // "4xl": "2.625rem",
        // "5xl": "3.25rem",
        // "6xl": "4.875rem",
        xs: "0.75rem", // 12px
        sm: "0.875rem",
        base: "1rem", // text default - 16px
        lg: "1.125rem",
        xl: "1.312rem", // 21px
        "2xl": "1.688rem", // 27px
        "3xl": "2rem",
        "4xl": "2.188rem", // 35px
        "5xl": "2.875rem", // 46px
        "6xl": "4.875rem",
      },
      inset: {
        "1/2": "50%",
        full: "100%",
      },
      letterSpacing: {
        tighter: "-0.02em",
        tight: "-0.01em",
        normal: "0",
        wide: "0.01em",
        wider: "0.02em",
        widest: "0.4em",
      },
      lineHeight: {
        none: "1",
        tighter: "1.125",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
        "normal-1": "1.225",
        3: ".75rem",
        4: "1rem",
        5: "1.2rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        12: "5.75rem",
      },
      minWidth: {
        10: "2.5rem",
        48: "12rem",
      },
      opacity: {
        90: "0.9",
      },
      scale: {
        98: ".98",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5%)" },
        },
      },
      zIndex: {
        "-1": "-1",
      },
      maxWidth: {
        "4.5xl": "944px",
        "5.5xl": "1080px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
