import React from "react";
import style from "./users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import { NavLink } from "react-router-dom";

export default function Users(props) {
  const PAGES_LENGTH = 10; // nombre max de page à afficher
  const totalPagesCount = Math.ceil(props.totalUsersCount / props.pageSize); // Nb de pages total

  const pagesCount =
    totalPagesCount < PAGES_LENGTH ? totalPagesCount : PAGES_LENGTH;

  const half = Math.floor(pagesCount / 2);

  let startPage = props.currentPage - half;
  if (startPage < 1) startPage = 1;
  if (startPage + pagesCount > totalPagesCount)
    startPage = totalPagesCount - pagesCount;

  const pages = [];
  for (let i = startPage; i < startPage + PAGES_LENGTH; i++) {
    pages.push(i);
  }

  return (
    <div>
      {/* Pagination */}
      <div className={style.pagination}>
        {pages.map((page) => {
          return (
            <span
              key={page.id}
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
      {/*Users */}
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
          </div>
        ))}
      </div>
    </div>
  );
}
