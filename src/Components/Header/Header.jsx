import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
import reactLogo from './../../assets/images/logo-react.gif'
import samuraiLogo from './../../assets/images/logo-samurai.png'

export default function Header(props) {
  return (
    <header className={style.header}>
      <div className={style.logoDiv}  >
        <img src={reactLogo} alt="react" className={style.logo} />
        <img src={samuraiLogo} alt="react" className={style.logo_samurai} />

      </div>
      <h3>React Samourai  <span className={style.samourai}> 侍 </span> </h3>
      <div className={style.loginBlock}>
        {props.isAuth ?

          props.login : <NavLink to={"/login"}>Login </NavLink>}
      </div>
    </header>
  );
}
