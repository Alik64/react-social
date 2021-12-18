import profileReducer, { addPostActionCreator } from "./profileReducer";

let state = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 23 },
    { id: 2, message: "It's my first post", likesCount: 15 },
    { id: 3, message: "Bla bla bla", likesCount: 22 },
    { id: 4, message: "DA dA Da", likesCount: 11 },
  ],
};


it('length of post sould increment', () => {
  // 1. Test data
  let action = addPostActionCreator('samuray')

  //2. action
  let newState = profileReducer(state, action)
  //3. expectation 

  expect(newState.posts.length).toBe(5)

})

it('message of new post should be correct', () => {
  // 1. Test data
  let action = addPostActionCreator("samuray")

  //2. action
  let newState = profileReducer(state, action)
  //3. expectation 


  expect(newState.posts[0].message).toBe('samuray')
})