const NEW_MESSAGE = "NEW-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const dialogsReducer = (state, action) => {
  if (action.type === NEW_MESSAGE) {
    let body = state.newMessageText;
    state.newMessageText = "";
    state.messages.push({ id: 6, msg: body });
  } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    state.newMessageText = action.newText;
  }

  return state;
};
