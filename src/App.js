import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/Login";
import Music from "./Components/Music/Music";

import NavContainer from "./Components/Nav/NavContainer";
import News from "./Components/News/News";

import ProfileContainer from "./Components/Profile/ProfileContainer";
import Settings from "./Components/Settings/Settings";
import UsersContainer from "./Components/UsersContainer/UsersContainer";

function App(props) {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <NavContainer />
      <div className="content">
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/login" render={() => <LoginPage />} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
}

export default App;
