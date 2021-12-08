import React, { Component } from "react";
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
import { initializeApp } from "../src/redux/appReducer"
import { connect } from "react-redux";
import Preloader from "./Components/commun/Preloader/Preloader";

class App extends Component {

  componentDidMount() {

    this.props.initializeApp()

  }

  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <NavContainer />
        <div className="content">
          <Routes>

            <Route path="profile" element={<ProfileContainer />} >
              <Route path="/profile/:id" element={<ProfileContainer />} />
            </Route>
            <Route path="/dialogs" element={<DialogsContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})
export default connect(mapStateToProps, { initializeApp })(App);

