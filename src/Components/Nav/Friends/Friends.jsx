import React from "react";
import style from "./Friends.module.css";
import Friend from "./Friend/Friend";
export default function Friends(props) {
  const friendsList = props.friends.map((friend) => (
    <Friend key={friend.id} name={friend.name} sexe={friend.sexe} />
  ));

  return (
    <section className={style.nav_friends}>
      <h2>Friends</h2>
      <div className={style.friends_item}>{friendsList}</div>
    </section>
  );
}
