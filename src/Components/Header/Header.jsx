import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";

export default function Header(props) {
  return (
    <header className={style.header}>
      <div className={style.logoDiv}  >
        <img src="/logo-samurai.png" alt="samurai" className={style.logo} />

      </div>
      <h3>React Samourai  <span className={style.samourai}> 侍 </span> </h3>
      <div className={style.loginBlock}>
        {props.isAuth ?

          props.login : <NavLink to={"/login"}>Login </NavLink>}
      </div>
    </header>
  );
}
