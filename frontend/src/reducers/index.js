import { RECEIVE_POSTS } from "../actions/index";
import { RECEIVE_POST } from "../actions/index";

function post(state = {posts: []}, action) {
  console.log('action:', action)
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        ...state,
        posts: action.posts
      }
    case RECEIVE_POST:
      return {
        ...state,
        post: action.post
      }
    default:
      return state
  }
}

export default post