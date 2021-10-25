import React from "react";

import {
  newMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

export default function DialogsContainer(props) {
  let state = props.store.getState().dialogsPage;

  const onSendMessageClick = () => {
    props.store.dispatch(newMessageActionCreator());
  };

  const onMessageChange = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <Dialogs
      updateNewMessageText={onMessageChange}
      sendMessage={onSendMessageClick}
      dialogsPage={state}
    />
  );
}
