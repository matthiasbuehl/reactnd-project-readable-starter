
import * as PostsApi from '../utils/PostsApi'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_POST = 'RECEIVE_POST'
export const RECEIVE_POST_COMMENTS = 'RECEIVE_POST_COMMENTS'

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