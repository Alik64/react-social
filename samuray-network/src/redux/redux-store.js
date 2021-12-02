import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  nav: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,

});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;