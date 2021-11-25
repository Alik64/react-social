import React from "react";
import style from "./Followings.module.css";
import userPhoto from "../../../../assets/images/user.jpg";
import { NavLink } from "react-router-dom";


export default function Followings(props) {



  return (
    <section className={style.nav_followings}>
      <h4>Followings</h4>
      <div className={style.followings_item}>
        {props.users.map((u) => {
          if (u.followed) {
            return (
              <div className={style.following_item} key={u.id}>
                <div>
                  <NavLink to={"/profile/" + u.id}>
                    <img
                      src={u.photos.small != null ? u.photos.small : userPhoto}
                      alt="avatar"
                      className={style.avatar}
                    />
                  </NavLink>
                </div>
                <div className={style.following_item}>{u.name}</div>
              </div>
            );
          }
          else {
            return null
          }
        })}
      </div>
    </section>
  );
}

