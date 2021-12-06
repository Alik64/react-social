import { connect } from "react-redux";

import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../redux/profileReducer";

import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    },
    updateNewPostText: (text) => {
      let action = updateNewPostActionCreator(text);
      dispatch(action);
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
