import * as React from "react";
import Svg, { Path } from "react-native-svg";

const PenSvg = (props) => (
  <Svg
    width={36}
    height={33}
    viewBox="0 0 36 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M7.01018 20.9274L25.9285 3.05125C27.7009 1.37647 30.5035 1.48507 32.141 3.29199C33.7785 5.0989 33.6115 7.89858 31.7709 9.49809L12.1245 26.5708L7.01018 20.9274Z"
      fill="black"
    />
    <Path
      d="M2.98334 29.7158L6.04311 21.7506L11.2104 27.4525L2.98334 29.7158Z"
      fill="black"
    />
  </Svg>
);
export default PenSvg;
