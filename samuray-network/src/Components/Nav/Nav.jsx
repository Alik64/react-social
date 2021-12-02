import React from "react";
import style from "./Nav.module.css";
import { NavLink } from "react-router-dom";
// import Friends from "./Friends/Friends";
import FollowingsContainer from "./FollowingsContainer/FollowingsContainer";

export default function Nav(props) {
  return (
    <nav className="nav">
      <div className={style.item}>
        <NavLink to="/profile" style={({ isActive }) => {
          return {
            color: isActive ? "goldenrod" : ""
          };
        }}>
          Profile
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/dialogs" style={({ isActive }) => {
          return {
            color: isActive ? "goldenrod" : ""
          };
        }}>
          Messages
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/users" style={({ isActive }) => {
          return {
            color: isActive ? "goldenrod" : ""
          };
        }}>
          Users
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/news" style={({ isActive }) => {
          return {
            color: isActive ? "goldenrod" : ""
          };
        }}>
          News
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/music" style={({ isActive }) => {
          return {
            color: isActive ? "goldenrod" : ""
          };
        }}>
          Music
        </NavLink>
      </div>
      <div className={`${style.item} ${style.settings}`}>
        <NavLink to="/settings" style={({ isActive }) => {
          return {
            color: isActive ? "goldenrod" : ""
          };
        }}>
          Settings
        </NavLink>
      </div>

      {/* <Friends friends={props.friends} /> */}

      <FollowingsContainer />
    </nav>
  );
}
