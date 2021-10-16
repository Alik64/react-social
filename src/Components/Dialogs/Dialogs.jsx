import React from "react";
import style from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {
  newMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/state";

export default function Dialogs(props) {
  let dialogsElements = props.dialogsPage.dialogs.map((dialog) => (
    <DialogItem
      name={dialog.name}
      id={dialog.id}
      key={dialog.id}
      sexe={dialog.sexe}
    />
  ));

  let messagesElements = props.dialogsPage.messages.map((message) => (
    <Message msg={message.msg} key={message.id} />
  ));

  const addMessage = () => {
    // props.addMessage();
    props.dispatch(newMessageActionCreator());
  };

  const onMessageChange = (e) => {
    let text = e.target.value;

    // props.updateNewMessageText(text);
    //let action = { type: "UPDATE-NEW-MESSAGE-TEXT", newText: text };
    props.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogs_items}>{dialogsElements}</div>

      <div className={style.messages}>
        <div>{messagesElements}</div>
        <div className={style.newMessage}>
          <div>
            <textarea
              onChange={onMessageChange}
              value={props.dialogsPage.newMessageText}
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
