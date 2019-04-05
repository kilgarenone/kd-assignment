import React from "react";
import { css } from "@emotion/core";
import colors from "../css/colors";
import { fontSize } from "../css/typography";
import ICONS from "../css/icons";
import Icon from "./Icon";

const defaultCss = css`
  /* position: absolute;
  bottom: 0;
  left: 0; */
  color: ${colors.error};
  font-size: ${fontSize.subText};
`;

function ErrorMsg({ className, children, htmlFor, ...props }) {
  return (
    <label htmlFor={htmlFor} css={[defaultCss, className]} {...props}>
      <Icon
        css={css`
          background-color: #fbe9e7;
          border-radius: 9999rem;
          padding: 0.25em;
          margin-right: 0.4em;
        `}
        icon={ICONS.CLOSE}
      />
      <span>{children}</span>
    </label>
  );
}
export default ErrorMsg;
