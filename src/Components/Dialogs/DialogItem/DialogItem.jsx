import React from "react";
import { NavLink } from "react-router-dom";
import style from "./../Dialogs.module.css";

export default function DialogItem(props) {
  return (
    <div className={style.dialog}>
      <NavLink to={"/dialogs/" + props.id} activeClassName={style.active}>
        {props.name}
      </NavLink>
    </div>
  );
}
