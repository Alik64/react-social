import state, { subscribe } from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import {
  addPost,
  updateNewPostChange,
  addMessage,
  updateNewMessageText,
} from "./redux/state";
import { BrowserRouter } from "react-router-dom";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        updateNewPostChange={updateNewPostChange}
        addMessage={addMessage}
        updateNewMessageText={updateNewMessageText}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
