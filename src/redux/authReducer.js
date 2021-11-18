const SET_USER_DATA = "SET_USER_DATA";


let initialState = {
  userId: null,
  email: null,
  login: null,
  // isFetching: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:

      return {
        ...state,
        ...action.data
      };


    // case TOGGLE_IS_FETCHING: {
    //   return { ...state, isFetching: action.isFetching };
    // }

    default:
      return state;
  }
};
export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } });

// export const toggleIsFetching = (isFetching) => ({
//   type: TOGGLE_IS_FETCHING,
//   isFetching,
// });

export default authReducer;
