import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

export default function MyPosts(props) {
  let postElements = props.data.map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ));

  return (
    <div className={style.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea name="" id="" cols="30" rows="1"></textarea>
        </div>
        <div>
          <button>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={style.posts}>{postElements}</div>
    </div>
  );
}
