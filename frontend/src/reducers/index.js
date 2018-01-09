import { RECEIVE_POSTS } from "../actions/index";
import { RECEIVE_POST } from "../actions/index";
import { RECEIVE_POST_COMMENTS } from "../actions/index";

const initialState = {
  posts: [],
  post: {}
}

function post(state = initialState, action) {
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
    case RECEIVE_POST_COMMENTS:
      return {
        ...state,
        post: {
          ...state.post,
          comments: action.comments
        }
      }
    default:
      return state
  }
}

export default post