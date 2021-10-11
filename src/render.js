import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { addPost, updateNewPostChange } from "./redux/state";
import { BrowserRouter } from "react-router-dom";

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        updateNewPostChange={updateNewPostChange}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};
