import React, { useState } from "react";
import Preloader from "../../commun/Preloader/Preloader";
import style from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/images/user.jpg"
import ProfileDataForm from "./ProfileDataForm";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


export default function ProfileInfo({ profile, status, updateUserStatus, isOwner, savePhoto }) {
  const [editMode, setEditMode] = useState(false)

  if (!profile) {
    return <Preloader />;
  }

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

      {isOwner && <input type="file" id="photo" onChange={onAvaSelected} />}
      <div className={style.status} >
        <span>"</span> <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus} /><span>"</span>
      </div>


      {editMode ? <ProfileDataForm profile={profile} /> : <ProfileData profile={profile} />}


    </div>
  );
}


const ProfileData = ({ profile }) => {
  return (<div className={style.descriptionBlock}>
    {" "}

    <div>
      <h2>{profile.fullName}</h2>
    </div>


    <div>
      <b>Looking for a job</b> :{profile.lookingForAJob ? "Yes" : "No"}
    </div>
    {profile.lookingForAJob &&
      <div>
        <b>My professional skils</b>:{profile.lookingForAJobDescription}
      </div>
    }

    <div>
      <h3>Contacts</h3>
      {Object.keys(profile.contacts).map((key, index) => {
        return (
          <ul key={index}>
            <li >
              <Contact contactTitle={key} contactValue={profile.contacts[key]} />
            </li>
          </ul>
        )
      })}

    </div>

  </div>)

}
export const Contact = ({ contactTitle, contactValue }) => {
  return <div><b>{contactTitle}</b>:{contactValue}</div>
}