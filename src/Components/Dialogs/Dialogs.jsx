import React from "react";
import style from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

export default function Dialogs(props) {
  let dialogsData = [
    { id: 1, name: "Paul" },
    { id: 2, name: "Marie" },
    { id: 3, name: "Bruno" },
    { id: 4, name: "David" },
    { id: 5, name: "Sophie" },
    { id: 6, name: "Leo" },
  ];
  let messagesData = [
    { id: 1, msg: "Hi how are you?" },
    { id: 2, msg: "I'm fine, thnx!" },
    { id: 3, msg: "YO" },
    { id: 4, msg: "What's up" },
    { id: 5, msg: "Yo!" },
  ];

  let dialogsElements = dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
  ));

  let messagesElements = messagesData.map((message) => (
    <Message msg={message.msg} key={message.id} />
  ));
  return (
    <div className={style.dialogs}>
      <div className={style.dialogs_items}>{dialogsElements}</div>

      <div className={style.messages}>{messagesElements}</div>
    </div>
  );
}
