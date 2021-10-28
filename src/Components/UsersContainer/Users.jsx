import React from "react";
import style from "./users.module.css";

export default function Users(props) {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://t4.ftcdn.net/jpg/01/26/63/11/240_F_126631173_W9Nq8ZA5s0R0M3ZIBx3BMytVIFseGa9c.jpg",
        fullName: "Vladimir",
        status: "I'm russian",
        followed: false,
        location: { city: "Moscow", country: "Russia" },
      },
      {
        id: 2,
        photoUrl:
          "https://t4.ftcdn.net/jpg/01/26/63/11/240_F_126631173_W9Nq8ZA5s0R0M3ZIBx3BMytVIFseGa9c.jpg",
        fullName: "Franc",
        status: "I'm french",
        followed: true,
        location: { city: "Paris", country: "France" },
      },
      {
        id: 3,
        photoUrl:
          "https://t4.ftcdn.net/jpg/01/26/63/11/240_F_126631173_W9Nq8ZA5s0R0M3ZIBx3BMytVIFseGa9c.jpg",
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
