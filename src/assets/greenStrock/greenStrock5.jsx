import React from "react";
import { SvgResize } from "../../hooks/svgResize";

const GreenStrock5 = () => {
  const height = SvgResize("<", 769, "850", "1000");
  return (
    <svg
      width="3"
      height={height}
      viewBox="0 0 1 749"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="3" height="749" fill="url(#paint0_linear_1_6424)" />
      <defs>
        <linearGradient
          id="paint0_linear_1_6424"
          x1="1.5"
          y1="0"
          x2="1.5"
          y2="749"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0D1117" />
          <stop offset="0.333333" stop-color="#2EA043" />
          <stop offset="0.666667" stop-color="#2EA043" />
          <stop offset="1" stop-color="#0D1117" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default GreenStrock5;
