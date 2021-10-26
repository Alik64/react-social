import React from "react";
import { connect } from "react-redux";

import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../redux/profileReducer";

import MyPosts from "./MyPosts";

// export default function MyPostsContainer(props) {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();

//         const addPost = () => {
//           store.dispatch(addPostActionCreator());
//         };
//         const onPostChange = (text) => {
//           let action = updateNewPostActionCreator(text);
//           store.dispatch(action);
//         };

//         return (
//           <MyPosts
//             updateNewPostText={onPostChange}
//             addPost={addPost}
//             posts={state.profilePage.posts}
//             newPostText={state.profilePage.newPostText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// }

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (text) => {
      let action = updateNewPostActionCreator(text);
      dispatch(action);
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
