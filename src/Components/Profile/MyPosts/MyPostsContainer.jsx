import React from "react";

import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../redux/profileReducer";
import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";

export default function MyPostsContainer(props) {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };
        const onPostChange = (text) => {
          let action = updateNewPostActionCreator(text);
          store.dispatch(action);
        };

        return (
          <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
}
