import React from "react";
import style from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

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

  const newMessageElement = React.createRef();

  const addMessage = () => {
    props.addMessage();
  };

  const onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogs_items}>{dialogsElements}</div>

      <div className={style.messages}>
        {messagesElements}
        <div className={style.newMessage}>
          <div>
            <textarea
              onChange={onMessageChange}
              ref={newMessageElement}
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
