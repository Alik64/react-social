import { applyMiddleware, combineReducers, createStore, } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./appReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  nav: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware))

);

window.store = store;

export default store;
