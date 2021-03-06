import { uuid } from '../utils/PostsApi'
import { RECEIVE_POSTS } from "../actions/index";
import { INIT_POST } from "../actions/index";
import { SET_POST } from "../actions/index";
import { ADD_POST } from "../actions/index";
import { DELETE_POST } from "../actions/index";
import { UPDATE_POST } from "../actions/index";
import { RECEIVE_POST } from "../actions/index";
import { RECEIVE_POST_COMMENTS } from "../actions/index";
import { ADD_COMMENT } from "../actions/index";
import { UPDATE_COMMENT } from "../actions/index";
import { DELETE_COMMENT } from "../actions/index";
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
    { display: 'Vote Count', field: 'voteScore' },
    { display: 'Comment Count', field: 'commentCount' }
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
        post: action.post,
        posts: state.posts.concat(action.post)
      }
    case UPDATE_POST:
      return {
        ...state,
        post: action.post
      }
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.post.id),
        post: null
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
        post: {
          ...state.post,
          comments: state.post.comments.concat(action.comment),
          commentCount: state.post.comments.length + 1
        }
      }
    case UPDATE_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          comments: state.post.comments
            .map(comment => comment.id === action.comment.id ? action.comment : comment)
        }
      }
    case DELETE_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          comments: state.post.comments.filter(comment => comment.id !== action.comment.id),
          commentCount: state.post.comments.length - 1
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