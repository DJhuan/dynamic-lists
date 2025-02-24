import * as React from "react";
import Svg, { Path } from "react-native-svg";

const CheckSvg = (props) => (
  <Svg
    width={49}
    height={35}
    viewBox="0 0 49 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M4 18.5385L18.35 31L45 4"
      stroke="black"
      strokeWidth={7}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default CheckSvg;
