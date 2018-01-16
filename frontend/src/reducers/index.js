import { uuid } from '../utils/PostsApi'
import { RECEIVE_POSTS } from "../actions/index";
import { INIT_POST } from "../actions/index";
import { SET_POST } from "../actions/index";
import { ADD_POST } from "../actions/index";
import { UPDATE_POST } from "../actions/index";
import { RECEIVE_POST } from "../actions/index";
import { RECEIVE_POST_COMMENTS } from "../actions/index";
import { ADD_COMMENT } from "../actions/index";
import { UPDATE_COMMENT } from "../actions/index";
import { RECEIVE_CATEGORIES } from "../actions/index";
import { SET_CATEGORY } from "../actions/index";
import { SET_SORT_BY } from "../actions/index";

const initialState = {
  posts: [],
  post: null,
  categories: [],
  category: null,
  columnMaps: [
    { display: 'Title', field: 'title' },
    { display: 'Body', field: 'body' },
    { display: 'Date', field: 'timestamp' },
    { display: 'Author', field: 'author' },
    { display: 'Cateogry', field: 'category' },
    { display: 'Vote Count', field: 'voteScore' }
  ],
  sortBy: { column: 'title', order: 'asc' }
}

function post(state = initialState, action) {
  console.log('action:', action)
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        ...state,
        posts: action.posts
      }
    case INIT_POST:
      return {
        ...state,
        post: {
          author: "",
          body: "",
          category: "",
          //commentCount: 0,
          //comments: [],
          //deleted: false,
          id: uuid(),
          timestamp: Date.now(),
          title: "",
          //voteScore: 0
          isNew: true
        }
      }
    case SET_POST:
      return {
        ...state,
        post: action.post
      }
    case ADD_POST:
      return {
        ...state,
        post: action.post
      }
    case UPDATE_POST:
      return {
        ...state,
        post: action.post
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
    case ADD_COMMENT:
      return {
        ...state,
        [post.comments]: state.post.comments.push(action.comment)
      }
    case UPDATE_COMMENT:
      return {
        ...state,
        comment: action.comment
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
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.sortBy
    }
    default:
      return state
  }
}

export default post