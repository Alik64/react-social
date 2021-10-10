import React from "react";
import style from "./Nav.module.css";
import { NavLink } from "react-router-dom";
console.log(style);
export default function Nav() {
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
        <NavLink to="/news" activeClassName={style.active}>
          News
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/music" activeClassName={style.active}>
          Music
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/settings" activeClassName={style.active}>
          Settings
        </NavLink>
      </div>

      <section className="nav_friends"></section>
    </nav>
  );
}
