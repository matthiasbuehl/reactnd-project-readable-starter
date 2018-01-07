
import * as PostsApi from '../utils/PostsApi'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
})

export const fetchPosts = () => dispatch => (
  PostsApi
    .fetchPosts()
    .then(posts => dispatch(receivePosts(posts)))
);