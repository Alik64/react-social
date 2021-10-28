const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: 1,
      photoUrl:
        "https://t4.ftcdn.net/jpg/01/26/63/11/240_F_126631173_W9Nq8ZA5s0R0M3ZIBx3BMytVIFseGa9c.jpg",
      fullName: "Vladimir",
      status: "I'm russian",
      followed: false,
      location: { city: "Moscow", country: "Russia" },
    },
    {
      id: 2,
      photoUrl:
        "https://t4.ftcdn.net/jpg/01/26/63/11/240_F_126631173_W9Nq8ZA5s0R0M3ZIBx3BMytVIFseGa9c.jpg",
      fullName: "Franc",
      status: "I'm french",
      followed: true,
      location: { city: "Paris", country: "France" },
    },
    {
      id: 3,
      photoUrl:
        "https://t4.ftcdn.net/jpg/01/26/63/11/240_F_126631173_W9Nq8ZA5s0R0M3ZIBx3BMytVIFseGa9c.jpg",
      fullName: "Jack",
      status: "I'm American",
      followed: true,
      location: { city: "New York", country: "USA" },
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }

    default:
      return state;
  }
};
export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
