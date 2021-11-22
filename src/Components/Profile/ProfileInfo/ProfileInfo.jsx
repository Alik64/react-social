import React from "react";
import Preloader from "../../commun/Preloader/Preloader";
import style from "./ProfileInfo.module.css";
import userPhoto from "./../../../assets/images/user.jpg"
export default function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <img
          className={style.baniere}
          src="https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt=""

        />
      </div>
      <div className={style.descriptionBlock}>
        {" "}

        <img className={style.ava}
          src={props.profile.photos.small != null ? props.profile.photos.small : userPhoto} alt="avatar" />{" "}
        <h2>{props.profile.fullName}</h2>
        <h2>{props.profile.aboutMe}</h2>
        <h3>Contacts</h3>
        <ul>
          <li>Facebook: {props.profile.contacts.facebook}</li>
          <li>Twitter : {props.profile.contacts.twitter}</li>
          <li>
            {props.profile.lookingForAJob ? "Looking for a job" : "On mission"}
          </li>
        </ul>
      </div>
    </div>
  );
}
