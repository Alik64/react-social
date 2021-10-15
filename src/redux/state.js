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

  getState() {
    return this._state;
  },

  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.unshift(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostChange(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  addMessage() {
    let newMessage = { id: 6, msg: this._state.dialogsPage.newMessageText };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = "";
    this._callSubscriber(this._state);
  },
  updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

window.store = store;

export default store;
