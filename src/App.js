import React from "react";
import "./App.css";
import Dialogs from "./Components/Dialogs/Dialogs";
import Header from "./Components/Header/Header.jsx";
import Nav from "./Components/Nav/Nav.jsx";
import Profile from "./Components/Profile/Profile.jsx";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="content">
        <Dialogs />
        {/* <Profile /> */}
      </div>
    </div>
  );
}

export default App;
