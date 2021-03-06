import React from "react";
import style from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { Navigate } from "react-router";
import AddMessageForm from "./AddMessageForm";



export default function Dialogs(props) {
  let state = props.dialogsPage;
  if (!props.isAuth) return <Navigate to={"/login"} />
  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem
      name={dialog.name}
      id={dialog.id}
      key={dialog.id}
      sexe={dialog.sexe}
    />
  ));

  let messagesElements = state.messages.map((message) => (
    <Message msg={message.msg} key={message.id} />
  ));

  const addMessage = (values) => {
    props.sendMessage(values);
  };





  if (!props.isAuth) return <Navigate to={"/dialogs"} />
  return (
    <div className={style.dialogs}>
      <div className={style.dialogs_items}>{dialogsElements}</div>

      <div className={style.messages}>
        <div>{messagesElements}</div>
        <div className={style.newMessage}>
          <AddMessageForm addMessage={addMessage} />

          {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
        </div>
      </div>
    </div>
  );
}

