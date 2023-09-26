const white = "#fff";
const black = "#000";
const dark = "#626262";
const blue = "#1F41BB";
const gray = "#ECECEC";
const lightBlue = "#f1f4ff";

export default {
  darkText: dark,
  text: black,
  background: white,
  primary: blue,
  onPrimary: white,
  active: blue,
  borderWithOpacity: "#1f41bb",
  lightPrimary: lightBlue,
  gray: gray,
};
const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export const theme = {
  default: {
    primary: '#2da333',
    secondary: '#F07817',
    text: '#a19e9e',
    white: '#fff',
    danger: '#fa0606',
    background: '#f7fcf3',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    input: "#F3FBF4"
  },
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};
