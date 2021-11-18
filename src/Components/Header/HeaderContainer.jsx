import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setAuthUserData } from "./../../redux/authReducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          let { userId, email, login } = response.data.data;
          this.props.setAuthUserData(userId, email, login);
        }
      });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
