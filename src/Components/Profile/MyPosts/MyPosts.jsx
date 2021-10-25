import React from "react";
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../redux/profileReducer";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

export default function MyPosts(props) {
  let postElements = props.posts.map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ));

  const newPostElement = React.createRef();

  const onAddPost = () => {
    props.addPost();
  };
  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={style.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={style.posts}>{postElements}</div>
    </div>
  );
}
