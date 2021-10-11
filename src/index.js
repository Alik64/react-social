import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import state from "./redux/state";
import { addPost } from "./redux/state";
import { BrowserRouter } from "react-router-dom";

addPost("yo mf");
ReactDOM.render(
  <BrowserRouter>
    <App state={state} />
  </BrowserRouter>,
  document.getElementById("root")
);
