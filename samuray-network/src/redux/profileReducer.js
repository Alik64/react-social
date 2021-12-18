import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE_POST"
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 23 },
    { id: 2, message: "It's my first post", likesCount: 15 },
    { id: 3, message: "Bla bla bla", likesCount: 22 },
    { id: 4, message: "DA dA Da", likesCount: 11 },
  ],

  profile: null,
  status: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0,
      };
      return { ...state, posts: [newPost, ...state.posts], newPostText: "" };
    }
    case DELETE_POST: {
      return { ...state, posts: state.posts.filter(p => p.id !== action.postId) }
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status }
    }
    default:
      return state;
  }
};

// actoin creators
export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});
export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId,
});

//thunk creators

export const getUserProfile = (userId) => async (dispatch) => {

  const response = await profileAPI.getProfile(userId)
  dispatch(setUserProfile(response.data));

}

export const getUserStatus = (userId) => async (dispatch) => {

  const response = await profileAPI.getStatus(userId)
  dispatch(setStatus(response.data));

}


export const updateUserStatus = (status) => async (dispatch) => {

  const response = await profileAPI.updateStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
}



export default profileReducer;
