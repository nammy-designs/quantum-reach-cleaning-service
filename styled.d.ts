import "styled-components";
import { ColorTypes } from "./theme/theme";
declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: Array<number>;
    fontFamily: string;
    colors: ColorTypes;
  }
}
