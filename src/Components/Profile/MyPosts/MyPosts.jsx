import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

export default function MyPosts(props) {
  let postElements = props.posts.map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ));

  const newPostElement = React.createRef();

  const addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  };

  return (
    <div className={style.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={props.addPost}>Add post</button>
        </div>
      </div>
      <div className={style.posts}>{postElements}</div>
    </div>
  );
}
