import React from "react";
import Users from "./Users";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {};
};
let mapDispatchToProps = (dispatch) => {
  return {};
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
