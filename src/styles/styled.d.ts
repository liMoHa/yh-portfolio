import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      darkBrown: string;
      pinkBrown: string;
      darkGreen: string;
      lightGreen: string;
      beige: string;
      lightBeige: string;
    };
  }
}
