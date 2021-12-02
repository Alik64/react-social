import { connect } from "react-redux";
import React from "react";
//import { withRouter } from "react-router-dom";

import Followings from "./Followings/Followings";
import { compose } from "redux";


class FollowingsContainer extends React.Component {


  render() {
    return (
      <Followings users={this.props.users} />
    )
  }
}
let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    followingInProgress: state.usersPage.followingInProgress
  };
};


export default compose(
  //withRouter,
  connect(mapStateToProps, {}),
)(FollowingsContainer);
