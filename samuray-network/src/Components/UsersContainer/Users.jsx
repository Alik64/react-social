import React from "react";
import style from "./users.module.css";
import Paginator from "../commun/Paginator/Paginator";
import User from "./User";


export default function Users({ currentPage, totalUsersCount, pageSize, onPageChanged, users, followingInProgress, follow, unfollow, ...props }) {


  return (

    <div>

      <Paginator currentPage={currentPage} totalUsersCount={totalUsersCount}
        pageSize={pageSize} onPageChanged={onPageChanged} />


      <div className={style.wrapper}>

        {users.map((u) => <User key={u.id} user={u}
          followingInProgress={followingInProgress}
          follow={follow}
          unfollow={unfollow} />
        )}
      </div>
    </div>
  );
}
