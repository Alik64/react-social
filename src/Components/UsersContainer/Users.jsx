import React from "react";
import style from "./users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/images/user.jpg";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };
  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
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
                  this.props.currentPage === page && style.selectedPage
                }`}
                onClick={(e) => {
                  this.onPageChanged(page);
                }}
              >
                {page}
              </span>
            );
          })}
        </div>

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

export default UsersAPIComponent;
