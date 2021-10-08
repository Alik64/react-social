import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./Components/Dialogs/Dialogs";
import Header from "./Components/Header/Header.jsx";
import Music from "./Components/Music/Music";
import Nav from "./Components/Nav/Nav.jsx";
import News from "./Components/News/News";
import Profile from "./Components/Profile/Profile.jsx";
import Settings from "./Components/Settings/Settings";

// let postData = [
//   { id: 1, message: "Hi, how are you?", likesCount: "23" },
//   { id: 2, message: "It's my first post", likesCount: "15" },
// ];

function App(props) {
  console.log(props.data);
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="content">
          <Route
            path="/profile"
            render={() => <Profile posts={props.posts} />}
          />
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs dialogs={props.dialogs} messages={props.messages} />
            )}
          />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
