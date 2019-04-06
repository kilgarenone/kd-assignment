import React, { Component } from "react";
import { Field, ErrorMessage } from "formik";
import { connect } from "react-redux";
import { css } from "@emotion/core";
import { setProgressStatus } from "./Questionnaire.state";
import ProgressBar from "../components/ProgressBar";
import Wizard from "../components/WizardForm";
import FieldSet from "../components/FieldSet";
import TextArea from "../components/TextArea";
import ListRadioBtns from "../components/ListRadioBtns";
import ErrorMsg from "../components/ErrorMsg";
import spacing from "../css/spacing";
import {
  initialValuesConstructor,
  validationSchemaConstructor
} from "../utils/functions";

const QUESTIONS = {
  title: "This is a title for the form Header",
  questions: [
    {
      id: 2447,
      question_type: "TextQuestion",
      prompt: "What is your first answer?",
      validation_rules: [{ is_required: true }, { min_char_length: 5 }]
    },
    {
      id: 2501,
      question_type: "SelectQuestion",
      prompt: "What is your second answer?",
      validation_rules: [{ is_required: true }],
      options: [
        { id: 1, prompt: "option-1" },
        { id: 2, prompt: "option-2" },
        { id: 3, prompt: "option-3" },
        { id: 4, prompt: "option-4" }
      ]
    }
  ]
};

class Questionnaire extends Component {
  state = {};

  handleSubmit = results => {
    this.props.navigate(`results`, {
      state: {
        results,
        questions: QUESTIONS.questions
      }
    });
  };

  setProgressBarWidth = childrenCount => {
    const step = 100 / Math.abs(childrenCount);

    this.props.setProgressStatus(
      this.props.progressStatus + (childrenCount < 0 ? -step : +step)
    );
  };

  formControlSelector = type => {
    let component;
    switch (type) {
      case "TextQuestion":
        component = TextArea;
        break;
      case "SelectQuestion":
        component = ListRadioBtns;
        break;

      default:
        break;
    }

    return component;
  };

  render() {
    const { title, questions } = QUESTIONS;
    const initialValues = initialValuesConstructor(questions);

    return (
      <main
        css={css`
          max-width: 600px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          height: 100vh;
        `}
      >
        <h1>{title}</h1>
        <ProgressBar width={this.props.progressStatus} />
        <Wizard
          initialValues={initialValues}
          onSubmit={this.handleSubmit}
          setProgressBarWidth={this.setProgressBarWidth}
          idForFormEl="questionnaire-forms"
          prevAndNextBtnClassName={css`
            top: -3.5em;
            margin-top: auto;
          `}
        >
          {questions.map(question => (
            <Wizard.Page
              validate={validationSchemaConstructor(question)}
              key={question.id}
              name={question.id}
            >
              <FieldSet
                css={css`
                  flex: 1 1 auto;
                `}
                legend={question.prompt}
              >
                <Field
                  name={question.id}
                  component={this.formControlSelector(question.question_type)}
                  question={question}
                />
                <ErrorMessage
                  name={question.id}
                  component={ErrorMsg}
                  className={css`
                    left: ${spacing.space0};
                  `}
                  htmlFor="questionnaire-forms"
                />
              </FieldSet>
            </Wizard.Page>
          ))}
        </Wizard>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  progressStatus: state.signUp.progressStatus
});

const mapDispatchToProps = {
  setProgressStatus
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Questionnaire);
