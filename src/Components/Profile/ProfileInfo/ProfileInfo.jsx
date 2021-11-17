import React from "react";
import Preloader from "../../commun/Preloader/Preloader";
import style from "./ProfileInfo.module.css";

export default function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader />;
  }

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
      <div className={style.descriptionBlock}>
        {" "}
        <img src={props.profile.photos.small} alt="avatar" />{" "}
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
