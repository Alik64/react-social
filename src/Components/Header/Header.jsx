import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";

export default function Header(props) {
  return (
    <header className={style.header}>
      <img src="/Connect.png" alt="logo planet" />
      <div className={style.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login </NavLink>}
      </div>
    </header>
  );
}
