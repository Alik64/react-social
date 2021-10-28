import React from "react";
import Users from "./Users";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    followed: state.usersPage,
  };
};

const userContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer();
