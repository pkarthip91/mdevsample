import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import "./assets/fonts/Lexend/Lexend-VariableFont_wght.ttf";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
