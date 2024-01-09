import React from "react";

export const IconShadcn = (props: React.SVGAttributes<SVGElement>) => {
  return (
    // Base
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="256"
      height="256"
      viewBox="0 0 256 256"
      fill="none"
      {...props}
    >
      {/* replace with the desire icons/svg */}
      <rect width="256" height="256" fill="#000" rx="60" />
      <line
        x1="208"
        y1="128"
        x2="128"
        y2="208"
        // fill="#fff"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      ></line>
      <line
        x1="192"
        y1="40"
        x2="40"
        y2="192"
        // fill="#fff"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      ></line>
    </svg>
  );
};
