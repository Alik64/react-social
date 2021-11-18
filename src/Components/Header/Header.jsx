import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";

export default function Header() {
  return (
    <header className={style.header}>
      <img src="/Connect.png" alt="logo planet" />
      <div className={style.loginBlock}>
        <NavLink to={"/login"}>Login </NavLink>
      </div>
    </header>
  );
}
