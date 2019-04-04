import React from "react";
import { css } from "@emotion/core";
import spacing from "../css/spacing";
import Button from "./Button";
import ButtonWithSpinner from "./ButtonWithSpinner";
import Container from "./Container";
import OptionallyDisplayed from "./OptionallyDisplayed";

const cont = css`
  button:not(:last-of-type) {
    margin-right: ${spacing.space0};
  }
`;

function PrevAndNextBtn({
  showBackBtn = true,
  className,
  handleBackBtnClick,
  backBtnText,
  continueBtnText,
  handleContinueBtnClick,
  isSubmitting,
  isLastPage
}) {
  return (
    <Container xAlign="center" css={[cont, className]}>
      <Container>
        <OptionallyDisplayed display={showBackBtn}>
          <Button
            css={css`
              position: absolute;
              left: -7em;
              top: 0.25em;
            `}
            type="button"
            outline
            noBorder
            disabled={isSubmitting}
            kind="secondary"
            onClick={handleBackBtnClick}
          >
            {backBtnText}
          </Button>
        </OptionallyDisplayed>
        <ButtonWithSpinner
          scale="big"
          type="submit"
          isSubmitting={isSubmitting}
          disabled={isSubmitting}
          progressText={isSubmitting && "Submitting..."}
        >
          {isLastPage ? "Submit" : continueBtnText}
        </ButtonWithSpinner>
      </Container>
    </Container>
  );
}

PrevAndNextBtn.defaultProps = {
  handleContinueBtnClick: null,
  backBtnText: "Go back",
  continueBtnText: "Continue"
};

export default PrevAndNextBtn;
