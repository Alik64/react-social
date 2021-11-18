import React from "react";
import style from "./Nav.module.css";
import { NavLink } from "react-router-dom";
// import Friends from "./Friends/Friends";
import FollowingsContainer from "./FollowingsContainer/FollowingsContainer";

export default function Nav(props) {
  return (
    <nav className="nav">
      <div className={style.item}>
        <NavLink to="/profile" activeClassName={style.active}>
          Profile
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/dialogs" activeClassName={style.active}>
          Messages
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/users" activeClassName={style.active}>
          Users
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/news" activeClassName={style.active}>
          News
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/music" activeClassName={style.active}>
          Music
        </NavLink>
      </div>
      <div className={`${style.item} ${style.settings}`}>
        <NavLink to="/settings" activeClassName={style.active}>
          Settings
        </NavLink>
      </div>

      {/* <Friends friends={props.friends} /> */}

      <FollowingsContainer />
    </nav>
  );
}
