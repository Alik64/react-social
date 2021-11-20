import { connect } from "react-redux";
import React from "react";

import Followings from "./Followings/Followings";


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
  };
};


export default connect(mapStateToProps, {})(FollowingsContainer);
