import React from "react";
import style from "./Followings.module.css";

export default function Followings(props) {
  return (
    <section className={style.nav_followings}>
      <h2>Followings</h2>
      <div className={style.followings_item}>
        <div>
          {props.users.map((u) => {
            if (u.followed) {
              return (
                <div>
                  <div>
                    <img src={u.photoUrl} alt="" />
                  </div>
                  <div>{u.fullName}</div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}
