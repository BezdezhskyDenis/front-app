import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import { ModeProvider } from "./contexts/mode.context";
// import { AuthProvider } from "./contexts/auth.context";
import { AlertProvider } from "./contexts/alert.context";
import { UserProvider } from "./contexts/user.context";
// import { CardsFilterProvider } from "./contexts/filter.context";

// import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ModeProvider>
        <UserProvider>
          <AlertProvider>
            <App />
          </AlertProvider>
        </UserProvider>
      </ModeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
