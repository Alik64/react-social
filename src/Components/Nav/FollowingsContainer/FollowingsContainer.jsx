import { connect } from "react-redux";

import Followings from "./Followings/Followings";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};


export default connect(mapStateToProps, {})(Followings);
