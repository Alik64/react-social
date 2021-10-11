import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./Components/Dialogs/Dialogs";
import Header from "./Components/Header/Header.jsx";
import Music from "./Components/Music/Music";
import Nav from "./Components/Nav/Nav.jsx";
import News from "./Components/News/News";
import Profile from "./Components/Profile/Profile.jsx";
import Settings from "./Components/Settings/Settings";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav state={props.state.nav} />
      <div className="content">
        <Route
          path="/profile"
          render={() => (
            <Profile
              profilePage={props.state.profilePage}
              addPost={props.addPost}
              updateNewPostChange={props.updateNewPostChange}
            />
          )}
        />
        <Route
          path="/dialogs"
          render={() => (
            <Dialogs
              addMessage={props.addMessage}
              updateNewMessageText={props.updateNewMessageText}
              dialogsPage={props.state.dialogsPage}
            />
          )}
        />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
}

export default App;
