import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/Login";
// import Music from "./Components/Music/Music";

import NavContainer from "./Components/Nav/NavContainer";
// import News from "./Components/News/News";

import ProfileContainer from "./Components/Profile/ProfileContainer";
// import Settings from "./Components/Settings/Settings";
import UsersContainer from "./Components/UsersContainer/UsersContainer";

function App(props) {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <NavContainer />
      <div className="content">
        <Routes>
          <Route path="/profile/:id" element={<ProfileContainer />} />

          <Route path="/dialogs" element={<DialogsContainer />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
