import { DefaultTheme } from "@react-navigation/native";
import colors from "../config/colors";

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.white,
  },
};
export default Theme;
