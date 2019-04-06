import { createStore } from "redux";

import rootReducer from "./reducers";

export default function configureStore(preloadedState = undefined) {
  const store = createStore(rootReducer, preloadedState);

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./reducers", () => store.replaceReducer(rootReducer));
  }

  return store;
}
