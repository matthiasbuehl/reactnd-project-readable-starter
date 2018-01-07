import { RECEIVE_POSTS } from "../actions/index";

function post(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts
    default:
      return state
  }
}

export default post