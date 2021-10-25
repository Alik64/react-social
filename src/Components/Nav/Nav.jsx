import React from "react";
import style from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";
import StoreContext from "../../StoreContext";

export default function Nav(props) {
  return (
    <StoreContext.Consumer>
      {(store) => {
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
            <div className={`${style.item} ${style.settings}`}>
              <NavLink to="/settings" activeClassName={style.active}>
                Settings
              </NavLink>
            </div>

            <Friends friends={store.getState().nav.friends} />
          </nav>
        );
      }}
    </StoreContext.Consumer>
  );
}
