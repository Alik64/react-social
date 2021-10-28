import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import Header from "./Components/Header/Header.jsx";
import Music from "./Components/Music/Music";

import NavContainer from "./Components/Nav/NavContainer";
import News from "./Components/News/News";
import Profile from "./Components/Profile/Profile.jsx";
import Settings from "./Components/Settings/Settings";
import UsersContainer from "./Components/UsersContainer/UsersContainer";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <NavContainer />
      <div className="content">
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
}

export default App;
