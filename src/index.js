import React from "react";
import { Router } from "@reach/router";
import { render } from "react-dom";
import { Provider } from "react-redux";
import Questionnaire from "./pages/Questionnaire";
import configureStore from "./redux/configureStore";
import "./index.scss";

const store = configureStore();

const renderApp = () =>
  render(
    <Provider store={store}>
      <Router>
        <Questionnaire path="/" />
      </Router>
    </Provider>,
    document.getElementById("root")
  );

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./pages/Questionnaire", renderApp);
}

renderApp();
