import { connect } from "react-redux";

import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  newMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";






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

compose()
let AuthRedirectComponent = withAuthRedirect(Dialogs)
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
export default DialogsContainer;
