import React from "react";
import style from "./users.module.css";

export default function Users(props) {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl: "https://cdn-icons-png.flaticon.com/512/660/660611.png",
        fullName: "Vladimir",
        status: "I'm russian",
        followed: false,
        location: { city: "Moscow", country: "Russia" },
      },
      {
        id: 2,
        photoUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
        fullName: "Franc",
        status: "I'm french",
        followed: true,
        location: { city: "Paris", country: "France" },
      },
      {
        id: 3,
        photoUrl: "https://cdn-icons-png.flaticon.com/128/3135/3135715.png",
        fullName: "Jack",
        status: "I'm American",
        followed: true,
        location: { city: "New York", country: "USA" },
      },
    ]);
  }

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
