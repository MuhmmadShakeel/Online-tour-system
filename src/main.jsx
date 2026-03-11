import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { store } from "./redux/store/Store";  // 👈 small s
import { Provider } from "react-redux";
import { ContextProvider } from "./context/Context";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <ContextProvider>
   <Provider store={store}>   {/* 👈 small s */}
      <App />
    </Provider>
  </ContextProvider>
  </BrowserRouter>
);