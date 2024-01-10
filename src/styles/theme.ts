import { red, black, gray, white, green, yellow } from "./colors";
import { TypeScale, Typography } from "./typography";

export const Theme = {
  // Buttons
  primaryButtonColor: red[100],
  primaryHoverColor: red[200],
  primaryActiveColor: red[100],
  primaryDisabledButtonColor: gray[100],
  primarySelectedButtonColor: gray[300],

  // Fonts
  primaryFont: Typography.poppins,

  // Fonts-sizes
  primaryFontSizes: {
    ...TypeScale,
  },

  // Texts
  textColorOnPrimary: black[100],
  textColorOnSecondary: gray[200],
  textColorOnTertiary: white[100],

  // Backgrounds
  primaryBackground: black[100],
  secondaryBackground: gray[100],

  // Status
  status: {
    successColor: green[100],
    successColorTextOnPrimary: white[100],
    errorColor: red[100],
    warningColor: yellow[100],
  },
};
