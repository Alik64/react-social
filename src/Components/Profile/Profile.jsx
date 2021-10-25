import React from "react";

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export default function Profile(props) {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
}
