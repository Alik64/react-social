import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
export default function Profile() {
  return (
    <div>
      <div>
        <img
          src="https://jooinn.com/images/beach-194.jpg"
          alt=""
          height="400px"
          width="100%"
        />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
}
