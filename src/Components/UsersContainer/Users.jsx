import React from "react";
import style from "./users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/images/user.jpg";

class Users extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <div>
        {this.props.users.map((u) => (
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
                        this.props.unfollow(u.id);
                      }}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        this.props.follow(u.id);
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
}

export default Users;
