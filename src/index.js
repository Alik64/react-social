import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const dialogs = [
  { id: 1, name: "Paul" },
  { id: 2, name: "Marie" },
  { id: 3, name: "Bruno" },
  { id: 4, name: "David" },
  { id: 5, name: "Sophie" },
  { id: 6, name: "Leo" },
];

const messages = [
  { id: 1, msg: "Hi how are you?" },
  { id: 2, msg: "I'm fine, thnx!" },
  { id: 3, msg: "YO" },
  { id: 4, msg: "What's up" },
  { id: 5, msg: "Yo!" },
];

const posts = [
  { id: 1, message: "Hi, how are you?", likesCount: "23" },
  { id: 2, message: "It's my first post", likesCount: "15" },
];

ReactDOM.render(
  <App dialogs={dialogs} messages={messages} posts={posts} />,
  document.getElementById("root")
);
