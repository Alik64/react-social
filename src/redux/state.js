import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  // PRIVATE
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 23 },
        { id: 2, message: "It's my first post", likesCount: 15 },
        { id: 3, message: "Bla bla bla", likesCount: 22 },
        { id: 4, message: "DA dA Da", likesCount: 11 },
      ],
      newPostText: "Redux copy",
    },
    dialogsPage: {
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
    },
    nav: {
      friends: [
        { id: 1, name: "Paul", sexe: "M" },
        { id: 2, name: "Marie", sexe: "F" },
        { id: 3, name: "Bruno", sexe: "M" },
        { id: 4, name: "David", sexe: "M" },
      ],
    },
  },
  _callSubscriber() {
    console.log("rerender from state.js");
  },

  // PUBLIC

  // Les Methodes qui sont lié au STATE
  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  // Dispatch

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.nav = sidebarReducer(this._state.nav, action);

    this._callSubscriber(this._state);
  },
};

window.store = store;

export default store;
