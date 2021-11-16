import React from "react";
import style from "./users.module.css";
import userPhoto from "../../assets/images/user.jpg";

export default function Users(props) {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className={style.pagination}>
        {pages.map((page) => {
          return (
            <span
              className={`${style.page} ${
                props.currentPage === page && style.selectedPage
              }`}
              onClick={(e) => {
                props.onPageChanged(page);
              }}
            >
              {page}
            </span>
          );
        })}
      </div>

      {props.users.map((u) => (
        <div key={u.id}>
          <div>
            <div>
              <div>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  alt="avatar"
                  className={style.avatar}
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
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
      ))}
    </div>
  );
}
