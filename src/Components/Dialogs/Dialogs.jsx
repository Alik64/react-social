import React from "react";
import style from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

export default function Dialogs(props) {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogs_items}>
        <div className={style.dialog}>
          <NavLink to="/dialogs/1" activeClassName={style.active}>
            Jean
          </NavLink>
        </div>
        <div className={style.dialog}>
          <NavLink to="/dialogs/2" activeClassName={style.active}>
            Paul
          </NavLink>
        </div>
        <div className={style.dialog}>
          <NavLink to="/dialogs/3" activeClassName={style.active}>
            Claire
          </NavLink>
        </div>
        <div className={style.dialog}>
          <NavLink to="/dialogs/4" activeClassName={style.active}>
            Sophie
          </NavLink>
        </div>
        <div className={style.dialog}>
          <NavLink to="/dialogs/5" activeClassName={style.active}>
            Henry
          </NavLink>
        </div>
        <div className={style.dialog}>
          <NavLink to="/dialogs/6" activeClassName={style.active}>
            Yvan
          </NavLink>
        </div>
      </div>

      <div className={style.messages}>
        <div className={style.message}>Hi</div>
        <div className={style.message}>How are you?</div>
        <div className={style.message}>YO!</div>
      </div>
    </div>
  );
}
