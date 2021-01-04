import React from "react";
import ReactDOM from "react-dom";
import "bootswatch/dist//cyborg/bootstrap.min.css";
import "./styles.css";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
