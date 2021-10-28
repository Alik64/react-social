import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../../redux/usersReducer";
import Followings from "./Followings/Followings";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Followings);
