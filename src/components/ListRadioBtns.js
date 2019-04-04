import React from "react";
import { css } from "@emotion/core";
import { ErrorMessage } from "formik";
import { List } from "./List";
import RadioButton from "./RadioButton";
import spacing from "../css/spacing";
import ErrorMsg from "./ErrorMsg";

function ListRadioBtns({
  field: { name, value, onChange },
  question: { id, options },
  ...props
}) {
  return (
    <div
      style={{
        position: "relative"
      }}
    >
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
      <ErrorMessage
        name={name}
        component={ErrorMsg}
        css={css`
          left: ${spacing.space0};
        `}
        htmlFor="questionnaire-forms"
      />
    </div>
  );
}

export default ListRadioBtns;
