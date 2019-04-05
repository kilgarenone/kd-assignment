import React from "react";
import { css } from "@emotion/core";
import { List } from "./List";
import RadioButton from "./RadioButton";
import spacing from "../css/spacing";

function ListRadioBtns({
  field: { name, value, onChange },
  question: { options },
  ...props
}) {
  return (
    <List>
      {options.map(({ id, prompt }) => (
        <li key={id}>
          <RadioButton
            className={css`
              padding: ${spacing.space2};
            `}
            handleChange={onChange}
            name={name}
            value={prompt}
            isChecked={prompt === value}
            {...props}
          >
            {prompt}
          </RadioButton>
        </li>
      ))}
    </List>
  );
}

export default ListRadioBtns;
