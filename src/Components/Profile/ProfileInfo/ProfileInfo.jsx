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
        <div>{props.profile.aboutMe}</div>
      </div>
    </div>
  );
}
