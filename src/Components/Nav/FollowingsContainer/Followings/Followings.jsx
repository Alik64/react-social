import React from "react";
import style from "./Followings.module.css";

export default function Followings(props) {
  return (
    <section className={style.nav_followings}>
      <h2>Followings</h2>
      <div className={style.followings_item}>
        {props.users.map((u) => {
          if (u.followed) {
            return (
              <div className={style.following_item} key={u.id}>
                <div>
                  <img src={u.photoUrl} alt="avatar" className={style.avatar} />
                </div>
                <div className={style.following_item}>{u.fullName}</div>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}
