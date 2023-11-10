import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import reducer from './Reducer/Combine_state'

const store = createStore(reducer, compose(applyMiddleware(thunk)))

ReactDOM.createRoot(
  document.getElementById("root").render(
    <>
    <Provider store={store}>
      <App />
    </Provider>
    </>
  )
);
