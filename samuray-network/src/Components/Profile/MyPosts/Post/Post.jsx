import React from "react";
import userPhoto from '../../../../assets/images/user.jpg'
import classes from "./Post.module.css";

export default function Post(props) {

  const onDeletePost = (postId) => {
    props.deletePost(postId)
  }


  return (
    <div className={classes.item}>
      <img src={userPhoto}
      />
      {props.message}
      <button onClick={() => onDeletePost(props.postId)}>Delete</button>
      <div>
        <span>{props.likesCount} likes</span>
      </div>
    </div>
  );
}
