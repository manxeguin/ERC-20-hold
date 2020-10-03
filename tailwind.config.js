const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: defaultTheme.colors.purple,
      },
      inset: {
        "-16": "-16px",
        "16": "16px",
        "-8": "-8px",
        "8": "8px",
      },
    },
  },
  variants: {},
  plugins: [],
};
