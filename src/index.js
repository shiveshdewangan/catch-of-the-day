import React from "react";
import ReactDOM from "react-dom";
import StorePicker from "./components/StorePicker";
import "./css/style.css";
import App from "./components/App";
import Router from "./components/Router";

ReactDOM.render(
  <Router>
    <StorePicker />
  </Router>,
  document.getElementById("main")
);
