const NEW_MESSAGE = "NEW-MESSAGE";


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

};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {

    case NEW_MESSAGE:
      let body = action.newMessageText;
      return {
        ...state,
        messages: [...state.messages, { id: 6, msg: body }],
      };
    default:
      return state;
  }
};

export const newMessageActionCreator = (newMessageText) => ({ type: NEW_MESSAGE, newMessageText });


export default dialogsReducer;
