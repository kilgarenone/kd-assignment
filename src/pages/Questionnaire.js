import React, { Component } from "react";
import * as Yup from "yup";
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

const dummyPayload = {
  title: "This is a title for the form Header",
  questions: [
    {
      id: 2447,
      question_type: "TextQuestion",
      prompt: "What is your first answer?",
      validationRules: [{ is_required: true }],
      min_char_length: 15
    },
    {
      id: 2501,
      question_type: "SelectQuestion",
      prompt: "What is your second answer?",
      is_required: false,
      options: [
        { id: 1, prompt: "option-1" },
        { id: 2, prompt: "option-2" },
        { id: 3, prompt: "option-3" },
        { id: 4, prompt: "option-4" }
      ]
    }
  ]
};

const validationSchema = Yup.object().shape({
  2447: Yup.string().required("E-mail is required!")
});

function initialValuesConstructor(questions) {
  return questions.reduce((acc, curr) => {
    acc[curr.id] = "";
    return acc;
  }, {});
}

class Questionnaire extends Component {
  state = {};

  handleSubmit = surveyResults => {
    console.log("haha", surveyResults);
    // this.props.storeQuestionnaireAnswers(surveyResults);
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
    const { title, questions } = dummyPayload;
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
          validationSchema={validationSchema}
          onSubmit={this.handleSubmit}
          setProgressBarWidth={this.setProgressBarWidth}
          idForFormEl="questionnaire-forms"
          prevAndNextBtnClassName={css`
            top: -3.5em;
            margin-top: auto;
          `}
        >
          {questions.map(question => (
            <Wizard.Page key={question.id}>
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
