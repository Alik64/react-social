import React from "react";
import style from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

//Component Dialog Item
const DialogItem = (props) => {
  return (
    <div className={style.dialog}>
      <NavLink to={"/dialogs/" + props.id} activeClassName={style.active}>
        {props.name}
      </NavLink>
    </div>
  );
};
const Message = (props) => {
  return <div className={style.message}>{props.msg}</div>;
};

export default function Dialogs(props) {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogs_items}>
        <DialogItem name="Paul" id="1" />
        <DialogItem name="Marie" id="2" />
        <DialogItem name="Bruno" id="3" />
        <DialogItem name="David" id="4" />
        <DialogItem name="Sophie" id="5" />
        <DialogItem name="Leo" id="6" />
      </div>

      <div className={style.messages}>
        <Message msg="Hi how are you?" />
        <Message msg="I'm fine, thnx!" />
        <Message msg="How R U going?" />
      </div>
    </div>
  );
}
