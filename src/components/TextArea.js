import React from "react";
import { css } from "@emotion/core";

function TextArea() {
  return (
    <textarea
      css={css`
        width: 100%;
        height: 100%;
      `}
    />
  );
}

export default TextArea;
