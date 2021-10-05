import React from "react";
import style from "./ProfileInfo.module.css";

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
      <div className={style.descriptionBlock}>ava + description</div>
    </div>
  );
}
