import React from "react";
import {
  newMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogsReducer";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

export default function DialogsContainer() {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const onSendMessageClick = () => {
          store.dispatch(newMessageActionCreator());
        };

        const onMessageChange = (text) => {
          store.dispatch(updateNewMessageTextActionCreator(text));
        };
        return (
          <Dialogs
            updateNewMessageText={onMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={store.getState().dialogsPage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
}
