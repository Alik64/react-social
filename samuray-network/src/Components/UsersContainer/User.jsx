import React from "react";
import style from "./users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import { NavLink } from "react-router-dom";

export default function User({ user, followingInProgress, follow, unfollow }) {

  return (

    <div>


      <div>
        <div>
          <div>
            <div>
              <div>
                <NavLink to={"/profile/" + user.id}>
                  <img
                    src={
                      user.photos.small != null ? user.photos.small : userPhoto
                    }
                    alt="avatar"
                    className={style.avatar}
                  />
                </NavLink>
              </div>
              <div>
                {user.followed ? (
                  <button disabled={followingInProgress.some(id => id === user.id)}
                    onClick={() => { unfollow(user.id) }}>
                    Unfollow</button>
                ) : (
                  <button disabled={followingInProgress.some(id => id === user.id)}
                    onClick={() => { follow(user.id) }}>
                    Follow</button>
                )}
              </div>
            </div>
            <div>
              <div>
                <div>{user.name}</div>
                <div>{user.status}</div>
              </div>
              <div>
                <div>{"user.location.city"}</div>
                <div>{"user.location.country"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
