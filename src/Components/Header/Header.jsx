import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";

export default function Header(props) {
  return (
    <header className={style.header}>
      <div>
        <img src="/logo-samurai.png" alt="samurai" className={style.logo} />

      </div>
      <div className={style.loginBlock}>
        {props.isAuth ?

          props.login : <NavLink to={"/login"}>Login </NavLink>}
      </div>
    </header>
  );
}
