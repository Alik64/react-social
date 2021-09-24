import React from "react";
import style from "./Dialogs.module.css";
export default function Dialogs(props) {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogs_items}>
        <div className={style.dialog}>Jean</div>
        <div className={`${style.dialog} ${style.active}`}>Paul</div>
        <div className={style.dialog}>Claire</div>
        <div className={style.dialog}>Sophie</div>
        <div className={style.dialog}>Henry</div>
      </div>

      <div className={style.messages}>
        <div className={style.message}>Hi</div>
        <div className={style.message}>How are you?</div>
        <div className={style.message}>YO!</div>
      </div>
    </div>
  );
}
