import React from "react";
import style from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { Redirect } from "react-router";

export default function Dialogs(props) {
  let state = props.dialogsPage;

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

  const addMessage = () => {
    props.sendMessage();
  };

  const onMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessageText(text);
  };

  if (!props.isAuth) return <Redirect to={"/login"} />
  return (
    <div className={style.dialogs}>
      <div className={style.dialogs_items}>{dialogsElements}</div>

      <div className={style.messages}>
        <div>{messagesElements}</div>
        <div className={style.newMessage}>
          <div>
            <textarea
              onChange={onMessageChange}
              value={state.newMessageText}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div>
            <button onClick={addMessage}>New message</button>
          </div>
        </div>
      </div>
    </div>
  );
}
