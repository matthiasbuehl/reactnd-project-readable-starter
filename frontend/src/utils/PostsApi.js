const OPTS = {
    headers: { 'Authorization': 'whatever-you-want' }
}
const BASE_URL = 'http://localhost:3001'

export function fetchPosts() {
    return fetch(`${BASE_URL}/posts`, OPTS)
        .then(res => res.json())
}

export function fetchPost(id) {
    return fetch(`${BASE_URL}/posts/${id}`, OPTS)
        .then(res => res.json())
}

export function fetchPostComments(postId) {
    return fetch(`${BASE_URL}/posts/${postId}/comments`, OPTS)
        .then(res => res.json())
}

export function fetchCategories() {
    return fetch(`${BASE_URL}/categories`, OPTS)
        .then(res => res.json())
}