import "styled-components";
import { DefaultTheme } from "styled-components";

export type Theme = typeof theme;

const theme: DefaultTheme = {
  colors: {
    white: "#fdfdfd",
    black: "#262626",
    darkBrown: "#393332",
    pinkBrown: "#aa8f82",
    darkGreen: "#777a6f",
    lightGreen: "#93aa91",
    beige: "#eeebea",
    lightBeige: "#f3f1f1",
    pink: "#f46868",
  },
};

export default theme;
