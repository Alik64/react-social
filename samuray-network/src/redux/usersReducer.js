import { usersAPI } from "../api/api";
// import { updateObjectInArray } from "../utils/object-helpers";
const TOGGLE_FOLLOW = "TOGGLE_FOLLOW"

const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
};


const usersReducer = (state = initialState, action) => {
  switch (action.type) {


    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: !user.followed }
          }
          return user
        })
      }

    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)

      };
    }

    default:
      return state;
  }
};

// action Creaters
export const followSuccess = (userId) => ({ type: TOGGLE_FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: TOGGLE_FOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setUsersTotalCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId
});
// thunk Creators

export const requestUsers = (page, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page))

    const data = await usersAPI.requestUsers(page, pageSize)
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setUsersTotalCount(data.totalCount));

  }
}


const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {

  dispatch(toggleFollowingProgress(true, id));

  const data = await apiMethod(id)
  if (data.resultCode === 0) {
    dispatch(actionCreator(id));
  }
  dispatch(toggleFollowingProgress(false, id))

}
export const follow = (id) => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, id, usersAPI.follow.bind(usersAPI), followSuccess) // *voir commit pour refactoring
  }
}

export const unfollow = (id) => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, id, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
  }
}

export default usersReducer;
