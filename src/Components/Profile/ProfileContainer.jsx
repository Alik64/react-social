import axios from "axios";
import React from "react";
import Profile from "./Profile";
import { setUserProfile } from "../../redux/profileReducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { profileAPI } from "../../api/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 20866;
    }

    profileAPI.getProfile(userId)
      .then((data) => {
        this.props.setUserProfile(data);
      });
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, { setUserProfile })(
  WithUrlDataContainerComponent
);
