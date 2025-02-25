import * as React from "react";
import Svg, { Path } from "react-native-svg";
const LitterSvg = ({color="#000", ...props}) => (
  <Svg
    width={24}
    height={26}
    viewBox="0 0 24 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M21 26H2.99998C2.4477 26 1.99998 25.5523 1.99998 25V7.50002C1.99998 6.94773 2.4477 6.50002 2.99998 6.50002H21C21.5523 6.50002 22 6.94773 22 7.50002V25C22 25.5523 21.5523 26 21 26Z"
      fill={color}
    />
    <Path
      d="M22.75 5.5H1.25C0.559644 5.5 0 4.94036 0 4.25C0 3.55964 0.559643 3 1.25 3L22.75 3C23.4403 3 24 3.55964 24 4.25C24 4.94036 23.4403 5.5 22.75 5.5Z"
      fill={color}
    />
    <Path
      d="M11 1.5C11 2.05228 11.4477 2.5 12 2.5C12.5523 2.5 13 2.05228 13 1.5C13 0.947715 12.5523 0.5 12 0.5C11.4477 0.5 11 0.947715 11 1.5Z"
      fill={color}
    />
  </Svg>
);
export default LitterSvg;
