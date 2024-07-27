import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      bluegray: colors.blueGray,
      coolgray: colors.coolGray,
      gray: colors.gray,
      truegray: colors.trueGray,
      warmgray: colors.warmGray,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      'blue-ribbon': {
        '50': '#edfaff',
        '100': '#d7f1ff',
        '200': '#b7e8ff',
        '300': '#86dcff',
        '400': '#4dc7ff',
        '500': '#24a9ff',
        '600': '#0d8aff',
        '700': '#066ee7',
        '800': '#0c5bc1',
        '900': '#114f97',
      },
      'dodger-blue': {
        '50': '#effaff',
        '100': '#def3ff',
        '200': '#b6eaff',
        '300': '#75dbff',
        '400': '#2ccaff',
        '500': '#06bbff',
        '600': '#0090d4',
        '700': '#0072ab',
        '800': '#00608d',
        '900': '#065074',
      },
      'whisper': {
        '50': '#f5f6fa',
        '100': '#eaecf4',
        '200': '#d0d6e7',
        '300': '#a7b3d2',
        '400': '#788ab8',
        '500': '#576ca0',
        '600': '#445585',
        '700': '#38456c',
        '800': '#313b5b',
        '900': '#2d344d',
    },
    "gradient-bg": {
      "from": "#0767A7",
      'to': "#64C9F8",
    },
    "hercules": {
      "table-header": "#1873AA",
      "modal-bg": "#DEF4FD",
      "hover-row": "#0767A7",
      "border-table": "#CBD1D3",
      "bg-dark-mode": "#121212",
      "border-dark-mode": "#242424",
      "midnight-charcoal": "#1A1817",
      "pearl-mist": "#E5E5E5",
      "pure-white": "#FFFFFF",
    },
    "light": {
      "primary": "#076df2",
      "secondary": "#0e1a2f",
      "text": "#000000",
      "accent": "#7294d5",
      "background": "#f6f5f4",
    },
    "dark": {
      "primary": "#ebf0f9",
      "secondary": "#09111f ",
      "primary-button": "#076df2",
      "secondary-button": "#0e1a2f",
      "accent": "#62a0ea",
      "table-1": "#7a96c7",
      "table-2": "#384761",
      "table-3": "#0d182b",
      "table-4": "#404754",
      "primary-100":"#076df2",
      "primary-200":"#689aff",
      "primary-300":"#ddfeff",
      "accent-100":"#62a0ea",
      "accent-200":"#004787",
      "text-100":"#ebf0f9",
      "text-200":"#cdd1da",
      "bg-100":"#09111f",
      "bg-200":"#19202e",
      "bg-300":"#303746",
      "bg-400":"#171D2A",
      "bg-500":"#050a13",
      "bg-600":"#04070c",
      "button-principal": "#447B9D", 
      "bg-0": "#09111F",
      "bg-1": "#080F1C",
      "bg-2": "#070e19",
      "bg-3": "#060c16",
      "bg-4": "#050a13",
      "bg-5": "#050910",
      "bg-6": "#04070c",
      "bg-7": "#030509",
      "bg-8": "#020306",
      "bg-9": "#010203",
      "bg-(-1)": "#222935",
      "bg-(-2)": "#222935",
      "bg-(-3)": "#535862",
      "bg-(-4)": "#6b7079",
      "bg-(-5)": "#84888f",
      "bg-(-6)": "#9da0a5",
      "bg-(-7)": "#b5b8bc",
      "bg-(-8)": "#cecfd2",
      "bg-(-9)": "#e6e7e9",
    },
    "dark-2": {
      "bg-100": "#2B343B",
      "bg-200": "#1E272E",
      "bg-300": "#2A2E34",
      "accent-100": "#B9D6F2",
      "accent-200": "#6184D8",
    },
    "hercules-light": {
      "footer-black": "#111111",
      "white": "#FFFFFF",
      "primary-button": "#EA8300",
      "secondary-button": "#1873AA",
      "primary": "#f3fbfd",
      "secondary": "#1873AA",
      "table-header": "#D3E0E5",
      "font-secondary": "#0A3749",
    },
    "hercules-dark": {
      "white": "#FFFFFF",
      "bg-100": "#114B68",
      "bg-200": "#0A3749",
      "bg-300": "#182625",
      "primary-button": "#EA8300",
      "secondary-button": "#8FD9F9",
    }
    },
    fontFamily: {
      display: ['Roboto', 'sans-serif'],
      body: ['Roboto', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // light mode
        tremor: {
          brand: {
            faint: "#eff6ff", // blue-50
            muted: "#bfdbfe", // blue-200
            subtle: "#60a5fa", // blue-400
            DEFAULT: "#3b82f6", // blue-500
            emphasis: "#1d4ed8", // blue-700
            inverted: "#ffffff", // white
          },
          background: {
            muted: "#f9fafb", // gray-50
            subtle: "#f3f4f6", // gray-100
            DEFAULT: "#ffffff", // white
            emphasis: "#374151", // gray-700
          },
          border: {
            DEFAULT: "#e5e7eb", // gray-200
          },
          ring: {
            DEFAULT: "#e5e7eb", // gray-200
          },
          content: {
            subtle: "#9ca3af", // gray-400
            DEFAULT: "#6b7280", // gray-500
            emphasis: "#374151", // gray-700
            strong: "#111827", // gray-900
            inverted: "#ffffff", // white
          },
        },
        // dark mode
        "dark-tremor": {
          brand: {
            faint: "#0B1229", // custom
            muted: "#172554", // blue-950
            subtle: "#1e40af", // blue-800
            DEFAULT: "#3b82f6", // blue-500
            emphasis: "#60a5fa", // blue-400
            inverted: "#030712", // gray-950
          },
          background: {
            muted: "#131A2B", // custom
            subtle: "#1f2937", // gray-800
            DEFAULT: "#0A3749", // gray-900
            emphasis: "#d1d5db", // gray-300
          },
          border: {
            DEFAULT: "#8FD9F9", // gray-800
          },
          ring: {
            DEFAULT: "#1f2937", // gray-800
          },
          content: {
            subtle: "#4b5563", // gray-600
            DEFAULT: "#ffffff", // gray-600
            emphasis: "#e5e7eb", // gray-200
            strong: "#f9fafb", // gray-50
            inverted: "#000000", // black
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
