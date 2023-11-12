import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { ChakraProvider } from "@chakra-ui/react";

import reducer from "./Reducer/Combine_state";
import App from "./App";

const store = createStore(reducer, compose(applyMiddleware(thunk)));


ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  </>
);
