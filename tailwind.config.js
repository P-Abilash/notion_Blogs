export const content = [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {},
  fontFamily: {
    sans: ["'Montserrat'"],
    mono: ["'Inconsolata'"]
  }
};
export const plugins = [
  require('@tailwindcss/typography')
];