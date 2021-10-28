const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

let initialState = {
  users: [
    {
      id: 1,
      name: "Vladimir",
      status: "I'm russian",
      folowed: false,
      location: { city: "Moscow", country: "Russia" },
    },
    {
      id: 2,
      name: "Franc",
      status: "I'm french",
      folowed: true,
      location: { city: "Paris", country: "France" },
    },
    {
      id: 3,
      name: "Jack",
      status: "I'm American",
      folowed: true,
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

    default:
      return state;
  }
};
export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });

export default usersReducer;
