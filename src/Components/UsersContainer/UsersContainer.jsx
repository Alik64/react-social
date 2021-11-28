import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  toggleFollowingProgress,
  getUsers,


} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../commun/Preloader/Preloader";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)

  }
  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)

  };
  render() {
    return (
      <div>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
        />
        <div />
        );
  }
}

let mapStateToProps = (state) => {
  return {
          users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
  };

};


        export default compose(
        withAuthRedirect,
        connect(mapStateToProps, {
          follow,
          unfollow,
          toggleFollowingProgress,
          getUsers,
  }
        ))(UsersContainer)




// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber));
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setUsersTotalCount(totalCount));
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetching(isFetching));
//     },
//   };
// };

  // this.props.toggleIsFetching(true);

    // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {

    //   this.props.toggleIsFetching(false);
    //   this.props.setUsers(data.items);
    //   this.props.setUsersTotalCount(data.totalCount);
    // });


    // this.props.setCurrentPage(pageNumber);
    // this.props.toggleIsFetching(true);

    // usersAPI.getUsers(pageNumber, this.props.pageSize)
    //   .then((data) => {
    //     this.props.setUsers(data.items);
    //     this.props.toggleIsFetching(false);
    //   });