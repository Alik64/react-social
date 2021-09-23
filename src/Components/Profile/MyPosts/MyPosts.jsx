import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import Like from "./Post/Like/Like";
export default function MyPosts() {
  return (
    <div>
      My posts
      <div>
        <textarea name="" id="" cols="30" rows="1"></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={classes.posts}>
        <Post message=" Hi, how are you?" likesCount="23" />

        <Post message="It's my first post" likesCount="15" />
      </div>
    </div>
  );
}
