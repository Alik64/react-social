import React from "react";
import style from "./users.module.css";

export default function Users(props) {
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <div>
            <div>
              <div>
                <img src={u.photoUrl} alt="avatar" className={style.avatar} />
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
                <div>{u.fullName}</div>
                <div>{u.status}</div>
              </div>
              <div>
                <div>{u.location.city}</div>
                <div>{u.location.country}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
