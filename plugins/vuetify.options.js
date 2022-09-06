// vuetify.options.js
const colorsLight = {
  primary: "#f36c21",
  info: "#e76f26",
  secondary: "#a5d9fe",
  accent: "#f8d0ce",
  background: "",
};
const colorsDark = {
  primary: "#f36c21",
  secondary: "#a5d9fe",
  accent: "#f8d0ce",
  background: "#121212",
};
export default {
  theme: {
    // options: {
    //   customProperties: true,
    // },
    dark: true,
    themes: {
      dark: colorsDark,
      light: colorsLight,
    },
  },
};
