let store = {
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
  rerenderEntireTree() {
    console.log("rerender from state.js");
  },
  addPost() {
    let newPost = {
      id: 5,
      message: state.profilePage.newPostText,
      likesCount: 0,
    };
    state.profilePage.posts.unshift(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);
  },
  updateNewPostChange(newText) {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
  },
  addMessage() {
    let newMessage = { id: 6, msg: state.dialogsPage.newMessageText };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = "";
    rerenderEntireTree(state);
  },
  updateNewMessageText(newText) {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
  },
  subscribe(observer) {
    rerenderEntireTree = observer;
  },
};

window.store = store;

export default state;
