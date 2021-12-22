import React from "react";
import Preloader from "../../commun/Preloader/Preloader";
import style from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/images/user.jpg"

import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


export default function ProfileInfo({ profile, status, updateUserStatus, isOwner, savePhoto }) {

  if (!profile) {
    return <Preloader />;
  }

  // const onAvaChanged = (e) => {
  //   let photo = e.target.files[0]
  //   let formData = new FormData()
  //   formData.append('image', photo)
  //   usersAPI.putPhoto(formData)

  // }

  const onAvaSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  return (
    <div>
      <div className={style.profile_header}>
        <img
          className={style.baniere}
          src="https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt="cosmos" />

        <img className={style.ava}
          src={profile.photos.large || userPhoto} alt="avatar" />
      </div>
      <div className={style.descriptionBlock}>
        {" "}

        {isOwner && <input type="file" id="photo" onChange={onAvaSelected} />}

        <h2>{profile.fullName}</h2>
        <h2>{profile.aboutMe}</h2>
        <div className={style.status} >
          <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus} />
        </div>
        <h3>Contacts</h3>
        <ul>
          <li>Facebook: {profile.contacts.facebook}</li>
          <li>Twitter : {profile.contacts.twitter}</li>
          <li>
            {profile.lookingForAJob ? "Looking for a job" : "On mission"}
          </li>
        </ul>
      </div>
    </div>
  );
}
