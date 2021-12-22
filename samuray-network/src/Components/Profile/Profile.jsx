import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { Navigate } from "react-router";



export default function Profile(props) {

  if (!props.isAuth) return <Navigate to={"/login"} />
  return (
    <div>
      <ProfileInfo
        savePhoto={props.savePhoto}
        isOwner={props.isOwner} profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} />
      <MyPostsContainer />

    </div>
  );
}
