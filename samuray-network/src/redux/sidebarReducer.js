let initialState = {
  friends: [
    { id: 1, name: "Paul", sexe: "M" },
    { id: 2, name: "Marie", sexe: "F" },
    { id: 3, name: "Bruno", sexe: "M" },
    { id: 4, name: "David", sexe: "M" },
  ],
};

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
