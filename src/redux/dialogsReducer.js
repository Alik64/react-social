const NEW_MESSAGE = "NEW-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    case NEW_MESSAGE:
      let body = state.newMessageText;
      state.newMessageText = "";
      state.messages.push({ id: 6, msg: body });
      return state;
    default:
      return state;
  }
};

export const newMessageActionCreator = () => ({ type: NEW_MESSAGE });

export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});
export default dialogsReducer;
