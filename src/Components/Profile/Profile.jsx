import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export default function Profile(props) {
  // let postData = [
  //   { id: 1, message: "Hi, how are you?", likesCount: "23" },
  //   { id: 2, message: "It's my first post", likesCount: "15" },
  // ];

  return (
    <div>
      <ProfileInfo />
      <MyPosts data={props.posts} />
    </div>
  );
}
