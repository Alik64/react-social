const NEW_MESSAGE = "NEW-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
let initialState = {
  dialogs: [
    { id: 1, name: "Paul", sexe: "M" },
    { id: 2, name: "Marie", sexe: "F" },
    { id: 3, name: "Bruno", sexe: "M" },
    { id: 4, name: "David", sexe: "M" },
    { id: 5, name: "Sophie", sexe: "F" },
    { id: 6, name: "Leo", sexe: "M" },
  ],
  messages: [
    { id: 1, msg: "Hi how are you?" },
    { id: 2, msg: "I'm fine, thnx!" },
    { id: 3, msg: "YO" },
    { id: 4, msg: "What's up" },
    { id: 5, msg: "Yo!" },
  ],
  newMessageText: "Enter your message",
};
const dialogsReducer = (state = initialState, action) => {
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
