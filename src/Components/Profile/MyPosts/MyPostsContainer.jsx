import React from "react";

import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

export default function MyPostsContainer(props) {
  let state = props.store.getState();

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };
  const onPostChange = (text) => {
    let action = updateNewPostActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
}
