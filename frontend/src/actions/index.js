
import * as PostsApi from '../utils/PostsApi'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const INIT_POST = 'INIT_POST'
export const SET_POST = 'SET_POST'
export const ADD_POST = 'ADD_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const RECEIVE_POST = 'RECEIVE_POST'
export const RECEIVE_POST_COMMENTS = 'RECEIVE_POST_COMMENTS'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const SET_CATEGORY = 'SET_CATEGORY'
export const SET_SORT_BY  = 'SET_SORT_BY'

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
})

export const initPost = () => ({
  type: INIT_POST
})

export const setPost = post => ({
  type: SET_POST,
  post
})

export const addPost = post => ({
  type: ADD_POST,
  post
})

export const updatePost = post => ({
  type: UPDATE_POST,
  post
})

export const deletePost = post => ({
  type: DELETE_POST,
  post
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

export const setSortBy = sortBy => ({
  type: SET_SORT_BY,
  sortBy
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

export const fetchAddPost = (post) => dispatch => (
  PostsApi
    .fetchAddPost(post)
    .then(post => dispatch(addPost(post)))
)

export const fetchUpdatePost = (post) => dispatch => (
  PostsApi
    .fetchUpdatePost(post)
    .then(post => dispatch(updatePost(post)))
)

export const fetchDeletePost = (post) => dispatch => (
  PostsApi
    .fetchDeletePost(post)
    .then(post => dispatch(deletePost(post)))
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