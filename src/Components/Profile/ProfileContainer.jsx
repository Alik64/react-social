
import React from "react";
import Profile from "./Profile";
import { getUserProfile } from "../../redux/profileReducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router";



class ProfileContainer extends React.Component {
  componentDidMount() {


    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 20866;
    }
    this.props.getUserProfile(userId)

  }

  render() {
    if (!this.props.isAuth) return <Redirect to="/login" />
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, { getUserProfile })(
  WithUrlDataContainerComponent
);
