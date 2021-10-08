import React from "react";
import style from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

export default function Dialogs(props) {
  let dialogsElements = props.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
  ));

  let messagesElements = props.messages.map((message) => (
    <Message msg={message.msg} key={message.id} />
  ));
  return (
    <div className={style.dialogs}>
      <div className={style.dialogs_items}>{dialogsElements}</div>

      <div className={style.messages}>{messagesElements}</div>
    </div>
  );
}
