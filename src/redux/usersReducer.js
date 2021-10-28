const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";

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
    case "FOLLOW":

    default:
      return state;
  }
};
export const userAC = () => ({ type: ADD_POST });

export default usersReducer;
