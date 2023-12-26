import { red, black, gray, white } from "./colors";
import { TypeScale, Typography } from "./typography";

export const Theme = {
  // Buttons
  primaryButtonColor: red[100],
  primaryHoverColor: red[200],
  primaryActiveColor: red[100],
  primaryDisabledButtonColor: gray[100],

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
};
