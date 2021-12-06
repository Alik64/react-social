import React from "react";
import AddPostForm from "./AddPostForm";

import style from "./MyPosts.module.css";
import Post from "./Post/Post";

export default function MyPosts(props) {

  let postElements = props.posts.map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ));



  const onAddPost = (values) => {
    props.addPost(values);
  };


  return (
    <div className={style.postBlock}>
      <h3>My posts</h3>
      <AddPostForm addPost={onAddPost} />

      <div className={style.posts}>{postElements}</div>
    </div>
  );
}
