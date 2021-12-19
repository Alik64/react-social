import React from "react";
import style from "./users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import { NavLink } from "react-router-dom";
import Paginator from "../commun/Paginator/Paginator";


export default function Users({ currentPage, totalUsersCount, pageSize, onPageChanged, ...props }) {


  return (

    <div>

      <Paginator currentPage={currentPage} totalUsersCount={totalUsersCount}
        pageSize={pageSize} onPageChanged={onPageChanged} />


      <div className={style.wrapper}>

        {props.users.map((u) => (
          <div key={u.id}>
            <div>
              <div>
                <div>
                  <div>
                    <NavLink to={"/profile/" + u.id}>
                      <img
                        src={
                          u.photos.small != null ? u.photos.small : userPhoto
                        }
                        alt="avatar"
                        className={style.avatar}
                      />
                    </NavLink>
                  </div>
                  <div>
                    {u.followed ? (
                      <button disabled={props.followingInProgress.some(id => id === u.id)}
                        onClick={() => { props.unfollow(u.id) }}>
                        Unfollow</button>
                    ) : (
                      <button disabled={props.followingInProgress.some(id => id === u.id)}
                        onClick={() => { props.follow(u.id) }}>
                        Follow</button>
                    )}
                  </div>
                </div>
                <div>
                  <div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                  </div>
                  <div>
                    <div>{"u.location.city"}</div>
                    <div>{"u.location.country"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
