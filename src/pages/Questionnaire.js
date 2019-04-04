import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "@emotion/core";
import { setProgressStatus } from "./Questionnaire.state";
import ProgressBar from "../components/ProgressBar";
import Wizard from "../components/WizardForm";

const dummyPayload = {
  title: "This is a title for the form Header",
  questions: [
    {
      id: 2447,
      question_type: "TextQuestion",
      prompt: "What is your first answer?",
      is_required: false,
      min_char_length: 15
    },
    {
      id: 2448,
      question_type: "TextQuestion",
      prompt: "What is your second answer?",
      is_required: true,
      min_char_length: 100
    },
    {
      id: 2500,
      question_type: "TextQuestion",
      prompt: "What is your third answer?",
      is_required: true,
      min_char_length: 1
    }
  ]
};

const validator = fieldName => values => {
  const errors = {};
  if (!values[fieldName]) {
    errors[fieldName] = "Please select one option";
  }
  return errors;
};

class Questionnaire extends Component {
  state = {};

  handleSubmit = surveyResults => {
    console.log("haha");
    // this.props.storeQuestionnaireAnswers(surveyResults);
  };

  setProgressBarWidth = childrenCount => {
    const step = 100 / Math.abs(childrenCount);

    this.props.setProgressStatus(
      this.props.progressStatus + (childrenCount < 0 ? -step : +step)
    );
  };

  render() {
    const { title, questions } = dummyPayload;

    return (
      <>
        <h1>{title}</h1>
        <ProgressBar width={this.props.progressStatus} />
        <Wizard
          initialValues={{
            age: "",
            riskCapacity: "",
            timeHorizon: "",
            riskWillingness: ""
          }}
          onSubmit={this.handleSubmit}
          setProgressBarWidth={this.setProgressBarWidth}
          idForFormEl="questionnaire-forms"
          prevAndNextBtnClassName={css`
            top: -3.5em;
          `}
        >
          {questions.map(question => (
            <Wizard.Page
              // validate={validator(question.name)}
              key={question.name}
            >
              {question}
              {/* <FieldSet
                style={{ minHeight: "28em" }}
                legend={question.description}
              >
                <Field
                  name={question.name}
                  component={ListRadioBtns}
                  questions={question.answers}
                />
              </FieldSet> */}
            </Wizard.Page>
          ))}
        </Wizard>
      </>
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
