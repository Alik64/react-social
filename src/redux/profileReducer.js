const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText, // this._state.profilePage.newPostText,
        likesCount: 0,
      };
      state.posts.unshift(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export default profileReducer;
