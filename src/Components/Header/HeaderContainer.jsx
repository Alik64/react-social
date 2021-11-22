import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { authAPI } from "../../api/api";
import { setAuthUserData, isAuthMe } from "./../../redux/authReducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {

    this.props.isAuthMe()

  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserData, isAuthMe })(HeaderContainer);
