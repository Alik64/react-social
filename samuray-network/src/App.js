import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/Login";
import NavContainer from "./Components/Nav/NavContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import UsersContainer from "./Components/UsersContainer/UsersContainer";
import { initializeApp } from "../src/redux/appReducer"
import { connect, Provider } from "react-redux";
import Preloader from "./Components/commun/Preloader/Preloader";
import store from "./redux/redux-store";
import Profile from "./Components/Profile/Profile";

//const DialogsContainer = lazy(() => import('./Components/Dialogs/DialogsContainer'));



class App extends Component {

  // catchAllUnhandledErrors = (reason,promiseRejectionEvent) => {
  //   alert("problem")
  // }
  componentDidMount() {

    this.props.initializeApp()
    // window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
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
            <Route path="/" element={<ProfileContainer />} />
            <Route path="profile" element={<ProfileContainer />}>
              <Route path="/profile/:id" element={<Profile />} />

            </Route>

            <Route path="*" element={<div>404 Not Found</div>} />



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
const AppContainer = connect(mapStateToProps, { initializeApp })(App);

// On crée samurai JS app pour pouvoir tester
const SamuraiJSApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default SamuraiJSApp