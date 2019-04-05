import React from "react";
import { css } from "@emotion/core";

function TextArea({ field: { name, value, onChange } }) {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      css={css`
        width: 100%;
        height: 100%;
      `}
    />
  );
}

export default TextArea;
