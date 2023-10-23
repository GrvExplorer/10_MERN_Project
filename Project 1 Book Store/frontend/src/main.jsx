import { ChakraProvider } from "@chakra-ui/react";
import { SnackbarProvider } from "notistack";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SnackbarProvider autoHideDuration={2000}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </SnackbarProvider>
  </BrowserRouter>,
);
