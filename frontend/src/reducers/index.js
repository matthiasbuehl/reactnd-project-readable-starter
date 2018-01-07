import { RECEIVE_POSTS } from "../actions/index";

const initialState = {
  posts: [
    {
      title: 'title'
    }
  ]
}

function post(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return state
    default:
      return state
  }
}

export default post