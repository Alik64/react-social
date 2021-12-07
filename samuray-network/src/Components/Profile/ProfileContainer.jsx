
import React, { useEffect } from "react";
import Profile from "./Profile";
import { getUserProfile, getUserStatus, updateUserStatus } from "../../redux/profileReducer";
import { connect } from "react-redux";
// import { withRouter } from "react-router"
import { compose } from "redux";
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";



// class ProfileContainer extends React.Component {

//   componentDidMount() {

//     // let userId = this.props.match.params.userId;
//     // if (!userId) {
//     //   userId = 20866;
//     // }

//     let userId = 2

//     this.props.getUserProfile(userId)
//     this.props.getUserStatus(userId)
//   }

//   render() {

//     return (
//       <div>
//         <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus} />
//       </div>
//     );
//   }
// }



function ProfileContainer(props) {

  let id = useParams().id || 20866

  // if (!id || null) {
  //   id = 20866;
  // }

  useEffect(() => {
    let userId = id

    props.getUserProfile(userId)
    props.getUserStatus(userId)

    return () => {
      userId = 20866

    }
  }, [id])







  return (
    <div>
      <Profile props={props} isAuth={props.isAuth} profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} />
    </div>
  )
}








let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  isAuth: state.auth.isAuth
});

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps, { getUserProfile })(
//   WithUrlDataContainerComponent
// );

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
  // withRouter
  withAuthRedirect
)(ProfileContainer)