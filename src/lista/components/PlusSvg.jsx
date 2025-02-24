import * as React from "react";
import Svg, { Path } from "react-native-svg";
const PlusSvg = (props) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M7 1C7 0.447715 7.44772 0 8 0H12C12.5523 0 13 0.447715 13 1V6C13 6.55228 13.4477 7 14 7H19C19.5523 7 20 7.44772 20 8V12C20 12.5523 19.5523 13 19 13H14C13.4477 13 13 13.4477 13 14V19C13 19.5523 12.5523 20 12 20H8C7.44772 20 7 19.5523 7 19V14C7 13.4477 6.55228 13 6 13H1C0.447715 13 0 12.5523 0 12V8C0 7.44772 0.447715 7 1 7H6C6.55228 7 7 6.55228 7 6V1Z"
      fill="black"
    />
  </Svg>
);
export default PlusSvg;
