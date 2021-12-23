import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE_POST"
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"
const SAVE_PROFILE_SUCCESS = "SAVE_PROFILE_SUCCESS"
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
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state, profile: { ...state.profile, photos: action.photos }
      }
    }
    case SAVE_PROFILE_SUCCESS: {
      return {
        ...state, profile: { ...state.profile, properties: action.profile }
      }
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
export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});
export const saveProfileSuccess = (profile) => ({
  type: SAVE_PROFILE_SUCCESS,
  profile,
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
export const savePhoto = (file) => async (dispatch) => {

  const response = await profileAPI.savePhoto(file)

  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
}

export const saveProfile = (profile, setStatus) => async (dispatch) => {

  const response = await profileAPI.saveProfile(profile)

  if (response.data.resultCode === 0) {

  } else {
    setStatus(response.data.messages[0])
  }
}

// export const login = (email, password, rememberMe, setStatus) => async (dispatch) => {
//   let response = await authAPI.login(email, password, rememberMe)

//   if (response.data.resultCode === 0) {
//     dispatch(getAuthUserData())
//   } else {
//     setStatus(response.data.messages[0])
//   }

export default profileReducer;
