import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import StoreContext from "./StoreContext";
import { BrowserRouter } from "react-router-dom";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </BrowserRouter>,

    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});
