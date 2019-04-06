import React, { Component } from "react";
import { css } from "@emotion/core";
import Confetti from "react-dom-confetti";
import spacing from "../css/spacing";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  componentDidMount() {
    this.setState({ active: true });
  }

  render() {
    const {
      location: {
        state: { questions, results }
      }
    } = this.props;
    return (
      <main
        css={css`
          max-width: 600px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: ${spacing.space2};
        `}
      >
        <h1
          css={css`
            color: #00e676;
            margin-bottom: ${spacing.space3};
          `}
        >
          Success!
        </h1>
        <ol>
          {questions.map(question => (
            <li
              css={css`
                margin-bottom: ${spacing.space2};
              `}
            >
              <h4
                css={css`
                  font-weight: 600;
                `}
              >
                {question.prompt}
              </h4>
              <p>{results[question.id]}</p>
            </li>
          ))}
        </ol>
        <Confetti active={this.state.active} />
      </main>
    );
  }
}

export default Results;
