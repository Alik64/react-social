import { connect } from "react-redux";

import {
  addPostActionCreator, deletePost,

} from "../../../redux/profileReducer";

import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    },
    deletePost: (postId) => {
      dispatch(deletePost(postId))
    }

  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
