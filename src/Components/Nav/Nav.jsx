import React from "react";
import classes from "./Nav.module.css";
console.log(classes);
export default function Nav() {
  return (
    <nav className="nav">
      <div className={classes.item}>
        <a href="/profile">Profile</a>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <a href="/dialogs">Messages</a>
      </div>
      <div className={classes.item}>
        <a href="/news">News</a>
      </div>
      <div className={classes.item}>
        <a href="/music">Music</a>
      </div>
      <div className={classes.item}>
        <a href="/settings">Settings</a>
      </div>
    </nav>
  );
}
