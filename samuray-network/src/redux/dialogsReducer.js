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
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText,
      };
    case NEW_MESSAGE:
      let body = state.newMessageText;
      return {
        ...state,
        newMessageText: "",
        messages: [...state.messages, { id: 6, msg: body }],
      };
    default:
      return state;
  }
};

export const newMessageActionCreator = (newMessagebody) => ({ type: NEW_MESSAGE });

export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});
export default dialogsReducer;
