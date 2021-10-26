const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 23 },
    { id: 2, message: "It's my first post", likesCount: 15 },
    { id: 3, message: "Bla bla bla", likesCount: 22 },
    { id: 4, message: "DA dA Da", likesCount: 11 },
  ],
  newPostText: "Redux copy",
};

const profileReducer = (state = initialState, action) => {
  let newState = {
    ...state,
  };
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: newState.newPostText, // this._state.profilePage.newPostText,
        likesCount: 0,
      };
      newState.posts.unshift(newPost);
      newState.newPostText = "";
      return newState;
    case UPDATE_NEW_POST:
      newState.newPostText = action.newText;
      return newState;
    default:
      return newState;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST,
  newText: text,
});
export default profileReducer;
