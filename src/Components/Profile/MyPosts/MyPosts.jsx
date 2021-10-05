import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

export default function MyPosts() {
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
      <div className={style.posts}>
        <Post message=" Hi, how are you?" likesCount="23" />
        <Post message="It's my first post" likesCount="15" />
      </div>
    </div>
  );
}
