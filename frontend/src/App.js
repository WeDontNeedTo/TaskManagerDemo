import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { loadingReducer } from "./utils-redux/loadingReducer";
import { Provider } from "react-redux";
import TableMain from "./TableMain";

const store = createStore(
  loadingReducer,
  compose(applyMiddleware(thunk, logger))
);

function App() {
  return (
    <Provider store={store}>
      <TableMain />
    </Provider>
  );
}

export default App;
