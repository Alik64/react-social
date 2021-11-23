import { connect } from "react-redux";
import { Redirect } from "react-router";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  newMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";



let AuthRedirectComponent = withAuthRedirect(Dialogs)
let mapStateToPropsForRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth
  };
};

AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent)

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,

  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
    sendMessage: () => {
      dispatch(newMessageActionCreator());
    },
  };
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
export default DialogsContainer;
