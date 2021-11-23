
import React from "react";
import Profile from "./Profile";
import { getUserProfile } from "../../redux/profileReducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";



class ProfileContainer extends React.Component {
  componentDidMount() {


    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 20866;
    }
    this.props.getUserProfile(userId)

  }

  render() {

    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth
});

AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent)


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,

});

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps, { getUserProfile })(
  WithUrlDataContainerComponent
);
