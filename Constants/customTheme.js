// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
export const CustomTheme = extendTheme({
  colors: {
    brand: {
      bg: "#EDE0E1", // background
      td: "#1E1E1E", // text-ligth
      ta: "#16161A", // text-ligth
      bl: "#7F5AF0", // blue
      gy: "#94A1B2", // grey
      db: "#0D0D0D", // dark-backgraund
      ld: "#2D2D2E", // ligth-backgraund
    },
  },
  fonts: {
    xbold: "Wavehaus-extrabold",
    bold: "Wavehaus-bold",
    semi: "Wavehaus-semibold",
    book: "Wavehaus-book",
    ligth: "Wavehaus-light",
    Mono: "SFMonoMedium",
  },
});
