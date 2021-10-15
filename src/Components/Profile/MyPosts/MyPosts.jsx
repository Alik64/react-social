import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

export default function MyPosts(props) {
  let postElements = props.posts.map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ));

  const newPostElement = React.createRef();

  const addPost = () => {
    let action = { type: "ADD-POST" };
    props.dispatch(action);
  };
  const onPostChange = () => {
    let text = newPostElement.current.value;
    let action = { type: "UPDATE-NEW-POST", newText: text };
    props.dispatch(action);
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
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={style.posts}>{postElements}</div>
    </div>
  );
}
