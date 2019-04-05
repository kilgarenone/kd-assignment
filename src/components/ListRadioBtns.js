import React from "react";
import { css } from "@emotion/core";
import { List } from "./List";
import RadioButton from "./RadioButton";
import spacing from "../css/spacing";

function ListRadioBtns({
  field: { name, value, onChange },
  question: { id, options },
  ...props
}) {
  return (
    <List>
      {options.map(option => (
        <li key={id}>
          <RadioButton
            className={css`
              padding: ${spacing.space2};
            `}
            handleChange={onChange}
            name={name}
            value={option}
            isChecked={option === value}
            {...props}
          >
            {option}
          </RadioButton>
        </li>
      ))}
    </List>
  );
}

export default ListRadioBtns;
