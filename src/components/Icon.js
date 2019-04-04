import React from "react";
import { css } from "@emotion/core";

const defaultSvgCss = css`
  position: relative;
  display: inline-block;
  vertical-align: middle;
`;

function Icon({ icon, color, size = 24, className }) {
  return (
    <svg
      css={[defaultSvgCss, className]}
      className="icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      preserveAspectRatio="xMidYMid meet"
    >
      <path className="icon-path" fill={color} d={icon} />
    </svg>
  );
}

export default Icon;
