import { RECEIVE_POSTS } from "../actions/index";

function post(state = {posts: []}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        posts: action.posts
      }
    default:
      return state
  }
}

export default post