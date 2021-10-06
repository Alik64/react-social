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
import DataGlobal from "./backend/DataGlobal";
import DataGlobalOutside from "../backend/DataGlobalOutside";
// let postData = [
//   { id: 1, message: "Hi, how are you?", likesCount: "23" },
//   { id: 2, message: "It's my first post", likesCount: "15" },
// ];

function App() {
  console.log(DataGlobal);
  console.log(DataGlobal);
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="content">
          <Route
            path="/profile"
            render={() => <Profile postData={DataGlobal.postData} />}
          />
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                dialogsData={DataGlobal.dialogsData}
                messagesData={DataGlobal.messagesData}
              />
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
