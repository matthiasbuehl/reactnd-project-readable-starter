import { RECEIVE_POSTS, SET_CATEGORY } from "../actions/index";
import { RECEIVE_POST } from "../actions/index";
import { RECEIVE_POST_COMMENTS } from "../actions/index";
import { RECEIVE_CATEGORIES } from "../actions/index";

const initialState = {
  posts: [],
  post: {},
  categories: [],
  category: null
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
    case RECEIVE_CATEGORIES:
      return {
        ...state,
        categories: action.categories.categories
      }
    case SET_CATEGORY:
      return {
        ...state,
        category: action.category
      }
    default:
      return state
  }
}

export default post