import React from "react";
import style from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {
  newMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/state";

export default function Dialogs(props) {
  let state = props.store.getState().dialogsPage;

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
    props.store.dispatch(newMessageActionCreator());
  };

  const onMessageChange = (e) => {
    let text = e.target.value;
    props.store.dispatch(updateNewMessageTextActionCreator(text));
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
              value={state.newMessageText}
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
