import React from "react";
import { connect } from "react-redux";
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
        let state = store.getState().dialogsPage;

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
            dialogsPage={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
}

let mapStateToProps = (state) =>{
  return {
    dialogsPage:state.dialogsPage

  }
}
let mapDispatchToProps=(dispatch)=>{
  return {
    updateNewMessageText: (text)=>{
      dispatch(updateNewMessageTextActionCreator(text))
    },
    sendMessage: ()=>{
      dispatch(newMessageActionCreator())
    }

  }
}


let superDialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);
export default superDialogsContainer