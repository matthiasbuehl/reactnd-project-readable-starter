
import * as PostsApi from '../utils/PostsApi'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_POST = 'RECEIVE_POST'
export const RECEIVE_POST_COMMENTS = 'RECEIVE_POST_COMMENTS'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const SET_CATEGORY = 'SET_CATEGORY'

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
})

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
})

export const receivePostComments = comments => ({
  type: RECEIVE_POST_COMMENTS,
  comments
})

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
})

export const setCategory = category => ({
  type: SET_CATEGORY,
  category
})

export const fetchPosts = () => dispatch => (
  PostsApi
    .fetchPosts()
    .then(posts => dispatch(receivePosts(posts)))
)

export const fetchPost = (id) => dispatch => (
  PostsApi
    .fetchPost(id)
    .then(post => dispatch(receivePost(post)))
)

export const fetchPostComments = (id) => dispatch => (
  PostsApi
    .fetchPostComments(id)
    .then(comments => dispatch(receivePostComments(comments)))
)

export const fetchCategories = () => dispatch => (
  PostsApi
    .fetchCategories()
    .then(categories => dispatch(receiveCategories(categories)))
)